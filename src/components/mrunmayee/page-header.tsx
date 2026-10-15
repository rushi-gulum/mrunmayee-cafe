"use client";

import { ArrowRight } from "lucide-react";
import { useNav, type ViewKey } from "@/lib/nav-store";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  ctaLabel?: string;
  ctaView?: ViewKey;
  /** If true, CTA opens the Contact side drawer (overrides ctaView) */
  ctaOpensContact?: boolean;
};

/**
 * Puneri architectural page header for inner views.
 * Clean vertical proportions, wada-inspired ornaments, and rich typography.
 */
export function PageHeader({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaView,
  ctaOpensContact,
}: PageHeaderProps) {
  const { setView, setContactOpen } = useNav();
  return (
    <section className="bg-background pt-[88px] lg:pt-[96px] pb-6 lg:pb-8 border-b border-maroon/15">
      <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-10 text-center">
        {/* Puneri ornamental divider */}
        <div className="puneri-divider mb-2">
          <span className="text-xs text-saffron font-serif">❖</span>
        </div>
        <p className="text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.45em] uppercase text-saffron font-semibold mb-1.5">
          {eyebrow}
        </p>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-maroon leading-[1.05] text-balance">
          {title}
        </h1>
        {description && (
          <p className="mt-2.5 max-w-2xl mx-auto text-maroon/80 text-sm lg:text-[15px] leading-relaxed">
            {description}
          </p>
        )}
        {ctaLabel && (ctaView || ctaOpensContact) && (
          <button
            onClick={() =>
              ctaOpensContact ? setContactOpen(true) : setView(ctaView!)
            }
            className="mt-4 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-maroon text-cream font-semibold text-sm tracking-wide hover:bg-saffron hover:text-maroon transition-colors"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </section>
  );
}
