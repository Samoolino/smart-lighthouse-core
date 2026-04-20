import { SectionLabel } from "./SectionLabel";
import { Leaf, Gauge, Sparkles, TimerReset } from "lucide-react";

export const CarbonSection = () => {
  return (
    <section id="carbon" className="py-28">
      <div className="container">
        <div className="reveal">
          <SectionLabel
            index="07"
            kicker="Carbon Status · Digital Sustainability"
            title="Transparency on the website itself, not only on the system it serves."
            intro="LIT-A treats its own digital footprint as part of its ESG commitment. Below is the current public-facing status."
          />
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {/* Big scorecard */}
          <div className="lg:col-span-2 reveal rounded-3xl border border-border/60 bg-card shadow-glass p-8 md:p-10 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-gradient-aqua opacity-20 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse" /> Status
              </div>
              <h3 className="mt-3 font-display text-3xl md:text-4xl leading-tight">
                Carbon measurement <span className="italic text-coral">pending live benchmark.</span>
              </h3>
              <p className="mt-4 text-foreground/75 max-w-xl">
                Digital sustainability review in progress. We are targeting lower-impact page design
                through optimized media, efficient UI architecture, and minimal third-party load —
                disclosed openly as numbers stabilize.
              </p>

              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                {[
                  { k: "Page weight", v: "Optimizing", icon: Gauge },
                  { k: "Live benchmark", v: "Pending", icon: TimerReset },
                  { k: "Design intent", v: "Lower-impact", icon: Sparkles },
                ].map((m) => (
                  <div key={m.k} className="rounded-2xl bg-secondary/60 p-4">
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground">
                      <m.icon className="w-3.5 h-3.5" /> {m.k}
                    </div>
                    <div className="font-display text-xl mt-1.5">{m.v}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-xs text-muted-foreground italic">
                Carbon transparency is part of LIT-A's ESG commitment — not a marketing claim.
              </div>
            </div>
          </div>

          {/* Side principles */}
          <div className="reveal rounded-3xl bg-gradient-ocean text-white p-8 shadow-deep relative overflow-hidden">
            <div className="absolute inset-0 grid-lines opacity-20" />
            <div className="relative">
              <Leaf className="w-7 h-7" />
              <h4 className="mt-4 font-display text-2xl">Principles in flight</h4>
              <ul className="mt-5 space-y-3 text-sm text-white/85">
                {[
                  "Optimized images and lazy media throughout",
                  "System fonts paired with one editorial face",
                  "No tracking-heavy third-party scripts",
                  "Component-level architecture for cache reuse",
                  "Public update once measurements are validated",
                ].map((p) => (
                  <li key={p} className="flex gap-2.5">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/80" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
