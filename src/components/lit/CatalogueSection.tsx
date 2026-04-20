import { useMemo, useState } from "react";
import { SectionLabel } from "./SectionLabel";
import { Radar, LifeBuoy, Network, BarChart, PlugZap, ChevronRight, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { key: "all", label: "All", icon: Filter },
  { key: "Detection & Sensing", label: "Detection & Sensing", icon: Radar },
  { key: "Response & Rescue", label: "Response & Rescue", icon: LifeBuoy },
  { key: "Control & Coordination", label: "Control & Coordination", icon: Network },
  { key: "ESG & Intelligence", label: "ESG & Intelligence", icon: BarChart },
  { key: "Connectivity Layer", label: "Connectivity Layer", icon: PlugZap },
] as const;

type Status = "active" | "pilot" | "planned" | "future";

const products: {
  name: string;
  cat: typeof categories[number]["key"];
  fn: string;
  conn: string;
  trigger: string;
  sync: string;
  use: string;
  status: Status;
}[] = [
  { name: "LIT-Sense L4 LiDAR Array", cat: "Detection & Sensing", fn: "360° coastal LiDAR sweep + thermal fusion", conn: "Mesh + 5G", trigger: "Anomaly classifier", sync: "Drone, Boat, Command", use: "Swimmer distress, debris", status: "active" },
  { name: "Hydrosonde Buoy", cat: "Detection & Sensing", fn: "Water quality + acoustic sensing", conn: "LoRaWAN", trigger: "Threshold + ML drift", sync: "Env. dashboard", use: "Pollution events", status: "active" },
  { name: "Aerial Responder D2", cat: "Response & Rescue", fn: "Autonomous coastal patrol drone", conn: "5G + satellite", trigger: "Dispatch from Command", sync: "Lighthouse optics", use: "First-eye on incident", status: "active" },
  { name: "Robotic Surfboat R-1", cat: "Response & Rescue", fn: "Self-righting rescue craft, dual flotation deploy", conn: "Mesh + LTE", trigger: "Coordinated dispatch", sync: "Drone overwatch", use: "Rapid extraction", status: "pilot" },
  { name: "Smart Flotation Cannon", cat: "Response & Rescue", fn: "Precision-aimed flotation projectile from shore", conn: "Local mesh", trigger: "Lighthouse optics + AI", sync: "Boat + team", use: "Surf-zone rescue", status: "planned" },
  { name: "Coastal Command OS", cat: "Control & Coordination", fn: "Operator dashboard + multi-asset orchestration", conn: "Cloud", trigger: "Manual + auto", sync: "All system modules", use: "Live operations", status: "active" },
  { name: "Event Zone Controller", cat: "Control & Coordination", fn: "Geo-fenced zone logic for events & ceremonies", conn: "Cloud + edge", trigger: "Schedule + breach", sync: "Drones, signage, comms", use: "Sports + ceremonies", status: "active" },
  { name: "ESG Reporting Engine", cat: "ESG & Intelligence", fn: "Auditable ESG scoring with circularity metrics", conn: "API", trigger: "Continuous", sync: "Sponsor + policy export", use: "Investor reporting", status: "active" },
  { name: "Carbon Pulse Module", cat: "ESG & Intelligence", fn: "Per-event carbon footprint + offset tracking", conn: "API", trigger: "Event lifecycle", sync: "Reporting Engine", use: "Live event ESG", status: "pilot" },
  { name: "Bio-Signal Index", cat: "ESG & Intelligence", fn: "Biodiversity + water-life proxy index", conn: "API", trigger: "Daily window", sync: "Public dashboards", use: "Env. transparency", status: "planned" },
  { name: "LIT-A Mesh Gateway", cat: "Connectivity Layer", fn: "Edge gateway bridging LoRa / Mesh / 5G / Sat", conn: "Multi-radio", trigger: "Always on", sync: "All sensors + assets", use: "Backbone connectivity", status: "active" },
  { name: "Open API & Federation", cat: "Connectivity Layer", fn: "Open standards for partner integration", conn: "REST + MQTT", trigger: "On request", sync: "External systems", use: "Government, academic", status: "future" },
];

