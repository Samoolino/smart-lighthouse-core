import { SectionLabel } from "./SectionLabel";
import community from "@/assets/community.jpg";

export const PlaceSection = () => {
  return (
    <section id="place" className="relative py-28 bg-secondary/40 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 reveal">
            <div className="relative rounded-3xl overflow-hidden shadow-deep">
              <img src={community} alt="Coastal community at the waterfront" loading="lazy" width={1400} height={900} className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 right-4 glass rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Place identity</div>
                  <div className="font-display text-lg">Belonging is infrastructure.</div>
                </div>
                <div className="text-2xl">⌖</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 reveal">
            <SectionLabel
              index="08"
              kicker="Place, Belonging & Lighthouse Identity"
              title="Lighthouses should reflect the people who live with them."
              intro="LIT-A treats lighthouse position and design as civic acts — never generic infrastructure. Each tower is shaped by local memory, materials and meaning."
            />
            <div className="mt-8 space-y-3">
              {[
                "Designed with — not for — coastal communities",
                "Public memory and local craft inform materials and form",
                "Functional clarity without erasing cultural identity",
                "A guardian that the community recognizes as its own",
              ].map((p) => (
                <div key={p} className="flex items-start gap-3 rounded-2xl bg-card border border-border/60 p-4 shadow-soft">
                  <div className="w-2 h-2 rounded-full bg-coral mt-2 shrink-0" />
                  <span className="text-sm text-foreground/85">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
