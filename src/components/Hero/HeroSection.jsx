import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import WebDesignBackground from '../Background/WebDesignBackground';
import LogoAssembly from './LogoAssembly';

const HeroSection = () => {
  return (
    <section id="inicio" className="relative flex-1 flex flex-col items-center justify-center min-h-screen px-4 pt-20 overflow-hidden">
      {/* Animated Tech/Space Background */}
      <WebDesignBackground />

      <div className="relative z-10 flex flex-col items-center w-full">
        <LogoAssembly />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* NEXAR Text stylized as N E X Λ R without shadow */}
          <h1 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-[0.3em] md:tracking-[0.5em] ml-[0.3em] md:ml-[0.5em]">
          </h1>

          <p className="mt-6 text-gray-400 text-lg md:text-xl font-light tracking-wide max-w-lg text-center">
            Potenciando el futuro de tu negocio.
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
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
  );
};

export default HeroSection;
