import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Smartphone, Cloud } from 'lucide-react';

const services = [
  { icon: <Code className="w-8 h-8 text-cyan-400" />, title: "Desarrollo Web", desc: "Plataformas escalables, veloces y optimizadas para conversión." },
  { icon: <Layout className="w-8 h-8 text-purple-400" />, title: "Diseño UX/UI", desc: "Interfaces intuitivas y atractivas que enamoran a tus usuarios." },
  { icon: <Smartphone className="w-8 h-8 text-blue-400" />, title: "Desarrollo Mobile", desc: "Aplicaciones nativas e híbridas para iOS y Android." },
  { icon: <Cloud className="w-8 h-8 text-indigo-400" />, title: "Arquitectura Cloud", desc: "Infraestructura segura y resiliente para alto tráfico." }
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 px-6 md:px-12 relative z-10 bg-[#091925]">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestros <span className="text-secondary">Servicios</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Soluciones digitales de extremo a extremo diseñadas para escalar tu negocio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-[40px] group-hover:bg-cyan-500/10 transition-colors"></div>
              <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 shadow-inner">
                {svc.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{svc.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {svc.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
