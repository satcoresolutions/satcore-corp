import type { ServicePlan } from "@/types/plan.types";

import { personalCard }
  from "./personal-card";

import { enterpriseCard }
  from "./enterprise-card";

export const digitalPresentationCards: ServicePlan[] = [
  personalCard,
  enterpriseCard,
];