import { faqEN } from "./faq-en";
import { faqES } from "./faq-es";
import { faqPT } from "./faq-pt";

import type {
  FAQContent,
} from "../types/faq.types";

export const faqContent = {
  en: faqEN,
  es: faqES,
  pt: faqPT,
} satisfies Record<string, FAQContent>;