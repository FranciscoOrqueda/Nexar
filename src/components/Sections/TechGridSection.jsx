import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Server, Cloud, Database, Layout, Smartphone, Lock, Terminal } from 'lucide-react';

const techCategories = [
  {
    title: "Frontend & Diseño",
    desc: "Interfaces ultra rápidas y atractivas.",
    icon: <Monitor className="w-6 h-6 text-pink-400" />,
    color: "from-pink-500/20 to-rose-500/5",
    border: "group-hover:border-pink-500/50",
    glow: "group-hover:bg-pink-500/20",
    techs: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "Figma"]
  },
  {
    title: "Backend & Datos",
    desc: "Motores lógicos escalables y seguros.",
    icon: <Server className="w-6 h-6 text-cyan-400" />,
    color: "from-cyan-500/20 to-blue-500/5",
    border: "group-hover:border-cyan-500/50",
    glow: "group-hover:bg-cyan-500/20",
    techs: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"]
  },
  {
    title: "Infraestructura & Cloud",
    desc: "Despliegues globales sin caídas.",
    icon: <Cloud className="w-6 h-6 text-purple-400" />,
    color: "from-purple-500/20 to-indigo-500/5",
    border: "group-hover:border-purple-500/50",
    glow: "group-hover:bg-purple-500/20",
    techs: ["AWS", "Google Cloud", "Docker", "Vercel", "Cloudflare"]
  }
];

const TechGridSection = () => {
  return (
    <section className="py-24 px-6 md:px-12 relative z-10 bg-[#06111a] overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-900/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestro Arsenal <span className="text-secondary">Tecnológico</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            No somos atados a una sola herramienta. Elegimos la tecnología exacta que tu proyecto necesita para escalar a millones de usuarios.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className={`bg-white/5 border border-white/10 rounded-3xl p-8 transition-all duration-300 group hover:-translate-y-2 ${category.border} relative overflow-hidden`}
            >
              {/* Hover Glow */}
              <div className={`absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-500 ${category.glow} blur-[60px] pointer-events-none`}></div>

              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} border border-white/5 flex items-center justify-center mb-6`}>
                {category.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2 relative z-10">{category.title}</h3>
              <p className="text-gray-400 text-sm mb-6 relative z-10">{category.desc}</p>

              <div className="flex flex-wrap gap-2 relative z-10">
                {category.techs.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 bg-[#091925] border border-white/10 rounded-md text-gray-300 text-sm font-medium hover:border-white/30 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechGridSection;
