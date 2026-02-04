import mongoose, { Schema, Document } from "mongoose";

export interface IContact extends Document {
    fullName: string;
    phone: string;
    conmpanyName: string;
    websiteUrl: string;
    service: string;
    CompanyType: string;
    message: string;
    createdAt: Date;
}

const ContactSchema: Schema = new Schema(
    {
        fullName: { type: String, required: true },
        phone: { type: String, required: true },
        conmpanyName: { type: String, required: true },
        websiteUrl: { type: String, default: "" },
        service: { type: String, required: true },
        CompanyType: { type: String, required: true },
        message: { type: String, required: true },
    },
    { timestamps: true }
);

export default mongoose.models.ContactUsFormData ||
    mongoose.model<IContact>("ContactUsFormData", ContactSchema);
