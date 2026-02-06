import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Jaider.Dev
        </h1>

        
        <nav className="hidden md:flex gap-8 text-sm text-gray-600 font-medium">
          <a href="#home" className="hover:text-blue-600 transition-colors">Inicio</a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">Proyectos</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contacto</a>
        </nav>

        <div className="flex gap-4 text-gray-600">
          <a href="https://github.com/jaiderpobce/" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors"><Github size={20} /></a>
          <a href="#" className="hover:text-blue-600 transition-colors"><Linkedin size={20} /></a>
          <a href="mailto:jaiderponce@gmail.com" className="hover:text-blue-600 transition-colors"><Mail size={20} /></a>
        </div>

      </div>
    </header>
  );
};


export default Header;
