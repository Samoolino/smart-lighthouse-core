import { useState } from "react";
import { SectionLabel } from "./SectionLabel";
import { cn } from "@/lib/utils";
import boat from "@/assets/rescue-boat.jpg";
import drone from "@/assets/drone.jpg";

const scenarios = [
  {
    id: "swimmer",
    title: "Swimmer Distress",
    img: boat,
    steps: [
      "LiDAR detects irregular surface motion 180m offshore",
      "AI classifier flags 92% probability of distress",
      "Lighthouse optics confirm and lock target",
      "Aerial Responder D2 dispatched in <30s",
      "Robotic Surfboat R-1 routed for extraction",
      "Shoreline team auto-notified with live coordinates",
      "Incident logged, ESG event recorded for review",
    ],
  },
  {
    id: "breach",
    title: "Event-Zone Breach",
    img: drone,
    steps: [
      "Geo-fenced perimeter triggered during waterfront ceremony",
      "Optics + drone confirm unauthorized vessel",
      "Command Center alerts safety lead and zone marshals",
      "Zone audio + visual signaling activated automatically",
      "Coordinated escort routed via Robotic Surfboat",
      "Event ESG log updated, no service interruption",
    ],
  },
  {
    id: "wave",
    title: "Rough-Wave Anomaly",
    img: boat,
    steps: [
      "Hydrosonde + LiDAR flag unusual swell pattern",
      "Predictive model raises 12-min advance warning",
      "Beach signage + public app push update",
      "Event windows automatically rescheduled if active",
      "Environmental log captured for ESG report",
    ],
  },
  {
    id: "hazard",
    title: "Hazard Trigger",
    img: drone,
    steps: [
      "Pollution / debris pattern detected by buoy network",
      "Drone overflight verifies and maps the spread",
      "Local authorities and partners notified via API",
      "Containment dispatch and circular handling logged",
      "Incident closed with public transparency entry",
    ],
  },
];

export const ScenariosSection = () => {
  const [active, setActive] = useState(scenarios[0].id);
  const current = scenarios.find((s) => s.id === active)!;

  return (
    <section id="scenarios" className="relative py-28 bg-gradient-soft">
      <div className="container">
        <div className="reveal">
          <SectionLabel
            index="04"
            kicker="Safety Scenarios"
            title="Sense → Detect → Classify → Trigger → Dispatch → Recover → Report."
            intro="Real coastal situations, choreographed across the entire LIT-A platform in seconds."
          />
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
            {scenarios.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={cn(
                  "text-left rounded-2xl px-5 py-4 border transition-all min-w-[200px] lg:min-w-0",
                  active === s.id
                    ? "bg-foreground text-background border-foreground shadow-deep"
                    : "bg-card border-border hover:border-ocean/40"
                )}
              >
                <div className={cn("text-[10px] uppercase tracking-widest", active === s.id ? "opacity-70" : "text-muted-foreground")}>
                  Scenario
                </div>
                <div className="font-display text-xl mt-1">{s.title}</div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 reveal">
            <div className="rounded-3xl overflow-hidden shadow-deep bg-card">
              <div className="relative h-56 md:h-72">
                <img src={current.img} alt={current.title} loading="lazy" width={1200} height={800} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/70 to-transparent" />
                <div className="absolute bottom-4 left-5 text-white">
                  <div className="text-[10px] uppercase tracking-[0.25em] opacity-80">Live coordination</div>
                  <div className="font-display text-2xl">{current.title}</div>
                </div>
              </div>
              <ol className="p-6 md:p-8 space-y-3">
                {current.steps.map((step, i) => (
                  <li key={i} className="flex gap-4 group">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-ocean text-white text-xs font-mono flex items-center justify-center shadow-glow shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      {i < current.steps.length - 1 && <div className="w-px flex-1 bg-border mt-1" />}
                    </div>
                    <div className="pb-3 pt-1.5 text-sm md:text-base text-foreground/85">{step}</div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
