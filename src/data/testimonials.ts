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
    sector: "San Cristóbal",
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
    sector: "Valencia",
    plan: "Plan Pyme & Comercio",
    speed: "400 Mbps",
    avatarText: "MC",
    quote:
      "Nuestros puntos de venta y sistema de fichas médicas en la nube nunca más se quedaron colgados. Lo mejor es contar con un soporte técnico humano y veloz que te atiende al instante.",
    rating: 5,
    ping: "16ms",
    highlight: "Puntos de venta 100% operativos",
  },
  {
    id: "test-3",
    name: "Alejandro 'Vortex' Roa",
    role: "Streamer & Gamer Competitivo",
    sector: "Caracas",
    plan: "Plan Ultra Gamer",
    speed: "600 Mbps",
    avatarText: "AR",
    quote:
      "Jugar Valorant y CS2 con 16ms de ping parecía un sueño imposible. Star Conectados tiene un enrutamiento brutal hacia los servidores internacionales. ¡10/10!",
    rating: 5,
    ping: "16ms",
    highlight: "Ping competitivo <20ms",
  },
  {
    id: "test-4",
    name: "Valeria Zambrano",
    role: "Creadora de Contenido & Diseñadora",
    sector: "Lechería",
    plan: "Plan Hogar Pro",
    speed: "300 Mbps",
    avatarText: "VZ",
    quote:
      "Subir videos pesados a YouTube y reels a Instagram solía tardar horas con el internet tradicional. Ahora se cargan en segundos gracias a la subida simétrica real. Una experiencia premium de verdad.",
    rating: 5,
    ping: "15ms",
    highlight: "Subida simétrica real",
  },
];
