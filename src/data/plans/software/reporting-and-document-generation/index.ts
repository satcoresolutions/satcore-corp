import type { ServicePlan } from "@/types/plan.types";

import { pdfReportGenerator } from "./pdf-report-generator";
import { businessReports } from "./business-reports";
import { certificateGenerator } from "./certificate-generator";

export const reportingDocumentGeneration: ServicePlan[] = [
    pdfReportGenerator,
    businessReports,
    certificateGenerator,
];