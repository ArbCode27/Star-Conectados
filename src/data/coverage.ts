export interface CoverageZone {
  id: string;
  name: string;
  municipality: string;
  status: "disponible" | "en_expansion" | "proximamente";
  tag: string;
  description: string;
  avgInstallationHours: number;
}

export const COVERAGE_ZONES: CoverageZone[] = [
  {
    id: "cordero-centro",
    name: "Cordero - Casco Central",
    municipality: "Municipio Andrés Bello",
    status: "disponible",
    tag: "Fibra Activa 100%",
    description: "Conexión directa a nodo principal. Instalación prioritaria en 24h.",
    avgInstallationHours: 24,
  },
  {
    id: "cordero-abejal",
    name: "Sector El Abejal",
    municipality: "Municipio Andrés Bello",
    status: "disponible",
    tag: "Fibra Activa 100%",
    description: "Troncal de fibra óptica de alta capacidad con puertos disponibles.",
    avgInstallationHours: 24,
  },
  {
    id: "cordero-delicias",
    name: "Las Delicias & Alrededores",
    municipality: "Municipio Andrés Bello",
    status: "disponible",
    tag: "Fibra Activa 100%",
    description: "Red FTTH de última milla completamente operativa y monitoreada.",
    avgInstallationHours: 48,
  },
  {
    id: "cordero-torbes",
    name: "Urb. Torbes & La Pradera",
    municipality: "Municipio Andrés Bello",
    status: "disponible",
    tag: "Fibra Activa 100%",
    description: "Acceso a planes residenciales y de alta velocidad hasta 600 Mbps.",
    avgInstallationHours: 48,
  },
  {
    id: "cordero-ahumada",
    name: "Sector La Ahumada",
    municipality: "Municipio Andrés Bello",
    status: "disponible",
    tag: "Fibra Activa 100%",
    description: "Distribución óptica optimizada con enlace estable y continuo.",
    avgInstallationHours: 48,
  },
  {
    id: "cordero-sanrafael",
    name: "Sector San Rafael",
    municipality: "Municipio Andrés Bello",
    status: "disponible",
    tag: "Fibra Activa 100%",
    description: "Cajas NAP con disponibilidad para altas residenciales inmediatas.",
    avgInstallationHours: 48,
  },
  {
    id: "mesa-aura",
    name: "Mesa de Aura & Zonas Altas",
    municipality: "Municipio Andrés Bello",
    status: "en_expansion",
    tag: "En Despliegue Activo",
    description: "Tendido de fibra en progreso. Reserva tu puerto prioritario.",
    avgInstallationHours: 72,
  },
  {
    id: "tachira-empresas",
    name: "San Cristóbal & Conexiones Especiales",
    municipality: "Estado Táchira",
    status: "disponible",
    tag: "Enlaces Corporativos",
    description: "Enlaces punto a punto y fibra dedicada para empresas e instituciones.",
    avgInstallationHours: 72,
  },
];
