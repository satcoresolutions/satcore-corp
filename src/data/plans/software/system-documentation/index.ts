import type { ServicePlan } from "@/types/plan.types";

import { helpCenter } from "./help-center";
import { apiDocumentation } from "./api-documentation";

export const systemDocumentation: ServicePlan[] = [
    helpCenter,
    apiDocumentation,
];