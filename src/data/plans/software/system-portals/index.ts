import type { ServicePlan } from "@/types/plan.types";

import { customerPortal } from "./customer-portal";
import { employeePortal } from "./employee-portal";
import { supplierPortal } from "./supplier-portal";

export const portals: ServicePlan[] = [
    customerPortal,
    employeePortal,
    supplierPortal,
];