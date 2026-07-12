import type { ServicePlan } from "@/types/plan.types";

import { basicDirectory }
  from "./basic-directory";

import { advancedDirectory }
  from "./advanced-directory";

export const directories: ServicePlan[] = [
  basicDirectory,
  advancedDirectory,
];