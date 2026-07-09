import type {
  ContactValidationMessages,
} from "../schemas/contact.schema";

export interface FormFields {
  name: string;
  email: string;
  message: string;
}

export interface FormContent {
  badge: string;

  title: string;

  description: string;

  fields: FormFields;

  submit: string;

  validation: ContactValidationMessages;
}

export interface FormFieldsProps {
  content: FormContent;
}