const statusColors: Record<Status, string> = {
  active: "bg-emerald/10 text-emerald border-emerald/30",
  pilot: "bg-aqua/10 text-azure border-aqua/30",
  planned: "bg-coral/10 text-coral border-coral/30",
  future: "bg-muted text-muted-foreground border-border",
};

export const CatalogueSection = () => {
  const [active, setActive] = useState<typeof categories[number]["key"]>("all");
  const filtered = useMemo(
    () => (active === "all" ? products : products.filter((p) => p.cat === active)),
    [active]
  );

  return (
    <section id="catalogue" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />
      <div className="container relative">
        <div className="flex flex-wrap items-end justify-between gap-6 reveal">
          <SectionLabel
            index="03"
            kicker="System Product Utility Catalogue"
            title="A connected ecosystem, not a procurement list."
          />
          <div className="max-w-md text-sm text-muted-foreground italic font-display text-lg leading-snug">
            “A growing catalogue of connected safety, sensing, response, and control products designed
            to work through the LIT-A intelligence core.”
          </div>
        </div>

        {/* Filter tabs */}
        <div className="mt-10 reveal flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all",
                active === c.key
                  ? "bg-foreground text-background border-foreground shadow-deep"
                  : "bg-card border-border hover:border-ocean/50 hover:text-ocean"
              )}
            >
              <c.icon className="w-3.5 h-3.5" />
              {c.label}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p, i) => (
            <article
              key={p.name}
              className="reveal group relative rounded-3xl bg-card border border-border/60 p-6 shadow-soft hover-lift overflow-hidden"
              style={{ transitionDelay: `${(i % 6) * 50}ms` }}
            >
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-aqua opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-2xl" />
              <div className="flex items-start justify-between gap-3">
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{p.cat}</div>
                <span className={cn("text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border", statusColors[p.status])}>
                  {p.status}
                </span>
              </div>
              <h3 className="mt-3 font-display text-2xl leading-tight">{p.name}</h3>
              <p className="mt-2 text-sm text-foreground/80">{p.fn}</p>

              <dl className="mt-5 space-y-1.5 text-xs font-mono">
                {[
                  ["Connectivity", p.conn],
                  ["Trigger", p.trigger],
                  ["Synced with", p.sync],
                  ["Use case", p.use],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-3 border-t border-dashed border-border/70 pt-1.5">
                    <dt className="w-24 text-muted-foreground uppercase tracking-wider">{k}</dt>
                    <dd className="flex-1 text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-5 inline-flex items-center gap-1 text-xs text-ocean font-medium">
                Module spec <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </article>
          ))}
        </div>

        {/* Connected systems view */}
        <div className="mt-16 reveal rounded-3xl bg-gradient-ocean p-1 shadow-deep">
          <div className="rounded-[22px] bg-deep/95 text-white p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 grid-lines opacity-20" />
            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] opacity-70">Connected systems view</div>
                <h3 className="mt-3 font-display text-3xl md:text-4xl">All modules speak through one core.</h3>
                <p className="mt-4 text-white/75 text-pretty">
                  Every catalogue product synchronizes through the LIT-A intelligence core — meaning a
                  single detection event can simultaneously trigger optics, drones, boats, dashboards,
                  ESG logs and stakeholder alerts.
                </p>
              </div>
              <div className="relative h-64 md:h-72">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-56 h-56 rounded-full border border-white/30 flex items-center justify-center animate-float-slow">
                    <div className="absolute inset-6 rounded-full border border-white/20" />
                    <div className="absolute inset-12 rounded-full border border-white/15" />
                    <div className="px-4 py-2 rounded-full glass-dark text-sm font-mono">LIT-A Core</div>
                  </div>
                </div>
                {["Sense", "Respond", "Control", "Report", "Connect"].map((label, i, a) => {
                  const angle = (i / a.length) * Math.PI * 2 - Math.PI / 2;
                  const x = Math.cos(angle) * 130;
                  const y = Math.sin(angle) * 130;
                  return (
                    <div
                      key={label}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                      style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                    >
                      <div className="px-3 py-1.5 rounded-full bg-white text-deep text-xs font-medium shadow-glow">
                        {label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
