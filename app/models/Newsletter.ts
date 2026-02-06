import mongoose, { Schema, Document } from "mongoose";

export interface INewsletter extends Document {
    firstName: string;
    email: string;
    createdAt: Date;
}

const NewsletterSchema: Schema = new Schema(
    {
        firstName: { type: String, required: true },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
    },
    { timestamps: true }
);

export default mongoose.models.Newsletter ||
    mongoose.model<INewsletter>("Newsletter", NewsletterSchema);
