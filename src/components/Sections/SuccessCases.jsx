import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const casosData = [
  { id: 1, title: "Proyecto Alpha", desc: "Transformación digital completa con un aumento del 200% en conversión y una interfaz épica." },
  { id: 2, title: "Nexus Tech", desc: "Rediseño de arquitectura cloud y modernización del frontend, reduciendo tiempos de carga a la mitad." },
  { id: 3, title: "Nova Finanzas", desc: "Plataforma de inversiones con seguridad de grado militar y dashboard analítico en tiempo real." },
  { id: 4, title: "E-Commerce X", desc: "Escalabilidad a nivel global con una experiencia de compra inmersiva y sin fricciones." }
];

const SuccessCases = () => {
  const [casoIndex, setCasoIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCasoIndex((prev) => (prev + 1) % casosData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextCaso = () => setCasoIndex((prev) => (prev + 1) % casosData.length);
  const prevCaso = () => setCasoIndex((prev) => (prev - 1 + casosData.length) % casosData.length);

  return (
    <section id="casos" className="min-h-screen py-24 px-6 md:px-12 relative flex flex-col justify-center bg-[#091925] overflow-hidden">
      {/* Decorative background elements for Casos */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full"></div>
        {/* Diagonal grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGw0MCA0ME00MCAwbC00MCA0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiLz48L3N2Zz4=')] opacity-50 mix-blend-overlay"></div>
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Casos de <span className="text-secondary">Éxito</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Descubre cómo hemos transformado proyectos y llevado empresas al siguiente nivel.
          </p>
        </motion.div>

        <div className="relative flex items-center justify-center min-h-[350px]">
          <button onClick={prevCaso} className="absolute left-0 z-20 p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors text-white hidden md:block">
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="w-full md:w-[80%] mx-auto overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={casoIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-white/5 border border-white/10 p-10 md:p-14 rounded-3xl hover:bg-white/10 transition-colors duration-300 group w-full flex flex-col md:flex-row items-center gap-8"
              >
                <div className="flex-1">
                  <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Star className="text-secondary w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{casosData[casoIndex].title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    {casosData[casoIndex].desc}
                  </p>
                  <a href="#" className="text-secondary font-medium hover:text-white transition-colors flex items-center gap-2">
                    Ver Estudio Completo
                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button onClick={nextCaso} className="absolute right-0 z-20 p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors text-white hidden md:block">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {casosData.map((_, i) => (
            <button
              key={i}
              onClick={() => setCasoIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${i === casoIndex ? 'bg-secondary w-8' : 'bg-white/20 hover:bg-white/40'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessCases;
