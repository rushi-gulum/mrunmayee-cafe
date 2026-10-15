"use client";

import { MARATHI_PHRASES } from "@/lib/content";

/** Puneri Marathi phrasebook, small interactive section */
export function MarathiPhrasebook() {
  return (
    <section
      id="phrasebook"
      className="bg-saffron text-maroon min-h-0 lg:min-h-[100dvh] flex flex-col justify-center py-10 sm:py-12 lg:py-16 relative overflow-x-clip snap-start scroll-mt-20"
    >
      <div className="absolute inset-0 paper-grain opacity-20 pointer-events-none" />
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 w-full my-auto">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 items-start">
          <div>
            <p className="text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.5em] uppercase text-maroon/70 font-medium mb-4">
              Puneri Marathi
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.02] text-balance">
              चहा प्या, गप्प्या मार.
            </h2>
            <p className="mt-4 font-display italic text-xl text-maroon/80">
              Drink chai, chat on, the daily ritual of the city.
            </p>
            <p className="mt-6 text-maroon/85 text-sm leading-relaxed max-w-prose">
              We are proud to speak Marathi at Mrunmayee, the language of saints, of Sane Guruji
              and Kusumagraj, of the everyday galli and the great stage of Marathi natak. Here are
              a few phrases you will hear from us.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            {MARATHI_PHRASES.map((p, i) => (
              <div
                key={i}
                className="p-4 sm:p-5 bg-cream/70 border border-maroon/20 rounded-[2px] backdrop-blur-sm shadow-sm"
              >
                <p className="font-display text-2xl sm:text-3xl text-maroon leading-tight font-semibold">
                  {p.phrase}
                </p>
                <p className="text-sm font-bold text-maroon mt-1">
                  {p.meaning}
                </p>
                <p className="text-xs text-maroon font-medium mt-2 italic">{p.when}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Smooth bottom color blend into cream */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-b from-transparent via-cream/15 to-cream/35 pointer-events-none" />
    </section>
  );
}
