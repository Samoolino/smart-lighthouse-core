import { useState } from "react";
import { SectionLabel } from "./SectionLabel";
import { cn } from "@/lib/utils";

const groups = [
  { key: "safety", label: "Safety teams", tech: "Live ops dashboards, dispatch APIs, training scenarios.", human: "Confidence on the shoreline. Faster, calmer response." },
  { key: "events", label: "Event organizers", tech: "Geo-fenced zones, scheduling, ESG live reporting.", human: "Public events that feel cared for, end to end." },
  { key: "policy", label: "Policymakers", tech: "Auditable ESG exports, federated standards, public data.", human: "Transparent stewardship of shared coastal commons." },
  { key: "scientists", label: "Scientists", tech: "Sensor APIs, environmental datasets, research access.", human: "Coastal data as a long-term public scientific asset." },
  { key: "communities", label: "Coastal communities", tech: "Public dashboards, alerts, identity-rooted design.", human: "Lighthouses that look and feel like home." },
  { key: "investors", label: "ESG investors", tech: "Verifiable ESG metrics and circularity reporting.", human: "Capital aligned with measurable coastal outcomes." },
  { key: "architects", label: "Architects & engineers", tech: "Open architectural call, design specs, materials.", human: "Build civic infrastructure rooted in belonging." },
  { key: "tech", label: "Technology partners", tech: "Open APIs, mesh integration, federation layer.", human: "A shared platform for coastal intelligence." },
];

export const StakeholdersSection = () => {
  const [active, setActive] = useState(groups[0].key);
  const current = groups.find((g) => g.key === active)!;

  return (
    <section id="stakeholders" className="py-28 bg-secondary/40">
      <div className="container">
        <div className="reveal">
          <SectionLabel
            index="10"
            kicker="Stakeholder Pathways"
            title="One platform. Eight ways in."
            intro="Each pathway carries both technical capability and human, public-facing value."
          />
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 grid grid-cols-2 gap-2">
            {groups.map((g) => (
              <button
                key={g.key}
                onClick={() => setActive(g.key)}
                className={cn(
                  "text-left rounded-2xl px-4 py-4 border transition-all",
                  active === g.key
                    ? "bg-foreground text-background border-foreground shadow-deep"
                    : "bg-card border-border hover:border-ocean/40"
                )}
              >
                <div className="font-display text-base leading-tight">{g.label}</div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-7 reveal">
            <div className="rounded-3xl bg-card border border-border/60 p-8 md:p-10 shadow-glass h-full">
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Pathway · {current.label}</div>
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-ocean mb-2">Technical</div>
                  <p className="font-display text-2xl leading-snug">{current.tech}</p>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-coral mb-2">Human / public value</div>
                  <p className="font-display text-2xl leading-snug">{current.human}</p>
                </div>
              </div>
              <div className="mt-8 flex items-center justify-between text-xs font-mono text-muted-foreground">
                <span>Synced through LIT-A core</span>
                <span>→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
