import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, ChevronLeft, ChevronRight } from 'lucide-react';

const testimoniosData = [
  { id: 1, text: "El equipo de NEXAR entregó un producto que superó completamente nuestras expectativas. Su atención al detalle y capacidad para crear experiencias épicas es inigualable.", name: "María González", role: "CEO, TechVision", color: "from-secondary to-orange-400" },
  { id: 2, text: "Desde que lanzamos la nueva plataforma, nuestras ventas se dispararon. No solo se ve increíble, sino que funciona a la perfección. Totalmente recomendados.", name: "Carlos Rivera", role: "Director de Operaciones, Nova Finanzas", color: "from-cyan-400 to-blue-600" },
  { id: 3, text: "Nunca imaginé que el diseño pudiera impactar tanto en la retención de usuarios. NEXAR entendió nuestra visión y la llevó a otra galaxia.", name: "Laura Méndez", role: "Founder, Nexus Tech", color: "from-purple-400 to-pink-500" },
  { id: 4, text: "Un servicio de primera categoría. Lograron plasmar la esencia de nuestra marca en un ecosistema digital robusto y escalable.", name: "Andrés Silva", role: "CTO, Global Systems", color: "from-teal-400 to-emerald-500" }
];

const Testimonials = () => {
  const [testimonioIndex, setTestimonioIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonioIndex((prev) => (prev + 1) % testimoniosData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonio = () => setTestimonioIndex((prev) => (prev + 1) % testimoniosData.length);
  const prevTestimonio = () => setTestimonioIndex((prev) => (prev - 1 + testimoniosData.length) % testimoniosData.length);

  return (
    <section id="testimonios" className="min-h-[70vh] py-24 px-6 md:px-12 relative flex flex-col justify-center bg-gradient-to-b from-[#091925] to-[#040b10] overflow-hidden">
      {/* Decorative background elements for Testimonials */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 blur-[150px] rounded-full"></div>
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.3] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4yNSkiLz48L3N2Zz4=')]"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Users className="w-16 h-16 text-secondary mx-auto mb-6 opacity-80" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
            Lo que dicen de nosotros
          </h2>

          <div className="relative min-h-[350px] flex items-center justify-center">
            <button onClick={prevTestimonio} className="absolute left-[-20px] md:left-[-60px] z-20 p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors text-white hidden md:block">
              <ChevronLeft className="w-6 h-6" />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={testimonioIndex}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 border border-white/10 p-10 md:p-14 rounded-3xl relative w-full"
              >
                <div className="text-6xl text-secondary opacity-20 absolute top-6 left-6 leading-none">"</div>
                <p className="text-xl md:text-2xl text-gray-300 italic mb-8 relative z-10 leading-relaxed">
                  {testimoniosData[testimonioIndex].text}
                </p>
                <div className="flex flex-col items-center">
                  <div className={`w-16 h-16 bg-gradient-to-tr ${testimoniosData[testimonioIndex].color} rounded-full mb-4 shadow-lg`}></div>
                  <h4 className="text-white font-semibold text-lg">{testimoniosData[testimonioIndex].name}</h4>
                  <p className="text-secondary/80 text-sm">{testimoniosData[testimonioIndex].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <button onClick={nextTestimonio} className="absolute right-[-20px] md:right-[-60px] z-20 p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors text-white hidden md:block">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center gap-3 mt-10">
            {testimoniosData.map((_, i) => (
              <button
                key={i}
                onClick={() => setTestimonioIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${i === testimonioIndex ? 'bg-secondary w-8' : 'bg-white/20 hover:bg-white/40'}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
