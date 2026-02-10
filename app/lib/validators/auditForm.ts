import z from "zod";

export const auditFormSchema = z.object({
    companyName: z.string().min(2, "Company name is required"),
    websiteUrl: z.string().min(2, "Please enter a valid URL"),
    industry: z.string().min(2, "Industry is required"),
    yearsInOperation: z.string().min(1, "Required"),
    emailAddress: z.string().email("Invalid email address"),
    contactNumber: z.string().min(10, "Invalid contact number"),
    companySize: z.string().min(1, "Please select a company size"),
});
