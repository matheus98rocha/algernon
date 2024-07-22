import { z } from "zod";

export const createUserFormSchema = z.object({
  email: z.string().min(1, "E-mail é obrigatório"),
  password: z.string().min(8, "A senha deve ter pelo menos 8 caracteres").refine(value => {
    return (
      /[a-z]/.test(value) &&
      /[A-Z]/.test(value) &&
      /[0-9]/.test(value) &&
      /[!@#$%^&*(),.?":{}|<>]/.test(value)
    );
  }, { message: "A senha não é forte o suficiente" }),
  confirmPassword: z.string().min(8, "A confirmação da senha deve ter pelo menos 8 caracteres").optional()
}).refine(({ password, confirmPassword }) => password === confirmPassword, {
  message: "As senhas não coincidem",
  path: ["confirmPassword"]
});

export type createUserFormData = z.infer<typeof createUserFormSchema>;