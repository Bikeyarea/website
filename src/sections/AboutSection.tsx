import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Award, MapPin } from 'lucide-react';
import { asset } from '@/lib/asset';

export function AboutSection() {
  const sectionRef = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-brand-dark py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Image/Avatar */}
          <div className="reveal-item relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <img
                src={asset('/hero.JPG')}
                alt="熊泽江"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-2xl border border-white/10 bg-brand-gray/95 p-6 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent/10">
                  <Award className="h-6 w-6 text-brand-accent" />
                </div>
                <div>
                  <div className="font-display text-lg font-bold text-white">近5年</div>
                  <div className="text-sm text-white/60">活动策划与传播经验</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="reveal-item mb-8">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-brand-accent">
                About Me
              </p>
              <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
                关于我
              </h2>
            </div>

            <div className="reveal-item space-y-6 text-lg leading-relaxed text-white/70">
              <p>
                我是一名热爱山野与城市的00后年轻人。近5年的工作经验让我擅长从社会情绪中挖掘创意点，尝试新的活动载体和活动形式，让自己策划的每一次触达都落在消费者/用户想做的事情上。
              </p>
              <p>
                我非常相信：一场好的活动就得是一件优秀的产品——有明确的功能导向、简单明确的交互路径，以及让人忍不住想分享的体验瞬间。这也是我在甲方和乙方单位工作一直以来在不断探索的事情，期待用我的策划思维与创意，为品牌的传播阵地创造更多令人难忘的故事。
              </p>
            </div>

            <div className="reveal-item mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                <MapPin className="h-4 w-4 text-brand-accent" />
                中国·北京
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
