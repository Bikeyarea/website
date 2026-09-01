import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useMousePosition } from '@/hooks/useMousePosition';
import { asset } from '@/lib/asset';

interface HeroSectionProps {
  onNavigate?: (section: string) => void;
}

const slides = [
  { src: asset('/hero-2.jpg'), alt: '熊泽江 - 城市' },
  { src: asset('/hero-3.jpg'), alt: '熊泽江 - 公园' },
  { src: asset('/hero-4.jpg'), alt: '熊泽江 - 水上' },
  { src: asset('/hero-5.jpg'), alt: '熊泽江 - 日落' },
];

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const mouse = useMousePosition(containerRef);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.2 }
      );
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.6 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => setCurrentIndex(index);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const next = () => setCurrentIndex((prev) => (prev + 1) % slides.length);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-brand-dark px-6 pb-16 pt-24 sm:pt-28 lg:px-8"
    >
      {/* Background carousel */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="h-full w-full object-cover scale-105 animate-pulse-glow"
              style={{
                transform: `translate(${(mouse.x - (containerRef.current?.offsetWidth || 0) / 2) / 50}px, ${(mouse.y - (containerRef.current?.offsetHeight || 0) / 2) / 50}px) scale(1.05)`,
                transition: 'transform 0.3s ease-out, opacity 1s ease-in-out',
              }}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-brand-dark/40 to-brand-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-transparent to-brand-dark/60" />
      </div>

      {/* Mouse follower glow */}
      <div
        className="pointer-events-none absolute h-[400px] w-[400px] rounded-full bg-brand-accent/10 blur-[100px] transition-transform duration-700"
        style={{
          left: mouse.x - 200,
          top: mouse.y - 200,
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-brand-accent">
          洞察 · 连结 · 破圈
        </p>
        <h1
          ref={titleRef}
          className="font-display text-5xl font-bold leading-[1.1] text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          熊泽江
        </h1>
        <p
          ref={subtitleRef}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl md:text-2xl"
        >
          在理性与感性的交界处，雕琢心智，连接圈层
          <br className="hidden sm:block" />
          不用活动定义用户，而是让用户定义活动
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={() => onNavigate?.('work')}
            className="group relative overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-semibold text-brand-dark transition-all hover:shadow-glow"
          >
            <span className="relative z-10">浏览作品</span>
            <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0" />
          </button>
          <button
            onClick={() => onNavigate?.('contact')}
            className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-brand-accent hover:bg-brand-accent/10"
          >
            联系我
          </button>
        </div>
      </div>

      {/* Carousel controls */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-white/5 p-3 text-white/70 backdrop-blur-sm transition-all hover:border-brand-accent hover:text-white sm:left-8"
        aria-label="上一张"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-white/5 p-3 text-white/70 backdrop-blur-sm transition-all hover:border-brand-accent hover:text-white sm:right-8"
        aria-label="下一张"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Indicators & scroll indicator */}
      <div className="relative z-20 mt-16 flex flex-col items-center gap-6 sm:mt-24">
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === currentIndex ? 'w-8 bg-white' : 'w-4 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`切换到第 ${index + 1} 张`}
            />
          ))}
        </div>
        <button
          onClick={() => onNavigate?.('work')}
          className="animate-float text-white/50 transition-colors hover:text-brand-accent"
          aria-label="向下滚动"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
}
