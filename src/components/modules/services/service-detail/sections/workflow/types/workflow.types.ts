export interface WorkflowStepItem {
  title: string;

  description: string;
}

export interface WorkflowData {
  badge: string;

  title: string;

  description: string;

  steps: WorkflowStepItem[];
}

export interface WorkflowProps {
  workflow: WorkflowData;
}

export interface WorkflowTimelineProps {
  steps: WorkflowStepItem[];
}

export interface WorkflowStepProps {
  step: WorkflowStepItem;

  index: number;

  isLast: boolean;
}