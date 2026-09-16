export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "contratacion" | "tecnico" | "pagos";
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "¿Cómo puedo contratar el servicio de Star Conectados?",
    answer:
      "Contratar es muy sencillo y rápido: puedes hacer clic en cualquiera de nuestros botones de WhatsApp o visitar nuestra oficina comercial en Cordero. Uno de nuestros asesores verificará la factibilidad técnica en tu dirección y agendará la instalación en un lapso habitual de 24 a 48 horas.",
    category: "contratacion",
  },
  {
    id: "faq-2",
    question: "¿Qué planes y velocidades tienen disponibles?",
    answer:
      "Ofrecemos planes residenciales y empresariales desde 150 Mbps hasta 800 Mbps con tecnología 100% fibra óptica FTTH (Fiber To The Home). Todos nuestros planes cuentan con velocidad simétrica real (misma velocidad de subida que de bajada) e internet sin límites de descarga.",
    category: "contratacion",
  },
  {
    id: "faq-3",
    question: "¿En qué zonas tienen cobertura en el Táchira?",
    answer:
      "Nuestra cobertura principal abarca el municipio Andrés Bello (Cordero: Casco Central, El Abejal, Las Delicias, Torbes, La Ahumada, San Rafael y sectores aledaños), extendiéndonos con proyectos activos hacia nuevas zonas del estado Táchira. Puedes consultar la disponibilidad exacta escribiéndonos tu punto de referencia.",
    category: "contratacion",
  },
  {
    id: "faq-4",
    question: "¿Cómo solicito soporte técnico o asistencia presencial?",
    answer:
      "Cuentas con atención técnica humana directa: a través de nuestra línea de WhatsApp 24/7, canal telefónico de emergencias de red o de manera presencial en nuestra Oficina Comercial de Cordero. No dependes de bots interminables ni esperas burocráticas.",
    category: "tecnico",
  },
  {
    id: "faq-5",
    question: "¿Cuáles son los métodos de pago aceptados?",
    answer:
      "Aceptamos múltiples métodos de pago para tu máxima comodidad: Pago Móvil, transferencias bancarias en bolívares (tasa BCV), Zelle, efectivo en divisas en oficina comercial, Binance Pay (USDT) y puntos de venta con tarjeta de débito/crédito.",
    category: "pagos",
  },
  {
    id: "faq-6",
    question: "¿Puedo cambiar de plan o aumentar mi velocidad más adelante?",
    answer:
      "¡Sí, por supuesto! Dado que la conexión llega por fibra óptica directa hasta tu hogar mediante un puerto Gigabit, el cambio de velocidad es inmediato a nivel de software. Puedes ascender a un plan superior en cualquier momento del mes sin costo de reinstalación ni cambio de cableado.",
    category: "tecnico",
  },
  {
    id: "faq-7",
    question: "¿Qué equipamiento se entrega durante la instalación?",
    answer:
      "Incluimos la acometida de fibra óptica blindada para exterior, roseta óptica interior y un módem ONT con Router Wi-Fi Doble Banda o Wi-Fi 6 Gigabit de alto alcance (según el plan seleccionado), garantizando máxima estabilidad y cobertura en todos los espacios de tu propiedad.",
    category: "tecnico",
  },
];
