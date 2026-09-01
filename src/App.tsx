import { useState, useCallback, useEffect, useRef, useLayoutEffect } from 'react';
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
  // 记住进入详情页前首页的滚动位置，返回时还原，避免被强制拉回顶部
  const scrollRestoreRef = useRef(0);
  const [restoreScroll, setRestoreScroll] = useState<number | null>(null);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [selectedProject]);

  // 回到首页后恢复进入详情页前的位置。
  // 用 useLayoutEffect 是因为它会在首页 DOM 更新完成、浏览器绘制之前同步执行，
  // 此时设置滚动位置用户看不到跳动；若用 useEffect 则可能先绘制在顶部再跳走。
  useLayoutEffect(() => {
    if (selectedProject === null && restoreScroll !== null) {
      window.scrollTo(0, restoreScroll);
      setRestoreScroll(null);
      // 首页内容较多，文档高度可能在首帧之后才稳定，下一帧再校正一次兜底
      requestAnimationFrame(() => {
        window.scrollTo(0, scrollRestoreRef.current);
      });
    }
  }, [selectedProject, restoreScroll]);

  const handleProjectClick = useCallback((project: Project) => {
    // 进入详情页前先记下当前位置
    scrollRestoreRef.current = window.scrollY;
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
      setRestoreScroll(scrollRestoreRef.current);
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
