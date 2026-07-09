import type {
  ServiceDetailContent,
  ServiceDetailCore,
} from "@/types/service-detail.types";

export interface ServiceHeroProps {
  core: ServiceDetailCore;
  content: ServiceDetailContent;
}