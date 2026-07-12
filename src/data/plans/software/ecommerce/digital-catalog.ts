import type {
    ServicePlan,
} from "@/types/plan.types";

export const digitalCatalog: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "ECO-001",

        slug: "digital-catalog",

        // ────────────────────────────────────
        // Comercial
        // ────────────────────────────────────

        complexity: "⭐⭐⭐ (3/5)",

        price: "$850 - $1,250 USD",

        pricingType: "fixed",

        automationLevel: "medium",

        // ────────────────────────────────────
        // Técnico
        // ────────────────────────────────────

        stack: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
        ],

        technologies: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Prisma",
            "Dynamic Catalog",
            "Client State",
        ],

        integrations: [
            "WhatsApp",
            "Google Analytics",
            "Google Search Console",
            "Cloudinary",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/hero/hero-digital-catalog.png",

        image:
            "/images/services/software/hero/hero-digital-catalog.png",
    },

    translations: {
        es: {
            name: "Catálogo Digital",

            title:
                "Catálogo Digital",

            level: "🟠 Avanzado",

            category:
                "Sistemas E-commerce",

            description:
                "Catálogo digital profesional para exhibir productos mediante una experiencia moderna, rápida y optimizada. Incluye carrito persistente y generación de pedidos mediante WhatsApp o contacto directo.",

            time: "4-6 semanas",

            imageAlt:
                "Catálogo digital de productos",

            target:
                "Pequeñas y medianas empresas, distribuidores, fabricantes y comercios que desean vender en línea sin implementar una pasarela de pago.",

            support:
                "30 días soporte post-entrega",

            useCases: [
                "Catálogo de productos",
                "Mayoristas",
                "Distribuidores",
                "Venta por WhatsApp",
                "Comercio local",
                "Showroom digital",
            ],

            includes: [
                "Catálogo dinámico",
                "Categorías de productos",
                "Buscador",
                "Filtros",
                "Detalle del producto",
                "Carrito persistente",
                "Solicitud por WhatsApp",
                "SEO técnico",
                "Responsive Design",
            ],

            notIncludes: [
                "Pasarela de pagos",
                "Gestión de pedidos",
                "Panel administrativo",
                "Control de inventario",
            ],

            features: [
                "Dynamic Catalog",
                "Persistent Cart",
                "Prisma ORM",
                "Responsive Design",
                "SEO optimizado",
                "Carga rápida",
                "Filtros dinámicos",
                "Arquitectura escalable",
            ],

            deliverables: [
                "Catálogo publicado",
                "Código fuente",
                "Documentación básica",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Incrementa tus ventas",

                    description:
                        "Permite que los clientes exploren fácilmente todo tu catálogo desde cualquier dispositivo.",
                },

                {
                    title:
                        "Proceso de compra simple",

                    description:
                        "Los clientes pueden preparar un pedido y enviarlo directamente mediante WhatsApp o un formulario de contacto.",
                },

                {
                    title:
                        "Escalable",

                    description:
                        "Preparado para evolucionar posteriormente hacia una tienda en línea completa.",
                },
            ],

            process: [
                {
                    title:
                        "Organización del catálogo",

                    description:
                        "Estructuramos categorías, productos, imágenes y contenido comercial.",
                },

                {
                    title:
                        "Desarrollo",

                    description:
                        "Construimos una experiencia rápida con filtros, búsqueda y carrito persistente.",
                },

                {
                    title:
                        "Publicación",

                    description:
                        "Optimizamos SEO, rendimiento y desplegamos el catálogo en producción.",
                },
            ],

            faq: [
                {
                    question:
                        "¿Los clientes pueden comprar directamente?",

                    answer:
                        "No. Este plan genera solicitudes de compra mediante WhatsApp o contacto directo, sin procesar pagos en línea.",
                },

                {
                    question:
                        "¿El carrito conserva los productos?",

                    answer:
                        "Sí. El carrito utiliza almacenamiento local para mantener los productos incluso después de cerrar el navegador.",
                },

                {
                    question:
                        "¿Se puede actualizar a una tienda completa después?",

                    answer:
                        "Sí. La arquitectura está preparada para evolucionar hacia un e-commerce con pagos en línea e inventario.",
                },
            ],
        },

        en: {
            name: "Digital Catalog",

            title:
                "Digital Catalog",

            level: "🟠 Advanced",

            category:
                "E-commerce Systems",

            description:
                "A professional digital catalog that showcases products through a modern shopping experience with a persistent cart and direct ordering via WhatsApp or contact forms.",

            time: "4-6 weeks",

            imageAlt:
                "Digital product catalog",

            target:
                "Small businesses, wholesalers, distributors and retailers looking to sell online without implementing an online payment gateway.",

            support:
                "30 days post-delivery support",

            useCases: [
                "Product catalog",
                "Wholesale",
                "Retail",
                "WhatsApp sales",
                "Local business",
                "Digital showroom",
            ],

            includes: [
                "Dynamic catalog",
                "Product categories",
                "Search",
                "Filters",
                "Product pages",
                "Persistent shopping cart",
                "WhatsApp ordering",
                "Technical SEO",
                "Responsive Design",
            ],

            notIncludes: [
                "Online payments",
                "Order management",
                "Admin dashboard",
                "Inventory management",
            ],

            features: [
                "Dynamic catalog",
                "Persistent cart",
                "Prisma ORM",
                "Responsive design",
                "SEO optimized",
                "Fast loading",
                "Dynamic filters",
                "Scalable architecture",
            ],

            deliverables: [
                "Published catalog",
                "Source code",
                "Basic documentation",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Increase sales",

                    description:
                        "Allow customers to browse your complete product catalog from any device.",
                },

                {
                    title:
                        "Simple ordering process",

                    description:
                        "Customers can prepare an order and send it directly through WhatsApp or your contact channel.",
                },

                {
                    title:
                        "Future-ready",

                    description:
                        "The architecture can later evolve into a complete online store with payment processing.",
                },
            ],

            process: [
                {
                    title:
                        "Catalog planning",

                    description:
                        "We organize categories, products, images and commercial information.",
                },

                {
                    title:
                        "Development",

                    description:
                        "We build a fast browsing experience with filtering, search and a persistent shopping cart.",
                },

                {
                    title:
                        "Deployment",

                    description:
                        "Performance and SEO are optimized before the catalog goes live.",
                },
            ],

            faq: [
                {
                    question:
                        "Can customers pay online?",

                    answer:
                        "No. This plan is designed for direct ordering through WhatsApp or contact forms without online payment processing.",
                },

                {
                    question:
                        "Does the shopping cart persist?",

                    answer:
                        "Yes. The cart is stored locally so customers can continue shopping after returning to the website.",
                },

                {
                    question:
                        "Can it be upgraded to a complete e-commerce later?",

                    answer:
                        "Absolutely. The architecture is designed to evolve into a fully featured online store.",
                },
            ],
        },
        pt: {
            name: "Catálogo Digital",

            title: "Catálogo Digital",

            level: "🟠 Avançado",

            category: "Sistemas de E-commerce",

            description:
                "Catálogo digital profissional para apresentar produtos por meio de uma experiência moderna, rápida e otimizada. Inclui carrinho persistente e geração de pedidos via WhatsApp ou contato direto.",

            time: "4-6 semanas",

            imageAlt: "Catálogo digital de produtos",

            target:
                "Pequenas e médias empresas, distribuidores, fabricantes e comércios que desejam vender online sem implementar um gateway de pagamento.",

            support: "30 dias de suporte pós-entrega",

            useCases: [
                "Catálogo de produtos",
                "Atacadistas",
                "Distribuidores",
                "Vendas pelo WhatsApp",
                "Comércio local",
                "Showroom digital",
            ],

            includes: [
                "Catálogo dinâmico",
                "Categorias de produtos",
                "Busca",
                "Filtros",
                "Detalhes do produto",
                "Carrinho persistente",
                "Solicitação via WhatsApp",
                "SEO técnico",
                "Design responsivo",
            ],

            notIncludes: [
                "Gateway de pagamento",
                "Gerenciamento de pedidos",
                "Painel administrativo",
                "Controle de estoque",
            ],

            features: [
                "Dynamic Catalog",
                "Persistent Cart",
                "Prisma ORM",
                "Responsive Design",
                "SEO otimizado",
                "Carregamento rápido",
                "Filtros dinâmicos",
                "Arquitetura escalável",
            ],

            deliverables: [
                "Catálogo publicado",
                "Código-fonte",
                "Documentação básica",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Aumente suas vendas",

                    description:
                        "Permita que seus clientes explorem facilmente todo o seu catálogo a partir de qualquer dispositivo.",
                },

                {
                    title: "Processo de compra simplificado",

                    description:
                        "Os clientes podem preparar um pedido e enviá-lo diretamente pelo WhatsApp ou por um formulário de contato.",
                },

                {
                    title: "Escalável",

                    description:
                        "Preparado para evoluir futuramente para uma loja virtual completa.",
                },
            ],

            process: [
                {
                    title: "Organização do catálogo",

                    description:
                        "Estruturamos categorias, produtos, imagens e conteúdo comercial.",
                },

                {
                    title: "Desenvolvimento",

                    description:
                        "Criamos uma experiência rápida com filtros, busca e carrinho persistente.",
                },

                {
                    title: "Publicação",

                    description:
                        "Otimizamos SEO, desempenho e publicamos o catálogo em produção.",
                },
            ],

            faq: [
                {
                    question: "Os clientes podem comprar diretamente?",

                    answer:
                        "Não. Este plano gera solicitações de compra por meio do WhatsApp ou contato direto, sem processar pagamentos online.",
                },

                {
                    question: "O carrinho mantém os produtos salvos?",

                    answer:
                        "Sim. O carrinho utiliza armazenamento local para manter os produtos mesmo após o navegador ser fechado.",
                },

                {
                    question: "É possível atualizar para uma loja virtual completa no futuro?",

                    answer:
                        "Sim. A arquitetura está preparada para evoluir para um e-commerce completo com pagamentos online e controle de estoque.",
                },
            ],
        },
    },
};