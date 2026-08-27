import type { ServicePlan } from "@/types/plan.types";

// ─────────────────────────────────────────────────────────────
// ADVANCED UTILITIES & WEB TOOLS
// ─────────────────────────────────────────────────────────────

import { advancedUtilities } from "./software/advanced-utilities-and-web-tools";

// ─────────────────────────────────────────────────────────────
// AI ASSISTANT SOLUTIONS
// ─────────────────────────────────────────────────────────────

import { aiAssistantSolutions } from "./software/ai-assistant-solutions";

// ─────────────────────────────────────────────────────────────
// AUTHENTICATION
// ─────────────────────────────────────────────────────────────

import { authentications } from "./software/authentication-modules";

// ─────────────────────────────────────────────────────────────
// BLOGS & DIGITAL MEDIA
// ─────────────────────────────────────────────────────────────

import { blogsDigitalMedia } from "./software/blogs-and-digital-media";

// ─────────────────────────────────────────────────────────────
// BUSINESS AUTOMATION
// ─────────────────────────────────────────────────────────────

import { businessAutomation } from "./software/business-automation";

// ─────────────────────────────────────────────────────────────
// BUSINESS WEBSITES
// ─────────────────────────────────────────────────────────────

import { businessWebsites } from "./software/business-websites";

// ─────────────────────────────────────────────────────────────
// COMMUNICATION SYSTEMS
// ─────────────────────────────────────────────────────────────

import { communicationSystems } from "./software/communication-systems";

// ─────────────────────────────────────────────────────────────
// DASHBOARDS
// ─────────────────────────────────────────────────────────────

import { dashboards } from "./software/administrative-dashboards";

// ─────────────────────────────────────────────────────────────
// DIGITAL COMMUNITIES
// ─────────────────────────────────────────────────────────────

import { communities } from "./software/digital-communities";

// ─────────────────────────────────────────────────────────────
// DIGITAL PRESENTATION CARDS
// ─────────────────────────────────────────────────────────────

import { digitalPresentationCards } from "./software/digital-presentation-cards";

// ─────────────────────────────────────────────────────────────
// DIRECTORIES
// ─────────────────────────────────────────────────────────────

import { directories } from "./software/directories";

// ─────────────────────────────────────────────────────────────
// E-COMMERCE
// ─────────────────────────────────────────────────────────────

import { ecommerceSystems } from "./software/ecommerce";

// ─────────────────────────────────────────────────────────────
// FILE & DOCUMENT MANAGEMENT
// ─────────────────────────────────────────────────────────────

import { fileDocumentManagement } from "./software/file-and-document-management";

// ─────────────────────────────────────────────────────────────
// FORM AUTOMATION SYSTEMS
// ─────────────────────────────────────────────────────────────

import { formAutomationSystems } from "./software/form-automation-systems";

// ─────────────────────────────────────────────────────────────
// LEARNING PLATFORMS
// ─────────────────────────────────────────────────────────────

import { learningPlatforms } from "./software/elearning-systems";

// ─────────────────────────────────────────────────────────────
// MARKETPLACES
// ─────────────────────────────────────────────────────────────

import { marketplaces } from "./software/marketplaces";

// ─────────────────────────────────────────────────────────────
// MEMBERSHIP PLATFORMS
// ─────────────────────────────────────────────────────────────

import { membershipPlatforms } from "./software/membership-platforms";

// ─────────────────────────────────────────────────────────────
// PORTALS
// ─────────────────────────────────────────────────────────────

import { portals } from "./software/system-portals";

// ─────────────────────────────────────────────────────────────
// PROFESSIONAL PORTFOLIOS
// ─────────────────────────────────────────────────────────────

import { professionalPortfolios } from "./software/professional-portfolios";

// ─────────────────────────────────────────────────────────────
// PROJECT MANAGEMENT SYSTEMS
// ─────────────────────────────────────────────────────────────

import { projectManagement } from "./software/project-management-systems";

// ─────────────────────────────────────────────────────────────
// REPORTING & DOCUMENT GENERATION
// ─────────────────────────────────────────────────────────────

import { reportingDocumentGeneration } from "./software/reporting-and-document-generation";

// ─────────────────────────────────────────────────────────────
// RESERVATION PLATFORMS
// ─────────────────────────────────────────────────────────────

import { bookings } from "./software/reservation-platforms";

// ─────────────────────────────────────────────────────────────
// SAAS
// ─────────────────────────────────────────────────────────────

import { saas } from "./software/saas-products";

// ─────────────────────────────────────────────────────────────
// SCHEDULING & CALENDAR SYSTEMS
// ─────────────────────────────────────────────────────────────

import { schedulingCalendarSystems } from "./software/scheduling-and-calendar-systems";

// ─────────────────────────────────────────────────────────────
// SYSTEM DOCUMENTATION
// ─────────────────────────────────────────────────────────────

import { systemDocumentation } from "./software/system-documentation";

// ─────────────────────────────────────────────────────────────
// LANDING PAGES
// ─────────────────────────────────────────────────────────────

import { softwarePlans } from "./software/landing-pages";


// ═════════════════════════════════════════════════════════════
// ALL SERVICE PLANS
// ═════════════════════════════════════════════════════════════

export const plansData: ServicePlan[] = [
    ...advancedUtilities,

    ...aiAssistantSolutions,

    ...authentications,

    ...blogsDigitalMedia,

    ...businessAutomation,

    ...businessWebsites,

    ...communicationSystems,

    ...dashboards,

    ...communities,

    ...digitalPresentationCards,

    ...directories,

    ...ecommerceSystems,

    ...fileDocumentManagement,

    ...formAutomationSystems,

    ...learningPlatforms,

    ...marketplaces,

    ...membershipPlatforms,

    ...portals,

    ...professionalPortfolios,

    ...projectManagement,

    ...reportingDocumentGeneration,

    ...bookings,

    ...saas,

    ...schedulingCalendarSystems,

    ...softwarePlans,

    ...systemDocumentation,
];