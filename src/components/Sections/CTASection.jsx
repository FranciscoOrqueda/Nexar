import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="contacto" className="py-24 px-6 md:px-12 relative z-10 bg-[#091925] flex justify-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl w-full bg-gradient-to-br from-[#0A192F] to-[#050B14] border border-cyan-500/20 rounded-3xl p-10 md:p-16 text-center relative shadow-2xl"
      >
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-cyan-500/10 blur-[80px] pointer-events-none"></div>

        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 relative z-10">
          ¿Listo para despegar?
        </h2>
        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto relative z-10">
          Agenda una reunión de 30 minutos con nuestro equipo para transformar tu visión en una realidad digital épica.
        </p>

        <a 
          href="https://calendly.com/franciscoorqueda57/30min" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-bold text-lg px-8 py-4 rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(234,87,29,0.3)] relative z-10"
        >
          Agendar Reunión
          <ArrowRight className="w-5 h-5" />
        </a>
      </motion.div>
    </section>
  );
};

export default CTASection;
