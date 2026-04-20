import { ArrowRight } from "lucide-react";

export const Teasers = () => {
  const items = [
    {
      tag: "Catalogue",
      title: "Connected products, one core.",
      body: "Detection, response, control, ESG and connectivity modules — synchronized through LIT-A.",
      href: "#catalogue",
    },
    {
      tag: "Newsroom",
      title: "Signals from the coast.",
      body: "Editorial intelligence on water safety, data, events, opportunities and producers.",
      href: "#newsroom",
    },
    {
      tag: "Place",
      title: "Lighthouses that belong.",
      body: "Civic infrastructure shaped by the people who share the shoreline.",
      href: "#place",
    },
  ];

  return (
    <section className="py-24">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <a
              key={it.title}
              href={it.href}
              className="reveal group rounded-3xl bg-card border border-border/60 p-7 shadow-soft hover-lift relative overflow-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute -bottom-20 -right-16 w-48 h-48 rounded-full bg-gradient-aqua opacity-0 group-hover:opacity-25 transition-opacity duration-700 blur-3xl" />
              <div className="relative">
                <div className="text-[10px] uppercase tracking-[0.25em] text-ocean">{it.tag}</div>
                <h3 className="mt-3 font-display text-2xl leading-snug">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.body}</p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm text-foreground font-medium">
                  Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
