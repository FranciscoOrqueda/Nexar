import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "¿Cuánto tiempo toma desarrollar una página web o app?",
    answer: "El tiempo varía según la complejidad. Una landing page como esta puede estar lista en 1-2 semanas, mientras que una plataforma a medida o app móvil puede tomar de 1 a 3 meses. Siempre definimos un cronograma claro antes de empezar."
  },
  {
    question: "¿Ofrecen servicio de mantenimiento una vez lanzado el proyecto?",
    answer: "Sí, ofrecemos planes de soporte y mantenimiento mensual para asegurar que tu plataforma esté siempre segura, actualizada y funcionando a máxima velocidad."
  },
  {
    question: "¿En qué tecnologías se especializan?",
    answer: "Trabajamos con el stack más moderno: React, Next.js y TailwindCSS para el frontend, y Node.js, Python o soluciones Serverless en AWS para el backend. Nos adaptamos a lo que mejor resuelva tu problema."
  },
  {
    question: "¿Cómo es la forma de pago?",
    answer: "Generalmente trabajamos con un esquema de 50% de anticipo al firmar el acuerdo y 50% contra entrega final. Para proyectos largos, podemos estructurar pagos por hitos (milestones) alcanzados."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6 md:px-12 relative z-10 bg-[#06111a]">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Preguntas <span className="text-secondary">Frecuentes</span>
          </h2>
          <p className="text-gray-400">Todo lo que necesitas saber antes de empezar.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-white font-medium text-lg pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-cyan-500 flex-shrink-0" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6"
                  >
                    <p className="text-gray-400 pb-5 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
