import mongoose, { Schema, Document } from "mongoose";

export interface IAudit extends Document {
    companyName: string;
    websiteUrl: string;
    industry: string;
    yearsInOperation: string;
    emailAddress: string;
    contactNumber: string;
    companySize: string;
    createdAt: Date;
}

const AuditSchema: Schema = new Schema(
    {
        companyName: { type: String, required: true },
        websiteUrl: { type: String, required: true },
        industry: { type: String, required: true },
        yearsInOperation: { type: String, required: true },
        emailAddress: { type: String, required: true },
        contactNumber: { type: String, required: true },
        companySize: { type: String, required: true },
    },
    { timestamps: true }
);

export default mongoose.models.AuditFormData ||
    mongoose.model<IAudit>("AuditFormData", AuditSchema);
