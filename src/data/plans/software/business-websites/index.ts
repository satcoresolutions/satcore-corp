import type { ServicePlan } from "@/types/plan.types";

import { basicCorporate }
  from "./basic-corporate";

import { enterpriseWebsite }
  from "./enterprise-website";

import { premiumCorporate }
  from "./premium-corporate";

export const businessWebsites: ServicePlan[] = [
  basicCorporate,
  enterpriseWebsite,
  premiumCorporate,
];