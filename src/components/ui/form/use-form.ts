"use client";

import { useState } from "react";
import { ZodSchema } from "zod";

export function useForm<T>(
  schema: ZodSchema<T>,
  onSubmit: (
    data: T
  ) => void | Promise<void>
) {
  const [formData, setFormData] =
    useState<Partial<T>>({});

  const [errors, setErrors] =
    useState<Record<string, string>>({});

  const handleChange = (
    name: keyof T,
    value: string
  ) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    setErrors(prev => ({
      ...prev,
      [name as string]: ""
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    const result =
      schema.safeParse(formData);

    if (!result.success) {

      const fieldErrors:
        Record<string, string> = {};

      result.error.issues.forEach(
        issue => {

          const field =
            issue.path[0];

          if (
            typeof field === "string"
          ) {
            fieldErrors[field] =
              issue.message;
          }
        }
      );

      setErrors(fieldErrors);

      return;
    }

    setErrors({});

    await onSubmit(result.data);
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit
  };
}