import type { ServicePlan } from "@/types/plan.types";

import { membershipPortal } from "./membership-portal";
import { subscriptionPlatform } from "./subscription-platform";
import { premiumCommunity } from "./premium-community";

export const membershipPlatforms: ServicePlan[] = [
    membershipPortal,
    subscriptionPlatform,
    premiumCommunity,
];