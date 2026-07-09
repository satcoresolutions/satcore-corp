import { ZodSchema } from "zod";

export type FormFieldType =
  | "text"
  | "email"
  | "password"
  | "textarea";

export interface FormField<T> {
  name: keyof T;
  label: string;
  type?: FormFieldType;
  placeholder?: string;
  required?: boolean;
}

export interface FormProps<T> {
  title?: string;
  description?: string;

  fields: FormField<T>[];

  schema: ZodSchema<T>;

  onSubmit: (
    data: T
  ) => void | Promise<void>;

  submitText?: string;
}