interface Props {
  index: string;
  title: string;
  kicker?: string;
  intro?: string;
  align?: "left" | "center";
}

export const SectionLabel = ({ index, title, kicker, intro, align = "left" }: Props) => (
  <div className={align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}>
    <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground uppercase tracking-[0.2em]">
      <span className="text-ocean">{index}</span>
      <span className="h-px w-10 bg-border" />
      {kicker && <span>{kicker}</span>}
    </div>
    <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-balance">
      {title}
    </h2>
    {intro && <p className="mt-5 text-lg text-foreground/70 text-pretty">{intro}</p>}
  </div>
);
