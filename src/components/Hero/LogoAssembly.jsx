import React from 'react';
import { motion } from 'framer-motion';

const LogoAssembly = () => {
  const particles = React.useMemo(() => Array.from({ length: 150 }).map((_, i) => {
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 600 + 200;
    const startX = Math.cos(angle) * distance;
    const startY = Math.sin(angle) * distance;
    const size = Math.random() * 3 + 1;
    const colors = ['bg-cyan-400', 'bg-blue-500', 'bg-indigo-400', 'bg-teal-400'];
    const color = colors[Math.floor(Math.random() * colors.length)];

    return { id: i, startX, startY, size, color };
  }), []);

  return (
    <div className="relative flex items-center justify-center w-72 md:w-96 lg:w-[32rem] h-48 md:h-64 lg:h-80 mb-8 mt-10">
      {/* Particles converging */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ x: p.startX, y: p.startY, opacity: 0, scale: 0 }}
          animate={{
            x: 0,
            y: 0,
            opacity: [0, 1, 0],
            scale: [0, p.size, 0]
          }}
          transition={{
            duration: 1.5,
            delay: Math.random() * 0.8,
            ease: "easeInOut"
          }}
          className={`absolute w-1 h-1 rounded-full ${p.color} shadow-[0_0_8px_rgba(34,211,238,0.8)]`}
        />
      ))}

      {/* Energy core explosion */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 5, 0], opacity: [0, 1, 0] }}
        transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
        className="absolute w-40 h-40 bg-cyan-500 rounded-full blur-[50px] z-0"
      />

      {/* Actual Logo fading in and forming */}
      <motion.div
        initial={{ opacity: 0, scale: 1.3, filter: "blur(20px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.8, delay: 1.6, ease: "easeOut" }}
        className="w-full h-full absolute z-10 flex items-center justify-center"
      >
        <img 
          src="/tapaRecurso 1.png" 
          alt="NEXAR Logo" 
          className="w-full h-full object-contain animate-float"
        />
      </motion.div>
    </div>
  );
};

export default LogoAssembly;
