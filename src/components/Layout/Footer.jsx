import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#030712] pt-20 pb-10 px-6 md:px-12 border-t border-white/5 relative z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Branding */}
        <div className="col-span-1 md:col-span-1">
          <a href="#inicio" className="text-white font-bold tracking-widest text-2xl hover:text-secondary transition-colors inline-block mb-4">NEXΛR</a>
          <p className="text-gray-400 text-sm leading-relaxed">
            Agencia de desarrollo digital especializada en crear productos inmersivos, escalables y de alto impacto para negocios del futuro.
          </p>
        </div>

        {/* Quick Links */}
        <div className="col-span-1">
          <h4 className="text-white font-semibold mb-4 text-lg">Navegación</h4>
          <ul className="space-y-3">
            <li><a href="#inicio" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Inicio</a></li>
            <li><a href="#servicios" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Servicios</a></li>
            <li><a href="#casos" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Casos de Éxito</a></li>
            <li><a href="#faq" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">FAQ</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="col-span-1">
          <h4 className="text-white font-semibold mb-4 text-lg">Social</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">LinkedIn</a></li>
            <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Instagram</a></li>
            <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">X (Twitter)</a></li>
            <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Dribbble</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="col-span-1">
          <h4 className="text-white font-semibold mb-4 text-lg">Contacto</h4>
          <p className="text-gray-400 text-sm mb-4">¿Tenés una idea en mente? Hablemos.</p>
          <a href="mailto:contacto@nexar.com" className="text-cyan-400 hover:text-white transition-colors font-medium">
            contacto@nexar.com
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm text-center md:text-left">
          © {new Date().getFullYear()} NEXAR. Todos los derechos reservados.
        </p>
        <div className="flex gap-6 text-sm text-gray-500 flex-wrap justify-center">
          <a href="#" className="hover:text-gray-300 transition-colors">Términos y Condiciones</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Política de Privacidad</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
