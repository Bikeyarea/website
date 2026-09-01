import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface UseScrollAnimationOptions {
  threshold?: number;
  delay?: number;
  y?: number;
  duration?: number;
  stagger?: number;
}

export function useScrollAnimation<T extends HTMLElement>(
  options: UseScrollAnimationOptions = {}
) {
  const ref = useRef<T>(null);
  const {
    threshold = 0.2,
    delay = 0,
    y = 30,
    duration = 0.8,
    stagger = 0.1,
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const children = element.querySelectorAll('.reveal-item');
    const targets = children.length > 0 ? children : [element];

    gsap.set(targets, { opacity: 0, y });

    const triggers: ScrollTrigger[] = [];

    targets.forEach((target, index) => {
      const tween = gsap.to(target, {
        opacity: 1,
        y: 0,
        duration,
        delay: delay + index * stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: target,
          start: `top ${100 - threshold * 100}%`,
          toggleActions: 'play none none none',
        },
      });
      if (tween.scrollTrigger) {
        triggers.push(tween.scrollTrigger);
      }
    });

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, [threshold, delay, y, duration, stagger]);

  return ref;
}

export function useParallax<T extends HTMLElement>(speed: number = 0.5) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const tween = gsap.to(element, {
      yPercent: speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [speed]);

  return ref;
}
