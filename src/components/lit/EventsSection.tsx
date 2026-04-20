import { SectionLabel } from "./SectionLabel";
import { Trophy, Sparkles, Users2 } from "lucide-react";

export const EventsSection = () => {
  return (
    <section id="events" className="py-28">
      <div className="container">
        <div className="reveal">
          <SectionLabel
            index="05"
            kicker="Events + ESG"
            title="From sport to ceremony — live coastal intelligence with auditable ESG."
            intro="Sustainability becomes measurable. Every event is instrumented, scored, and reported in the same coherent platform."
          />
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-5">
          {[
            { icon: Trophy, title: "Sports competitions", body: "Open-water races, sailing, surfing — live safety and performance telemetry across the venue." },
            { icon: Sparkles, title: "Waterfront ceremonies", body: "Inaugurations and civic activations with safety, signage and ESG choreographed end-to-end." },
            { icon: Users2, title: "Public coastal activations", body: "Educational, cultural and community events with measured social and environmental impact." },
          ].map((c, i) => (
            <div key={c.title} className="reveal rounded-3xl border border-border/60 bg-card p-7 shadow-soft hover-lift" style={{ transitionDelay: `${i * 70}ms` }}>
              <div className="w-12 h-12 rounded-2xl bg-gradient-aqua text-white flex items-center justify-center mb-4">
                <c.icon className="w-5 h-5" />
              </div>
              <div className="font-display text-2xl">{c.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>

        {/* ESG dashboard mock */}
        <div className="mt-12 reveal rounded-3xl border border-border/60 bg-card shadow-glass p-6 md:p-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Live ESG Scorecard · Sample event</div>
              <div className="font-display text-3xl mt-2">Atlantic Open · Day 2</div>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
              Streaming
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-4 gap-4">
            {[
              { k: "Water impact index", v: "A-", sub: "Stable · 12 sensors" },
              { k: "Carbon per attendee", v: "1.4 kg", sub: "−18% vs. baseline" },
              { k: "Circularity rate", v: "76%", sub: "Materials recovered" },
              { k: "Safety incidents", v: "0", sub: "Auto-coordinated" },
            ].map((m) => (
              <div key={m.k} className="rounded-2xl bg-secondary/60 p-5">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{m.k}</div>
                <div className="font-display text-3xl text-ocean mt-1">{m.v}</div>
                <div className="text-xs text-muted-foreground mt-0.5 font-mono">{m.sub}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid md:grid-cols-7 gap-1.5 h-24 items-end">
            {Array.from({ length: 28 }).map((_, i) => (
              <div
                key={i}
                className="rounded-md bg-gradient-ocean opacity-80"
                style={{ height: `${30 + ((i * 13) % 70)}%` }}
              />
            ))}
          </div>
          <div className="mt-3 text-[10px] uppercase tracking-widest text-muted-foreground">Sponsor + investor + government export · ready</div>
        </div>
      </div>
    </section>
  );
};
