"use client";

import { useState } from "react";
import {
  Calendar,
  Clock,
  Users,
  Send,
  Check,
  MapPin,
} from "lucide-react";
import { CAFES } from "@/lib/content";
import { useToast } from "@/hooks/use-toast";
import { useNav } from "@/lib/nav-store";

type BookingFormProps = {
  compact?: boolean;
  showClose?: boolean;
  showHeader?: boolean;
  drawerMode?: boolean;
};

/**
 * Reusable Puneri booking form with spacious layout, clear input styling,
 * and high-quality UI/UX for both in-page section and right-side drawer.
 */
export function BookingForm({
  compact = false,
  showClose = false,
  showHeader = false,
  drawerMode = false,
}: BookingFormProps) {
  const { toast } = useToast();
  const { setContactOpen } = useNav();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "या, बसा. Your baithak request is on its way",
      description:
        "A Mrunmayee host will confirm your booking shortly. Meanwhile, garamagaram chaha is on the stove.",
    });
  };

  if (submitted) {
    return (
      <div className="p-6 sm:p-8 bg-card/95 border border-maroon/15 rounded-lg text-center shadow-md my-auto">
        <div className="w-14 h-14 mx-auto rounded-full bg-saffron/20 border border-saffron/40 flex items-center justify-center mb-3.5">
          <Check className="h-7 w-7 text-saffron" />
        </div>
        <p className="text-[10.5px] tracking-[0.3em] uppercase text-saffron font-bold mb-1">
          या, बसा · स्वागत आहे
        </p>
        <p className="font-display text-2xl font-semibold text-foreground">
          Booking Request Received!
        </p>
        <p className="mt-2.5 text-muted-foreground text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
          A Mrunmayee host will confirm your booking shortly. We look forward to welcoming you to the wada.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2.5">
          <button
            onClick={() => setSubmitted(false)}
            className="w-full sm:w-auto px-5 py-2 rounded-full border border-border text-foreground text-xs sm:text-sm font-medium hover:bg-maroon hover:text-cream hover:border-maroon transition-colors"
          >
            Make another booking
          </button>
          {showClose && (
            <button
              onClick={() => setContactOpen(false)}
              className="w-full sm:w-auto px-5 py-2 rounded-full bg-saffron text-maroon text-xs sm:text-sm font-semibold hover:brightness-105 transition-colors"
            >
              Done &amp; Close
            </button>
          )}
        </div>
      </div>
    );
  }

  // --- DRAWER MODE: Fits on 1 screen without scrolling, using only original components ---
  if (drawerMode) {
    const dLabelClass =
      "text-[10px] sm:text-[10.5px] tracking-[0.18em] uppercase font-bold text-maroon/85 mb-1.5 flex items-center gap-1.5";
    const dInputClass =
      "w-full h-10 sm:h-11 px-3 rounded-md bg-white/90 border border-maroon/20 text-maroon text-base sm:text-sm outline-none focus:border-saffron focus:ring-1 focus:ring-saffron/50 transition-all placeholder:text-maroon/40 shadow-xs";

    return (
      <form onSubmit={onSubmit} className="flex-1 flex flex-col justify-between h-full gap-5">
        <div className="space-y-4">
          {/* First name + Last name */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label htmlFor="d-first" className={dLabelClass}>
                First name
              </label>
              <input
                id="d-first"
                name="first"
                type="text"
                required
                placeholder="E.g. Tanmay"
                className={dInputClass}
              />
            </div>
            <div>
              <label htmlFor="d-last" className={dLabelClass}>
                Last name
              </label>
              <input
                id="d-last"
                name="last"
                type="text"
                required
                placeholder="E.g. Joshi"
                className={dInputClass}
              />
            </div>
          </div>

          {/* Email + Phone */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label htmlFor="d-email" className={dLabelClass}>
                Email
              </label>
              <input
                id="d-email"
                name="email"
                type="email"
                required
                placeholder="tanmay@example.com"
                className={dInputClass}
              />
            </div>
            <div>
              <label htmlFor="d-phone" className={dLabelClass}>
                Phone
              </label>
              <input
                id="d-phone"
                name="phone"
                type="tel"
                placeholder="+91 98220 00000"
                className={dInputClass}
              />
            </div>
          </div>

          {/* Date + Time + Guests */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
            <div>
              <label htmlFor="d-date" className={dLabelClass}>
                <Calendar className="h-3 w-3 text-saffron shrink-0" /> Date
              </label>
              <input
                id="d-date"
                type="date"
                required
                className={dInputClass}
              />
            </div>
            <div>
              <label htmlFor="d-time" className={dLabelClass}>
                <Clock className="h-3 w-3 text-saffron shrink-0" /> Time
              </label>
              <select
                id="d-time"
                required
                defaultValue=""
                className={dInputClass}
              >
                <option value="" disabled>Time</option>
                {Array.from({ length: 16 }).map((_, i) => {
                  const h = i + 8;
                  return (
                    <option key={i} value={h}>
                      {h > 12 ? h - 12 : h}:00 {h >= 12 ? "PM" : "AM"}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <label htmlFor="d-guests" className={dLabelClass}>
                <Users className="h-3 w-3 text-saffron shrink-0" /> Guests
              </label>
              <select
                id="d-guests"
                required
                defaultValue=""
                className={dInputClass}
              >
                <option value="" disabled>Guests</option>
                {Array.from({ length: 12 }).map((_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1} {i === 0 ? "guest" : "guests"}
                  </option>
                ))}
                <option value="13+">13+</option>
              </select>
            </div>
          </div>

          {/* Café selector */}
          <div>
            <label htmlFor="d-cafe" className={dLabelClass}>
              Select your café
            </label>
            <select
              id="d-cafe"
              required
              defaultValue=""
              className={dInputClass}
            >
              <option value="" disabled>Choose café location…</option>
              {CAFES.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}, {c.area}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* CTA row + confirmation note */}
        <div className="space-y-3 pt-2">
          <button
            type="submit"
            className="w-full h-11 sm:h-12 rounded-full bg-saffron text-maroon font-bold text-xs sm:text-sm tracking-wide hover:brightness-105 active:scale-[0.99] transition-all shadow-md shadow-saffron/20 inline-flex items-center justify-center gap-2"
          >
            <Send className="h-3.5 w-3.5" />
            Request booking
          </button>

          <p className="text-[11px] text-maroon/75 flex items-center gap-1.5 leading-snug">
            <MapPin className="h-3 w-3 text-saffron shrink-0" />
            Bookings confirmed within a few hours during café hours (8am to 11pm IST).
          </p>
        </div>
      </form>
    );
  }

  // --- STANDARD IN-PAGE MODE: Compact, perfectly balanced for 1-screen section ---
  const containerPadding = compact ? "p-4 sm:p-5" : "p-4 sm:p-5 lg:p-5";
  const fieldSpacing = compact ? "space-y-3" : "space-y-3 sm:space-y-3.5";
  const inputClass =
    "w-full h-9 sm:h-10 px-3 rounded-md bg-background/70 border border-border/80 text-foreground text-base sm:text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-all placeholder:text-muted-foreground/60";
  const labelClass =
    "text-[10px] sm:text-[10.5px] tracking-[0.18em] uppercase font-semibold text-foreground/85 mb-1 flex items-center gap-1.5";

  return (
    <form
      onSubmit={onSubmit}
      className={`${containerPadding} bg-card/90 backdrop-blur-sm border border-border/80 rounded-lg ${fieldSpacing} shadow-sm`}
    >
      {/* Integrated Card Header */}
      {showHeader && (
        <div className="border-b border-border/60 pb-2.5 mb-1.5">
          <p className="text-[10px] sm:text-[10.5px] tracking-[0.25em] uppercase text-saffron font-bold mb-0.5">
            BOOK A TABLE / BAITHAK
          </p>
          <h3 className="font-display text-base sm:text-lg font-semibold text-foreground leading-snug">
            Reserve your seat at the Mrunmayee table.
          </h3>
        </div>
      )}

      {/* First name + Last name */}
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
        <div>
          <label htmlFor="b-first" className={labelClass}>
            First name
          </label>
          <input
            id="b-first"
            name="first"
            type="text"
            required
            placeholder="E.g. Tanmay"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="b-last" className={labelClass}>
            Last name
          </label>
          <input
            id="b-last"
            name="last"
            type="text"
            required
            placeholder="E.g. Joshi"
            className={inputClass}
          />
        </div>
      </div>

      {/* Email + Phone */}
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
        <div>
          <label htmlFor="b-email" className={labelClass}>
            Email
          </label>
          <input
            id="b-email"
            name="email"
            type="email"
            required
            placeholder="tanmay@example.com"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="b-phone" className={labelClass}>
            Phone
          </label>
          <input
            id="b-phone"
            name="phone"
            type="tel"
            placeholder="+91 98220 00000"
            className={inputClass}
          />
        </div>
      </div>

      {/* Date + Time + Guests (3 columns) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
        <div>
          <label htmlFor="b-date" className={labelClass}>
            <Calendar className="h-3.5 w-3.5 text-saffron" /> Date
          </label>
          <input
            id="b-date"
            type="date"
            required
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="b-time" className={labelClass}>
            <Clock className="h-3.5 w-3.5 text-saffron" /> Time
          </label>
          <select
            id="b-time"
            required
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>Select time</option>
            {Array.from({ length: 16 }).map((_, i) => {
              const h = i + 8;
              return (
                <option key={i} value={h}>
                  {h > 12 ? h - 12 : h}:00 {h >= 12 ? "PM" : "AM"}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label htmlFor="b-guests" className={labelClass}>
            <Users className="h-3.5 w-3.5 text-saffron" /> Guests
          </label>
          <select
            id="b-guests"
            required
            defaultValue=""
            className={inputClass}
          >
            <option value="" disabled>Select guests</option>
            {Array.from({ length: 12 }).map((_, i) => (
              <option key={i} value={i + 1}>
                {i + 1} {i === 0 ? "guest" : "guests"}
              </option>
            ))}
            <option value="13+">13+ (group feast)</option>
          </select>
        </div>
      </div>

      {/* Café selector */}
      <div>
        <label htmlFor="b-cafe" className={labelClass}>
          Select your café
        </label>
        <select
          id="b-cafe"
          required
          defaultValue=""
          className={inputClass}
        >
          <option value="" disabled>Choose café location…</option>
          {CAFES.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}, {c.area}
            </option>
          ))}
        </select>
      </div>

      {/* CTA action bar */}
      <div className="pt-1 flex flex-col sm:flex-row items-center justify-start gap-3">
        <button
          type="submit"
          className="w-full sm:w-auto h-10 px-7 rounded-full bg-saffron text-maroon font-semibold text-xs sm:text-sm tracking-wide hover:brightness-105 active:scale-[0.99] transition-all shadow-md shadow-saffron/20 inline-flex items-center justify-center gap-2"
        >
          <Send className="h-3.5 w-3.5" />
          Request booking
        </button>
      </div>

      <p className="pt-0.5 text-[11px] text-muted-foreground flex items-center gap-1.5 leading-snug">
        <MapPin className="h-3 w-3 text-saffron shrink-0" />
        Bookings confirmed within a few hours during café hours (8am to 11pm IST).
      </p>
    </form>
  );
}
