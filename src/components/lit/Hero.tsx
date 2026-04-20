import hero from "@/assets/hero-coast.jpg";
import { ArrowRight, Activity, Radio, Waves } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-end overflow-hidden">
      <img
        src={hero}
        alt="Coastal lighthouse over turquoise sea under daylight sky"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/0 to-white" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-transparent" />

      {/* Floating command UI overlays */}
      <div className="hidden md:block absolute top-28 right-8 lg:right-16 glass rounded-2xl p-4 shadow-glass w-72 animate-fade-in">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">LIT-A Command</span>
          <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" /> LIVE
          </span>
        </div>
        <div className="space-y-2.5">
          {[
            { icon: Radio, label: "Lighthouse N-04", val: "Online · LiDAR sweep" },
            { icon: Waves, label: "Sea state", val: "1.2m · Calm" },
            { icon: Activity, label: "Active sensors", val: "248 nodes" },
          ].map((r, i) => (
            <div key={i} className="flex items-center gap-3 text-xs">
              <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-ocean">
                <r.icon className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="font-medium">{r.label}</div>
                <div className="text-muted-foreground font-mono text-[11px]">{r.val}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:flex absolute top-44 left-8 lg:left-16 glass rounded-2xl px-4 py-3 shadow-glass items-center gap-3 animate-fade-in">
        <div className="relative">
          <div className="w-3 h-3 rounded-full bg-coral relative ring-pulse" />
        </div>
        <div className="text-xs">
          <div className="font-medium">Detect → Trigger → Respond</div>
          <div className="text-muted-foreground font-mono text-[11px]">avg. cycle 4.2s</div>
        </div>
      </div>

      <div className="container relative pb-20 md:pb-28 pt-40">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium mb-6 shadow-soft">
            <span className="w-1.5 h-1.5 rounded-full bg-aqua" />
            A system, not a structure.
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight text-balance">
            The coastline,<br />
            <span className="text-gradient-ocean italic">made intelligible.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg md:text-xl text-foreground/75 text-pretty">
            PROJECT LIT-A is an integrated ESG intelligence, control and synchronization system
            that turns coastal infrastructure into active intelligence nodes —
            smart lighthouses, AI, LiDAR, drones, robotic responders and live ESG dashboards
            working as one platform.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#system"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium hover:bg-ocean transition-colors shadow-deep"
            >
              Explore the system
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#catalogue"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-medium hover:bg-white transition-colors shadow-soft"
            >
              System Product Catalogue
            </a>
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
            {[
              ["Guardian", "Lighthouse role"],
              ["Measurable", "Sustainability"],
              ["Certain", "Safety response"],
              ["Belonging", "Place identity"],
            ].map(([k, v]) => (
              <div key={k} className="glass rounded-2xl px-4 py-3 shadow-soft">
                <div className="font-display text-xl">{k}</div>
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground mt-0.5">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
