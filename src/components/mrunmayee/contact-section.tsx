"use client";

import { MapPin, Phone, Mail, Clock, Sparkles } from "lucide-react";
import { BookingForm } from "@/components/mrunmayee/booking-form";

/**
 * Authentic Puneri hospitality & reservation section.
 * "या, बसा. जेवून घ्या."
 * Redesigned for generous breathing room, clean alignment, and refined UI/UX.
 */
export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-8 sm:py-10 lg:py-12 border-t border-border/80 bg-background/50 relative overflow-x-clip min-h-0 lg:min-h-[100dvh] flex flex-col justify-center snap-start scroll-mt-20"
    >
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10 w-full my-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 lg:mb-7">
          <div className="puneri-divider mb-2">
            <span className="text-xs text-saffron">❖</span>
          </div>
          <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-saffron font-bold mb-1">
            अतिथी देवो भव
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-semibold text-foreground leading-[1.08] text-balance">
            Reservations &amp; Inquiries
          </h2>
          <p className="mt-2 text-muted-foreground text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Write to us, call ahead, or simply walk in. Whether it&rsquo;s an early morning misal adda,
            a quiet afternoon baithak, or an abundant family mejwani, you are always welcome.
          </p>
        </div>

        {/* 2-Column Balanced Layout - horizontally aligned on one single line */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* LEFT: Booking Form Container (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <BookingForm compact={false} showClose={false} showHeader={true} />
          </div>

          {/* RIGHT: Locations & Hospitality Details (5 cols) */}
          <aside className="lg:col-span-5 flex flex-col justify-between gap-3 h-full">
            {/* Main Locations Card */}
            <div className="p-4 sm:p-5 bg-card/90 backdrop-blur-sm rounded-lg border border-border/80 shadow-sm space-y-3 flex-1 flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-saffron" />
                <p className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-saffron font-bold">
                  OUR PUNE LOCATIONS
                </p>
              </div>

              {/* 2 Locations side-by-side */}
              <div className="grid sm:grid-cols-2 gap-3 pt-0.5">
                {/* Location 1: FC Road */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-saffron/15 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="h-3.5 w-3.5 text-saffron" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground text-sm leading-tight">
                      FC Road Flagship
                    </p>
                    <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">
                      1184, Fergusson College Road, Shivajinagar, Pune 411005
                    </p>
                  </div>
                </div>

                {/* Location 2: Sadashiv Peth */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-saffron/15 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="h-3.5 w-3.5 text-saffron" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground text-sm leading-tight">
                      Sadashiv Peth Wada
                    </p>
                    <p className="text-[11px] text-muted-foreground mt-0.5 leading-snug">
                      422, Sadashiv Peth, Near SP College, Pune 411030
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Contacts List */}
              <div className="pt-2.5 border-t border-border/60 grid sm:grid-cols-2 gap-2 text-xs text-foreground/85">
                <p className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-saffron shrink-0" />
                  <a
                    href="tel:+912025510001"
                    className="hover:text-accent font-medium transition-colors text-[11px] sm:text-xs"
                  >
                    +91 20 2551 0001 / 0002
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-saffron shrink-0" />
                  <a
                    href="mailto:namaste@mrunmayee.in"
                    className="hover:text-accent font-medium transition-colors text-[11px] sm:text-xs"
                  >
                    namaste@mrunmayee.in
                  </a>
                </p>
                <p className="sm:col-span-2 flex items-center gap-2 text-muted-foreground text-[11px] sm:text-xs">
                  <Clock className="h-3.5 w-3.5 text-saffron shrink-0" />
                  <span>Open Daily: 7:30 am to 11:30 pm</span>
                </p>
              </div>
            </div>

            {/* 2 Sub-cards side-by-side in a 2-col mini-grid */}
            <div className="grid sm:grid-cols-2 gap-3">
              {/* Peshwai Banquets Card */}
              <div className="p-3.5 bg-card/70 backdrop-blur-sm rounded-lg border-l-4 border-l-terracotta border border-border/80 space-y-1 shadow-sm">
                <p className="text-[9.5px] sm:text-[10px] tracking-[0.2em] uppercase text-saffron font-bold">
                  PESHWAI BANQUETS &amp; FAMILY FEASTS
                </p>
                <p className="text-[11px] text-foreground/80 leading-snug">
                  For large family gatherings, Diwali Pahat celebrations, Ganeshotsav prasad feasts, or
                  traditional wada banquets, write to our hosting team.
                </p>
                <div className="pt-0.5">
                  <a
                    href="mailto:mejwani@mrunmayee.in"
                    className="text-saffron hover:underline underline-offset-4 text-[11px] font-semibold inline-flex items-center gap-1 transition-colors"
                  >
                    <Mail className="h-3 w-3" />
                    mejwani@mrunmayee.in
                  </a>
                </div>
              </div>

              {/* Walk-ins Card */}
              <div className="p-3.5 bg-card/70 backdrop-blur-sm rounded-lg border-l-4 border-l-saffron border border-border/80 space-y-1 shadow-sm">
                <p className="text-[9.5px] sm:text-[10px] tracking-[0.2em] uppercase text-foreground font-bold flex items-center gap-1">
                  <Sparkles className="h-3 w-3 text-saffron" />
                  निवांत या · WALK-INS ALWAYS WELCOME
                </p>
                <p className="text-[11px] text-muted-foreground leading-snug">
                  No reservation? Do not worry. Walk right in, take a seat in our wada chowk with a
                  steaming cup of cutting chaha, and we will seat you promptly.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
