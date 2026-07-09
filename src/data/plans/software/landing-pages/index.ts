import type { ServicePlan } from "@/types/plan.types";

import { landingPageBasic }
  from "./landing-page-basic";

import { commercialLanding } from "./landing-page-comercial";

import { saasLanding } from "./saas-landing";

import { productLanding } from "./product-landing";

import { eventLanding } from "./event-landing";

import { webinarLanding } from "./webinar-landing";

export const softwarePlans: ServicePlan[] =  [
  landingPageBasic,
  commercialLanding,
  saasLanding,
  productLanding,
  eventLanding,
  webinarLanding,
];