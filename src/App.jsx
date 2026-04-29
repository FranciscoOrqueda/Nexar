import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Star, Users, ChevronLeft, ChevronRight } from 'lucide-react';

const casosData = [
  { id: 1, title: "Proyecto Alpha", desc: "Transformación digital completa con un aumento del 200% en conversión y una interfaz épica." },
  { id: 2, title: "Nexus Tech", desc: "Rediseño de arquitectura cloud y modernización del frontend, reduciendo tiempos de carga a la mitad." },
  { id: 3, title: "Nova Finanzas", desc: "Plataforma de inversiones con seguridad de grado militar y dashboard analítico en tiempo real." },
  { id: 4, title: "E-Commerce X", desc: "Escalabilidad a nivel global con una experiencia de compra inmersiva y sin fricciones." }
];

const testimoniosData = [
  { id: 1, text: "El equipo de NEXAR entregó un producto que superó completamente nuestras expectativas. Su atención al detalle y capacidad para crear experiencias épicas es inigualable.", name: "María González", role: "CEO, TechVision", color: "from-secondary to-orange-400" },
  { id: 2, text: "Desde que lanzamos la nueva plataforma, nuestras ventas se dispararon. No solo se ve increíble, sino que funciona a la perfección. Totalmente recomendados.", name: "Carlos Rivera", role: "Director de Operaciones, Nova Finanzas", color: "from-cyan-400 to-blue-600" },
  { id: 3, text: "Nunca imaginé que el diseño pudiera impactar tanto en la retención de usuarios. NEXAR entendió nuestra visión y la llevó a otra galaxia.", name: "Laura Méndez", role: "Founder, Nexus Tech", color: "from-purple-400 to-pink-500" },
  { id: 4, text: "holaUn servicio de primera categoría. Lograron plasmar la esencia de nuestra marca en un ecosistema digital robusto y escalable.", name: "Andrés Silva", role: "CTO, Global Systems", color: "from-teal-400 to-emerald-500" }
];

const App = () => {
  const [casoIndex, setCasoIndex] = useState(0);
  const [testimonioIndex, setTestimonioIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCasoIndex((prev) => (prev + 1) % casosData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonioIndex((prev) => (prev + 1) % testimoniosData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextCaso = () => setCasoIndex((prev) => (prev + 1) % casosData.length);
  const prevCaso = () => setCasoIndex((prev) => (prev - 1 + casosData.length) % casosData.length);

  const nextTestimonio = () => setTestimonioIndex((prev) => (prev + 1) % testimoniosData.length);
  const prevTestimonio = () => setTestimonioIndex((prev) => (prev - 1 + testimoniosData.length) % testimoniosData.length);
  return (
    <div className="relative w-full min-h-screen bg-[#091925] overflow-hidden font-sans">
      
      {/* UNIVERSE BACKGROUND (FIXED TO VIEWPORT) */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[#030a10]">
        {/* Nebula Clouds */}
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-cyan-500 blur-[150px] opacity-[0.15] mix-blend-screen"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-blue-600 blur-[150px] opacity-[0.15] mix-blend-screen"></div>
        <div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-teal-400 blur-[120px] opacity-[0.1] mix-blend-screen"></div>
        
        {/* Starry pattern */}
        <div className="absolute inset-0 opacity-[0.8] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIxIiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjgiLz48Y2lyY2xlIGN4PSIzNTAiIGN5PSIxMjAiIHI9IjIiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuOSIvPjxjaXJjbGUgY3g9IjIwMCIgY3k9IjMwMCIgcj0iMS41IiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjciLz48Y2lyY2xlIGN4PSIxMDAiIGN5PSIyNTAiIHI9IjIuNSIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iMC44Ii8+PGNpcmNsZSBjeD0iMjgwIiBjeT0iNDAiIHI9IjEuNSIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iMC45Ii8+PGNpcmNsZSBjeD0iMzgwIiBjeT0iMzgwIiByPSIyIiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjgiLz48Y2lyY2xlIGN4PSIxODAiIGN5PSIxODAiIHI9IjEiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuNiIvPjxjaXJjbGUgY3g9IjMwMCIgY3k9IjI1MCIgcj0iMS41IiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjUiLz48L3N2Zz4=')] bg-repeat animate-pulse-slow"></div>
        
        {/* Radial mask: Darken center slightly, transparent at edges */}
        <div 
          className="absolute inset-0" 
          style={{
            background: 'radial-gradient(circle at center, rgba(9, 25, 37, 0.7) 0%, rgba(9, 25, 37, 0) 100%)'
          }}
        ></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* NAVBAR */}
        <div className="fixed top-6 w-full z-50 flex justify-center px-4 pointer-events-none">
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-8 py-4 pointer-events-auto shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
          >
            <div className="flex justify-between items-center">
              <a href="#inicio" className="text-white font-bold tracking-widest text-xl hover:text-secondary transition-colors">NEXΛR</a>
              <div className="flex gap-6 text-sm text-gray-300 font-medium">
                <a href="#inicio" className="hover:text-secondary transition-colors">Inicio</a>
                <a href="#casos" className="hover:text-secondary transition-colors">Casos de Éxito</a>
                <a href="#testimonios" className="hover:text-secondary transition-colors">Testimonios</a>
              </div>
            </div>
          </motion.nav>
        </div>

        {/* HERO SECTION */}
        <section id="inicio" className="flex-1 flex flex-col items-center justify-center min-h-screen px-4 pt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            {/* Logo without shadows or glowing orbs */}
            <div className="mb-8">
              <img 
                src="/tapaRecurso 1.png" 
                alt="NEXAR Logo" 
                className="w-72 md:w-96 lg:w-[32rem] object-contain animate-float"
              />
            </div>

            {/* NEXAR Text stylized as N E X Λ R without shadow */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white uppercase tracking-[0.3em] md:tracking-[0.5em] ml-[0.3em] md:ml-[0.5em]"
            >
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-6 text-gray-400 text-lg md:text-xl font-light tracking-wide max-w-lg text-center"
            >
              Potenciando el futuro de tu negocio.
            </motion.p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
          >
            <span className="text-sm text-gray-500 mb-2 tracking-widest uppercase text-xs">Descubre Más</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronDown className="w-6 h-6 text-secondary" />
            </motion.div>
          </motion.div>
        </section>

        {/* SUCCESS CASES CAROUSEL */}
        <section id="casos" className="min-h-screen py-24 px-6 md:px-12 relative z-10 flex flex-col justify-center">
          <div className="max-w-5xl mx-auto w-full">
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

        {/* TESTIMONIALS CAROUSEL */}
        <section id="testimonios" className="min-h-[70vh] py-24 px-6 md:px-12 relative z-10 flex flex-col justify-center">
          <div className="max-w-4xl mx-auto text-center w-full">
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

        {/* FOOTER */}
        <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5 relative z-10">
          <p>© {new Date().getFullYear()} NEXAR. Todos los derechos reservados.</p>
        </footer>

      </div>
    </div>
  );
}

export default App;
