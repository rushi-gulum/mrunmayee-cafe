"use client";

import { useNav } from "@/lib/nav-store";
import { ArrowRight } from "lucide-react";
import { PUNE_FOODS } from "@/lib/content";

/** Puneri comfort food section: authentic regional recipes, photo grid & editorial copy */
export function ComfortFoodSection() {
  const { setView } = useNav();
  return (
    <>
      {/* SECTION 1: 6-Food Regional Comfort Food Grid (Full Viewport Screen) */}
      <section
        id="food"
        className="bg-maroon text-cream min-h-0 lg:min-h-[100dvh] flex flex-col justify-center py-10 sm:py-12 lg:py-14 relative overflow-x-clip snap-start scroll-mt-20"
      >
        {/* Paper grain */}
        <div className="absolute inset-0 paper-grain opacity-25 pointer-events-none" />

        {/* Top soft blend from cream into chocolate maroon */}
        <div className="absolute top-0 left-0 right-0 h-14 sm:h-20 bg-gradient-to-b from-cream/20 via-maroon/50 to-transparent pointer-events-none" />

        <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-10 w-full my-auto">
          <div className="grid lg:grid-cols-[1fr_1.8fr] gap-8 lg:gap-12 items-center">
            {/* Left header */}
            <div>
              <p className="text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.45em] uppercase text-saffron font-medium mb-3">
                अस्सल पुणेरी स्वाद · Puneri Comfort Food
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-semibold leading-[1.05] text-balance">
                Every dish carries the aroma of a Pune kitchen.
              </h2>
              <p className="mt-4 text-cream/90 text-[14px] leading-relaxed max-w-prose">
                At Mrunmayee, you taste the genuine food of Pune: from quiet morning wada courtyards
                to the buzzing addas of Fergusson College Road. Here, food is steeped in tradition and
                care: the fiery red tarri of a steaming Puneri misal, crisp kothimbir vadi straight
                from the iron kadai, and hand-patted jowar bhakri accompanied by a spoonful of spicy
                garlic kharda.
              </p>
              <p className="mt-3 text-cream/90 text-[14px] leading-relaxed max-w-prose">
                We slow-cook with stone-ground goda masala, cold-pressed peanut oil, and pure cow ghee.
                No shortcuts, no compromises. Just honest, soulful Maharashtrian hospitality.
              </p>

              <button
                onClick={() => setView("menus")}
                className="group mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-saffron text-maroon font-semibold text-xs sm:text-sm tracking-wide hover:bg-cream transition-all shadow-lg shadow-saffron/10"
              >
                View full menu
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="mt-4 font-display italic text-cream/80 text-xs">
                ABOVE: Morning Amruttulya Chaha &amp; Kande Pohe, Pune
              </p>
            </div>

            {/* Right: image grid (aspect-ratio calibrated to fit all 6 in 1 screen) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
              {PUNE_FOODS.slice(0, 6).map((f, i) => (
                <figure
                  key={f.id}
                  className={`group relative overflow-hidden rounded-[2px] wada-frame ${
                    i === 0 ? "col-span-2 row-span-2 aspect-[16/10]" : "aspect-[16/10]"
                  }`}
                >
                  <img
                    src={f.image}
                    alt={f.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon via-maroon/60 to-transparent" />
                  <figcaption className="absolute bottom-0 left-0 right-0 p-2 sm:p-2.5">
                    <p
                      className={`font-display font-semibold text-cream leading-tight ${
                        i === 0 ? "text-base sm:text-lg" : "text-xs sm:text-sm"
                      }`}
                    >
                      {f.name}
                    </p>
                    <p className="text-[9.5px] sm:text-[10.5px] text-saffron leading-snug mt-0.5 font-medium">
                      {f.marathiName}
                    </p>
                    <p className="text-[9.5px] sm:text-[10px] text-cream/85 leading-snug mt-0.5 hidden sm:block truncate">
                      {f.caption}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Pune Food Map & Heritage Rituals (Full Viewport Screen) */}
      <section
        id="food-map"
        className="bg-maroon text-cream min-h-0 lg:min-h-[100dvh] flex flex-col justify-center py-10 sm:py-12 lg:py-14 relative overflow-x-clip border-t border-cream/10 snap-start scroll-mt-20"
      >
        {/* Paper grain */}
        <div className="absolute inset-0 paper-grain opacity-25 pointer-events-none" />

        <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-10 w-full my-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Left: Map illustration with tight 2-line white border */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <div className="w-fit inline-block p-[0.3rem] border border-white rounded-[2px] shadow-2xl">
                <div className="border border-white p-[2px] rounded-[1px] bg-maroon/40 overflow-hidden block">
                  <img
                    src="/images/pune-food-map.jpg"
                    alt="Hand-drawn illustrated map of Pune streets, heritage places, and iconic food spots"
                    className="w-auto h-auto max-h-[56vh] lg:max-h-[62vh] max-w-full object-contain block"
                  />
                </div>
              </div>
              <p className="mt-2.5 text-[11px] sm:text-xs tracking-[0.25em] uppercase text-saffron font-medium">
                पुणे खाद्य नकाशा · Pune Food &amp; Heritage Map
              </p>
            </div>

            {/* Right: Text moved to right on desktop and natural left-aligned on mobile */}
            <div className="lg:col-span-7 text-left sm:text-right flex flex-col items-start sm:items-end">
              <p className="font-display italic text-2xl sm:text-3xl lg:text-[34px] leading-snug text-cream/95 text-balance">
                Begin the morning with a steaming plate of Kande Pohe or crispy Bhajaniche Thalipeeth
                crowned with cultured white loni. Midday calls for rustic Pithla-Bhakri, slow-braised
                Bharli Vangi, or comforting Varan-Bhaat drenched in golden sajuk ghee.
              </p>
              <p className="mt-5 text-cream/90 text-sm sm:text-[15px] lg:text-[17px] leading-relaxed max-w-3xl">
                <span className="sm:block">
                  As twilight settles over the peths, friends gather over bubbling brass pots of Amruttulya Chaha,
                </span>
                <span className="sm:block sm:mt-1">
                  crunchy Shrewsbury biscuits, and celebratory glasses of thick Alphonso Mango Mastani.
                </span>
              </p>
              <p className="mt-3 text-saffron font-medium text-sm sm:text-base lg:text-[17px] tracking-wide font-display italic">
                Punyatla swaad. Manapasun.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom soft blend into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-14 sm:h-20 bg-gradient-to-t from-maroon/40 to-transparent pointer-events-none" />
      </section>
    </>
  );
}
