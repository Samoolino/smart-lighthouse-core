import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#system", label: "System" },
  { href: "#catalogue", label: "Catalogue" },
  { href: "#scenarios", label: "Scenarios" },
  { href: "#events", label: "Events + ESG" },
  { href: "#newsroom", label: "Newsroom" },
  { href: "#carbon", label: "Carbon" },
  { href: "#place", label: "Place" },
  { href: "#call", label: "Arc I O Call" },
  { href: "#stakeholders", label: "Stakeholders" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="container">
        <div
          className={cn(
            "flex items-center justify-between rounded-full px-4 md:px-6 py-3 transition-all duration-500",
            scrolled ? "glass shadow-glass" : "bg-transparent"
          )}
        >
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 rounded-full bg-gradient-ocean flex items-center justify-center shadow-glow">
              <div className="absolute inset-1 rounded-full border border-white/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg font-semibold tracking-tight">PROJECT LIT-A</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Coastal Intelligence</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 text-sm text-foreground/75 hover:text-ocean rounded-full hover:bg-secondary/70 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-ocean transition-colors"
          >
            Contact
          </a>

          <button
            className="lg:hidden p-2 rounded-full glass"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden mt-3 glass rounded-3xl p-4 shadow-glass animate-fade-in">
            <div className="grid grid-cols-2 gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-2xl text-sm text-foreground/80 hover:bg-secondary"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="col-span-2 mt-1 px-4 py-3 rounded-2xl text-sm font-medium bg-foreground text-background text-center"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
