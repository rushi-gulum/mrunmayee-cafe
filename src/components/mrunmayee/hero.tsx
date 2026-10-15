"use client";

import { Coffee } from "lucide-react";

/** Hero section: Pune wada architecture & warm hospitality */
export function Hero() {
  return (
    <section id="hero" className="relative min-h-[100svh] flex flex-col overflow-hidden snap-start">
      {/* Background with clean, neat atmospheric filter */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/hero-cafe.jpg"
          alt="Mrunmayee Pune café interior with carved wada woodwork, brass lanterns, and warm Maharashtrian hospitality"
          className="w-full h-full object-cover scale-105 filter brightness-[0.6] contrast-[1.08] blur-[2px]"
        />
        {/* Deep, cohesive warm teakwood scrim for crisp text contrast without noise */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1b0c05]/85 via-[#221008]/80 to-[#150803]/90" />
        {/* Subtle cinematic radial vignette centered on text */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(30, 14, 7, 0.2) 0%, rgba(10, 4, 1, 0.65) 100%)",
          }}
        />
      </div>

      {/* Center content */}
      <div className="relative flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-10 pt-24 pb-32">
        <div className="text-center max-w-5xl mx-auto text-cream animate-fade-up drop-shadow-[0_2px_16px_rgba(0,0,0,0.5)]">
          <p className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.45em] uppercase text-saffron font-semibold mb-4 sm:mb-5">
            पुणेरी संस्कृती · अस्सल चव · Est. 1957 · Sadashiv Peth &amp; FC Road
          </p>

          <h1 className="font-display font-semibold leading-[0.92] text-[clamp(3.5rem,11vw,11rem)] tracking-tight">
            <span className="block text-saffron drop-shadow-[0_4px_28px_rgba(0,0,0,0.7)]">सुस्वागतम</span>
          </h1>

          <p className="mt-6 sm:mt-7 max-w-3xl mx-auto text-[20px] sm:text-[27px] lg:text-[31px] text-cream leading-snug font-display italic">
            <span className="block">&ldquo;Some places stay with you long after the last bite.</span>
            <span className="block mt-1 sm:mt-1.5">We hope Pune does that for you.&rdquo;</span>
          </p>

          <p className="mt-3 sm:mt-3.5 text-sm sm:text-base font-semibold tracking-wide text-saffron">
            Punyatla swaad. Manapasun.
          </p>

          {/* Sub-action / Marathi Caption */}
          <div className="mt-8 sm:mt-10 flex items-center justify-center gap-2 sm:gap-3 text-cream/90 text-[10px] sm:text-xs tracking-wider sm:tracking-widest uppercase font-medium max-w-xs sm:max-w-none mx-auto text-center">
            <span className="hidden sm:inline-block h-px w-8 bg-cream/40 shrink-0" />
            <span>Paha kay aahe · Table book kara · Chahacha ek cup ghya</span>
            <span className="hidden sm:inline-block h-px w-8 bg-cream/40 shrink-0" />
          </div>
        </div>
      </div>

      {/* Bottom legend band */}
      <div className="relative z-10 mt-auto">
        <div className="bg-cream border-t border-maroon/20 px-6 py-3.5 shadow-sm">
          <div className="mx-auto max-w-[1400px] flex flex-wrap items-center justify-between gap-3 text-maroon/85 text-[11px] sm:text-xs tracking-wide">
            <span className="font-display italic text-sm sm:text-base text-maroon">
              या, बसा. जेवून घ्या. · Open daily 7:30 am to 11:30 pm
            </span>
            <span className="hidden sm:flex items-center gap-2 text-maroon/80 font-medium">
              <Coffee className="h-3.5 w-3.5 text-saffron" />
              अतिथी देवो भव · अस्सल पुणेरी आतिथ्य
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
