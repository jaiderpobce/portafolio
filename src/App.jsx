import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import { PROJECTS } from './constants/projects';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="max-w-7xl mx-auto">
        <Hero />

        <section id="projects" className="py-20 px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-gray-900">Proyectos Destacados</h2>
              <p className="text-gray-600">Una selección de mis trabajos más recientes.</p>
            </div>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {PROJECTS.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={handleOpenModal} 
              />
            ))}
          </div>
        </section>

        <section id="contact" className="py-20 px-4 border-t border-gray-100 mt-20">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-16 text-center border border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">¿Tienes un proyecto en mente?</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Siempre estoy abierto a nuevas oportunidades y colaboraciones. ¡Hablemos!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:jaiderponce@gmail.com"
                className="w-full sm:w-auto px-10 py-4 bg-blue-600 text-white font-bold rounded-full hover:scale-105 transition-transform shadow-lg shadow-blue-500/20"
              >
                Enviar Mensaje
              </a>
              <a
                href="https://wa.me/584120684702"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-10 py-4 bg-green-500 text-white font-bold rounded-full hover:scale-105 transition-transform shadow-lg shadow-green-500/20"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>

      </main>

      <footer className="py-10 text-center text-gray-500 text-sm border-t border-gray-100">
        <p>&copy; 2026 Jaider Ponce. Todos los derechos reservados.</p>
      </footer>



      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </div>
  );
}

export default App;

