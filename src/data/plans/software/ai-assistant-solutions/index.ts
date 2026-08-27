import type { ServicePlan } from "@/types/plan.types";

import { aiChatAssistant } from "./ai-chat-assistant";
import { knowledgeAssistant } from "./knowledge-assistant";
import { aiAutomationWorkspace } from "./ai-automation-workspace";

export const aiAssistantSolutions: ServicePlan[] = [
    aiChatAssistant,
    knowledgeAssistant,
    aiAutomationWorkspace,
];