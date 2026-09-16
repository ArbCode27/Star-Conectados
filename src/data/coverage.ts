export interface CoverageZone {
  id: string;
  name: string;
  region: string;
  status: "disponible" | "en_expansion" | "proximamente";
  tag: string;
  description: string;
  avgInstallationHours: number;
}

export const COVERAGE_ZONES: CoverageZone[] = [
  {
    id: "region-capital",
    name: "Gran Caracas & Distrito Capital",
    region: "Región Capital",
    status: "disponible",
    tag: "Fibra Activa 100%",
    description: "Anillo óptico metropolitano con nodos de ultra alta capacidad y baja latencia.",
    avgInstallationHours: 24,
  },
  {
    id: "region-central",
    name: "Valencia, Maracay & Eje Central",
    region: "Región Central",
    status: "disponible",
    tag: "Fibra Activa 100%",
    description: "Cobertura residencial y comercial en zonas urbanas e industriales estratégicas.",
    avgInstallationHours: 24,
  },
  {
    id: "region-andina",
    name: "San Cristóbal & Región Andina",
    region: "Región Andina",
    status: "disponible",
    tag: "Fibra Activa 100%",
    description: "Red FTTH de última milla con infraestructura troncal robusta y soporte directo.",
    avgInstallationHours: 24,
  },
  {
    id: "region-occidental",
    name: "Maracaibo, Barquisimeto & Cabimas",
    region: "Región Occidental",
    status: "disponible",
    tag: "Fibra Activa 100%",
    description: "Conexión simétrica de alta velocidad con puertos NAP disponibles para activación.",
    avgInstallationHours: 48,
  },
  {
    id: "region-oriente",
    name: "Lechería, Barcelona & Pto. La Cruz",
    region: "Región Oriental",
    status: "disponible",
    tag: "Fibra Activa 100%",
    description: "Despliegue óptico costero de alto rendimiento para hogares y comercios.",
    avgInstallationHours: 48,
  },
  {
    id: "region-guayana",
    name: "Puerto Ordaz & Ciudad Guayana",
    region: "Región Guayana",
    status: "disponible",
    tag: "Fibra Activa 100%",
    description: "Troncales de fibra dedicadas para sectores residenciales y comerciales.",
    avgInstallationHours: 48,
  },
  {
    id: "nuevas-ciudades",
    name: "Nuevas Ciudades & Municipios",
    region: "Expansión Nacional",
    status: "en_expansion",
    tag: "En Despliegue Activo",
    description: "Nuevos tendidos de fibra en desarrollo continuo. Consulta tu sector exacto.",
    avgInstallationHours: 72,
  },
  {
    id: "enlaces-corporativos",
    name: "Enlaces Dedicados Corporativos",
    region: "Nivel Nacional",
    status: "disponible",
    tag: "Enlaces Dedicados",
    description: "Troncales metro-ethernet punto a punto para sedes corporativas e industrias en todo el país.",
    avgInstallationHours: 48,
  },
];
