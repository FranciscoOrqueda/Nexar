import React from 'react';
import { motion } from 'framer-motion';

const processSteps = [
  { num: "01", title: "Descubrimiento", desc: "Analizamos tus necesidades y definimos la estrategia digital ideal." },
  { num: "02", title: "Diseño UX/UI", desc: "Creamos prototipos interactivos centrados en la experiencia del usuario." },
  { num: "03", title: "Desarrollo", desc: "Escribimos código limpio, seguro y utilizando tecnologías de vanguardia." },
  { num: "04", title: "Lanzamiento", desc: "Desplegamos el proyecto y brindamos soporte continuo para su escalabilidad." }
];

const ProcessSection = () => {
  return (
    <section className="py-24 px-6 md:px-12 relative z-10 bg-[#06111a] overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 text-center md:text-left flex flex-col md:flex-row gap-8 justify-between items-center"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Cómo lo <span className="text-secondary">Hacemos</span>
            </h2>
            <p className="text-gray-400 max-w-xl text-lg">
              Un proceso ágil y transparente diseñado para garantizar resultados excepcionales en cada entrega.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative">
          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left"
            >
              <div className="relative w-14 h-14 rounded-full bg-[#0A192F] border border-cyan-500 flex items-center justify-center text-cyan-400 font-bold text-xl mb-6 shadow-[0_0_15px_rgba(34,211,238,0.2)] z-10">
                {step.num}
              </div>

              {/* Connecting Line (Desktop) */}
              {i < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-[27px] left-[56px] w-[calc(100%-56px+1rem)] h-[2px] bg-gradient-to-r from-cyan-500/50 to-blue-500/50 z-0"></div>
              )}

              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed md:pr-4">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
