"use client";

import { PUNE_PLACES } from "@/lib/content";

/** Pune historical places and wada architecture section */
export function PlacesSection() {
  return (
    <section
      id="places"
      className="bg-maroon text-cream min-h-0 lg:min-h-[100dvh] flex flex-col justify-center py-8 sm:py-10 lg:py-12 relative overflow-x-clip snap-start scroll-mt-20"
    >
      <div className="absolute inset-0 paper-grain opacity-25 pointer-events-none" />
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 w-full my-auto">
        <div className="mb-6 sm:mb-7">
          <p className="text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.45em] uppercase text-saffron font-medium mb-2">
            पुण्याचा वारसा · Pune Heritage
          </p>
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            <div className="lg:col-span-5">
              <h2 className="font-display text-2xl sm:text-3xl lg:text-[38px] font-semibold leading-[1.05] text-balance">
                Wadas, peth gallis, and the ramparts of history.
              </h2>
              <p className="mt-2.5 text-cream/90 text-xs sm:text-[13.5px] leading-relaxed max-w-prose">
                Pune is the cultural capital of Maharashtra. A city sculpted by the Peshwas, the legacy
                of Chhatrapati Shivaji Maharaj, the craftsmanship of Tambat Ali, and the timeless
                spiritual grace of Budhwar Peth. From the bastion walls of Sinhagad to the carved teak
                chowks of Shaniwar and Vishrambaug Wadas, here is the city that inspires our hospitality.
              </p>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-start lg:pl-24 xl:pl-32 pt-2 sm:pt-2.5 lg:pt-3">
              <p className="font-display italic text-base sm:text-lg lg:text-[21px] text-saffron font-medium leading-snug text-balance">
                &ldquo;Pune is the Queen of the Deccan, where the morning mist of the tekdi meets the warmth of a
                brass cup of chaha, and hospitality is timeless.&rdquo;
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {PUNE_PLACES.map((p) => (
            <article
              key={p.id}
              className="group relative overflow-hidden rounded-[2px] aspect-[4/3] shadow-md wada-frame"
            >
              <img
                src={p.image}
                alt={p.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon via-maroon/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3.5 sm:p-4">
                <p className="text-[9px] sm:text-[9.5px] tracking-widest uppercase text-saffron font-bold">
                  {p.kind}
                </p>
                <p className="font-display text-base sm:text-lg lg:text-xl font-semibold mt-0.5 text-cream leading-tight">
                  {p.name}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Smooth bottom color blend into saffron */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-b from-transparent via-saffron/15 to-saffron/40 pointer-events-none" />
    </section>
  );
}
