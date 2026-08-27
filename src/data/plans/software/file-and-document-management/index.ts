import type { ServicePlan } from "@/types/plan.types";

import { documentCenter } from "./document-center";
import { secureUploadPortal } from "./secure-upload-portal";
import { digitalRepository } from "./digital-repository";

export const fileDocumentManagement: ServicePlan[] = [
    documentCenter,
    secureUploadPortal,
    digitalRepository,
];