import { NextRequest } from "next/server";
import dbConnect from "@/app/lib/db";
import Contact from "@/app/models/Contact";
import { sendResponse, sendError } from "@/app/lib/apiResponse";
import { formSchema } from "@/app/lib/validators/contactForm";

export async function POST(req: NextRequest) {
    try {
        // 1. Connect to Database
        await dbConnect();
        console.log("Database connected api is hited -----");
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

// OPTIONS handler for CORS (Next.js 13+ handles basic CORS automatically, 
// but you can define it explicitly if needed)
export async function OPTIONS() {
    return new Response(null, {
        status: 204,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
    });
}
