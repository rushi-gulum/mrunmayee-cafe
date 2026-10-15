"use client";

import { Hero } from "@/components/mrunmayee/hero";
import { StorySection } from "@/components/mrunmayee/story-section";
import { ComfortFoodSection } from "@/components/mrunmayee/comfort-food";
import { PlacesSection } from "@/components/mrunmayee/places-section";
import { MarathiPhrasebook } from "@/components/mrunmayee/marathi-phrasebook";
import { ContactSection } from "@/components/mrunmayee/contact-section";

/**
 * Mrunmayee Home view:
 * A rich, authentic journey through Pune's culinary heritage, wada architecture,
 * peth culture, and warm Maharashtrian hospitality.
 */
export function HomeView() {
  return (
    <>
      <Hero />
      <StorySection />
      <ComfortFoodSection />
      <PlacesSection />
      <MarathiPhrasebook />
      <ContactSection />
    </>
  );
}
