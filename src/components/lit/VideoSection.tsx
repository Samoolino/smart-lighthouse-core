export const VideoSection = () => {
  return (
    <section id="video" className="relative py-20 md:py-28 bg-gradient-soft">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-10 reveal">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium mb-5 shadow-soft">
            <span className="w-1.5 h-1.5 rounded-full bg-aqua" />
            Film
          </div>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-balance">
            The coastline, <span className="text-gradient-ocean italic">in motion.</span>
          </h2>
        </div>

        <div className="relative mx-auto max-w-5xl reveal">
          <div className="glass rounded-3xl p-2 md:p-3 shadow-glass">
            <div className="relative w-full overflow-hidden rounded-2xl bg-black" style={{ aspectRatio: "16 / 9" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/suneu3VdGik?rel=0&modestbranding=1&playsinline=1"
                title="PROJECT LIT-A — Film"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
