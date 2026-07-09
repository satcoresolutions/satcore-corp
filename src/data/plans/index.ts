import type { ServicePlan } from "@/types/plan.types";

import { softwarePlans } from "./software/landing-pages";

export const plansData: ServicePlan[] = [
  ...softwarePlans,

];