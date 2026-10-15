"use client";

import { useNav } from "@/lib/nav-store";

/** The Mrunmayee story: homage to Pune's wadas, peths, and culinary heritage */
export function StorySection() {
  const { setView, setContactOpen } = useNav();
  return (
    <section
      id="story"
      className="bg-cream min-h-0 lg:min-h-[100dvh] flex flex-col justify-center py-10 sm:py-12 lg:py-16 relative overflow-x-clip snap-start scroll-mt-20"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 w-full my-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* LEFT: image + CTA cards below */}
          <div>
            {/* Image + caption wrapper */}
            <div className="relative">
              {/* Cafe photo */}
              <div className="relative overflow-hidden shadow-2xl border border-maroon/20 wada-frame">
                <img
                  src="/images/story-cafe-new.jpg"
                  alt="A leisurely afternoon in a heritage Pune wada café at golden hour with traditional teak interiors"
                  className="w-full aspect-[16/9] object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-maroon/10" />
              </div>
              {/* Floating caption quote */}
              <div className="absolute -bottom-4 right-2 sm:-bottom-6 sm:-right-6 bg-cream p-3 sm:p-4 shadow-xl border border-maroon/15 max-w-[230px] sm:max-w-[270px] z-10 rounded-[2px]">
                <p className="font-display text-foreground text-xs sm:text-sm leading-relaxed font-medium">
                  &ldquo;A meal in Pune is never rushed. It begins with &lsquo;या, बसा&rsquo; and ends with an unhurried cup of chaha.&rdquo;
                </p>
                <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-saffron font-bold mt-1.5 sm:mt-2">
                  The Mrunmayee Promise
                </p>
              </div>
            </div>

            {/* CTA cards row below image */}
            <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-2 sm:gap-3">
              <button
                onClick={() => setView("menus")}
                className="group p-2.5 sm:p-4 rounded-[2px] bg-maroon text-cream text-center hover:bg-saffron hover:text-maroon transition-colors"
              >
                <p className="text-[9px] sm:text-[10px] tracking-widest uppercase opacity-75">MENUS</p>
                <p className="font-display text-xs sm:text-sm lg:text-base mt-0.5 sm:mt-1 leading-tight">Nashta &amp; Jevan</p>
              </button>
              <button
                onClick={() => setContactOpen(true)}
                className="group p-2.5 sm:p-4 rounded-[2px] bg-saffron text-maroon text-center hover:bg-maroon hover:text-cream transition-colors"
              >
                <p className="text-[9px] sm:text-[10px] tracking-widest uppercase opacity-75">TABLES</p>
                <p className="font-display text-xs sm:text-sm lg:text-base mt-0.5 sm:mt-1 leading-tight">Book a Baithak</p>
              </button>
              <button
                onClick={() => setView("shop")}
                className="group p-2.5 sm:p-4 rounded-[2px] border border-maroon/20 text-maroon text-center hover:bg-maroon hover:text-cream transition-colors"
              >
                <p className="text-[9px] sm:text-[10px] tracking-widest uppercase opacity-75">STORE</p>
                <p className="font-display text-xs sm:text-sm lg:text-base mt-0.5 sm:mt-1 leading-tight">Masale &amp; Chaha</p>
              </button>
            </div>

            {/* Tagline footer below CTAs */}
            <div className="mt-5 sm:mt-6 flex items-center gap-3 text-maroon/70">
              <span className="h-px w-8 sm:w-12 bg-maroon/30" />
              <span className="text-[11px] sm:text-xs tracking-wide font-medium">Mrunmayee · Punyatla swaad. Manapasun.</span>
            </div>
          </div>

          {/* RIGHT: text content */}
          <div className="text-left lg:text-right">
            <p className="text-[10px] sm:text-xs tracking-[0.45em] uppercase text-saffron font-medium mb-3 sm:mb-4">
              वाडा संस्कृती · The Soul of Pune
            </p>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-semibold text-maroon leading-[1.08] sm:leading-[1.04] text-balance">
              Rooted in the courtyards of the old peths, where food is an heirloom and hospitality is sacred.
            </h2>
            <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-5 text-maroon/80 text-[14px] sm:text-base leading-relaxed max-w-prose lg:ml-auto">
              <p>
                Pune has its own rhythm. It begins at daybreak with the scent of wet basalt, the
                crisp morning air of the tekdis, and the clatter of brass strainers at corner tea stalls.
                Step inside the historic peths of Sadashiv, Narayan, Shaniwar, and Budhwar, and you will find
                sunlit wada courtyards that have welcomed guests for centuries.
              </p>
              <p>
                At Mrunmayee, we cook the food we grew up eating: recipes seasoned with freshly roasted
                goda masala, fresh coconut, and hand-patted grains. We do not believe in hurried dining.
                Take a seat on our baithak, listen to the afternoon quiet, and let the food remind you
                why Pune holds a place unlike anywhere else in Maharashtra.
              </p>
              <p className="font-display italic text-maroon text-base sm:text-lg font-medium">
                Come as a guest, leave as family.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Smooth bottom color blend into chocolate maroon */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-b from-transparent via-maroon/15 to-maroon/35 pointer-events-none" />
    </section>
  );
}
