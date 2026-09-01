import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import type { Project } from '@/types';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

function renderDescription(text: string) {
  const parts = text.split('**');
  return parts.map((part, index) => {
    if (index % 2 === 1) {
      return (
        <strong key={index} className="font-semibold text-white">
          {part}
        </strong>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

export function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const raf = requestAnimationFrame(() => window.scrollTo(0, 0));
    
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.detail-reveal',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.1,
        }
      );
    }, containerRef);

    return () => {
      cancelAnimationFrame(raf);
      ctx.revert();
    };
  }, [project.id]);

  return (
    <div ref={containerRef} className="min-h-screen bg-brand-dark pt-20">
      {/* Fixed top bar */}
      <div className="fixed top-0 left-0 right-0 z-[80] border-b border-white/5 bg-brand-dark/95 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-brand-accent"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            返回首页
          </button>
          <h1 className="hidden font-display text-lg font-semibold text-white sm:block">
            {project.title}
          </h1>
          <div className="flex gap-2">
            {project.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hero image */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src={project.gallery[0]}
          alt={project.title}
          className="detail-reveal h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-16 lg:px-8">
            <div className="detail-reveal mb-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-4 py-1 text-xs font-medium text-white"
                  style={{ backgroundColor: `${project.color}30` }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="detail-reveal font-display text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
              {project.title}
            </h1>
            <p className="detail-reveal mt-4 text-xl text-white/70">{project.subtitle}</p>
            {project.subtitleEn && (
              <p className="detail-reveal mt-2 text-sm uppercase tracking-[0.2em] text-white/40">
                {project.subtitleEn}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Project intro */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="detail-reveal">
              <h2 className="font-display text-3xl font-bold text-white">项目简介</h2>
              <p className="mt-6 text-lg leading-relaxed text-white/70">{renderDescription(project.description)}</p>
            </div>
            <div className="detail-reveal">
              <img
                src={project.introImage || project.gallery[1]}
                alt={`${project.title} 详情`}
                className="rounded-2xl object-cover"
              />
            </div>
          </div>

          {project.challenge && (
          <div className="mt-20 grid gap-12 lg:grid-cols-2">
            <div className="detail-reveal order-2 lg:order-1">
              <img
                src={project.gallery[2]}
                alt={`${project.title} 过程`}
                className="rounded-2xl object-cover"
              />
            </div>
            <div className="detail-reveal order-1 lg:order-2">
              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-xl font-semibold text-brand-accent">挑战</h3>
                  <p className="mt-3 text-white/70">{project.challenge}</p>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-brand-accent">解决方案</h3>
                  <p className="mt-3 text-white/70">{project.solution}</p>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-brand-accent">成果</h3>
                  <p className="mt-3 text-white/70">{project.result}</p>
                </div>
              </div>
            </div>
          </div>
          )}
        </div>
      </section>

      {/* Metrics */}
      {project.showMetrics !== false && project.metrics && project.metrics.length > 0 && (
      <section className="border-y border-white/5 bg-brand-gray/30 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="detail-reveal mb-12 text-center font-display text-3xl font-bold text-white">
            关键数据
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {project.metrics.map((metric, index) => (
              <div
                key={metric.label}
                className="detail-reveal text-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className="font-display text-5xl font-bold text-white"
                  style={{ color: project.color }}
                >
                  {metric.value}
                </div>
                <div className="mt-2 text-white/60">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Timeline */}
      {project.timeline && project.timeline.length > 0 && (
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="detail-reveal mb-12 text-center font-display text-3xl font-bold text-white">
            {project.timelineTitle ?? '项目历程'}
          </h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-white/10 sm:left-1/2 sm:-translate-x-1/2" />
            {project.timeline.map((item, index) => (
              <div
                key={item.phase}
                className={`detail-reveal relative mb-12 flex items-start gap-8 sm:gap-0 ${
                  index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                <div className={`hidden sm:block sm:w-1/2 ${index % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
                  <span
                    className="font-display text-4xl font-bold opacity-30"
                    style={{ color: project.color }}
                  >
                    {item.phase}
                  </span>
                </div>
                <div className="absolute left-4 top-0 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-brand-dark sm:left-1/2" style={{ backgroundColor: project.color }} />
                <div className={`pl-12 sm:w-1/2 ${index % 2 === 0 ? 'sm:pl-12' : 'sm:pr-12 sm:text-right'}`}>
                  <span className="font-display text-sm font-semibold" style={{ color: project.color }}>
                    阶段 {item.phase}
                  </span>
                  <h3 className="mt-1 font-display text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-white/60">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Content modules */}
      {project.contentModules && project.contentModules.length > 0 && (
        <section className="border-t border-white/5 bg-brand-dark py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="detail-reveal mb-12 font-display text-3xl font-bold text-white">
              相关内容
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {project.contentModules.map((module) => (
                <a
                  key={module.link}
                  href={module.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="detail-reveal group relative block overflow-hidden rounded-2xl bg-brand-gray"
                >
                  <div className="aspect-[3/2] overflow-hidden">
                    <img
                      src={module.image}
                      alt={module.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <p className="mb-2 text-xs font-medium uppercase tracking-[0.15em] text-brand-accent/80">
                      {module.subtitle}
                    </p>
                    <h3 className="font-display text-lg font-bold text-white transition-transform duration-500 group-hover:-translate-y-1">
                      {module.title}
                    </h3>
                    <div className="mt-3 flex translate-y-3 items-center gap-1 text-sm font-medium text-brand-accent opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      查看详情
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                  <div
                    className="absolute left-0 top-0 h-1 w-0 bg-brand-accent transition-all duration-500 group-hover:w-full"
                  />
                </a>
              ))}
            </div>
            <p className="detail-reveal mt-12 text-center text-sm text-white/50">
              篇幅有限，更多作品内容可以联系本人查看
            </p>
          </div>
        </section>
      )}

      {/* Back to previous level */}
      <section className="border-t border-white/5 bg-brand-dark py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <button
            onClick={onBack}
            className="detail-reveal group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-10 py-4 text-sm font-semibold text-white transition-all hover:border-brand-accent hover:bg-brand-accent/10"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            返回上一级
          </button>
        </div>
      </section>
    </div>
  );
}
