import type { ServicePlan } from "@/types/plan.types";

import { digitalCatalog }
  from "./digital-catalog";

import { basicEcommerce }
  from "./basic-ecommerce";

import { completeEcommerce }
  from "./complete-ecommerce";

export const ecommerceSystems: ServicePlan[] = [
  digitalCatalog,
  basicEcommerce,
  completeEcommerce,
];