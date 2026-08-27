import type { ServicePlan } from "@/types/plan.types";

import { starterAuth } from "./starter-auth";
import { advancedAuth } from "./advanced-auth";

export const authentications: ServicePlan[] = [
    starterAuth,
    advancedAuth,
];