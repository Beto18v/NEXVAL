export const siteBanner = {
  message:
    "🚀 Lleva tu negocio al siguiente nivel — Página web profesional lista en 5 días",
  messageMobile: "🚀 Web profesional en 5 días",
  whatsappNumber: "573142482943",
  whatsappText:
    "Hola, quiero una página web profesional lista en 5 días.\nMi negocio es: ->\nEstoy ubicado en: ->\nQuiero una web para: ->",
  get whatsappUrl() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappText)}`;
  },
  buttonLabel: "Cotizar por WhatsApp",
  buttonLabelMobile: "WhatsApp",
};
// Hero section data
export const siteHero = {
  sectionId: "inicio",
  title: "Tu página web lista en 5 a 7 días",
  subtitle:
    "Con botón de WhatsApp, Google Maps y diseño profesional para que te encuentren facilmente y te escriban más.",
  cta: {
    primary: {
      label: "Cotizar por WhatsApp",
      href: "https://wa.me/573142482943?text=Hola%2C%20vi%20tu%20web%20y%20quiero%20cotizar%20una%20p%C3%A1gina%20web%20para%20mi%20negocio.%20%C2%BFQu%C3%A9%20informaci%C3%B3n%20necesitas%3F",
    },
    secondary: {
      label: "Ver ejemplos",
      href: "#ejemplos",
    },
  },
  disclaimer: [
    "✔ Entrega rápida",
    "✔ Sin mensualidades",
    "✔ Optimizada para Google",
  ],
  stats: [
    {
      icon: "📲",
      title: "Más clientes por WhatsApp",
    },
    {
      icon: "⚡",
      title: "Lista en 5 a 7 días",
    },
    {
      icon: "💰",
      title: "Pago único (sin mensualidad)",
    },
    {
      icon: "📍",
      title: "Ubicación y contacto en Google",
    },
  ],
};

// Services section data
export const siteServices = {
  sectionId: "servicios",
  label: "Servicios",
  title: "Todo lo que tu negocio necesita para atraer más clientes",
  services: [
    {
      icon: "Code",
      title: "Diseño y desarrollo web",
      description:
        "Sitios web modernos y responsivos, adaptados a las necesidades de cada negocio. Desde landing pages hasta catálogos completos.",
    },
    {
      icon: "Zap",
      title: "Optimización de velocidad y SEO",
      description:
        "Páginas que cargan rápido y están optimizadas para aparecer en los primeros resultados de Google.",
    },
    {
      icon: "Globe",
      title: "Asesoría en dominio y hosting",
      description:
        "Te guío para que alojes tu sitio en tu propia cuenta, manteniendo el control total y la propiedad de tu web.",
    },
  ],
};

// Process section data
export const siteProcess = {
  sectionId: "proceso",
  label: "Proceso",
  title: "Así trabajamos juntos",
  subtitle:
    "Un proceso simple y transparente, sin complicaciones ni sorpresas.",
  steps: [
    {
      number: "01",
      title: "Diagnóstico inicial",
      description:
        "Conversamos sobre tu negocio, tus objetivos y lo que necesitas. Entiendo tu visión para crear algo que realmente funcione.",
    },
    {
      number: "02",
      title: "Propuesta visual",
      description:
        "Te presento un diseño inicial basado en lo que hablamos. Ajustamos juntos hasta que quede exactamente como lo imaginabas.",
    },
    {
      number: "03",
      title: "Desarrollo del sitio",
      description:
        "Construyo tu sitio web con las mejores prácticas de velocidad, SEO y usabilidad. Siempre manteniéndote informado del progreso.",
    },
    {
      number: "04",
      title: "Entrega y acompañamiento",
      description:
        "Te entrego el sitio funcionando y te acompaño en los primeros días para resolver cualquier duda.",
    },
  ],
};

// Header data layout
export const headerData = {
  brand: {
    name: "webdev",
    accent: ".",
    href: "/",
  },
  navItems: [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Proceso", href: "#proceso" },
    { name: "Ejemplos", href: "#ejemplos" },
    { name: "Contacto", href: "#contacto" },
  ],
  mobileMenu: {
    openLabel: "Abrir menú",
    closeLabel: "Cerrar menú",
  },
  button: {
    label: "Planes y Precios",
    href: "#precios",
  },
};

// Footer data layout
export const footerData = {
  brand: {
    name: "webdev",
    accent: ".",
    href: "/",
  },
  description: "Sitios web profesionales para negocios locales.",
  navItems: [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Proceso", href: "#proceso" },
    { name: "Ejemplos", href: "#ejemplos" },
    { name: "Precios", href: "#precios" },
    { name: "Contacto", href: "#contacto" },
  ],
  copyright: {
    label: "Todos los derechos reservados.",
    privacy: {
      label: "Política de privacidad",
      href: "#",
    },
    terms: {
      label: "Términos de uso",
      href: "#",
    },
  },
};

// Examples section data
export const siteExamples = {
  sectionId: "ejemplos",
  label: "Ejemplos",
  title: "Así podría verse tu sitio web",
  subtitle:
    "Estos son demos demostrativos (sitios de ejemplo). Tu web será personalizada según tu negocio, con tus colores, fotos y contenido.",
  footerText: "Tu web se adapta al estilo de tu marca.",
};

// Pricing section data
export const sitePricing = {
  sectionId: "precios",
  label: "Precios",
  title: "Planes claros, sin sorpresas",
  subtitle:
    "Elige el plan que mejor se adapte a las necesidades de tu negocio. Todos incluyen asesoría personalizada.",
  whatsappBaseUrl: "https://wa.me/573142482943?text=Me interesa el plan ",
  buttonText: "Solicitar cotización",
  footerText:
    "Los precios son orientativos. El costo final depende de los requerimientos específicos de cada proyecto.",
  packages: [
    {
      name: "Básico",
      price: "Desde $500.000 COP",
      description:
        "Ideal para negocios que quieren empezar con una presencia digital simple.",
      features: [
        "1 página tipo one page",
        "Hasta 4 secciones",
        "Diseño responsive básico (celular y PC)",
        "Botón directo a WhatsApp",
        "Mapa de Google Maps",
        "Entrega en 5-7 días hábiles",
      ],
      featured: false,
    },
    {
      name: "Profesional",
      price: "Desde $900.000 COP",
      description: "Para negocios que buscan una imagen profesional completa.",
      features: [
        "Hasta 6 secciones",
        "Optimización SEO",
        "Botones a redes sociales",
        "Integración con WhatsApp",
        "Google Analytics",
        "Entrega en 8–12 días hábiles",
      ],
      featured: true,
    },
    {
      name: "Premium",
      price: "Desde $1.500.000 COP",
      description: "Solución completa para negocios que quieren destacar.",
      features: [
        "Secciones ilimitadas",
        "Menú digital",
        "Formulario de contacto o reservas",
        "SEO más trabajado por secciones",
        "Textos optimizados",
        "Soporte y ajustes por 30 días después de entregar",
        "Entrega en 12–20 días",
      ],
      featured: false,
    },
  ],
};

// Contact section data
export const siteContact = {
  sectionId: "contacto",
  label: "Contacto",
  title: "Hablemos de tu proyecto",
  subtitle:
    "Cuéntame sobre tu negocio y lo que necesitas. Te respondo en menos de 24 horas con una propuesta personalizada.",
  contacts: [
    {
      icon: "Mail",
      label: "Correo",
      href: "mailto:nicolasalbertov18@gmail.com",
      text: "nicolasalbertov18@gmail.com",
    },
    {
      icon: "MessageCircle",
      label: "WhatsApp",
      href: "https://wa.me/573142482943",
      text: "+57 3142482943",
    },
  ],
  footerText: "Atención de lunes a viernes, de 9:00 a 18:00 hrs.",
};
