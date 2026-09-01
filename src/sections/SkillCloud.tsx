import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { skills } from '@/data/portfolio';

const categoryColors: Record<string, string> = {
  frontend: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  backend: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  design: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  tool: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
};

export function SkillCloud() {
  const sectionRef = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  // Duplicate skills for seamless scroll
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative overflow-hidden bg-brand-dark py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="reveal-item mb-16 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-brand-accent">
            Skills
          </p>
          <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
            个人技能
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            从活动策划到执行，从线上传播策略到裂变转化，多维度能力支撑项目落地。
          </p>
        </div>
      </div>

      {/* Scrolling skill tags */}
      <div className="reveal-item relative">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-brand-dark to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-brand-dark to-transparent" />
        
        <div className="flex animate-scroll-left w-max hover:[animation-play-state:paused]">
          {duplicatedSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className={`mx-3 flex h-14 items-center rounded-full border px-8 text-base font-medium whitespace-nowrap backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-brand-accent hover:bg-brand-accent/10 hover:text-brand-accent ${
                categoryColors[skill.category]
              }`}
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
