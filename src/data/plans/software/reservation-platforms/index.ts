import type { ServicePlan } from "@/types/plan.types";

import { basicBooking } from "./basic-booking";
import { advancedBooking } from "./advanced-booking";

export const bookings: ServicePlan[] = [
    basicBooking,
    advancedBooking,
];