import { NextRequest } from "next/server";
import dbConnect from "@/app/lib/db";
import Audit from "@/app/models/Audit";
import { sendResponse, sendError } from "@/app/lib/apiResponse";
import { auditFormSchema } from "@/app/lib/validators/auditForm";

export async function POST(req: NextRequest) {
    try {
        await dbConnect();

        const body = await req.json();

        const validation = auditFormSchema.safeParse(body);
        if (!validation.success) {
            return sendError("Validation Error", 400, validation.error);
        }

        const newAudit = new Audit(validation.data);
        await newAudit.save();

        return sendResponse(true, "Audit request submitted successfully", newAudit, 201);
    } catch (error: any) {
        console.error("Backend Error [AuditForm]:", error);
        return sendError("Internal Server Error", 500, error);
    }
}
