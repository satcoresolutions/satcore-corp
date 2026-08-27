import type { ServicePlan } from "@/types/plan.types";

import { calculators } from "./calculators";
import { dynamicQuoter } from "./dynamic-quoter";
import { smartMultiStepForm } from "./smart-multi-step-form";
import { universalWebTools } from "./universal-web-tools";

export const advancedUtilities: ServicePlan[] = [
    calculators,
    dynamicQuoter,
    smartMultiStepForm,
    universalWebTools
];