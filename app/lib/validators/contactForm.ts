import z from "zod";


export const formSchema = z.object({
    fullName: z.string().min(2, "Full name must be at least 2 characters"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    conmpanyName: z.string().min(2, "Company name is required"),
    websiteUrl: z.string().url("Please enter a valid URL").or(z.string().length(0)),
    service: z.string().min(1, "Please select a service"),
    CompanyType: z.string().min(2, "Company type is required"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});