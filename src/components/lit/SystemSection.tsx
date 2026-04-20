import { SectionLabel } from "./SectionLabel";
import { Lightbulb, ShieldCheck, Leaf, BarChart3, Cpu, CloudCog } from "lucide-react";
import lighthouse from "@/assets/lighthouse.jpg";

const pillars = [
  {
    icon: Lightbulb,
    name: "Smart Lighthouse Network",
    body: "Coastal towers reframed as intelligence nodes — sensors, optics, comms and edge compute working as one mesh.",
    accent: "ocean",
  },
  {
    icon: ShieldCheck,
    name: "Safety Intelligence",
    body: "Detection, classification and response coordination from swimmer distress to event-zone breaches.",
    accent: "coral",
  },
  {
    icon: Leaf,
    name: "Environmental Intelligence",
    body: "Continuous sensing of sea state, water quality, biodiversity signals and weather risk.",
    accent: "emerald",
  },
  {
    icon: BarChart3,
    name: "ESG Reporting Engine",
    body: "Automated, auditable ESG metrics for events, infrastructure, sponsors and policymakers.",
    accent: "teal",
  },
  {
    icon: Cpu,
    name: "AI Control Stack",
    body: "Trained intelligence stack tuned for coastal contexts — perception, prediction and dispatch.",
    accent: "azure",
  },
  {
    icon: CloudCog,
    name: "Cloud Command Center",
    body: "Interoperable cloud command with open APIs, federated data, and operator dashboards.",
    accent: "ocean",
  },
];

export const SystemSection = () => {
  return (
    <section id="system" className="relative py-28 bg-gradient-soft">
      <div className="container">
        <div className="reveal">
          <SectionLabel
            index="02"
            kicker="The System"
            title="One coastal platform. Six synchronized intelligences."
            intro="LIT-A binds detection, response, environment, ESG, AI and command into a single living system — not a stack of disconnected tools."
          />
        </div>

        <div className="mt-16 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 reveal">
            <div className="relative rounded-3xl overflow-hidden shadow-deep h-full min-h-[480px]">
              <img
                src={lighthouse}
                alt="Modern smart lighthouse"
                loading="lazy"
                width={1200}
                height={1500}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-deep/10 to-transparent" />
              <div className="absolute bottom-0 p-6 text-white">
                <div className="text-[10px] uppercase tracking-[0.25em] opacity-80">Node 04 · Atlantic Arc</div>
                <div className="font-display text-3xl mt-2 leading-tight">
                  The lighthouse becomes a guardian.
                </div>
                <div className="mt-4 flex gap-4 text-xs font-mono">
                  <span className="glass-dark rounded-full px-3 py-1">LiDAR · Active</span>
                  <span className="glass-dark rounded-full px-3 py-1">Optics · 4K</span>
                  <span className="glass-dark rounded-full px-3 py-1">Edge · Online</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <div
                key={p.name}
                className="reveal group rounded-3xl bg-card p-6 border border-border/60 shadow-soft hover-lift"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className={`w-11 h-11 rounded-2xl bg-${p.accent}/10 flex items-center justify-center text-${p.accent} mb-4`}>
                  <p.icon className="w-5 h-5" />
                </div>
                <div className="font-display text-xl">{p.name}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Detect → Trigger → Respond strip */}
        <div className="mt-20 reveal">
          <div className="rounded-3xl glass shadow-glass p-6 md:p-8">
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-5">Operational loop</div>
            <div className="grid md:grid-cols-7 gap-4 items-center">
              {["Sense", "Detect", "Classify", "Trigger", "Dispatch", "Coordinate", "Report"].map((s, i, a) => (
                <div key={s} className="flex items-center gap-3 md:contents">
                  <div className="flex flex-col items-start md:items-center">
                    <div className="text-2xl font-display text-ocean">0{i + 1}</div>
                    <div className="text-sm font-medium">{s}</div>
                  </div>
                  {i < a.length - 1 && (
                    <div className="hidden md:flex items-center justify-center text-muted-foreground">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
