import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import InteractiveGallery from './components/InteractiveGallery.jsx';
import ProjectModal from './components/ProjectModal.jsx';
import AboutSection from './components/AboutSection.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';
import { PROJECTS } from './data/projects.js';

/**
 * Main Portfolio Application (Pure JavaScript)
 * Fully responsive, accessible, dark-mode native with interactive gallery
 */
export default function App() {
  // Theme state persisted in localStorage
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Modal active project state
  const [selectedProject, setSelectedProject] = useState(null);

  // Sync dark mode class and data-theme with <html> element and persist
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.removeAttribute('data-theme');
      localStorage.setItem('portfolio-theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleSelectProject = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  // Navigate between projects inside modal
  const handleNavigateProject = (direction) => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS.findIndex((p) => p.id === selectedProject.id);
    if (currentIndex === -1) return;
    const newIndex = (currentIndex + direction + PROJECTS.length) % PROJECTS.length;
    setSelectedProject(PROJECTS[newIndex]);
  };

  const scrollToWorks = () => {
    const worksElement = document.getElementById('works');
    if (worksElement) {
      worksElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 flex flex-col font-sans transition-colors duration-300">
      {/* Top Navigation */}
      <Navbar darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* High-Impact Split Screen Hero with Impact Metrics */}
        <Hero
          onExploreClick={scrollToWorks}
          onSelectProject={handleSelectProject}
        />

        {/* Interactive Gallery with Filters, Search and Responsive Grid */}
        <InteractiveGallery onSelectProject={handleSelectProject} />

        {/* Capabilities, Philosophy & Client Proof */}
        <AboutSection />

        {/* High-Performance Accessible Contact Form */}
        <ContactForm />
      </main>

      {/* Minimalist Footer */}
      <Footer />

      {/* Interactive Project Case Study Lightbox / Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={handleCloseModal}
          onNavigateProject={handleNavigateProject}
        />
      )}
    </div>
  );
}
