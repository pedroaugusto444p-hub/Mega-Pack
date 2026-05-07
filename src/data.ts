export interface Bonus {
  id: number;
  badge: string;
  title: string;
  description: string;
  originalPrice: string;
  imgUrl: string;
}

export interface ActivityBook {
  id: number;
  title: string;
  pages: string;
  pilar: string;
  description: string;
  details: string;
  coverColor: string;
  iconName: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  text: string;
  stars: number;
  imgUrl: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface WorksheetExample {
  id: number;
  title: string;
  type: string;
  imgUrl: string;
  colors: string[];
}

export const MAIN_BOOKS: ActivityBook[] = [
  {
    id: 1,
    title: "Manual 01: 101 Dinámicas de Modelado con Plastilina",
    pages: "101 páginas",
    pilar: "PILAR DE DENSIDAD TÁCTIL",
    description: "Utiliza la resistencia de materiales como la plastilina o arcilla para construir la fuerza necesaria en los dedos para sostener el lápiz con firmeza.",
    details: "Potencia su motricidad fina, creatividad y fortalece los músculos de sus dedos con actividades, abecedario, figuras geométricas y más.",
    coverColor: "from-blue-400 to-indigo-500",
    iconName: "Smile"
  },
  {
    id: 2,
    title: "80 Dibujos para pintar con hisopo",
    pages: "80 páginas",
    pilar: "PILAR DE PRECISIÓN DE PINZA",
    description: "Refina la coordinación entre el pulgar y el índice, eliminando la escritura temblorosa desde la raíz.",
    details: "Refuerza el agarre de pinza (dedos índice y pulgar) y los estimula sensorialmente mientras usan las témperas.",
    coverColor: "from-pink-400 to-rose-500",
    iconName: "Palette"
  },
  {
    id: 3,
    title: "150 Actividades de motricidad fina",
    pages: "150 páginas",
    pilar: "PILAR DE DESTREZA DINÁMICA",
    description: "Aumenta la resistencia muscular. Tu hijo podrá realizar tareas escolares completas sin quejarse de cansancio.",
    details: "Trazos, recortes, dactilopintura, enhebrar, plastilina y más para fortalecer los dedos y preparar sus manos para escribir sin cansarse.",
    coverColor: "from-teal-400 to-cyan-500",
    iconName: "Scissors"
  },
  {
    id: 4,
    title: "80 Dibujos para aprender a recortar",
    pages: "80 páginas",
    pilar: "PILAR DE COORDINACIÓN BILATERAL",
    description: "Alinea los hemisferios cerebrales para el uso de herramientas, desarrollando independencia y enfoque profundo.",
    details: "Fortalece progresivamente los dedos al empezar con cortes sencillos, mejorando la coordinación bilateral y la autonomía.",
    coverColor: "from-amber-400 to-orange-500",
    iconName: "Layers"
  }
];

export const FIVE_BONUSES: Bonus[] = [
  {
    id: 1,
    badge: "BONO 1",
    title: "250 Dibujos para pintar con los dedos",
    description: "La dactilopintura ayudará a tu pequeño a desarrollar su motricidad fina, potenciar la creatividad, mejorar la coordinación ojo-mano y estimularlo de forma sensorial al explorar ricas texturas.",
    originalPrice: "$17 USD",
    imgUrl: "https://i.ibb.co/XZxKGfqq/250-Dibujos-para-pintar-con-los-dedos.png"
  },
  {
    id: 2,
    badge: "BONO 2",
    title: "50 Dibujos para unir con puntos",
    description: "Ayuda a desarrollar concentración y paciencia, reforzar el conocimiento numérico y secuencial, además de estimular la resolución activa de problemas cotidianos.",
    originalPrice: "$17 USD",
    imgUrl: "https://i.ibb.co/mCM5p0XV/50-Dibujos-para-unir-con-puntos.png"
  },
  {
    id: 3,
    badge: "BONO 3",
    title: "200 Dibujos para colorear",
    description: "Para potenciar su imaginación y ayudarlo a respetar los límites visuales con marcos gruesos. Colorear le ayudará a perfeccionar el agarre del lápiz y concentrarse de forma natural.",
    originalPrice: "$17 USD",
    imgUrl: "https://i.ibb.co/nNZfgt21/200-Dibujos-para-colorear.png"
  },
  {
    id: 4,
    badge: "BONO 4",
    title: "350 Dibujos para recortar",
    description: "Tu pequeño fortalecerá los músculos de sus manos para sostener el lápiz, escribir, abotonarse y usar cubiertos con absoluta soltura, mejorando además su coordinación ojo-mano.",
    originalPrice: "$17 USD",
    imgUrl: "https://i.ibb.co/S4RpYsNr/350-Dibujos-para-recortar.png"
  },
  {
    id: 5,
    badge: "BONO 5",
    title: "150 Trazos para aprender letras y números",
    description: "Ejercicios para trazar el alfabeto y números que ayudarán a perfeccionar el agarre del lápiz, desarrollar la memoria e idealizar las bases sólidas para aprender matemáticas.",
    originalPrice: "$17 USD",
    imgUrl: "https://i.ibb.co/TC0sZDn/150-Trazos-para-aprender-letras-y-n-meros.png"
  }
];

export interface BenefitItem {
  level: string;
  title: string;
  desc: string;
}

export const THREE_BENEFITS: BenefitItem[] = [
  {
    level: "RESULTADO FÍSICO",
    title: "Agarre correcto del lápiz y control total de los movimientos",
    desc: "Fortalece los pequeños músculos de las manos en solo 21 días, eliminando por completo el dolor y cansancio al escribir."
  },
  {
    level: "BENEFICIO SOCIAL",
    title: "Tu hijo se sentirá orgulloso al mostrar sus dibujos y letras legibles",
    desc: "Podrá lucir con total confianza sus progresos ante maestros y compañeros de aula, eliminando de una vez la timidez escolar."
  },
  {
    level: "IMPACTO IDENTITARIO",
    title: "Transforma la frustración en un pequeño estudiante confiado",
    desc: "Cambia a un niño frustrado con el papel en un estudiante autónomo, concentrado y plenamente listo para los desafíos de la alfabetización."
  }
];

export const WORKSHEET_EXAMPLES: WorksheetExample[] = [
  {
    id: 1,
    title: "Manual 1: Modelado con Plastilina",
    type: "DENSIDAD TÁCTIL",
    imgUrl: "https://i.ibb.co/7JW1Pn1z/produto-01.jpg",
    colors: ["bg-yellow-400", "text-neutral-900 border-yellow-500"]
  },
  {
    id: 2,
    title: "Manual 2: Pintura con Hisopos",
    type: "PRECISIÓN DE PINZA",
    imgUrl: "https://i.ibb.co/JFbpK9cf/produto-02.jpg",
    colors: ["bg-purple-500", "text-white border-purple-600"]
  },
  {
    id: 3,
    title: "Manual 3: Circuitos de Destreza",
    type: "DESTREZA DINÁMICA",
    imgUrl: "https://i.ibb.co/hRwJDGpS/produto-03.jpg",
    colors: ["bg-cyan-500", "text-white border-cyan-600"]
  },
  {
    id: 4,
    title: "Manual 4: Desafío de Recorte",
    type: "COORDINACIÓN BILATERAL",
    imgUrl: "https://i.ibb.co/XZdPHJ5Q/produto-04.jpg",
    colors: ["bg-red-500", "text-white border-red-600"]
  },
  {
    id: 5,
    title: "Bono: Foco Anti-Frustración",
    type: "LÍMITES COMPRENSIVOS",
    imgUrl: "https://i.ibb.co/XrW4C6kd/produto-05.jpg",
    colors: ["bg-blue-400", "text-white border-blue-500"]
  }
];

export const REVIEWS: Testimonial[] = [
  {
    id: 1,
    name: "Carmen L.",
    role: "Madre de Santiago (5 años)",
    quote: "La mejor inversión para su pre-escolar",
    text: "Mi hijo tenía mucha dificultad para agarrar el lápiz de forma correcta y se cansaba rápido. Con estas actividades, su coordinación mejoró muchísimo en pocas semanas. ¡Hoy escribe su nombre con total confianza!",
    stars: 5,
    imgUrl: "https://i.ibb.co/Cps9BQ9s/testimonio-1.jpg"
  },
  {
    id: 2,
    name: "Dra. Elena Martínez",
    role: "Psicopedagoga Infantil",
    quote: "Secuencia pedagógica excelente",
    text: "Como profesional, recomiendo este protocolo a los padres que buscan fortalecer la base motriz antes de la alfabetización. Es lúdico, progresivo y respeta los tiempos de desarrollo de cada niño.",
    stars: 5,
    imgUrl: "https://i.ibb.co/TM9P1qQj/testimonio-2.jpg"
  },
  {
    id: 3,
    name: "Valeria G.",
    role: "Madre de Lucía (4 años)",
    quote: "¡Le encanta su 'momento de juego'!",
    text: "Lucía pedía el celular todo el tiempo. Desde que imprimí el Mega Pack, ella misma me pide sus hojas para pintar con hisopos o modelar plastilina. Es increíble verla tan concentrada y feliz.",
    stars: 5,
    imgUrl: "https://i.ibb.co/206XZvrT/testimonio-3.jpg"
  },
  {
    id: 4,
    name: "Roberto S.",
    role: "Padre de familia",
    quote: "Evolución visible y rápida",
    text: "Al principio dudé si funcionaría, pero el cambio en los trazos de mi hijo ha sido radical. Pasó de garabatos débiles a formas bien definidas y controladas. Totalmente recomendado.",
    stars: 5,
    imgUrl: "https://i.ibb.co/zhY6RQn2/testimonio-4.jpg"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 1,
    question: "¿Cómo recibo el material?",
    answer: "Envío inmediato a tu correo electrónico en formato PDF de alta resolución listo para descargar e imprimir en el momento que tú prefieras."
  },
  {
    id: 2,
    question: "¿El material es físico o un libro impreso?",
    answer: "El Protocolo Neuro-Manos 2.0 es un producto 100% digital. Recibirás todo el material inmediatamente en tu correo electrónico en formato PDF de alta calidad, listo para que imprimas solo las hojas que tu hijo va a utilizar. Esto nos permite ofrecerte +1.250 actividades a un precio tan bajo y que tengas el material para siempre, sin esperar semanas por el correo."
  },
  {
    id: 3,
    question: "¿Necesito materiales caros?",
    answer: "¡No! El protocolo está diseñado para ser accesible. Solo necesitarás artículos básicos que seguro ya tienes en casa: papel, tijeras escolares, plastilina (arcilla) e hisopos (cotonetes)."
  },
  {
    id: 4,
    question: "Trabajo todo el día, ¿requiere mucho tiempo por mi parte?",
    answer: "¡En absoluto! El protocolo está diseñado como un \"Ritual Diario de 15 a 20 Minutos\". No necesitas ser maestra. Las instrucciones son súper sencillas: solo imprimes la actividad del día, le das los materiales básicos a tu hijo y lo acompañas mientras fortalece sus manitas de forma divertida."
  },
  {
    id: 5,
    question: "Mi hijo tiene 7 años pero aún tiene mala letra. ¿Le sirve este protocolo?",
    answer: "¡Sí! Aunque está diseñado de forma ideal para la etapa preescolar (3 a 6 años), los pilares de \"Densidad Táctil\" y \"Precisión de Pinza\" son excelentes como terapia correctiva para niños mayores (de 7 y 8 años) que sufren de fatiga al escribir, aprietan mucho el lápiz o tienen trazos irregulares."
  },
  {
    id: 6,
    question: "¿Esto significa que mi hijo pasará más tiempo frente a una pantalla?",
    answer: "¡Todo lo contrario! La entrega del material es digital (para ti, como padre), pero la ejecución de tu hijo es 100% práctica, táctil y en papel. Nuestro objetivo principal es alejar a los niños del exceso de pantallas y reconectarlos con el aprendizaje real usando sus propias manos."
  },
  {
    id: 7,
    question: "¿Puedo pagar en la moneda de mi país? ¿Es un pago seguro?",
    answer: "¡Sí, totalmente! Al hacer clic en el botón de compra, nuestra plataforma de pago (que cuenta con máxima seguridad bancaria encriptada) convertirá automáticamente los $7.97 USD a tu moneda local. Podrás ver el precio exacto en tu moneda antes de confirmar, y puedes pagar con tarjeta de crédito, débito o métodos locales según tu país."
  },
  {
    id: 8,
    question: "¿Por cuánto tiempo tendré acceso a los manuales y bonos?",
    answer: "Tu acceso es vitalicio (para siempre). Pagas una sola vez, sin mensualidades ocultas, y el material es tuyo. Podrás acceder a la plataforma, descargar los archivos cuantas veces quieras e incluso usarlos en el futuro con otros hijos o familiares."
  },
  {
    id: 9,
    question: "¿Y si a mi hijo no le gusta?",
    answer: "Tienes 7 días de garantía incondicional. Si notas que el material no se adapta a tu pequeño, simplemente nos envías un correo y te devolvemos el 100% de tu dinero sin hacer preguntas."
  }
];
export const ACHIEVEMENTS: string[] = [
  "Agarre correcto del lápiz.",
  "Mayor control y precisión en sus movimientos.",
  "Preparación para la escritura y el dibujo.",
  "Mejor coordinación entre manos y ojos.",
  "Desarrollo de la fuerza en dedos y muñecas.",
  "Mayor independencia en tareas escolares y diarias."
];
