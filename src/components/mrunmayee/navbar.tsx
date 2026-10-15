"use client";

import { useEffect, useState } from "react";
import { useNav, type ViewKey } from "@/lib/nav-store";
import { cn } from "@/lib/utils";
import { Menu as MenuIcon, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

/** Flat top-level nav links (always visible on desktop, left side) */
const NAV_LINKS: { label: string; view: ViewKey }[] = [
  { label: "Menus", view: "menus" },
  { label: "Shop", view: "shop" },
  { label: "Festivities", view: "festivities" },
];

/** Mobile menu drawer content */
const MOBILE_NAV: { section: string; items: { label: string; view: ViewKey }[] }[] = [
  {
    section: "Explore",
    items: [
      { label: "Menus", view: "menus" },
      { label: "Shop", view: "shop" },
      { label: "Festivities", view: "festivities" },
    ],
  },
];

export function Navbar() {
  const {
    view,
    setView,
    contactOpen,
    setContactOpen,
    mobileNavOpen,
    setMobileNavOpen,
  } = useNav();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onHero = view === "home" && !scrolled;

  const goView = (v: ViewKey) => {
    setView(v);
    setMobileNavOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navTextClass = onHero
    ? "text-cream/90 hover:text-cream"
    : "text-maroon/80 hover:text-maroon";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        onHero
          ? "bg-transparent text-cream"
          : "bg-cream/95 backdrop-blur-sm text-maroon border-b border-maroon/15 shadow-sm",
      )}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        {/* 3-column grid: left | center | right */}
        <div className="grid grid-cols-3 items-center h-[64px] lg:h-[76px]">
          {/* LEFT: mobile hamburger + flat nav links (desktop) */}
          <div className="flex items-center gap-3 lg:gap-4">
            {/* Mobile hamburger icon only */}
            <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
              <SheetTrigger asChild>
                <button
                  aria-label="Open menu"
                  className={cn(
                    "lg:hidden min-h-[44px] min-w-[44px] flex items-center justify-center p-2 -ml-2 rounded-full transition-colors",
                    navTextClass,
                  )}
                >
                  <MenuIcon className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[88vw] sm:w-[420px] bg-cream text-maroon border-maroon/15 p-0 overflow-y-auto [&>button:last-child]:hidden"
              >
                <div className="p-6 border-b border-maroon/10 flex items-center justify-between">
                  <div className="flex flex-col leading-none">
                    <span className="font-display text-2xl font-semibold text-maroon">
                      Mrunmayee
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileNavOpen(false)}
                    className="p-2 rounded-full hover:bg-maroon/10"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="px-6 py-4">
                  {MOBILE_NAV.map((sec) => (
                    <div key={sec.section} className="mb-6">
                      <p className="text-[10px] tracking-[0.4em] uppercase text-saffron font-semibold mb-3">
                        {sec.section}
                      </p>
                      <ul className="space-y-2">
                        {sec.items.map((i) => (
                          <li key={i.label}>
                            <button
                              onClick={() => goView(i.view)}
                              className="font-display text-2xl text-maroon hover:text-saffron transition-colors"
                            >
                              {i.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="p-6 border-t border-maroon/10 mt-2 space-y-3">
                  <button
                    onClick={() => {
                      setMobileNavOpen(false);
                      setContactOpen(true);
                    }}
                    className="w-full px-6 py-3 rounded-full bg-saffron text-maroon font-semibold text-sm hover:bg-saffron/90"
                  >
                    Book a Table
                  </button>
                  <button
                    onClick={() => goView("menus")}
                    className="w-full px-6 py-3 rounded-full bg-maroon text-cream font-semibold text-sm hover:bg-maroon/90"
                  >
                    View Menus
                  </button>
                </div>
              </SheetContent>
            </Sheet>

            {/* separator */}
            <span
              className={cn(
                "hidden lg:block h-6 w-px",
                onHero ? "bg-cream/30" : "bg-maroon/25",
              )}
            />

            {/* flat nav links (desktop only) */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.label}
                  onClick={() => goView(l.view)}
                  className={cn(
                    "px-3 py-1 text-base lg:text-lg font-medium tracking-wide transition-colors",
                    view === l.view && (onHero ? "text-cream" : "text-maroon"),
                    navTextClass,
                  )}
                >
                  {l.label}
                </button>
              ))}
            </nav>
          </div>

          {/* CENTER: Logo */}
          <div className="flex items-center justify-center">
            <button
              onClick={() => goView("home")}
              className="flex flex-col items-center leading-none"
              aria-label="Mrunmayee home"
            >
              <span
                className={cn(
                  "font-display text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight transition-colors",
                  onHero ? "text-cream" : "text-maroon",
                )}
              >
                Mrunmayee
              </span>
            </button>
          </div>

          {/* RIGHT: Book a Table */}
          <div className="flex items-center justify-end gap-1.5 lg:gap-2">
            <button
              onClick={() => setContactOpen(true)}
              className={cn(
                "px-5 lg:px-6 py-1.5 lg:py-2 rounded-full text-sm lg:text-base font-semibold tracking-wide transition-all border",
                onHero
                  ? "bg-cream text-maroon border-cream hover:bg-cream/90 shadow-md shadow-cream/20"
                  : "bg-cream text-maroon border-maroon hover:bg-maroon hover:text-cream shadow-sm",
              )}
            >
              Book a Table
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
