import { type ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const capabilities: { number: string; title: string; text: ReactNode }[] = [
  {
    number: '01',
    title: '品牌营销实战派',
    text: (
      <>
        <strong className="font-semibold text-white/80">
          mont·bell品牌市场营销经验、3年全案营销策划经验，从策略到落地都跑过完整的闭环。
        </strong>
        在mont·bell期间，我主要负责市场活动的品牌内容输出及线上传播。此前曾是宜宾本地生活头部公司——大宜宾的资深策划，服务华润万象生活、盼库奥特莱斯等品牌落地宜宾的全案营销策划及落地执行。
      </>
    ),
  },
  {
    number: '02',
    title: '策略思考与用户共情',
    text: '具有策略思考能力，与用户共情能力强。我对用户的情绪和需求比较敏感，近1年的品牌市场经验及3年的本地生活经验让我明白什么内容、什么玩法能让用户共情、能让用户转发传播，也是长期共情练出来的直觉。',
  },
  {
    number: '03',
    title: '内容执行力',
    text: (
      <>
        内容执行力强。<strong className="font-semibold text-white/80">负责mont·bell微信生态内容策划、制作、发布，工作内容涵盖产品、品牌、会员等内容</strong>，对户外、运动、生活方式有较为深刻的认知。
      </>
    ),
  },
];

export function CapabilitiesSection() {
  const sectionRef = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id="capabilities"
      ref={sectionRef}
      className="bg-brand-dark py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="reveal-item">
          <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
            我的核心能力
          </h2>
          <p className="mt-3 text-lg text-white/60">
            策略 · 共情 · 执行 —— 闭环驱动
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3">
          {capabilities.map((item, index) => (
            <div
              key={item.number}
              className="reveal-item group flex flex-col rounded-2xl border border-white/[0.08] bg-[#11141c] p-8 transition-all hover:-translate-y-2 hover:border-brand-accent hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] sm:p-10 sm:pt-10"
              style={{
                transitionDuration: '400ms',
                transitionTimingFunction: 'cubic-bezier(0.25,0.46,0.45,0.94)',
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <span
                className="font-display text-5xl font-bold leading-none text-brand-accent/20"
                aria-hidden="true"
              >
                {item.number}
              </span>
              <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
              <div className="mt-4">
                <p className="text-[15px] leading-[1.8] text-[#a0a8b8]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
