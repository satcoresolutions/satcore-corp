import type { ServicePlan } from "@/types/plan.types";

import { personalBlog }
  from "./personal-blog";

import { corporateBlog }
  from "./corporate-blog";

import { digitalMagazine }
  from "./digital-magazine";

export const blogsDigitalMedia: ServicePlan[] = [
  personalBlog,
  corporateBlog,
  digitalMagazine,
];