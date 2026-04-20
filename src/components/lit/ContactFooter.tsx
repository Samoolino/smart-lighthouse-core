import { Mail, Phone, ArrowUpRight } from "lucide-react";
import ocean from "@/assets/ocean-aerial.jpg";

export const ContactFooter = () => {
  return (
    <section id="contact" className="relative pt-28 pb-10 overflow-hidden">
      <div className="container">
        <div className="reveal rounded-3xl overflow-hidden relative shadow-deep">
          <img src={ocean} alt="Aerial blue ocean" loading="lazy" width={1600} height={900} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-deep/85 via-deep/65 to-ocean/40" />
          <div className="relative p-10 md:p-16 text-white grid lg:grid-cols-2 gap-10">
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] opacity-80">11 · Contact & Partner</div>
              <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-balance">
                Build the coastline that <em className="italic">remembers its people.</em>
              </h2>
              <p className="mt-5 text-white/80 max-w-md text-pretty">
                For partnership, proposals, ESG collaboration, or pilot conversations — reach the LIT-A team directly.
              </p>
            </div>

            <div className="space-y-3">
              <a href="mailto:esgsportrive@gmail.com" className="group flex items-center justify-between rounded-2xl glass-dark p-5 hover:bg-white/15 transition-colors">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <div>
                    <div className="text-[10px] uppercase tracking-widest opacity-70">Programs · ESG</div>
                    <div className="font-mono text-sm md:text-base">esgsportrive@gmail.com</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a href="mailto:italrive@gmail.com" className="group flex items-center justify-between rounded-2xl glass-dark p-5 hover:bg-white/15 transition-colors">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <div>
                    <div className="text-[10px] uppercase tracking-widest opacity-70">ITALRiVE Arc I O</div>
                    <div className="font-mono text-sm md:text-base">italrive@gmail.com</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a href="tel:+2349057091195" className="group flex items-center justify-between rounded-2xl glass-dark p-5 hover:bg-white/15 transition-colors">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <div>
                    <div className="text-[10px] uppercase tracking-widest opacity-70">Direct line</div>
                    <div className="font-mono text-sm md:text-base">+234 905 709 1195</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        <footer className="mt-10 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-ocean" />
            <span className="font-display text-foreground">PROJECT LIT-A</span>
            <span>· Coastal Intelligence Platform</span>
          </div>
          <div className="font-mono">© {new Date().getFullYear()} LIT-A · ITALRiVE Arc I O · ESG SportRive</div>
        </footer>
      </div>
    </section>
  );
};
