import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string(),
    code: z.optional(z.string())
});

export const NewPasswordSchema = z.object({
    password: z.string().min(6, {
        message: "Minimum 6 characters required!"
    })
});

export const RegisterSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, {
        message: "Minimum 6 characters required!"
    }),
    name: z.string().min(3, {
        message: "Name is required"
    })
});

export const ResetSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    })
});