import z from "zod";

export const newsletterSchema = z.object({
    firstName: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
});

export type NewsletterData = z.infer<typeof newsletterSchema>;
