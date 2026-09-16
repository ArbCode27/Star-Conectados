export interface ExperienceItem {
  id: string;
  title: string;
  category: string;
  headline: string;
  description: string;
  metric: string;
  metricLabel: string;
  iconName: string;
  badge: string;
  accent: "blue" | "red" | "cyan";
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "gaming",
    title: "Gaming Competitivo",
    category: "Ultra Baja Latencia",
    headline: "Juega sin lag. Cada milisegundo cuenta para ganar.",
    description:
      "Enrutamiento directo y optimizado a servidores de Riot, Steam, Epic y PlayStation Network en Norteamérica y Sudamérica. Despídete del ping alto y el packet loss.",
    metric: "<15ms",
    metricLabel: "Latencia promedio",
    iconName: "Gamepad2",
    badge: "0% Packet Loss",
    accent: "red",
  },
  {
    id: "streaming",
    title: "Streaming 4K / 8K UHD",
    category: "Entretenimiento Sin Pausas",
    headline: "Películas, fútbol en vivo y series al instante.",
    description:
      "Disfruta de Netflix, Disney+, Prime Video y transmisiones deportivas en máxima resolución 4K HDR de manera simultánea en todas las pantallas de tu casa.",
    metric: "0 seg",
    metricLabel: "Tiempo de espera / buffering",
    iconName: "Tv",
    badge: "Ultra HD Ready",
    accent: "blue",
  },
  {
    id: "remotework",
    title: "Trabajo Remoto & Deploys",
    category: "Productividad Global",
    headline: "Conéctate al mundo desde las montañas de Cordero.",
    description:
      "Videollamadas cristalinas en Google Meet y Zoom, transferencias de archivos masivos a la nube en segundos y túneles VPN hiperestables sin cortes.",
    metric: "100%",
    metricLabel: "Subida simétrica real",
    iconName: "Laptop",
    badge: "Home Office",
    accent: "cyan",
  },
  {
    id: "smarthome",
    title: "Hogar Inteligente & IoT",
    category: "Domótica Segura",
    headline: "Todos tus dispositivos sincronizados en tiempo real.",
    description:
      "Cámaras de seguridad en alta definición, cerraduras inteligentes, sensores y asistentes de voz conectados sin saturar el ancho de banda familiar.",
    metric: "30+",
    metricLabel: "Dispositivos conectados",
    iconName: "Home",
    badge: "Smart Connectivity",
    accent: "blue",
  },
  {
    id: "business",
    title: "Comercios & Puntos de Venta",
    category: "Continuidad Operativa",
    headline: "Tus ventas nunca se detienen por falta de señal.",
    description:
      "Conexión prioritaria para terminales de pago, Biopago, software administrativo en la nube y red Wi-Fi independiente y segura para tus clientes.",
    metric: "99.9%",
    metricLabel: "Disponibilidad de red",
    iconName: "Store",
    badge: "Puntos de Venta Activos",
    accent: "red",
  },
  {
    id: "education",
    title: "Educación e Investigación",
    category: "Aprendizaje Sin Límites",
    headline: "Acceso inmediato al conocimiento global.",
    description:
      "Clases universitarias en línea, seminarios web internacionales y descarga instantánea de papers, libros y recursos interactivos para toda la familia.",
    metric: "Fast",
    metricLabel: "Descarga instantánea",
    iconName: "GraduationCap",
    badge: "Educación Digital",
    accent: "cyan",
  },
];
