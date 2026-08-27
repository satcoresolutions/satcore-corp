import type { ServicePlan } from "@/types/plan.types";

import { appointmentScheduler } from "./appointment-scheduler";
import { teamCalendar } from "./team-calendar";
import { resourceScheduler } from "./resource-scheduler";

export const schedulingCalendarSystems: ServicePlan[] = [
    appointmentScheduler,
    teamCalendar,
    resourceScheduler,
];