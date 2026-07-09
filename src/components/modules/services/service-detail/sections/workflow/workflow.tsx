"use client";

import Section
  from "@/components/ui/section";

import Container
  from "@/components/ui/container";

import {
  useTranslation,
} from "@/hooks/use-translation";

import {
  workflowContent,
} from "./content/workflow.content";

import WorkflowTimeline
  from "./components/WorkflowTimeline";

import type {
  WorkflowProps,
} from "./types/workflow.types";

export default function Workflow({
  workflow,
}: WorkflowProps) {
  const labels =
    useTranslation(
      workflowContent,
    );

  if (
    workflow.steps.length === 0
  ) {
    return null;
  }

  return (
    <Section id="service-workflow"
      variant="surface" className="p-10">
      <Container>

        <div
          className="
            mx-auto
            mb-10
            max-w-3xl
            text-center
          "
        >
          <span
            className="
              text-sm
              font-medium
              text-primary
            "
          >
            {workflow.badge ??
              labels.badge}
          </span>

          <h2
            className="
              mt-3
              text-4xl
              font-bold
            "
          >
            {workflow.title}
          </h2>

          <p
            className="
              mt-6
              text-lg
              text-surface
            "
          >
            {workflow.description}
          </p>
        </div>

        <WorkflowTimeline
          steps={
            workflow.steps
          }
        />

      </Container>
    </Section>
  );
}