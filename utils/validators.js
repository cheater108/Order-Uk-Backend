import z from "zod";

const registerSchema = z.object({
    name: z
        .string({
            required_error: "Name is required",
            invalid_type_error: "Name must be a string",
        })
        .trim()
        .min(1, "Username cannot be empty"),
    email: z
        .string({
            required_error: "Email is required",
            invalid_type_error: "Email must be a string",
        })
        .trim()
        .email("Invalid email format"),
    number: z.string().regex(/^\d+$/).max(10).min(10),
    password: z
        .string()
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        ),
});

const addressSchema = z.object({
    phone: z.string().regex(/^\d+$/).max(10).min(10),
    address: z
        .string({
            required_error: "Address is required",
            invalid_type_error: "Address must be a string",
        })
        .min(1),
    pin: z
        .string({
            required_error: "Pin is required",
            invalid_type_error: "Pin must be a string",
        })
        .min(1),
    city: z
        .string({
            required_error: "City is required",
            invalid_type_error: "City must be a string",
        })
        .min(1),
    state: z
        .string({
            required_error: "State is required",
            invalid_type_error: "State must be a string",
        })
        .min(1),
});

const cardSchema = z.object({
    card_no: z.string().regex(/^\d+$/).max(16).min(16).trim(),
    name: z.string().min(1),
    cvc: z.string().min(1),
    exp: z.string().min(1),
});

function getZodError(err) {
    const issues = err.issues;
    if (issues.length > 0) {
        return { error: issues[0].message };
    }
    return { error: "Something went wrong, please refresh" };
}

export { registerSchema, addressSchema, cardSchema, getZodError };
