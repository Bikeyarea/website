import { useState, useCallback, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

import { ProgressBar } from '@/sections/ProgressBar';
import { GlobalHeader } from '@/sections/GlobalHeader';
import { HeroSection } from '@/sections/HeroSection';
import { CapabilitiesSection } from '@/sections/CapabilitiesSection';
import { WorkGrid } from '@/sections/WorkGrid';
import { SkillCloud } from '@/sections/SkillCloud';
import { AboutSection } from '@/sections/AboutSection';
import { CTASection } from '@/sections/CTASection';
import { Footer } from '@/sections/Footer';
import { BackToTop } from '@/sections/BackToTop';
import { ProjectDetail } from '@/sections/ProjectDetail';

import type { Project } from '@/types';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [pageTransition, setPageTransition] = useState(false);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [selectedProject]);

  const handleProjectClick = useCallback((project: Project) => {
    setPageTransition(true);
    setTimeout(() => {
      window.scrollTo(0, 0);
      setSelectedProject(project);
      setPageTransition(false);
    }, 300);
  }, []);

  const handleBack = useCallback(() => {
    setPageTransition(true);
    setTimeout(() => {
      setSelectedProject(null);
      setPageTransition(false);
    }, 300);
  }, []);

  const handleNavigate = useCallback((section: string) => {
    if (selectedProject) {
      handleBack();
      setTimeout(() => {
        const element = document.getElementById(section);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 350);
    } else {
      const element = document.getElementById(section);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedProject, handleBack]);

  return (
    <div className={`relative min-h-screen bg-brand-dark transition-opacity duration-300 ${pageTransition ? 'opacity-0' : 'opacity-100'}`}>
      <ProgressBar />
      <GlobalHeader onNavigate={handleNavigate} showNav={!selectedProject} />
      <BackToTop />
      
      {selectedProject ? (
        <ProjectDetail
          project={selectedProject}
          onBack={handleBack}
        />
      ) : (
        <main>
          <HeroSection onNavigate={handleNavigate} />
          <CapabilitiesSection />
          <WorkGrid onProjectClick={handleProjectClick} />
          <SkillCloud />
          <AboutSection />
          <CTASection onNavigate={handleNavigate} />
          <Footer onNavigate={handleNavigate} />
        </main>
      )}
    </div>
  );
}

export default App;
