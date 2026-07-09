"use client";

import { useState } from "react";

import {
  createContactSchema,
} from "../schemas/contact.schema";

import type {
  ContactValidationMessages,
  ContactFormData,
} from "../schemas/contact.schema";

export function useContactSubmit(
  validation: ContactValidationMessages,
) {
  const [loading, setLoading] =
    useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    const formData = new FormData(
      e.currentTarget,
    );

    const data: ContactFormData = {
      name: String(
        formData.get("name") ?? "",
      ),

      email: String(
        formData.get("email") ?? "",
      ),

      phone: String(
        formData.get("phone") ?? "",
      ),

      company: String(
        formData.get("company") ?? "",
      ),

      message: String(
        formData.get("message") ?? "",
      ),
    };

    const schema =
      createContactSchema(
        validation,
      );

    const result =
      schema.safeParse(data);

    if (!result.success) {
      console.error(
        result.error.format(),
      );

      return;
    }

    try {
      setLoading(true);

      const response =
        await fetch(
          "/api/contact",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify(
              result.data,
            ),
          },
        );

      const json =
        await response.json();

      if (!response.ok) {
        throw new Error(
          json.error ??
            "Failed to send message",
        );
      }

      console.log(
        "Message sent successfully",
      );

      e.currentTarget.reset();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    handleSubmit,
    loading,
  };
}