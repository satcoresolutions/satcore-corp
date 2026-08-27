import type { ServicePlan } from "@/types/plan.types";

import { workflowAutomation } from "./workflow-automation";
import { notificationCenter } from "./notification-center";
import { scheduledTasksEngine } from "./scheduled-tasks-engine";

export const businessAutomation: ServicePlan[] = [
    workflowAutomation,
    notificationCenter,
    scheduledTasksEngine,
];