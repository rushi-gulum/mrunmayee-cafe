"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useNav } from "@/lib/nav-store";
import { BookingForm } from "@/components/mrunmayee/booking-form";

/**
 * Puneri hospitality reservation side drawer.
 * Triggered by "Book a Table" / "Book a Baithak".
 * Restored to original 480px width, fitting all original components on 1 screen without scrolling.
 */
export function ContactDrawer() {
  const { contactOpen, setContactOpen } = useNav();
  return (
    <Sheet open={contactOpen} onOpenChange={setContactOpen}>
      <SheetContent
        side="right"
        className="w-[92vw] sm:w-[480px] bg-cream text-maroon border-l border-maroon/15 p-0 flex flex-col h-full overflow-hidden shadow-2xl"
      >
        {/* Paper texture */}
        <div className="absolute inset-0 paper-grain opacity-20 pointer-events-none" />

        {/* Drawer Header */}
        <SheetHeader className="p-5 sm:p-6 pb-4 border-b border-maroon/10 text-left bg-cream shrink-0 relative z-10">
          <p className="text-[10px] tracking-[0.4em] uppercase text-saffron font-bold">
            अस्सल पुणेरी आतिथ्य
          </p>
          <SheetTitle className="font-display text-2xl font-semibold text-maroon mt-1">
            Reservations &amp; Inquiries
          </SheetTitle>
          <p className="text-xs sm:text-sm text-maroon/75 mt-1 leading-relaxed">
            Reserve your seat at Mrunmayee. Whether for morning nashta, a quiet afternoon baithak,
            or a celebratory family feast, our doors and tables are open for you.
          </p>
        </SheetHeader>

        {/* Drawer Form Body - Fits cleanly on desktop and scrolls smoothly when mobile keyboard is open */}
        <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between overflow-y-auto relative z-10">
          <BookingForm drawerMode />
        </div>
      </SheetContent>
    </Sheet>
  );
}
