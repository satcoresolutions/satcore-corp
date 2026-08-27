import type { ServicePlan } from "@/types/plan.types";

import { smartForms } from "./smart-forms";
import { surveyPlatform } from "./survey-platform";
import { inspectionSystem } from "./inspection-system";

export const formAutomationSystems: ServicePlan[] = [
    smartForms,
    surveyPlatform,
    inspectionSystem,
];