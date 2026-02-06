import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-4 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-gray-900">
          Hola, soy <span className="text-blue-600">Jaider Ponce</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-10">
          Ingeniero en Informática especializado en construir experiencias digitales excepcionales con React, 
          enfocado en el diseño moderno, rendimiento y accesibilidad.
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all transform hover:scale-105"
          >
            Ver Proyectos
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-gray-200 hover:border-gray-400 text-gray-700 rounded-full font-medium transition-all"
          >
            Contactar
          </a>
        </div>

      </motion.div>
    </section>
  );
};

export default Hero;
