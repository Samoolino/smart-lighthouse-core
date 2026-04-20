import { SectionLabel } from "./SectionLabel";
import arch from "@/assets/architecture-call.jpg";
import { ArrowRight, Award, Sparkles, Layers, Handshake } from "lucide-react";

const criteria = [
  "Rooted in local identity and belonging",
  "Achievable and construction-aware",
  "Circularity, inclusion, sustainability and materiality",
  "Operational function and public-space value",
  "Responsive to water use, energy utility and safety",
];

const rewards = [
  { icon: Award, title: "Recognition", body: "Selection as winning or featured constructable concept" },
  { icon: Sparkles, title: "Visibility", body: "Showcase across LIT-A platform and partner network" },
  { icon: Layers, title: "Design pathway", body: "Development tied to future lighthouse locations" },
  { icon: Handshake, title: "Collaboration", body: "Networks across coastal innovation and public-space design" },
];

export const ArchCallSection = () => {
  return (
    <section id="call" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />
      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 reveal">
            <div className="inline-flex items-center gap-2 rounded-full bg-coral/10 text-coral px-3 py-1 text-[11px] uppercase tracking-[0.25em] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-coral" />
              ITALRiVE Arc I O · Architectural Proposal Call
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-balance">
              Call for Submissions: <span className="italic text-gradient-ocean">Constructable Lighthouse Proposals</span> for Belonging, Safety, and Sustainable Water Futures.
            </h2>
            <p className="mt-6 text-lg text-foreground/75 max-w-2xl text-pretty">
              A proposal-led architectural call for lighthouse concepts and renderings connected to
              PROJECT LIT-A public-space and lighthouse development. Open to residents, architects,
              designers and engineers.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-3">
              {criteria.map((c, i) => (
                <div key={c} className="rounded-2xl bg-card border border-border/60 p-4 flex gap-3 shadow-soft">
                  <div className="font-mono text-xs text-ocean">{String(i + 1).padStart(2, "0")}</div>
                  <div className="text-sm text-foreground/85">{c}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-3.5 text-sm font-medium hover:bg-ocean transition-colors shadow-deep group">
                Submit a proposal
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-medium hover:bg-white transition-colors shadow-soft">
                Request the brief
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 reveal">
            <div className="relative rounded-3xl overflow-hidden shadow-deep">
              <img src={arch} alt="Architectural concept rendering of a contemporary lighthouse" loading="lazy" width={1600} height={1000} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 glass-dark text-white rounded-2xl p-4">
                <div className="text-[10px] uppercase tracking-[0.25em] opacity-80">Reference rendering</div>
                <div className="font-display text-xl mt-1">Beauty + operational utility, side by side.</div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {rewards.map((r) => (
                <div key={r.title} className="rounded-2xl bg-card border border-border/60 p-4 shadow-soft">
                  <r.icon className="w-5 h-5 text-ocean" />
                  <div className="font-display text-base mt-2">{r.title}</div>
                  <div className="text-xs text-muted-foreground mt-1">{r.body}</div>
                </div>
              ))}
              <div className="col-span-2 rounded-2xl bg-gradient-coral text-white p-4 shadow-deep">
                <div className="text-[10px] uppercase tracking-[0.25em] opacity-90">Bonus</div>
                <div className="font-display text-lg mt-1">Possible pilot consideration for implementable concepts.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
