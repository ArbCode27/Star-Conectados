export interface Testimonial {
  id: string;
  name: string;
  role: string;
  sector: string;
  plan: string;
  speed: string;
  avatarText: string;
  quote: string;
  rating: number;
  ping: string;
  highlight: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Ing. Carlos Méndez",
    role: "Desarrollador de Software Remoto",
    sector: "Cordero - Casco Central",
    plan: "Plan Hogar Pro",
    speed: "300 Mbps",
    avatarText: "CM",
    quote:
      "Trabajo con clientes en Estados Unidos y Europa. Antes sufría microcortes constantes. Desde que instalé la fibra de Star Conectados, mis llamadas de Zoom en 4K y deploys son instantáneos. No vuelvo atrás.",
    rating: 5,
    ping: "14ms",
    highlight: "Cero caídas en videollamadas",
  },
  {
    id: "test-2",
    name: "Dra. Mariana Colmenares",
    role: "Directora en Centro Odontológico",
    sector: "Cordero - Av. Principal",
    plan: "Plan Pyme & Comercio",
    speed: "400 Mbps",
    avatarText: "MC",
    quote:
      "Nuestros puntos de venta y sistema de fichas médicas en la nube nunca más se quedaron colgados. Lo mejor es tener una oficina física en Cordero con gente que te atiende al instante.",
    rating: 5,
    ping: "16ms",
    highlight: "Puntos de venta 100% operativos",
  },
  {
    id: "test-3",
    name: "Alejandro 'Vortex' Roa",
    role: "Streamer & Gamer Competitivo",
    sector: "Sector El Abejal, Táchira",
    plan: "Plan Ultra Gamer",
    speed: "600 Mbps",
    avatarText: "AR",
    quote:
      "Jugar Valorant y CS2 con 18ms de ping desde Táchira parecía un sueño imposible. Star Conectados tiene un enrutamiento brutal hacia los servidores de Miami y Brasil. ¡10/10!",
    rating: 5,
    ping: "18ms",
    highlight: "Ping competitivo <20ms",
  },
  {
    id: "test-4",
    name: "Valeria Zambrano",
    role: "Creadora de Contenido & Diseñadora",
    sector: "Cordero - Andrés Bello",
    plan: "Plan Hogar Pro",
    speed: "300 Mbps",
    avatarText: "VZ",
    quote:
      "Subir videos pesados a YouTube y reels a Instagram solía tardar horas con el internet tradicional. Ahora se cargan en segundos gracias a la subida simétrica. Una experiencia premium de verdad.",
    rating: 5,
    ping: "15ms",
    highlight: "Subida simétrica real",
  },
];
