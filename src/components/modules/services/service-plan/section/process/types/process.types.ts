import {
  PlanProcess ,
} from "@/types/plan.types";

export interface ProcessProps {
  process: PlanProcess [];
}

export interface ProcessStepProps {
  step: PlanProcess ;

  index: number;

  isLast?: boolean;
}