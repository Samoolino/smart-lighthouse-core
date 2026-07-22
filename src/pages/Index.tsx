import { Nav } from "@/components/lit/Nav";
import { Hero } from "@/components/lit/Hero";
import { SystemSection } from "@/components/lit/SystemSection";
import { VideoSection } from "@/components/lit/VideoSection";
import { Teasers } from "@/components/lit/Teasers";
import { CatalogueSection } from "@/components/lit/CatalogueSection";
import { ScenariosSection } from "@/components/lit/ScenariosSection";
import { EventsSection } from "@/components/lit/EventsSection";
import { NewsroomSection } from "@/components/lit/NewsroomSection";
import { CarbonSection } from "@/components/lit/CarbonSection";
import { PlaceSection } from "@/components/lit/PlaceSection";
import { ArchCallSection } from "@/components/lit/ArchCallSection";
import { StakeholdersSection } from "@/components/lit/StakeholdersSection";
import { ContactFooter } from "@/components/lit/ContactFooter";
import { useReveal } from "@/components/lit/useReveal";
import { useEffect } from "react";

const Index = () => {
  useReveal();

  useEffect(() => {
    document.title = "PROJECT LIT-A — Coastal Intelligence Platform";
    const desc = "PROJECT LIT-A is an integrated ESG intelligence and synchronization system turning coastal infrastructure into active intelligence nodes.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <VideoSection />
      <SystemSection />
      <Teasers />
      <CatalogueSection />
      <ScenariosSection />
      <EventsSection />
      <NewsroomSection />
      <CarbonSection />
      <PlaceSection />
      <ArchCallSection />
      <StakeholdersSection />
      <ContactFooter />
    </main>
  );
};

export default Index;
