import { z } from "zod";

export interface ContactValidationMessages {
  nameMin: string;
  nameMax: string;

  emailInvalid: string;

  phoneMin: string;
  phoneMax: string;

  companyMax: string;

  messageMin: string;
  messageMax: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

export const createContactSchema = (
  validation: ContactValidationMessages,
) => {
  return z.object({
    name: z
      .string()
      .min(2, validation.nameMin)
      .max(100, validation.nameMax),

    email: z
      .string()
      .email(validation.emailInvalid),

    phone: z
      .string()
      .min(7, validation.phoneMin)
      .max(20, validation.phoneMax)
      .optional()
      .or(z.literal("")),

    company: z
      .string()
      .max(100, validation.companyMax)
      .optional()
      .or(z.literal("")),

    message: z
      .string()
      .min(10, validation.messageMin)
      .max(1000, validation.messageMax),
  });
};