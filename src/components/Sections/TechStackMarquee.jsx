import React from 'react';
import { motion } from 'framer-motion';

const techStack = ["React", "Node.js", "AWS", "Figma", "TailwindCSS", "JavaScript", "TypeScript", "MongoDB", "HTML", "CSS", "Python"];

const TechStackMarquee = () => {
  return (
    <div className="w-full py-8 border-y border-white/5 bg-[#050B14] overflow-hidden flex relative z-10">
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#050B14] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#050B14] to-transparent z-10 pointer-events-none"></div>
      
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap"
      >
        {[...techStack, ...techStack].map((tech, i) => (
          <div key={i} className="mx-6 md:mx-10 text-xl md:text-2xl font-bold text-white/20 tracking-wider">
            {tech}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechStackMarquee;
