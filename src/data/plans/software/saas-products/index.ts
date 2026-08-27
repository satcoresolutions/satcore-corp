import type { ServicePlan } from "@/types/plan.types";

import { saasStarter } from "./saas-starter";
import { saasMultiTenant } from "./saas-multi-tenant";

export const saas: ServicePlan[] = [
    saasStarter,
    saasMultiTenant,
];