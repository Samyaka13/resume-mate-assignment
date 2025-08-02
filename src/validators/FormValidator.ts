import { z } from "zod"

export const FormSchema = z.object({
    name: z.string().min(1, {
        message: "Name is a required field.",
    }),
    email: z
        .string()
        .min(1, { message: "Email is required" })
        .email("Enter a valid email address"),
    phone: z
        .string()
        .min(10, { message: "Phone number must be at least 10 digits" })
        .regex(/^\+?[0-9]{10,14}$/, {
            message: "Enter a valid phone number",
        }),
    position: z.string().optional(),
    description: z.string().optional(),
})
