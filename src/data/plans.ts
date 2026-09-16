export interface InternetPlan {
  id: string;
  name: string;
  speed: number; // in Mbps
  uploadSpeed: number; // in Mbps
  category: "residencial" | "empresarial";
  tagline: string;
  priceUsd: number;
  period: string;
  popular?: boolean;
  technology: string; // e.g. "100% Fibra Óptica FTTH"
  wifiRouter: string;
  features: string[];
  recommendedFor: string;
  badge?: string;
}

export const INTERNET_PLANS: InternetPlan[] = [
  {
    id: "plan-esencial",
    name: "Plan Inicio",
    speed: 150,
    uploadSpeed: 150,
    category: "residencial",
    tagline: "Conexión estable y fluida para hogares modernos.",
    priceUsd: 25,
    period: "mes",
    technology: "Fibra Óptica Pura FTTH",
    wifiRouter: "Router Wi-Fi Doble Banda",
    features: [
      "150 Mbps de velocidad simétrica real",
      "Navegación ilimitada sin límites de descarga",
      "Streaming HD en múltiples pantallas",
      "Soporte técnico directo y monitoreo 24/7",
      "Instalación con fibra drop de alta resistencia",
    ],
    recommendedFor: "Streaming, redes sociales y navegación familiar fluida",
  },
  {
    id: "plan-hogar-turbo",
    name: "Plan Hogar Pro",
    speed: 300,
    uploadSpeed: 300,
    category: "residencial",
    tagline: "El equilibrio perfecto entre potencia, entretenimiento y trabajo.",
    priceUsd: 35,
    period: "mes",
    popular: true,
    badge: "MÁS POPULAR",
    technology: "Fibra Óptica Pura FTTH",
    wifiRouter: "Router Wi-Fi 6 Gigabit de Alta Cobertura",
    features: [
      "300 Mbps de velocidad simétrica ultrarrápida",
      "Latencia ultra baja para videollamadas 4K y Home Office",
      "Streaming simultáneo en 4K UHD sin pausas",
      "Prioridad de tráfico para más de 15 dispositivos",
      "Router Wi-Fi 6 de última generación incluido",
      "Soporte preferencial Star Conectados",
    ],
    recommendedFor: "Familias dinámicas, creadores de contenido y home office",
  },
  {
    id: "plan-gamer-ultra",
    name: "Plan Ultra Gamer",
    speed: 600,
    uploadSpeed: 600,
    category: "residencial",
    tagline: "Latencia mínima y máxima potencia para jugadores y creadores.",
    priceUsd: 50,
    period: "mes",
    badge: "MÁXIMO RENDIMIENTO",
    technology: "Fibra Óptica Pura FTTH Directa",
    wifiRouter: "Router Wi-Fi 6 Dual-Band Gaming Edition",
    features: [
      "600 Mbps de velocidad simétrica sin caídas",
      "Ping optimizado (<15ms) para servidores competitivos",
      "Zero Packet Loss garantizado",
      "Descargas de juegos de 100GB en minutos",
      "Transmisiones en vivo en Twitch y YouTube en 4K 60fps",
      "Atención técnica prioritaria VIP",
    ],
    recommendedFor: "Gamers competitivos, streamers y creadores audiovisuales",
  },
  {
    id: "plan-pyme-conectada",
    name: "Plan Pyme & Comercio",
    speed: 400,
    uploadSpeed: 400,
    category: "empresarial",
    tagline: "Operaciones comerciales continuas, puntos de venta y cloud.",
    priceUsd: 65,
    period: "mes",
    popular: true,
    badge: "IDEAL NEGOCIOS",
    technology: "Fibra Óptica Empresarial con Enlace Dedicado",
    wifiRouter: "Router Empresarial con Multi-SSID y QoS",
    features: [
      "400 Mbps simétricos de alta disponibilidad",
      "Garantía de conectividad para Puntos de Venta y Biopago",
      "Red aislada para clientes (Hotspot corporativo)",
      "SLA de atención técnica en menos de 4 horas",
      "Monitoreo proactivo de nodo 24/7",
    ],
    recommendedFor: "Locales comerciales, consultorios, restaurantes y oficinas",
  },
  {
    id: "plan-corporativo-pro",
    name: "Plan Empresa Dedicado",
    speed: 800,
    uploadSpeed: 800,
    category: "empresarial",
    tagline: "Infraestructura crítica, IP pública y máxima prioridad en red.",
    priceUsd: 110,
    period: "mes",
    badge: "CORPORATIVO VIP",
    technology: "Canal Dedicado Metro Ethernet 1:1",
    wifiRouter: "Equipamiento Rack Gigabit Empresarial",
    features: [
      "800 Mbps dedicados simétricos garantizados 1:1",
      "Dirección IP Pública Fija disponible",
      "SLA de servicio del 99.9% de uptime",
      "Canal prioritario en servidor y peering internacional",
      "Ejecutivo de soporte técnico asignado",
    ],
    recommendedFor: "Empresas con servidores propios, sedes múltiples y software en la nube",
  },
];

export const WHATSAPP_PHONE = "584147573880"; // Configurable WhatsApp contact

export const generateWhatsAppPlanLink = (planName: string, speed: number): string => {
  const text = encodeURIComponent(
    `¡Hola Star Conectados! 🚀 Vi su página web y me gustaría consultar disponibilidad y contratar el *${planName}* de *${speed} Mbps*. ¿Podrían brindarme información para mi zona?`
  );
  return `https://wa.me/${WHATSAPP_PHONE}?text=${text}`;
};

export const generateGeneralWhatsAppLink = (message?: string): string => {
  const defaultText = encodeURIComponent(
    "¡Hola Star Conectados! 🚀 Vengo de su página web y quiero consultar cobertura y planes para mi sector."
  );
  return `https://wa.me/${WHATSAPP_PHONE}?text=${message ? encodeURIComponent(message) : defaultText}`;
};
