import type {
    ServicePlan,
} from "@/types/plan.types";

export const basicEcommerce: ServicePlan = {
    core: {
        // ────────────────────────────────────
        // Identidad
        // ────────────────────────────────────

        id: "ECO-002",

        slug: "basic-ecommerce",

        // ────────────────────────────────────
        // Comercial
        // ────────────────────────────────────

        complexity: "⭐⭐⭐⭐ (4/5)",

        price: "$1,350 - $2,100 USD",

        pricingType: "fixed",

        automationLevel: "high",

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
            "Stripe",
            "Checkout API",
            "Webhooks",
        ],

        integrations: [
            "Stripe",
            "Google Analytics",
            "Google Search Console",
            "Cloudinary",
            "Resend",
        ],

        // ────────────────────────────────────
        // Multimedia
        // ────────────────────────────────────

        heroImage:
            "/images/services/software/hero/hero-basic-ecommerce.png",

        image:
            "/images/services/software/hero/hero-basic-ecommerce.png",
    },

    translations: {
        es: {
            name: "E-commerce Básico",

            title:
                "E-commerce Básico",

            level: "🔴 Avanzado",

            category:
                "Sistemas E-commerce",

            description:
                "Tienda online profesional con catálogo administrable, carrito persistente, proceso de compra seguro, integración con una pasarela de pago y confirmación automática de pedidos.",

            time: "6-8 semanas",

            imageAlt:
                "Tienda online profesional",

            target:
                "Negocios, marcas y empresas que desean vender productos directamente desde su sitio web mediante una experiencia de compra moderna y segura.",

            support:
                "45 días soporte post-entrega",

            useCases: [
                "Tiendas online",
                "Venta de productos físicos",
                "Productos digitales",
                "Marcas comerciales",
                "Retail",
                "Emprendimientos",
            ],

            includes: [
                "Catálogo de productos",
                "Categorías",
                "Buscador",
                "Filtros",
                "Carrito persistente",
                "Checkout seguro",
                "Pasarela de pago",
                "Correos automáticos",
                "SEO técnico",
                "Responsive Design",
            ],

            notIncludes: [
                "Múltiples pasarelas de pago",
                "Marketplace",
                "Multi vendedor",
                "Inventario avanzado",
            ],

            features: [
                "Persistent Shopping Cart",
                "Stripe Integration",
                "Secure Checkout",
                "Payment Webhooks",
                "Prisma ORM",
                "SEO optimizado",
                "Responsive Design",
                "Order Confirmation Emails",
            ],

            deliverables: [
                "Tienda online publicada",
                "Código fuente",
                "Documentación técnica",
                "Guía de administración",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Ventas en línea",

                    description:
                        "Permite recibir pagos directamente desde el sitio web mediante una pasarela de pago segura.",
                },

                {
                    title:
                        "Automatización",

                    description:
                        "Los pedidos generan confirmaciones automáticas por correo tanto para el cliente como para el negocio.",
                },

                {
                    title:
                        "Experiencia profesional",

                    description:
                        "El proceso de compra está optimizado para aumentar la confianza y mejorar la conversión.",
                },
            ],

            process: [
                {
                    title:
                        "Arquitectura",

                    description:
                        "Definimos la estructura del catálogo, categorías y flujo completo de compra.",
                },

                {
                    title:
                        "Desarrollo",

                    description:
                        "Implementamos carrito, checkout, integración de pagos y automatización de pedidos.",
                },

                {
                    title:
                        "Pruebas y lanzamiento",

                    description:
                        "Validamos pagos, webhooks, correos electrónicos y rendimiento antes de publicar la tienda.",
                },
            ],

            faq: [
                {
                    question:
                        "¿Qué pasarela de pago incluye?",

                    answer:
                        "El proyecto integra una pasarela de pago, como Stripe, adaptándose a la disponibilidad y necesidades del negocio.",
                },

                {
                    question:
                        "¿Los clientes reciben confirmación del pedido?",

                    answer:
                        "Sí. Después del pago se envían automáticamente correos de confirmación al cliente y al administrador.",
                },

                {
                    question:
                        "¿Se puede ampliar en el futuro?",

                    answer:
                        "Sí. La arquitectura permite evolucionar hacia un e-commerce más avanzado con múltiples métodos de pago, inventario y funcionalidades empresariales.",
                },
            ],
        },

        en: {
            name: "Basic E-commerce",

            title:
                "Basic E-commerce",

            level: "🔴 Advanced",

            category:
                "E-commerce Systems",

            description:
                "Professional online store with a persistent shopping cart, secure checkout, payment gateway integration and automated order confirmation emails.",

            time: "6-8 weeks",

            imageAlt:
                "Professional online store",

            target:
                "Businesses, brands and retailers looking to sell products online through a secure and modern shopping experience.",

            support:
                "45 days post-delivery support",

            useCases: [
                "Online stores",
                "Retail",
                "Physical products",
                "Digital products",
                "Brands",
                "E-commerce startups",
            ],

            includes: [
                "Product catalog",
                "Categories",
                "Search",
                "Filters",
                "Persistent shopping cart",
                "Secure checkout",
                "Payment gateway",
                "Automatic emails",
                "Technical SEO",
                "Responsive Design",
            ],

            notIncludes: [
                "Multiple payment gateways",
                "Marketplace",
                "Multi-vendor",
                "Advanced inventory",
            ],

            features: [
                "Persistent shopping cart",
                "Stripe integration",
                "Secure checkout",
                "Payment webhooks",
                "Prisma ORM",
                "SEO optimized",
                "Responsive design",
                "Automatic order emails",
            ],

            deliverables: [
                "Published online store",
                "Source code",
                "Technical documentation",
                "Administration guide",
            ],

            specifications: [],

            benefits: [
                {
                    title:
                        "Online sales",

                    description:
                        "Accept secure online payments directly from your website.",
                },

                {
                    title:
                        "Automated workflow",

                    description:
                        "Customers and administrators automatically receive order confirmation emails after every purchase.",
                },

                {
                    title:
                        "Professional shopping experience",

                    description:
                        "A streamlined checkout process improves customer confidence and conversion rates.",
                },
            ],

            process: [
                {
                    title:
                        "Architecture",

                    description:
                        "We define the product catalog, categories and complete checkout flow.",
                },

                {
                    title:
                        "Development",

                    description:
                        "We implement the shopping cart, secure payments and automated order processing.",
                },

                {
                    title:
                        "Testing & deployment",

                    description:
                        "Payments, webhooks, emails and performance are thoroughly tested before launch.",
                },
            ],

            faq: [
                {
                    question:
                        "Which payment gateway is included?",

                    answer:
                        "The project integrates a single payment gateway, such as Stripe, depending on your business requirements and regional availability.",
                },

                {
                    question:
                        "Will customers receive order confirmation emails?",

                    answer:
                        "Yes. Confirmation emails are automatically sent after every successful purchase.",
                },

                {
                    question:
                        "Can it be upgraded later?",

                    answer:
                        "Absolutely. The architecture is designed to evolve into a full enterprise e-commerce platform with additional payment gateways and inventory management.",
                },
            ],
        },
        pt: {
            name: "E-commerce Básico",

            title: "E-commerce Básico",

            level: "🔴 Avançado",

            category: "Sistemas de E-commerce",

            description:
                "Loja virtual profissional com catálogo administrável, carrinho persistente, processo de compra seguro, integração com gateway de pagamento e confirmação automática de pedidos.",

            time: "6-8 semanas",

            imageAlt: "Loja virtual profissional",

            target:
                "Negócios, marcas e empresas que desejam vender produtos diretamente em seu site por meio de uma experiência de compra moderna e segura.",

            support: "45 dias de suporte pós-entrega",

            useCases: [
                "Lojas virtuais",
                "Venda de produtos físicos",
                "Produtos digitais",
                "Marcas comerciais",
                "Varejo",
                "Empreendimentos",
            ],

            includes: [
                "Catálogo de produtos",
                "Categorias",
                "Busca",
                "Filtros",
                "Carrinho persistente",
                "Checkout seguro",
                "Gateway de pagamento",
                "E-mails automáticos",
                "SEO técnico",
                "Design responsivo",
            ],

            notIncludes: [
                "Múltiplos gateways de pagamento",
                "Marketplace",
                "Multi vendedor",
                "Controle de estoque avançado",
            ],

            features: [
                "Persistent Shopping Cart",
                "Stripe Integration",
                "Secure Checkout",
                "Payment Webhooks",
                "Prisma ORM",
                "SEO otimizado",
                "Responsive Design",
                "Order Confirmation Emails",
            ],

            deliverables: [
                "Loja virtual publicada",
                "Código-fonte",
                "Documentação técnica",
                "Guia de administração",
            ],

            specifications: [],

            benefits: [
                {
                    title: "Vendas online",

                    description:
                        "Permite receber pagamentos diretamente pelo site por meio de um gateway de pagamento seguro.",
                },

                {
                    title: "Automação",

                    description:
                        "Os pedidos geram confirmações automáticas por e-mail tanto para o cliente quanto para a empresa.",
                },

                {
                    title: "Experiência profissional",

                    description:
                        "O processo de compra é otimizado para aumentar a confiança dos clientes e melhorar a conversão.",
                },
            ],

            process: [
                {
                    title: "Arquitetura",

                    description:
                        "Definimos a estrutura do catálogo, das categorias e de todo o fluxo de compra.",
                },

                {
                    title: "Desenvolvimento",

                    description:
                        "Implementamos o carrinho, checkout, integração com pagamentos e automação dos pedidos.",
                },

                {
                    title: "Testes e lançamento",

                    description:
                        "Validamos pagamentos, webhooks, e-mails e desempenho antes de publicar a loja.",
                },
            ],

            faq: [
                {
                    question: "Qual gateway de pagamento está incluído?",

                    answer:
                        "O projeto integra um gateway de pagamento, como o Stripe, adaptando-se à disponibilidade e às necessidades do negócio.",
                },

                {
                    question: "Os clientes recebem confirmação do pedido?",

                    answer:
                        "Sim. Após a confirmação do pagamento, e-mails de confirmação são enviados automaticamente ao cliente e ao administrador.",
                },

                {
                    question: "É possível expandir a loja no futuro?",

                    answer:
                        "Sim. A arquitetura permite evoluir para um e-commerce mais avançado, com múltiplos métodos de pagamento, controle de estoque e funcionalidades empresariais.",
                },
            ],
        },
    },
};