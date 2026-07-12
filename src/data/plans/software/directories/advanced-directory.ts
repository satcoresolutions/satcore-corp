import type {
    ServicePlan,
} from "@/types/plan.types";

export const advancedDirectory: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "DIR-002",

        slug: "advanced-directory",

        // ────────────────────────────────────
        // Comercial
        // ────────────────────────────────────

        complexity: "⭐⭐⭐⭐⭐ (5/5)",

        price: "$2,000 - $3,500 USD",

        pricingType: "fixed",

        automationLevel: "high",

        // ────────────────────────────────────
        // Técnico
        // ────────────────────────────────────

        stack: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Prisma",
            "PostgreSQL",
        ],

        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Prisma ORM",
            "PostgreSQL",
            "Geolocation APIs",
            "Map Rendering",
            "Advanced Filtering",
            "Server-side Processing",
        ],

        integrations: [
            "Google Maps API",
            "Geocoding API",
            "Google Analytics",
            "Cloudinary",
            "Resend",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/hero/hero-advanced-directory.png",

        image:
            "/images/services/software/hero/hero-advanced-directory.png",
    },

    translations: {
        es: {
            name: "Directorio Avanzado",

            title:
                "Directorio Avanzado",

            level: "🔴 Premium",

            category:
                "Directorios",

            description:
                "Plataforma de directorio avanzada con búsqueda geográfica, mapas interactivos, geocodificación en tiempo real y filtros estructurales para encontrar entidades según múltiples criterios.",

            time: "8-12 semanas",

            imageAlt:
                "Directorio avanzado con mapas",

            target:
                "Empresas, plataformas de servicios, comunidades, marketplaces locales y organizaciones que necesitan conectar usuarios con ubicaciones o entidades específicas.",

            support:
                "60 días soporte post-entrega",

            useCases: [
                "Directorios con mapas",
                "Servicios locales",
                "Guías geográficas",
                "Marketplace de negocios",
                "Directorio profesional",
                "Plataformas de ubicación",
            ],

            includes: [
                "Listado avanzado",
                "Mapa interactivo",
                "Marcadores geográficos",
                "Búsqueda por ubicación",
                "Geocodificación",
                "Filtros múltiples",
                "Categorías dinámicas",
                "Páginas individuales",
                "SEO avanzado",
                "Responsive Design",
            ],

            notIncludes: [
                "Marketplace transaccional",
                "Sistema de pagos",
                "Roles complejos de usuarios",
                "Aplicación móvil nativa",
            ],

            features: [
                "Live Map Search",
                "Bounding-box Queries",
                "Real-time Geocoding",
                "Multi-criteria Filters",
                "Prisma ORM",
                "PostgreSQL",
                "Relational Search",
                "Dynamic Routing",
            ],

            deliverables: [
                "Directorio avanzado publicado",
                "Código fuente",
                "Documentación técnica",
                "Guía administrativa",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Búsqueda inteligente por ubicación",

                    description:
                        "Los usuarios pueden encontrar entidades cercanas utilizando mapas y coordenadas geográficas.",
                },

                {
                    title:
                        "Filtros avanzados",

                    description:
                        "Permite combinar múltiples criterios para obtener resultados altamente relevantes.",
                },

                {
                    title:
                        "Experiencia interactiva",

                    description:
                        "La integración de mapas mejora la navegación y facilita descubrir nuevos lugares o servicios.",
                },
            ],

            process: [
                {
                    title:
                        "Diseño de arquitectura",

                    description:
                        "Definimos modelos de datos, relaciones, filtros y estructura geográfica del sistema.",
                },

                {
                    title:
                        "Desarrollo geoespacial",

                    description:
                        "Implementamos mapas, geocodificación, consultas por área y filtros avanzados.",
                },

                {
                    title:
                        "Optimización",

                    description:
                        "Probamos rendimiento, precisión de búsquedas y experiencia del usuario antes del lanzamiento.",
                },
            ],

            faq: [
                {
                    question:
                        "¿Puede mostrar resultados cercanos al usuario?",

                    answer:
                        "Sí. Utiliza datos geográficos para encontrar entidades según ubicación y distancia.",
                },

                {
                    question:
                        "¿Puedo agregar diferentes filtros?",

                    answer:
                        "Sí. La arquitectura permite crear filtros por categorías, atributos, ubicación y otros criterios personalizados.",
                },

                {
                    question:
                        "¿Puede manejar miles de ubicaciones?",

                    answer:
                        "Sí. Utiliza consultas relacionales optimizadas para trabajar con grandes volúmenes de datos.",
                },
            ],
        },

        en: {
            name: "Advanced Directory",

            title:
                "Advanced Directory",

            level: "🔴 Premium",

            category:
                "Directories",

            description:
                "Advanced directory platform featuring geographic search, interactive maps, real-time geocoding and multi-criteria filtering to discover entities based on location and attributes.",

            time: "8-12 weeks",

            imageAlt:
                "Advanced directory with maps",

            target:
                "Service platforms, local marketplaces, communities and organizations connecting users with specific locations or businesses.",

            support:
                "60 days post-delivery support",

            useCases: [
                "Map directories",
                "Local services",
                "Geographic guides",
                "Business marketplaces",
                "Professional directories",
                "Location platforms",
            ],

            includes: [
                "Advanced listings",
                "Interactive maps",
                "Geographic markers",
                "Location search",
                "Geocoding",
                "Multiple filters",
                "Dynamic categories",
                "Entity pages",
                "Advanced SEO",
                "Responsive design",
            ],

            notIncludes: [
                "Transactional marketplace",
                "Payment system",
                "Complex user roles",
                "Native mobile app",
            ],

            features: [
                "Live map search",
                "Bounding-box queries",
                "Real-time geocoding",
                "Multi-criteria filters",
                "Prisma ORM",
                "PostgreSQL",
                "Relational search",
                "Dynamic routing",
            ],

            deliverables: [
                "Published advanced directory",
                "Source code",
                "Technical documentation",
                "Administration guide",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Location-based discovery",

                    description:
                        "Users can discover nearby businesses and services through geographic search.",
                },

                {
                    title:
                        "Powerful filtering",

                    description:
                        "Multiple criteria can be combined to provide highly accurate search results.",
                },

                {
                    title:
                        "Interactive experience",

                    description:
                        "Map integration improves navigation and helps users discover relevant locations.",
                },
            ],

            process: [
                {
                    title:
                        "Architecture design",

                    description:
                        "We define data models, relationships, filters and geographic structures.",
                },

                {
                    title:
                        "Geospatial development",

                    description:
                        "We implement maps, geocoding, area searches and advanced filtering.",
                },

                {
                    title:
                        "Optimization",

                    description:
                        "Search accuracy, performance and user experience are validated before launch.",
                },
            ],

            faq: [
                {
                    question:
                        "Can it show nearby results?",

                    answer:
                        "Yes. Geographic data allows users to discover entities based on location and distance.",
                },

                {
                    question:
                        "Can custom filters be added?",

                    answer:
                        "Yes. The architecture supports custom filters based on categories, attributes and geographic data.",
                },

                {
                    question:
                        "Can it handle thousands of locations?",

                    answer:
                        "Yes. Optimized relational queries allow the platform to manage large datasets efficiently.",
                },
            ],
        },
        pt: {
            name: "Diretório Avançado",

            title: "Diretório Avançado",

            level: "🔴 Premium",

            category: "Diretórios",

            description:
                "Plataforma de diretório avançada com busca geográfica, mapas interativos, geocodificação em tempo real e filtros estruturais para encontrar entidades com base em múltiplos critérios.",

            time: "8-12 semanas",

            imageAlt:
                "Diretório avançado com mapas",

            target:
                "Empresas, plataformas de serviços, comunidades, marketplaces locais e organizações que precisam conectar usuários com localizações ou entidades específicas.",

            support:
                "60 dias de suporte pós-entrega",

            useCases: [
                "Diretórios com mapas",
                "Serviços locais",
                "Guias geográficos",
                "Marketplace de negócios",
                "Diretório profissional",
                "Plataformas de localização",
            ],

            includes: [
                "Lista avançada",
                "Mapa interativo",
                "Marcadores geográficos",
                "Busca por localização",
                "Geocodificação",
                "Múltiplos filtros",
                "Categorias dinâmicas",
                "Páginas individuais",
                "SEO avançado",
                "Design responsivo",
            ],

            notIncludes: [
                "Marketplace transacional",
                "Sistema de pagamentos",
                "Funções complexas de usuários",
                "Aplicativo móvel nativo",
            ],

            features: [
                "Live Map Search",
                "Bounding-box Queries",
                "Real-time Geocoding",
                "Multi-criteria Filters",
                "Prisma ORM",
                "PostgreSQL",
                "Relational Search",
                "Dynamic Routing",
            ],

            deliverables: [
                "Diretório avançado publicado",
                "Código-fonte",
                "Documentação técnica",
                "Guia administrativo",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Busca inteligente por localização",

                    description:
                        "Os usuários podem encontrar entidades próximas utilizando mapas e coordenadas geográficas.",
                },

                {
                    title:
                        "Filtros avançados",

                    description:
                        "Permite combinar múltiplos critérios para obter resultados altamente relevantes.",
                },

                {
                    title:
                        "Experiência interativa",

                    description:
                        "A integração com mapas melhora a navegação e facilita a descoberta de novos locais ou serviços.",
                },
            ],

            process: [
                {
                    title:
                        "Design da arquitetura",

                    description:
                        "Definimos modelos de dados, relacionamentos, filtros e a estrutura geográfica do sistema.",
                },

                {
                    title:
                        "Desenvolvimento geoespacial",

                    description:
                        "Implementamos mapas, geocodificação, consultas por área e filtros avançados.",
                },

                {
                    title:
                        "Otimização",

                    description:
                        "Testamos desempenho, precisão das buscas e experiência do usuário antes do lançamento.",
                },
            ],

            faq: [
                {
                    question:
                        "Pode mostrar resultados próximos ao usuário?",

                    answer:
                        "Sim. Utiliza dados geográficos para encontrar entidades com base em localização e distância.",
                },

                {
                    question:
                        "Posso adicionar diferentes filtros?",

                    answer:
                        "Sim. A arquitetura permite criar filtros por categorias, atributos, localização e outros critérios personalizados.",
                },

                {
                    question:
                        "Pode gerenciar milhares de localizações?",

                    answer:
                        "Sim. Utiliza consultas relacionais otimizadas para trabalhar com grandes volumes de dados.",
                },
            ],
        },
    },
};