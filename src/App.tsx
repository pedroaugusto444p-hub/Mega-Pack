import React, { useState, useEffect } from "react";
import { 
  Check, 
  CheckCircle2, 
  ArrowRight, 
  Lock, 
  ShieldCheck, 
  Mail, 
  BookOpen, 
  Sparkles, 
  Download, 
  Award, 
  Smile, 
  Scissors, 
  Palette, 
  Layers, 
  ChevronDown, 
  ChevronUp, 
  Star, 
  Play, 
  Pause, 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  Printer, 
  Heart, 
  MessageSquare, 
  User, 
  Share2 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { 
  MAIN_BOOKS, 
  FIVE_BONUSES, 
  ACHIEVEMENTS, 
  THREE_BENEFITS,
  WORKSHEET_EXAMPLES, 
  REVIEWS, 
  FAQS 
} from "./data";

export default function App() {
  // Video simulation state
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoProgress, setVideoProgress] = useState(35);
  
  // Accordion active state for FAQS
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  
  // Slide preview for Worksheets
  const [activeSlide, setActiveSlide] = useState(0);

  // Testimonials carousel state
  const [activeReview, setActiveReview] = useState(0);

  // Purchase notification state
  const [showNotification, setShowNotification] = useState(false);
  const [notificationData, setNotificationData] = useState({ name: "", city: "" });

  const NAMES = ["Maria", "Elena", "Sofía", "Lucía", "Carmen", "Daniela", "Ana", "Valeria", "Isabel", "Marta", "Claudia"];
  const CITIES = ["Ciudad de México", "Madrid", "Bogotá", "Lima", "Santiago", "Medellín", "Valencia", "Puebla", "Guayaquil", "Guadalajara"];

  useEffect(() => {
    const notifyInterval = setInterval(() => {
      const randomName = NAMES[Math.floor(Math.random() * NAMES.length)];
      const randomCity = CITIES[Math.floor(Math.random() * CITIES.length)];
      setNotificationData({ name: randomName, city: randomCity });
      setShowNotification(true);
      
      setTimeout(() => setShowNotification(false), 5000);
    }, 12000);

    return () => clearInterval(notifyInterval);
  }, []);

  // Countdown timer simulation for urgency
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 44,
    seconds: 19
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 2, minutes: 59, seconds: 59 }; // Reset to keep demo alive
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const reviewInterval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(reviewInterval);
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % WORKSHEET_EXAMPLES.length);
    }, 4000);
    return () => clearInterval(slideInterval);
  }, []);

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % WORKSHEET_EXAMPLES.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + WORKSHEET_EXAMPLES.length) % WORKSHEET_EXAMPLES.length);
  };

  return (
    <div id="sales-page" className="min-h-screen bg-[#FFFDF9] text-[#2C2520] font-sans antialiased overflow-x-hidden selection:bg-blue-100 selection:text-blue-900">
      
      {/* 1. TOP MARQUEE ALERT BANNER */}
      <div id="top-alert-banner" className="bg-red-600 text-white text-xs md:text-sm font-bold uppercase py-2.5 overflow-hidden sticky top-0 z-50 shadow-md">
        <div className="absolute inset-0 bg-red-700/20 backdrop-blur-xs"></div>
        <div className="relative flex whitespace-nowrap animate-marquee items-center">
          {[...Array(6)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="mx-6 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                <span className="text-white">MEGA PACK PROTOCOLO NEURO-MANOS 2.0</span>
                <span className="text-white/60 mx-2">—</span>
                <span className="text-white line-through decoration-red-600 decoration-2">US$ 85</span>
                <span className="text-white font-black ml-1">$7.97 USD</span>
                <span className="bg-white text-red-600 px-2 py-0.5 rounded-md text-[10px] font-black ml-2">90% OFF</span>
              </span>
              <span className="text-white/30 mx-4">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* 2. MAIN HEADER & HERO SECTION */}
      <section id="hero-section" className="relative py-12 md:py-20 px-4 max-w-7xl mx-auto text-center">
        {/* Age Indicator */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-800 font-semibold text-xs md:text-sm uppercase tracking-wide mb-6 border border-blue-200 shadow-sm animate-pulse-slow">
          <Smile className="w-4 h-4 text-blue-600 fill-blue-100" /> Para niños y niñas de 3 a 6 años
        </div>

        {/* Main Pitch */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto text-blue-900">
          Activa la <span className="underline decoration-wavy decoration-3 underline-offset-4 decoration-orange-500">Precisión Escritora</span> de tu hijo con el <span className="text-blue-700">Protocolo Neuro-Manos 2.0</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base md:text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
          El Ritual Diario de 15 Minutos que Fortalece el <strong className="text-orange-600">"Agarre de Pinça"</strong> y la Coordinación Motora en Tiempo Récord.
          <span className="block mt-4 text-stone-550 text-xs md:text-sm lg:text-base font-normal max-w-2xl mx-auto">
            Un sistema de Estimulación Neuro-Motora con <strong className="bg-orange-50 px-1.5 py-0.5 rounded border border-orange-200 text-orange-700 font-extrabold">+1.250 actividades</strong> estratégicamente ordenadas para preparar las manos de tu pequeño antes de su primer día de clases.
          </span>
          <span className="block mt-4 text-blue-600 font-extrabold text-sm uppercase tracking-wider animate-bounce">👇 Mira el material por dentro 👇</span>
        </p>

        {/* 3. VIDEO / PREVIEW MOCKUP */}
        <div id="video-preview" className="relative mt-8 max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-stone-800 bg-stone-900 group">
          
          {/* Animated Worksheet Showcase inside the "Video Player" */}
          <div className="aspect-video relative flex items-center justify-center bg-stone-950 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            {!isPlaying ? (
              <div className="relative z-10 p-6 text-center select-none">
                {/* Book design mockup preview */}
                <div className="relative w-40 h-52 mx-auto bg-gradient-to-tr from-emerald-500 to-green-300 rounded-xl shadow-lg border-2 border-white flex flex-col justify-between p-3 rotate-[-3deg] transition transform hover:rotate-0 hover:scale-105 duration-350">
                  <div className="absolute -top-3 -right-3 bg-red-500 text-white text-[10px] uppercase font-bold py-1 px-2.5 rounded-full shadow-md transform rotate-12">
                    RÉCORD EN VENTAS
                  </div>
                  <div className="text-white text-xs font-bold leading-tight tracking-wider uppercase text-left">
                    Mega Pack<br />
                    <span className="text-[10px] text-yellow-200 normal-case font-medium">Manos Ágiles</span>
                  </div>
                  {/* Decorative kids icon */}
                  <div className="my-auto text-4xl">👶✍️</div>
                  <div className="text-white/90 text-[9px] font-sans text-center bg-white/20 py-1 rounded">
                    +1.250 Actividades
                  </div>
                </div>

                <p className="text-white font-medium text-sm mt-6 mb-4 flex items-center justify-center gap-1 text-center bg-stone-800/80 px-4 py-1.5 rounded-full backdrop-blur-xs max-w-xs mx-auto">
                  <Play className="w-4 h-4 text-emerald-400 fill-emerald-400" /> Clic para ver la presentación
                </p>
                
                {/* Big pulse play button */}
                <button 
                  onClick={() => setIsPlaying(true)}
                  className="w-16 h-16 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95 duration-200 mx-auto animate-bounce"
                  aria-label="Reproducir presentación"
                >
                  <Play className="w-8 h-8 fill-white ml-1" />
                </button>
              </div>
            ) : (
              <div className="absolute inset-0 z-10 flex flex-col justify-between p-4 bg-gradient-to-b from-stone-950/20 to-stone-950/90 text-white">
                <div className="flex justify-between items-center bg-stone-900/50 p-2 rounded backdrop-blur-xs">
                  <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
                    DEMOSTRACIÓN DEL MATERIAL (+1.250 ACTIVIDADES)
                  </span>
                  <button 
                    onClick={() => setIsPlaying(false)}
                    className="text-xs bg-stone-800 hover:bg-stone-700 px-2 py-1 rounded"
                  >
                    Pausar Demo
                  </button>
                </div>

                {/* Animated content representing the worksheets inside */}
                <div className="my-auto flex flex-col items-center justify-center text-center p-4">
                  <div className="w-44 h-44 bg-white text-stone-900 rounded-lg p-3 shadow-2xl border-4 border-emerald-400 flex flex-col items-center justify-between relative transform rotate-1 animate-float">
                    <span className="absolute top-1.5 left-1.5 text-[8px] bg-red-100 text-red-700 font-bold px-1 rounded">ACTIVIDAD #27</span>
                    <span className="text-xs font-bold text-stone-500 mt-2">DIBUJO CON HISOPO</span>
                    <div className="my-auto text-5xl">🍒</div>
                    <span className="text-[9px] text-stone-405 text-center italic leading-none">Presiona el hisopo con témpera en los círculos designados</span>
                  </div>
                  <p className="text-xs text-white/80 mt-4 max-w-sm">Demostración en video del material listo para imprimir.</p>
                </div>

                <div className="w-full bg-stone-800 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-emerald-500 h-1.5 rounded-full transition-all duration-300" style={{ width: `${videoProgress}%` }}></div>
                </div>
              </div>
            )}

            {/* Video overlay decoration */}
            <div className="absolute bottom-3 left-4 text-[10px] text-stone-400/90 hidden sm:block bg-stone-950/60 p-1.5 rounded">
              Duración: 1:32 Minutos • Formato PDF
            </div>
          </div>
        </div>

        {/* 4. GREEN CTA BUTTON WITH VALUE PROPOSITION */}
        <div id="cta-top" className="mt-8 max-w-md mx-auto text-center px-4">
          <a 
            href="#pricing-section" 
            className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm md:text-base transition duration-300 shadow-lg hover:shadow-blue-500/30 active:scale-95 text-center animate-pulse-slow whitespace-nowrap"
          >
            <span>Activar Protocolo Neuro-Manos</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="mt-3 text-xs text-stone-500 font-medium flex items-center justify-center gap-1">
            <Lock className="w-3.5 h-3.5 text-stone-400" /> Acceso inmediato • Pago único • Vitalicio para siempre
          </p>
        </div>
      </section>

      {/* 5. PROTOCOLO DETAILED VISUAL BLUE/YELLOW BANNER */}
      <section id="banner-highlights" className="bg-gradient-to-b from-blue-500 to-indigo-600 text-white py-8 px-4 shadow-inner relative overflow-hidden">
        {/* Playful elements built purely in CSS */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 relative z-10">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block bg-yellow-400 text-stone-950 font-black text-xs md:text-sm uppercase px-5 py-1.5 rounded-full tracking-wider shadow-md mb-4 transform rotate-[-1deg]">
              ★ +1.250 ACTIVIDADES COMPROBADAS ★
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase drop-shadow-md">
              PROTOCOLO <span className="text-yellow-300 italic block sm:inline">NEURO-MANOS 2.0</span>
            </h2>
            <p className="text-blue-105 max-w-2xl mx-auto md:mx-0 text-sm md:text-base mt-2">
              A diferencia de simples PDFs para colorear, nuestro Protocolo se enfoca en los 4 Pilares de la Neuro-Escritura:
            </p>
          </div>

          <div className="flex-1 max-w-sm md:max-w-md">
            <img 
              src="https://i.ibb.co/ynVXjRCX/mega-pack-hero-1.png" 
              alt="Producto Protocolo Neuro-Manos" 
              className="w-full drop-shadow-2xl animate-float"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-10 relative z-10">
          {/* Grid of the 4 Main Pillars with colorful backgrounds */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: "01", pilar: "DENSIDAD TÁCTIL", txt: "Libro de Modelado: Utiliza la resistencia de materiales como plastilina o arcilla para fortalecer los dedos.", col: "bg-blue-600/60 border-blue-400" },
              { num: "02", pilar: "PRECISIÓN DE PINZA", txt: "Pintura con Hisopo: Refina la coordinación entre pulgar e índice, eliminando la escritura temblorosa.", col: "bg-pink-600/60 border-pink-400" },
              { num: "03", pilar: "DESTREZA DINÁMICA", txt: "Circuitos Motores: Aumenta la resistencia muscular para que tu hijo rinda sin cansancio escolar.", col: "bg-teal-600/60 border-teal-400" },
              { num: "04", pilar: "COORDINACIÓN BILATERAL", txt: "Desafíos de Recorte: Alinea los hemisferios cerebrales, desarrollando independencia y foco.", col: "bg-amber-600/60 border-amber-400" }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`p-5 rounded-2xl border-2 ${item.col} backdrop-blur-xs flex flex-col justify-between hover:scale-105 transition-transform duration-200 shadow-lg text-left`}
              >
                <div>
                  <div className="text-2xl font-black text-yellow-300 drop-shadow-md mb-1">PILAR {item.num}</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-white mb-2">{item.pilar}</div>
                </div>
                <div className="text-xs text-stone-100 leading-relaxed font-sans">{item.txt}</div>
              </div>
            ))}
          </div>

          {/* Sub-Badges summary list */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["250 Pintura de Dedos", "50 Unir Puntos", "200 Dibujos de Enfoque", "350 Prácticas de Recorte", "150 Trazos de Transición"].map((badge, i) => (
              <span key={i} className="bg-white/10 text-white text-[11px] md:text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">
                ⚡ +{badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PROBLEM STATEMENT & EXPLANATION */}
      <section id="problem-statement" className="py-16 px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-stone-200/80">
          <h3 className="text-xl md:text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
            <span className="text-3xl">⚠️</span> ¿Por qué 9 de cada 10 niños sufren con el "Cansancio del Lápiz" en la escuela?
          </h3>
          
          <div className="space-y-4 text-stone-600 leading-relaxed text-sm md:text-base">
            <p>
              Muchos padres creen que la mala letra o la falta de ganas de dibujar es "pereza" o falta de enfoque. Pero la ciencia del neurodesarrollo revela un culpable silencioso: la <span className="font-semibold text-red-650 bg-red-50 px-1 rounded">atrofia de la motricidad fina</span> causada por el exceso de pantallas y la falta de estímulos táctiles reales.
            </p>
            <p>
              Sin manos fortalecidas, tu hijo sentirá dolor al escribir, frustración al no poder seguir el ritmo de sus compañeros y, eventualmente, rechazo a los estudios. Sin una intervención temprana, esto es lo que sucede:
            </p>
            
            <div className="space-y-3.5 my-6">
              <div className="flex items-start gap-3 bg-red-50/40 p-3.5 rounded-xl border border-red-100/50">
                <span className="text-lg shrink-0 mt-0.5">❌</span>
                <div>
                  <span className="font-bold text-stone-900">Dolor y Fatiga:</span> Presiona los dedos al escribir y se cansan tras escribir apenas dos líneas porque sus músculos no tienen resistencia.
                </div>
              </div>
              
              <div className="flex items-start gap-3 bg-red-50/40 p-3.5 rounded-xl border border-red-100/50">
                <span className="text-lg shrink-0 mt-0.5">❌</span>
                <div>
                  <span className="font-bold text-stone-900">Frustración Social:</span> Empiezan a compararse con sus compañeros e inconscientemente se sienten "atrás" ou menos capaces.
                </div>
              </div>
              
              <div className="flex items-start gap-3 bg-red-50/40 p-3.5 rounded-xl border border-red-100/50">
                <span className="text-lg shrink-0 mt-0.5">❌</span>
                <div>
                  <span className="font-bold text-stone-900">Falta de Control:</span> Aprietan el lápiz con demasiada fuerza ou rompen la hoja por no dominar la presión.
                </div>
              </div>
              
              <div className="flex items-start gap-3 bg-red-50/40 p-3.5 rounded-xl border border-red-100/50">
                <span className="text-lg shrink-0 mt-0.5">❌</span>
                <div>
                  <span className="font-bold text-stone-900">Rechazo Escolar:</span> Lo que debería ser divertido se convierte en una tortura, creando un bloqueo emocional con el aprendizaje.
                </div>
              </div>
            </div>

            <p className="border-l-4 border-emerald-500 pl-4 py-1.5 bg-emerald-50/50 rounded-r text-stone-805 font-medium">
              El <strong className="text-emerald-750">Protocolo Neuro-Manos 2.0</strong> ha sido diseñado específicamente para revertir este cuadro, transformando la diversión en un entrenamiento de alta performance para los pequeños músculos de las manos.
            </p>
          </div>
        </div>
      </section>

      {/* 7. "¿Qué logrará tu hijo?" Section */}
      <section id="achievements" className="py-16 bg-neutral-100 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900">¿Qué logrará tu hijo?</h2>
            <p className="text-stone-500 text-sm md:text-base mt-2">Nuestros beneficios estructurados en 3 niveles de transformación profunda:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {THREE_BENEFITS.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 md:p-8 rounded-3xl shadow-md border border-stone-150 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-black px-3.5 py-1.5 rounded-full mb-4 uppercase tracking-wider">
                    {item.level}
                  </span>
                  <h4 className="text-lg md:text-xl font-bold text-stone-900 mb-3 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-1.5 text-emerald-600 font-extrabold text-xs uppercase tracking-wider">
                  <Check className="w-4 h-4 stroke-[3px]" /> Evolución Garantizada
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. "¿Qué incluye el Protocolo?" MAIN BOOKS DETAIL */}
      <section id="books-included" className="py-20 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900">
            ¿Qué incluye el <span className="text-emerald-600 font-black">Protocolo Neuro-Manos 2.0</span>?
          </h2>
          <p className="text-stone-500 text-sm md:text-base mt-2">
            4 Manuales Principales completos, cada uno cubriendo una área de estimulación psicomotora exclusiva.
          </p>
        </div>

        <div className="space-y-16">
          {MAIN_BOOKS.map((book, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={book.id}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}
              >
                {/* Book Cover Image */}
                <div className="w-full sm:w-72 shrink-0 relative">
                  <div className="aspect-[3/4] rounded-2.5xl overflow-hidden shadow-2xl border-4 border-stone-800 transform hover:scale-110 -rotate-2 hover:rotate-0 transition-all duration-500 bg-white p-6 flex items-center justify-center relative z-10">
                    <img 
                      src={[
                        "https://i.ibb.co/qLRJmSfW/34-1.png",
                        "https://i.ibb.co/sp7b8ysk/35-1.png",
                        "https://i.ibb.co/5xM4rBN5/37-1.png",
                        "https://i.ibb.co/1GDd5CZr/36-1.png"
                      ][index]} 
                      alt={book.title} 
                      className="max-w-full max-h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  {/* Visual shadow glow */}
                  <div className="absolute -inset-1 rounded-2.5xl bg-stone-900/5 blur-lg -z-10"></div>
                </div>

                {/* Text Explanation inside clean cards */}
                <div className="flex-1 text-left">
                  <div className="inline-flex items-center gap-1.5 text-xs text-emerald-600 font-extrabold uppercase tracking-widest mb-3">
                    <BookOpen className="w-4 h-4" /> LIBRO DIGITAL #{book.id} • {book.pages}
                  </div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-stone-900 mb-4">{book.title}</h3>
                  <p className="text-stone-700 leading-relaxed text-sm md:text-base mb-4 font-medium">
                    {book.description}
                  </p>
                  <p className="text-stone-500 text-xs md:text-sm leading-relaxed border-l-2 border-stone-300 pl-4 py-0.5">
                    {book.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. "GANHE 5 BONOS GRATIS" BLOCK (Vibrant dark design for maximum visual appeal) */}
      <section id="bonuses-section" className="bg-[#241E1A] text-white py-16 px-4 rounded-t-3xl shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white font-black text-xs uppercase px-4 py-1 rounded-full mb-4 shadow-sm animate-pulse">
            🚨 ATENCIÓN: COMPRA HOY
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight uppercase">
            ¡Recibe <span className="text-yellow-400 bg-yellow-400/10 px-2 rounded">5 Bonos exclusivos</span> Gratis!
          </h2>
          <p className="text-stone-400 text-xs md:text-sm mt-3 max-w-xl mx-auto leading-relaxed">
            Asegurando tu cupo hoy, recibes el <strong className="text-white">"Kit de Aceleración Cognitiva"</strong> (Ahorra el valor de meses de terapia ocupacional privada):
          </p>
          <div className="text-yellow-400 text-xs uppercase font-extrabold tracking-widest mt-4 bg-white/5 inline-block px-4 py-2 rounded-lg border border-white/10">
            Valor de mercado de los bonos: <span className="line-through text-white decoration-red-600 decoration-2">US$ 85</span> → <span className="text-emerald-400 font-black">HOY ES 100% GRATIS</span>
          </div>

          {/* Cards for each Bonus with highlighted badge */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {FIVE_BONUSES.map((bonus) => (
              <div 
                key={bonus.id} 
                className="bg-white rounded-2xl border border-stone-100 text-left flex flex-col hover:border-yellow-400/40 hover:scale-[1.02] transition-all duration-300 shadow-xl overflow-hidden group"
              >
                {/* Image area with padding to 'afastar' the image */}
                <div className="aspect-square bg-stone-50 p-16 flex items-center justify-center overflow-hidden relative">
                  <div className="absolute inset-0 bg-stone-100/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <img 
                    src={bonus.imgUrl} 
                    alt={bonus.title} 
                    className="max-w-full max-h-full object-contain drop-shadow-2xl relative z-10 transition-transform duration-500 scale-105 group-hover:scale-125"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="inline-block bg-red-100 text-red-600 font-extrabold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full mb-4 shadow-sm">
                      {bonus.badge}
                    </span>
                    <h4 className="text-lg md:text-xl font-bold text-stone-900 mb-3 leading-tight">{bonus.title}</h4>
                    <p className="text-stone-500 text-sm leading-relaxed mb-6">{bonus.description}</p>
                  </div>
                  
                  <div className="border-t border-stone-100 pt-5 mt-auto flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider mb-0.5">Precio Regular</span>
                      <span className="text-stone-900 font-bold relative inline-block text-sm">
                        {bonus.originalPrice}
                        <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-red-600 -rotate-3 rounded-full opacity-100"></span>
                      </span>
                    </div>
                    <span className="text-emerald-700 font-black uppercase tracking-tighter text-sm flex items-center gap-1.5 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">
                      ⭐ HOY GRATIS
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. "El paquete completo incluye +1.250 actividades" */}
      <section id="mega-complete-include" className="py-20 bg-emerald-50/50 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block bg-emerald-100 text-emerald-800 font-bold text-xs uppercase px-4 py-1 rounded-full mb-3">
            EL PAQUETE DEFINITIVO COMPLETO
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-stone-900">
            El Paquete Completo incluye <span className="text-emerald-600 font-black">+1.250 Actividades</span>
          </h2>
          <p className="text-stone-500 text-sm md:text-base mt-2 max-w-lg mx-auto">
            Sin sorpresas. Una sola compra entrega los 4 manuales principales + los 5 bonos adicionales de forma vitalicia inmediata.
          </p>

          {/* New Image for the Mega Pack Includes section */}
          <div className="mt-12 max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
            <img 
              src="https://i.ibb.co/84d5NT4j/mega-pack-incluye.png" 
              alt="Contenido Completo del Pack" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* 11. "¿Cómo lo recibirás?" Section */}
      <section id="how-it-works" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-black text-stone-900 uppercase tracking-tight">¿Cómo lo recibirás?</h2>
          <p className="text-stone-500 text-sm mt-1 mb-12">Simple, práctico y sin costos de envío postal.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center bg-stone-50 p-6 md:p-8 rounded-3xl border border-stone-200">
            {[
              {
                step: "1",
                title: "Recíbelo en tu e-mail",
                desc: "Descarga inmediata y segura en formato PDF listo para imprimir.",
                icon: <Mail className="w-8 h-8 text-emerald-600" />
              },
              {
                step: "2",
                title: "Imprime en casa",
                desc: "Todas las páginas que necesites y las veces que quieras en la comodidad de tu hogar.",
                icon: <Printer className="w-8 h-8 text-emerald-600" />
              },
              {
                step: "3",
                title: "Realicen las actividades",
                desc: "Crea momentos mágicos y de diversión saludable con tu pequeño mientras aprende de verdad.",
                icon: <Smile className="w-8 h-8 text-emerald-600" />
              }
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 font-black text-xl flex items-center justify-center relative mb-4">
                  {step.icon}
                  <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white rounded-full w-6 h-6 text-xs flex items-center justify-center border-2 border-white">
                    {step.step}
                  </span>
                </div>
                <h4 className="font-extrabold text-stone-900 text-md md:text-lg mb-2 leading-tight">{step.title}</h4>
                <p className="text-stone-500 text-xs md:text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. WORKSHEET PREVIEWS / SLIDER DESIGN */}
      <section id="worksheet-previews" className="py-16 bg-[#FFFDF9] border-t border-stone-100 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded">EJEMPLOS PRÁCTICOS</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-2 mb-2">Mira algunos ejemplos reales</h2>
          <p className="text-stone-500 text-xs md:text-sm mb-10 max-w-md mx-auto">Descubre la calidad y riqueza didáctica de nuestras actividades preparadas con mucho cariño:</p>

          {/* Clean preview card with controllers */}
          <div className="relative max-w-sm sm:max-w-md mx-auto mt-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                className="bg-white rounded-[40px] p-4 shadow-2xl border border-stone-100 flex flex-col items-center select-none overflow-hidden"
              >
                {/* Book Header Label */}
                <div className={`w-full py-3 rounded-[30px] mb-4 text-center font-black text-xs uppercase tracking-widest ${WORKSHEET_EXAMPLES[activeSlide].colors[0]} ${WORKSHEET_EXAMPLES[activeSlide].colors[1]}`}>
                  {WORKSHEET_EXAMPLES[activeSlide].type}
                </div>

                {/* Worksheet Image Frame */}
                <div className="w-full aspect-[3/4] rounded-[25px] bg-stone-50 border-2 border-dashed border-stone-200 overflow-hidden relative group">
                  <img 
                    src={WORKSHEET_EXAMPLES[activeSlide].imgUrl} 
                    alt={WORKSHEET_EXAMPLES[activeSlide].title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Removed overlay copy to show full image */}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider manual arrows - repositioned for aesthetics */}
            <div className="absolute top-1/2 -left-6 md:-left-12 -translate-y-1/2">
              <button 
                onClick={handlePrevSlide}
                className="w-12 h-12 rounded-2xl bg-white hover:bg-stone-50 text-stone-900 flex items-center justify-center shadow-xl border border-stone-100 hover:scale-105 active:scale-95 duration-200"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 stroke-[3px]" />
              </button>
            </div>
            <div className="absolute top-1/2 -right-6 md:-right-12 -translate-y-1/2">
              <button 
                onClick={handleNextSlide}
                className="w-12 h-12 rounded-2xl bg-white hover:bg-stone-50 text-stone-900 flex items-center justify-center shadow-xl border border-stone-100 hover:scale-105 active:scale-95 duration-200"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 stroke-[3px]" />
              </button>
            </div>

            {/* Pagination Line indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {WORKSHEET_EXAMPLES.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveSlide(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${activeSlide === i ? "w-12 bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.4)]" : "w-3 bg-stone-200"}`}
                  aria-label={`Go to slide ${i+1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 13. MOTHER’S REVIEWS / SOCIAL PROOF - AUTO CAROUSEL */}
      <section id="mothers-reviews" className="py-20 bg-neutral-50 px-4 border-t border-stone-200 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-widest mb-4">
              <Heart className="w-3.5 h-3.5 fill-emerald-600" /> TESTIMONIOS REALES
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-stone-900 tracking-tight leading-tight">
              ¿Qué dicen las <span className="text-blue-600">madres y profesionales</span>?
            </h2>
            <p className="text-stone-500 text-sm md:text-base mt-4 max-w-2xl mx-auto">Miles de familias transformaron la hora del estudio y fortalecieron el desarrollo de sus hijos con el PROTOCOLO.</p>
          </div>

          <div className="relative">
            <div className="relative min-h-[450px] md:min-h-[400px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeReview}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full"
                >
                  <div className="bg-white rounded-[40px] shadow-2xl border border-stone-100 flex flex-col items-center relative overflow-hidden group">
                    {/* Only the image (WhatsApp style screenshot) */}
                    <div className="w-full relative">
                      <img 
                        src={REVIEWS[activeReview].imgUrl} 
                        alt={REVIEWS[activeReview].name}
                        className="w-full h-auto object-cover"
                        referrerPolicy="no-referrer"
                      />
                      {/* Decorative floaty elements */}
                      <div className="absolute -bottom-4 -right-4 bg-emerald-500 text-white p-3 rounded-2xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                        <MessageSquare className="w-6 h-6 fill-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination dots for carousel */}
            <div className="flex justify-center gap-3 mt-10">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveReview(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${activeReview === i ? "w-10 bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.4)]" : "w-2.5 bg-stone-200"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 14. ABOUT THE AUTHOR / CREDENTIALS */}
      <section id="about-author" className="py-20 bg-white px-4">
        <div className="max-w-4xl mx-auto bg-blue-50/40 rounded-3xl p-6 md:p-10 border border-blue-100 shadow-sm flex flex-col md:flex-row items-center gap-6 md:gap-10">
          
          {/* Avatar frame */}
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-[40px] bg-neutral-900 border-4 border-blue-400 shrink-0 shadow-2xl overflow-hidden relative rotate-3">
            <img 
              src="https://i.ibb.co/JFBg0Wdy/Vers-o-melhorada.png" 
              alt="Lucero Romero" 
              className="w-full h-full object-cover -rotate-3 scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 left-4 bg-blue-600 text-white text-[10px] font-black py-1 px-3 rounded-full uppercase tracking-widest shadow-lg -rotate-3">
              AUTORA
            </div>
          </div>

          <div className="text-left flex-1">
            <span className="text-[10px] uppercase font-bold tracking-widest text-blue-600 leading-none">¿QUIÉN DESARROLLÓ EL PROTOCOLO?</span>
            <h3 className="text-2xl md:text-3xl font-black text-stone-900 mt-1 mb-4">Lucero Romero</h3>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed mb-6">
              Emprendedora y fundadora de centros de estimulación temprana y cofundadora del renombrado proyecto educativo <strong className="text-stone-800">Protocolo Neuro-Manos</strong>. Posee años de experiencia enfocada en el desarrollo infantil integral y su misión es ofrecer herramientas que permitan a cada niño alcanzar su pleno potencial de forma lúdica, autónoma y significativa.
            </p>
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2.5 rounded-2xl border border-stone-200 text-stone-700 text-xs md:text-sm font-bold shadow-sm">
              <Award className="w-5 h-5 text-blue-600" /> Pedagogía Psicomotora Certificada
            </div>
          </div>
        </div>
      </section>

      {/* 15. OFFER CAPSULE / MAIN ORDER BOX - NEW DESIGN FROM IMAGES */}
      <section id="pricing-section" className="py-20 bg-[#F5F8FA] px-4 scroll-mt-20">
        <div className="max-w-[440px] mx-auto bg-white rounded-[40px] shadow-2xl border-[12px] border-blue-50/50 overflow-hidden relative">
          
          {/* Cyan/Blue outer accent border (simulating the image frame) */}
          <div className="absolute inset-0 border-2 border-cyan-400 rounded-[28px] pointer-events-none m-1"></div>

          {/* Product Image Mockup at top */}
          <div className="p-6 pb-0">
            <div className="rounded-[30px] overflow-hidden shadow-2xl bg-stone-50 border border-stone-100 transform scale-105 transition-transform hover:scale-110 duration-500 relative z-10">
              <img 
                src="https://i.ibb.co/ynVXjRCX/mega-pack-hero-1.png" 
                alt="Mockup Protocolo Neuro-Manos" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="p-8 pt-6 text-center">
            {/* Price Display - Large and Bold */}
            <div className="flex flex-col items-center justify-center mb-1 relative">
              {/* Discount Badge bubble */}
              <div className="absolute -top-6 -right-4 md:-right-10 bg-red-600 text-white font-black text-sm px-4 py-2 rounded-2xl shadow-xl rotate-12 z-20 whitespace-nowrap">
                90% OFF
              </div>

              {/* Old Price with strike-through */}
              <div className="text-stone-900 text-sm font-bold flex items-center gap-1.5 mb-1">
                <span>Valor de</span>
                <span className="relative">
                  85
                  <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2.5px] bg-red-600 rounded-full"></span>
                </span>
              </div>

              <div className="text-stone-900 text-6xl md:text-7xl font-black tracking-tighter flex items-start">
                <span className="text-4xl mt-4 mr-0.5 font-black">$</span>
                7,97
              </div>
              <span className="text-blue-600 font-black text-xs uppercase tracking-widest mt-2">PAGO ÚNICO</span>
            </div>

            {/* Feature List with Blue Icons */}
            <div className="text-left space-y-4 my-8 px-2">
              {[
                { icon: <Award className="w-5 h-5" />, text: "+1.250 Dinámicas de Motricidad" },
                { icon: <User className="w-5 h-5" />, text: "Ideal para niños de 3 a 6 años" },
                { icon: <Clock className="w-5 h-5" />, text: "Acceso digital inmediato" },
                { icon: <CheckCircle2 className="w-5 h-5" />, text: "Materiales 100% descargables" },
                { icon: <ShieldCheck className="w-5 h-5" />, text: "Garantía de 7 días" },
                { icon: <Sparkles className="w-5 h-5" />, text: "Actualizaciones Vitalicias" },
                { icon: <MessageSquare className="w-5 h-5" />, text: "Soporte VIP prioritario" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-blue-600 font-bold text-sm md:text-base">
                  <div className="shrink-0">{item.icon}</div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Bonuses Dashed Box */}
            <div className="border-2 border-dashed border-cyan-400 rounded-3xl p-6 mb-8 text-left bg-cyan-50/20">
              <span className="text-red-600 font-black text-xs uppercase tracking-wider block mb-3">BONOS GRATIS INCLUIDOS:</span>
              <ul className="space-y-1.5">
                {[
                  "250 Dibujos para pintar con dedos",
                  "50 Dibujos para unir puntos",
                  "200 Dibujos para colorear",
                  "350 Dibujos para recortar",
                  "150 Trazos aprender letras/números"
                ].map((bonus, i) => (
                  <li key={i} className="text-stone-700 text-sm font-bold flex items-center gap-2">
                     <span className="w-1 h-1 bg-stone-400 rounded-full"></span>
                     {bonus}
                  </li>
                ))}
              </ul>
            </div>

            {/* Main Checkout Button - Green as in image */}
            <a 
              href="https://payment.hotmart.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-[#28C76F] hover:bg-[#20a35b] text-white font-black py-5 rounded-3xl text-xl transition-all shadow-lg hover:shadow-green-500/30 active:scale-95 block uppercase tracking-tight animate-pulse-slow"
            >
              Quiero El Mega Pack
            </a>

            <div className="mt-4 flex items-center justify-center gap-2 text-stone-400 text-[10px] font-bold uppercase tracking-widest">
              <Lock className="w-3 h-3" /> Ambiente seguro para pagos
            </div>
          </div>
        </div>
      </section>

      {/* 16. GUARANTEE BANNER */}
      <section id="guarantee" className="py-12 bg-white px-4 border-t border-stone-200/60">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="w-10 h-10 text-emerald-600" />
          </div>
          <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2">Garantía incondicional de 7 días</h3>
          <p className="text-stone-500 text-xs md:text-sm leading-relaxed">
            Si por cualquier motivo tú o tu hijo no están satisfechos con el contenido del PROTOCOLO NEURO-MANOS 2.0, simplemente solicita tu reembolso dentro de los primeros 7 días y te devolveremos el 100% de tu inversión de inmediato. Transparía total.
          </p>
        </div>
      </section>

      {/* 17. FAQ SECTION (Interactive details/accordions) */}
      <section id="faqs" className="py-16 bg-neutral-100 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase font-extrabold tracking-widest text-stone-500">RESPUESTAS RÁPIDAS</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-1">Preguntas frecuentes</h2>
            <p className="text-stone-500 text-xs md:text-sm">¿Te quedó alguna duda? Nosotros te ayudamos.</p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-2xs transition-all duration-200"
                >
                  <button 
                    onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                    className="w-full p-5 text-left font-bold text-xs md:text-sm text-stone-900 flex justify-between items-center gap-4 hover:bg-neutral-50"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-emerald-500 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />
                    )}
                  </button>
                  
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1.5 text-stone-600 text-xs md:text-sm leading-relaxed border-t border-stone-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 18. BOTTOM STICKY CALL-TO-ACTION */}
      <div id="sticky-footer" className="bg-[#FFFDF9] border-t-2 border-stone-200 py-3.5 px-4 sticky bottom-0 z-40 shadow-xl hidden sm:block">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-[10px] uppercase font-bold text-emerald-600 block leading-none">OFERTA ESPECIAL</span>
            <span className="font-extrabold text-stone-900 text-sm md:text-base">Protocolo Neuro-Manos 2.0 (+1.250 Actividades)</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <span className="text-[10px] text-black line-through decoration-red-600 block font-bold">US$ 85</span>
              <span className="font-black text-stone-900">$7.97 <span className="text-[10px] font-black text-blue-600">USD</span></span>
            </div>

            <a 
              href="#pricing-section"
              className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs px-5 py-2.5 rounded-full transition shadow hover:shadow-blue-500/20 active:scale-95 text-center"
            >
              COMPRAR AHORA
            </a>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer id="footer" className="bg-[#241E1A] text-stone-400 text-[11px] md:text-xs py-10 text-center border-t border-stone-800">
        <div className="max-w-2xl mx-auto px-4">
          <p>© 2026 PROTOCOLO NEURO-MANOS 2.0. Todos los derechos reservados.</p>
          <p className="mt-2 text-stone-500">
            Este sitio no está afiliado con Google Inc. de ninguna manera. Los resultados informados dependen de la aplicación continua y estimulación del responsable legal del menor.
          </p>
        </div>
      </footer>

      {/* Floating Purchase Notification */}
      <AnimatePresence>
        {showNotification && (
          <motion.div 
            initial={{ opacity: 0, x: -50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.8 }}
            className="fixed bottom-6 left-6 z-[100] bg-white rounded-xl shadow-2xl p-3 flex items-center gap-3 border border-stone-100 max-w-[220px]"
          >
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/20">
              <CheckCircle2 className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-[9px] font-bold text-stone-400 uppercase tracking-wider leading-none mb-1 text-left">Compra Reciente</p>
              <p className="text-[10px] text-stone-700 font-bold leading-tight text-left">
                <span className="text-blue-600 font-black">{notificationData.name}</span> acaba de comprar el Mega Pack.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
