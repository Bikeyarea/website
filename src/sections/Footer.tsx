interface FooterProps {
  onNavigate?: (section: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-brand-dark py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <button
            onClick={() => onNavigate?.('hero')}
            className="text-white transition-opacity hover:opacity-80"
          >
            <span className="font-display text-lg font-bold">Birkey</span>
          </button>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
            {['核心能力', '作品', '技能', '关于', '联系'].map((item, index) => {
              const hrefs = ['capabilities', 'work', 'skills', 'about', 'contact'];
              return (
                <button
                  key={item}
                  onClick={() => onNavigate?.(hrefs[index])}
                  className="transition-colors hover:text-brand-accent"
                >
                  {item}
                </button>
              );
            })}
          </nav>

          <p className="text-sm text-white/40">
            © {currentYear} 熊泽江. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
