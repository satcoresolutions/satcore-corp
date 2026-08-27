import type { ServicePlan } from "@/types/plan.types";

import { taskManager } from "./task-manager";
import { kanbanWorkspace } from "./kanban-workspace";
import { projectWorkspace } from "./project-workspace";

export const projectManagement: ServicePlan[] = [
    taskManager,
    kanbanWorkspace,
    projectWorkspace,
];