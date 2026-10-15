"use client";

import { useState } from "react";
import { Flame, Leaf, Clock, Award } from "lucide-react";
import { MENU_CATEGORIES } from "@/lib/content";
import { useNav } from "@/lib/nav-store";
import { cn } from "@/lib/utils";
import { PageHeader } from "@/components/mrunmayee/page-header";

const MENU_FILTER_LABELS: Record<string, string> = {
  "pethatla-nashta": "Morning Breakfast",
  "gharghuti-jevan": "Homestyle Meals",
  "god-ghoshti": "Traditional Sweets",
  "chaha-ani-bakery": "Chai Bakery",
  "pethchi-baithak": "Cooling Drinks",
  "puneri-mejwani": "Special Thalis",
  "chhotyansathi-pan-khas-ghas": "Kids Menu",
};

/** Menus view: authentic Puneri dishes, seasonal offerings, and traditional thalis */
export function MenusView() {
  const { setContactOpen } = useNav();
  const [active, setActive] = useState<string>("pethatla-nashta");

  const current =
    MENU_CATEGORIES.find((c) => c.id === active) ?? MENU_CATEGORIES[0];

  return (
    <div className="bg-cream">
      <PageHeader
        eyebrow="अस्सल पुणेरी मेनू · Mrunmayee Menus"
        title="Punyatla Swaad. Manapasun."
        description="From morning misal and hand-patted thalipeeth to rustic pithla-bhakri, slow-braised bharli vangi, and festive modaks. Cooked with stone-ground masalas, cold-pressed oils, and pure cow ghee."
        ctaLabel="Book a Baithak"
        ctaOpensContact
      />

      {/* Category tabs - 2 words only in English */}
      <section className="sticky top-[64px] lg:top-[76px] z-30 bg-cream/95 backdrop-blur border-b-2 border-maroon/25 shadow-sm">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="flex gap-2 overflow-x-auto py-3 -mx-1 px-1 no-scrollbar">
            {MENU_CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={cn(
                  "shrink-0 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all border cursor-pointer select-none",
                  active === c.id
                    ? "bg-maroon text-cream border-maroon shadow-sm"
                    : "bg-card text-maroon border-maroon/20 hover:border-maroon/50 hover:bg-maroon/5",
                )}
              >
                <span>{MENU_FILTER_LABELS[c.id] ?? c.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu content: items list (left) + category notes & wada philosophy (right sidebar) */}
      <section className="bg-cream py-8 lg:py-14">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_360px] gap-8 lg:gap-14 items-start">
            {/* LEFT: Menu items list */}
            <div className="space-y-8 lg:space-y-10 max-w-[780px]">
              {current.items.map((item, i) => (
                <article key={i} className="group pb-6 border-b border-maroon/10 last:border-b-0">
                  {/* Name + Marathi name + dotted leader + price */}
                  <div className="flex items-baseline gap-2 sm:gap-3 flex-wrap sm:flex-nowrap">
                    <div className="flex items-baseline gap-2">
                      <h3 className="font-display text-xl lg:text-2xl font-semibold text-maroon leading-tight">
                        {item.name}
                      </h3>
                      {item.marathiName && (
                        <span className="font-display text-sm text-saffron font-medium">
                          ({item.marathiName})
                        </span>
                      )}
                    </div>
                    <span className="hidden sm:flex flex-1 border-b border-dotted border-maroon/30 mb-1.5" />
                    <p className="font-display text-lg lg:text-xl text-saffron font-bold whitespace-nowrap ml-auto sm:ml-0">
                      {item.price}
                    </p>
                  </div>
                  {/* Description */}
                  <p className="mt-2 text-sm lg:text-[15px] text-maroon/75 leading-relaxed">
                    {item.description}
                  </p>
                  {/* Tags */}
                  {item.tags && item.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {item.tags.map((t) => {
                        const isVegan = /vegan|vegetarian/i.test(t);
                        const isSpicy = /spicy|hot|fiery/i.test(t);
                        const isSpecial = /special|heirloom|signature|prasad/i.test(t);
                        const Icon = isSpecial ? Award : isVegan ? Leaf : isSpicy ? Flame : Clock;
                        return (
                          <span
                            key={t}
                            className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-maroon/5 border border-maroon/15 text-[10px] tracking-widest uppercase text-maroon/70 font-medium"
                          >
                            <Icon className="h-3 w-3 text-saffron" />
                            {t}
                          </span>
                        );
                      })}
                    </div>
                  )}
                </article>
              ))}
            </div>

            {/* RIGHT: Category description + Wada Kitchen notes */}
            <aside className="lg:sticky lg:top-[140px] space-y-6">
              {/* Category card */}
              <div className="p-6 bg-card rounded-[2px] border border-maroon/15">
                <p className="text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.45em] uppercase text-saffron font-bold mb-1">
                  Category Note
                </p>
                <h4 className="font-display text-2xl font-semibold text-maroon mb-1">
                  {current.title}
                </h4>
                <p className="font-display text-sm text-saffron mb-3 italic">
                  {current.marathiTitle}
                </p>
                <p className="text-xs sm:text-sm text-maroon/80 leading-relaxed">
                  {current.description}
                </p>
              </div>

              {/* Wada Kitchen Philosophy */}
              <div className="p-6 bg-maroon text-cream rounded-[2px] space-y-3">
                <p className="text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.45em] uppercase text-saffron font-bold">
                  आमची स्वयंपाक परंपरा
                </p>
                <h4 className="font-display text-xl font-semibold text-cream">
                  The Wada Kitchen Way
                </h4>
                <p className="text-xs text-cream/85 leading-relaxed">
                  We crush all our chutneys and thechas in heavy stone khalbattas. Our goda masala is
                  prepared following heirloom family proportions with cold-pressed peanut oil and
                  A2 cow ghee.
                </p>
                <div className="pt-2 border-t border-cream/15 text-xs text-saffron font-medium">
                  या, बसा. जेवून घ्या.
                </div>
              </div>

              {/* Quick booking CTA */}
              <button
                onClick={() => setContactOpen(true)}
                className="w-full py-3.5 px-6 rounded-full bg-saffron text-maroon font-semibold text-sm hover:bg-saffron/90 transition-colors text-center"
              >
                Reserve a Table for This Meal
              </button>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
