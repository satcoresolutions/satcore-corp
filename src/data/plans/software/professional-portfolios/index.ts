import type { ServicePlan } from "@/types/plan.types";

import { personalPortfolio }
  from "./personal-portfolio";

import { professionalPortfolio }
  from "./professional-portfolio";

import { agencyPortfolio }
  from "./agency-portfolio";

export const professionalPortfolios: ServicePlan[] = [
  personalPortfolio,
  professionalPortfolio,
  agencyPortfolio,
];