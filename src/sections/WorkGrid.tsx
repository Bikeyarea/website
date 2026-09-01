import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { projects } from '@/data/portfolio';
import type { Project } from '@/types';
import { ArrowUpRight } from 'lucide-react';

interface WorkGridProps {
  onProjectClick: (project: Project) => void;
}

export function WorkGrid({ onProjectClick }: WorkGridProps) {
  const sectionRef = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative bg-brand-dark py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="reveal-item mb-16 max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-brand-accent">
            Selected Works
          </p>
          <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
            部分案例展示
          </h2>
          <p className="mt-4 text-white/60">
            每个项目都是一次探索，在日常生活与自然向往中寻找一种“得体”的过渡。
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`reveal-item group relative overflow-hidden rounded-2xl bg-brand-gray ${
                project.noDetail ? '' : 'cursor-pointer'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => !project.noDetail && onProjectClick(project)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.cover}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-2xl font-bold text-white transition-transform duration-500 group-hover:-translate-y-2">
                  {project.title}
                </h3>
                <p className="text-sm text-white/60 transition-transform duration-500 group-hover:-translate-y-2">
                  {project.subtitle}
                </p>
                
                {!project.noDetail && (
                  <div className="mt-4 flex translate-y-4 items-center gap-2 text-sm font-medium text-brand-accent opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    查看详情
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                )}
              </div>

              <div
                className="absolute left-0 top-0 h-1 w-0 bg-brand-accent transition-all duration-500 group-hover:w-full"
                style={{ backgroundColor: project.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
