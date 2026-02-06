import { NextRequest } from "next/server";
import dbConnect from "@/app/lib/db";
import Newsletter from "@/app/models/Newsletter";
import { sendResponse, sendError } from "@/app/lib/apiResponse";
import { newsletterSchema } from "@/app/lib/validators/newsletter";

export async function POST(req: NextRequest) {
    try {
        // 1. Connect to Database
        await dbConnect();

        // 2. Parse Request Body
        const body = await req.json();

        // 3. Validate Data using Zod Schema
        const validation = newsletterSchema.safeParse(body);
        if (!validation.success) {
            return sendError("Validation Error", 400, validation.error);
        }

        // 4. Check if email already exists
        const existingSubscriber = await Newsletter.findOne({
            email: validation.data.email.toLowerCase()
        });

        if (existingSubscriber) {
            return sendError("You are already subscribed to our newsletter!", 400);
        }

        // 5. Save to MongoDB
        const newSubscriber = new Newsletter({
            firstName: validation.data.firstName,
            email: validation.data.email.toLowerCase()
        });
        await newSubscriber.save();

        // 6. Send Success Response
        return sendResponse(true, "Thank you for subscribing to our newsletter!", newSubscriber, 201);
    } catch (error: any) {
        console.error("Backend Error [NewsletterSection]:", error);

        // Handle MongoDB duplicate key error (if any)
        if (error.code === 11000) {
            return sendError("You are already subscribed to our newsletter!", 400);
        }

        return sendError("Internal Server Error", 500, error);
    }
}
