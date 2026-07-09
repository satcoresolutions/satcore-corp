// lib/utils/whatsapp.ts
import { companyConfig } from "@/config/company.config";

export function buildWhatsappHref(template: string, replacements: Record<string, string> = {}) {
  const message = Object.entries(replacements).reduce(
    (msg, [key, value]) => msg.replace(`{${key}}`, value),
    template
  );

  return `https://wa.me/${companyConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}