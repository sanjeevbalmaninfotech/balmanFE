import { NextRequest } from "next/server";
import dbConnect from "@/app/lib/db";
import Contact from "@/app/models/Contact";
import { sendResponse, sendError } from "@/app/lib/apiResponse";
import { formSchema } from "@/app/lib/validators/contactForm";

export async function POST(req: NextRequest) {
    try {

        await dbConnect();
        // 2. Parse Request Body
        const body = await req.json();

        // 3. Validate Data using Zod Schema (reusing frontend schema)
        const validation = formSchema.safeParse(body);
        if (!validation.success) {
            return sendError("Validation Error", 400, validation.error);
        }

        // 4. Save to MongoDB
        const newContact = new Contact(validation.data);
        await newContact.save();

        // 5. Send Success Response
        return sendResponse(true, "Contact inquiry saved successfully", newContact, 201);
    } catch (error: any) {
        console.error("Backend Error [ContactUs]:", error);
        return sendError("Internal Server Error", 500, error);
    }
}


