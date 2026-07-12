import type { ServicePlan } from "@/types/plan.types";

import { softwarePlans } from "./software/landing-pages";
import { digitalPresentationCards } from "./software/digital-presentation-cards";
import { professionalPortfolios } from "./software/professional-portfolios";
import { businessWebsites } from "./software/business-websites";
import { ecommerceSystems } from "./software/ecommerce";
import { blogsDigitalMedia } from "./software/blogs-and-digital-media";
import { directories } from "./software/directories";

export const plansData: ServicePlan[] = [
  ...softwarePlans,
  ...digitalPresentationCards,
  ...professionalPortfolios,
  ...businessWebsites,
  ...ecommerceSystems,
  ...blogsDigitalMedia,
  ...directories,
];