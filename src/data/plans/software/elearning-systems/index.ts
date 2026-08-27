import type { ServicePlan } from "@/types/plan.types";

import { coursePlatform } from "./course-platform";
import { onlineAcademy } from "./online-academy";

export const learningPlatforms: ServicePlan[] = [
    coursePlatform,
    onlineAcademy,
];