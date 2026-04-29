import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* Desktop & Mobile Navbar */}
      <div className="fixed top-6 w-full z-50 flex justify-center px-4 pointer-events-none">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl bg-[#091925]/80 backdrop-blur-md border border-white/10 rounded-full px-6 md:px-8 py-4 pointer-events-auto shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex justify-between items-center"
        >
          <a href="#inicio" className="text-white font-bold tracking-widest text-xl hover:text-secondary transition-colors" onClick={closeMenu}>NEXΛR</a>
          
          {/* Desktop Links */}
          <div className="hidden md:flex gap-6 text-sm text-gray-300 font-medium items-center">
            <a href="#inicio" className="hover:text-secondary transition-colors">Inicio</a>
            <a href="#servicios" className="hover:text-secondary transition-colors">Servicios</a>
            <a href="#casos" className="hover:text-secondary transition-colors">Casos de Éxito</a>
            <a href="#faq" className="hover:text-secondary transition-colors">FAQ</a>
            <a href="#testimonios" className="hover:text-secondary transition-colors">Testimonios</a>
          </div>
          
          <a href="#contacto" className="hidden md:block text-sm font-bold bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-full transition-colors">
            Contacto
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-secondary transition-colors p-1"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#050B14]/98 backdrop-blur-xl flex flex-col items-center justify-center pointer-events-auto"
          >
            <div className="flex flex-col gap-8 text-2xl text-center text-gray-300 font-medium">
              <a href="#inicio" onClick={closeMenu} className="hover:text-white transition-colors">Inicio</a>
              <a href="#servicios" onClick={closeMenu} className="hover:text-white transition-colors">Servicios</a>
              <a href="#casos" onClick={closeMenu} className="hover:text-white transition-colors">Casos de Éxito</a>
              <a href="#faq" onClick={closeMenu} className="hover:text-white transition-colors">Preguntas Frecuentes</a>
              <a href="#testimonios" onClick={closeMenu} className="hover:text-white transition-colors">Testimonios</a>
              <a href="#contacto" onClick={closeMenu} className="text-secondary font-bold mt-4">Contactanos</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
