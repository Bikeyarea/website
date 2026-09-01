import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

interface GlobalHeaderProps {
  onNavigate?: (section: string) => void;
  showNav?: boolean;
}

export function GlobalHeader({ onNavigate, showNav = true }: GlobalHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: '核心能力', href: 'capabilities' },
    { label: '作品', href: 'work' },
    { label: '技能', href: 'skills' },
    { label: '关于', href: 'about' },
    { label: '联系', href: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(href);
    }
  };

  if (!showNav) return null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-500 ${
        scrolled
          ? 'bg-brand-dark/90 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <button
          onClick={() => handleNavClick('hero')}
          className="text-white transition-transform hover:scale-105"
        >
          <span className="font-display text-xl font-bold tracking-tight">Birkey</span>
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="group relative text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-brand-accent transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center text-white md:hidden"
          aria-label="切换菜单"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-brand-dark/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          mobileMenuOpen ? 'max-h-96 border-b border-white/5' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col gap-4 px-6 py-6">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-left text-lg font-medium text-white/80 transition-colors hover:text-brand-accent"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
