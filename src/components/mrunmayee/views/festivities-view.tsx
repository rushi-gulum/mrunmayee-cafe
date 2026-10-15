"use client";

import { ArrowRight, Flame, Gift, Calendar, Sparkles } from "lucide-react";
import { FESTIVALS } from "@/lib/content";
import { useNav } from "@/lib/nav-store";
import { PageHeader } from "@/components/mrunmayee/page-header";

/** Dedicated Festivities page celebrating Pune's grand seasonal festivals */
export function FestivitiesView() {
  const { setContactOpen } = useNav();
  return (
    <div className="bg-cream">
      <PageHeader
        eyebrow="पुण्यातील सण आणि उत्सव · Pune Festivities"
        title="Pune's living traditions, and a seat at every one of them."
        description="From the ten days of Ganeshotsav and dawn ragas of Diwali Pahat to the all-night winter melodies of Sawai Gandharva. Mrunmayee marks every season with steaming modaks, fresh faral, and generous hospitality. Ya, basa. Jevun ghya."
        ctaLabel="Reserve a Festival Table"
        ctaOpensContact
      />

      {/* Festival cards */}
      <section className="bg-cream py-12 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 space-y-12 lg:space-y-16">
          {FESTIVALS.map((f, i) => (
            <article
              key={f.id}
              className={`grid lg:grid-cols-2 gap-6 lg:gap-12 items-center ${
                i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
              }`}
            >
              <figure className="relative overflow-hidden rounded-[2px] aspect-[16/10] lg:aspect-[4/3] shadow-xl wada-frame">
                <img
                  src={f.image}
                  alt={f.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-cream/95 text-maroon text-[10px] tracking-widest uppercase font-bold">
                  {f.when}
                </div>
              </figure>
              <div>
                <p className="text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.45em] uppercase text-saffron font-bold mb-2">
                  {f.when}
                </p>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-maroon leading-tight">
                  {f.title}
                </h2>
                <p className="font-display text-base text-saffron mt-1 font-medium">
                  {f.marathiTitle}
                </p>
                <p className="mt-4 text-maroon/80 text-[15px] leading-relaxed">
                  {f.blurb}
                </p>
                <button
                  onClick={() => setContactOpen(true)}
                  className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-maroon text-cream font-semibold text-sm tracking-wide hover:bg-saffron hover:text-maroon transition-colors"
                >
                  {f.cta}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Seasonal Traditions highlight */}
      <section className="bg-maroon text-cream py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 paper-grain opacity-25" />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-10">
            <p className="text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.45em] uppercase text-saffron font-bold mb-2">
              सणासुदीचा आनंद
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-balance">
              Festive menus, ukadiche modaks, and homemade Diwali faral.
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: Flame,
                label: "Festive Mejwani",
                sub: "Abundant multi-course feasts for families and tables of four or more, served on traditional bronze kansa plates with endless refills of amti and chaha.",
              },
              {
                icon: Gift,
                label: "Tambat Ali Hampers",
                sub: "Artisanal hand-beaten brassware, stone-ground goda masala, and pure A2 gir cow ghee packed in handcrafted fabric gift boxes.",
              },
              {
                icon: Sparkles,
                label: "Diwali Pahat Faral",
                sub: "Spicy crisp chaklis, flaky karanji, sweet anarse, besan ladoos, and poha chivda prepared lovingly following time-tested Maharashtrian recipes.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="p-6 rounded-[2px] bg-cream/5 border border-cream/15 hover:bg-cream/10 transition-colors"
              >
                <s.icon className="h-8 w-8 text-saffron" />
                <p className="font-display text-2xl mt-4 font-semibold text-cream">{s.label}</p>
                <p className="text-sm text-cream/80 mt-2.5 leading-relaxed">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maharashtrian festival calendar strip */}
      <section className="bg-cream py-12 lg:py-16">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="h-6 w-6 text-saffron" />
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-maroon">
              The Pune Cultural &amp; Festive Calendar
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { m: "Chaitra (Apr)", e: "Gudi Padwa", note: "Puran Poli & Shrikhand" },
              { m: "Ashadh (Jul)", e: "Pandharpur Wari", note: "Palkhi in Pune" },
              { m: "Bhadrapad (Aug-Sep)", e: "Ganeshotsav", note: "Modak Seva (10 days)" },
              { m: "Ashwin (Oct)", e: "Kojagiri Purnima", note: "Masala Dudh" },
              { m: "Kartik (Nov)", e: "Diwali Pahat", note: "Dawn Faral & Music" },
              { m: "Margashirsha (Dec)", e: "Sawai Gandharva", note: "All-night Chaha" },
            ].map((c, i) => (
              <div key={i} className="p-4 rounded-[2px] bg-card border border-maroon/10 text-center">
                <p className="text-[10px] tracking-widest uppercase text-saffron font-bold">{c.m}</p>
                <p className="font-display text-base font-semibold text-maroon mt-1">{c.e}</p>
                <p className="text-[11px] text-maroon/70 mt-1 italic">{c.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
