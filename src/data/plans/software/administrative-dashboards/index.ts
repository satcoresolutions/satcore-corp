import type { ServicePlan } from "@/types/plan.types";

import { dashboardStarter } from "./dashboard-starter";
import { crmDashboard } from "./crm-dashboard";
import { saasDashboard } from "./saas-dashboard";

export const dashboards: ServicePlan[] = [
    dashboardStarter,
    crmDashboard,
    saasDashboard,
];