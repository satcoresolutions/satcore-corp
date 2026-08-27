import type { ServicePlan } from "@/types/plan.types";

import { liveChat } from "./live-chat";
import { internalMessaging } from "./internal-messaging";
import { customerSupportInbox } from "./customer-support-inbox";

export const communicationSystems: ServicePlan[] = [
    liveChat,
    internalMessaging,
    customerSupportInbox,
];