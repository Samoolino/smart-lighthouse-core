import { SectionLabel } from "./SectionLabel";
import { ArrowUpRight } from "lucide-react";
import community from "@/assets/community.jpg";

const cats = ["Water Safety", "Data & Intelligence", "Events", "Opportunities", "Water Products", "Producers"];

const items = [
  { cat: "Data & Intelligence", title: "How LiDAR fusion is rewriting coastal awareness", date: "Apr 2026", read: "6 min" },
  { cat: "Water Safety", title: "From detection to dispatch: a 4.2 second story", date: "Apr 2026", read: "4 min" },
  { cat: "Events", title: "Inaugurating the first LIT-A safety zone", date: "Mar 2026", read: "5 min" },
  { cat: "Opportunities", title: "Open call: design partners for Node 04", date: "Mar 2026", read: "3 min" },
  { cat: "Water Products", title: "Hydrosonde Buoy enters pilot deployment", date: "Mar 2026", read: "5 min" },
  { cat: "Producers", title: "Coastal makers shaping a circular catalogue", date: "Feb 2026", read: "7 min" },
];

export const NewsroomSection = () => {
  return (
    <section id="newsroom" className="relative py-28 bg-secondary/40">
      <div className="container">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <SectionLabel
            index="06"
            kicker="News & Signals · Newsroom"
            title="A living editorial layer for coastal intelligence."
          />
          <div className="flex flex-wrap gap-2 max-w-xl">
            {cats.map((c) => (
              <span key={c} className="text-xs px-3 py-1.5 rounded-full bg-card border border-border/60 text-foreground/70">
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Featured editorial */}
        <div className="mt-12 reveal rounded-3xl overflow-hidden bg-card shadow-deep grid lg:grid-cols-2">
          <div className="relative aspect-[4/3] lg:aspect-auto">
            <img src={community} alt="Coastal community" loading="lazy" width={1400} height={900} className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-coral">Featured · Place & Belonging</div>
              <h3 className="mt-4 font-display text-3xl md:text-4xl leading-tight">
                Structures that reflect their people: notes from the LIT-A field journal.
              </h3>
              <p className="mt-4 text-foreground/75 text-pretty">
                A long-form essay on how coastal infrastructure can carry public memory, civic identity
                and a sense of belonging — without losing operational rigor.
              </p>
            </div>
            <a href="#" className="mt-8 inline-flex items-center gap-2 text-ocean font-medium group">
              Read the field journal
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Signal cards */}
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <article key={it.title} className="reveal group rounded-3xl bg-card border border-border/60 p-6 shadow-soft hover-lift" style={{ transitionDelay: `${i * 50}ms` }}>
              <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-muted-foreground">
                <span className="text-ocean">{it.cat}</span>
                <span>{it.date}</span>
              </div>
              <h4 className="mt-3 font-display text-xl leading-snug">{it.title}</h4>
              <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-mono">{it.read} read</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-ocean" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
