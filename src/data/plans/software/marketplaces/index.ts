import type { ServicePlan } from "@/types/plan.types";

import { basicMarketplace } from "./basic-marketplace";
import { multiVendorMarketplace } from "./multi-vendor-marketplace";

export const marketplaces: ServicePlan[] = [
    basicMarketplace,
    multiVendorMarketplace,
];