import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Mail, MessageCircle, Phone } from 'lucide-react';

interface CTASectionProps {
  onNavigate?: (section: string) => void;
}

const contacts = [
  { icon: Mail, label: 'Email', value: 'Birkeyarea@163.com', href: 'mailto:Birkeyarea@163.com' },
  { icon: MessageCircle, label: 'Wechat', value: 'Unique_byte', href: '#' },
  { icon: Phone, label: 'Phone', value: '86-18682593183', href: 'tel:8618682593183' },
];

export function CTASection({ onNavigate }: CTASectionProps) {
  const sectionRef = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden bg-brand-dark py-24 sm:py-32 lg:py-40"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-brand-accent/5 blur-[120px]" />
        <div className="absolute -right-1/4 bottom-1/4 h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <div className="reveal-item">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-brand-accent">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            开始一段新合作
          </h2>
        </div>

        <div className="reveal-item mt-12 grid gap-4 sm:grid-cols-3">
          {contacts.map((contact) => {
            const Icon = contact.icon;
            return (
              <a
                key={contact.label}
                href={contact.href}
                className="group flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-6 text-white transition-all duration-300 hover:border-brand-accent/30 hover:bg-brand-accent/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent/10 transition-colors group-hover:bg-brand-accent/20">
                  <Icon className="h-5 w-5 text-brand-accent" />
                </div>
                <div className="mt-4 text-sm text-white/50">{contact.label}</div>
                <div className="mt-1 text-base font-medium text-white">{contact.value}</div>
              </a>
            );
          })}
        </div>

        <div className="reveal-item mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={() => onNavigate?.('work')}
            className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-brand-accent hover:bg-brand-accent/10"
          >
            查看作品
          </button>
        </div>
      </div>
    </section>
  );
}
