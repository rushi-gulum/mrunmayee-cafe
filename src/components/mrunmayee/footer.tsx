"use client";

import { useNav, type ViewKey } from "@/lib/nav-store";
import { MapPin } from "lucide-react";

const FOOTER_NAV: {
  label: string;
  view?: ViewKey;
  items: { label: string; view?: ViewKey; anchor?: string }[];
}[] = [
  {
    label: "Menus",
    view: "menus",
    items: [
      { label: "Pethatla Nashta (Breakfast)", view: "menus" },
      { label: "Gharghuti Jevan (Homestyle)", view: "menus" },
      { label: "God Ghoshti (Sweets)", view: "menus" },
      { label: "Chaha Ani Bakery", view: "menus" },
      { label: "Pethchi Baithak (Coolers)", view: "menus" },
      { label: "Puneri Mejwani (Thalis)", view: "menus" },
      { label: "Chhotyansathi Pan Khas Ghas", view: "menus" },
    ],
  },
  {
    label: "Store",
    view: "shop",
    items: [
      { label: "Puneri Goda Masala", view: "shop" },
      { label: "Amruttulya Chaha Blend", view: "shop" },
      { label: "Tambat Ali Brass Chai Set", view: "shop" },
      { label: "Camp Shrewsbury Biscuits", view: "shop" },
      { label: "A2 Gir Cow Sajuk Tup", view: "shop" },
      { label: "Peth Market Canvas Tote", view: "shop" },
      { label: "Festive Hampers", view: "shop" },
    ],
  },
  {
    label: "Festivities",
    view: "festivities",
    items: [
      { label: "Ganeshotsav & Modak Seva", view: "festivities" },
      { label: "Diwali Pahat & Faral", view: "festivities" },
      { label: "Sawai Gandharva Mahotsav", view: "festivities" },
      { label: "Gudi Padwa Specials", view: "festivities" },
      { label: "Kojagiri Masala Dudh", view: "festivities" },
    ],
  },
  {
    label: "Mrunmayee",
    view: "home",
    items: [
      { label: "Our Wada Story", view: "home", anchor: "story" },
      { label: "Pune Heritage Places", view: "home", anchor: "places" },
      { label: "Puneri Phrasebook", view: "home", anchor: "phrasebook" },
      { label: "Reserve a Table", view: "home" },
      { label: "Careers", view: "home" },
    ],
  },
];

const SERVICE_LINKS = [
  "Book a Table",
  "Pethchi Baithak",
  "Family Mejwani",
  "Festive Hampers",
  "Sandhyakalcha Chaha",
  "Contact Us",
];

export function Footer() {
  const { view, setView, setAnchor, setContactOpen } = useNav();

  const handleNav = (targetView: ViewKey = "home", targetAnchor?: string) => {
    if (targetAnchor) {
      if (view === targetView) {
        const el = document.getElementById(targetAnchor);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top, behavior: "smooth" });
        }
      } else {
        setAnchor(targetAnchor);
        setView(targetView);
      }
    } else {
      setView(targetView);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="mt-auto bg-maroon text-cream relative overflow-hidden">
      <div className="absolute inset-0 paper-grain opacity-20 pointer-events-none" />

      {/* Top brand band */}
      <div className="relative border-b border-cream/10">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 pt-10 lg:pt-14 pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch justify-between">
            {/* Left: Brand summary (keep everything as it is) */}
            <div className="lg:col-span-6 max-w-xl flex flex-col justify-between pb-10 lg:pb-14">
              <div>
                <p className="font-display text-3xl sm:text-4xl font-semibold text-cream">
                  Mrunmayee
                </p>
                <p className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-saffron mt-2 font-bold">
                  Punyatla swaad. Manapasun.
                </p>
                <p className="mt-4 text-cream/85 text-sm sm:text-[14.5px] leading-relaxed max-w-lg">
                  Mrunmayee café pays homage to the heritage, hospitality, and authentic flavors of Pune.
                  From morning misal, kothimbir vadi, and bhakri-pithla to slow-brewed amruttulya chaha,
                  festive sweets, and peth baithaks. Ya, basa. Jevun ghya.
                </p>
              </div>
              <p className="mt-6 font-display italic text-saffron text-base sm:text-lg flex items-center gap-2 font-medium">
                <MapPin className="h-4 w-4 sm:h-4.5 sm:w-4.5 shrink-0" />
                Sadashiv Peth &amp; FC Road, Pune, Maharashtra
              </p>
            </div>

            {/* Right: Vertically attached - Above: Quick Links, Below: 2x Heritage Skyline Vector sitting on breaker line */}
            <div className="lg:col-span-6 flex flex-col justify-between items-center gap-6">
              {/* Above: Service quick links moved right 1x and middle-aligned to vector */}
              <div className="w-full flex justify-center">
                <div className="grid grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-2.5">
                  {SERVICE_LINKS.map((s) => (
                    <button
                      key={s}
                      onClick={() => {
                        if (
                          s === "Contact Us" ||
                          s === "Book a Table" ||
                          s === "Festive Hampers"
                        ) {
                          setContactOpen(true);
                        } else if (s === "Pethchi Baithak" || s === "Family Mejwani") {
                          handleNav("menus");
                        } else if (s === "Sandhyakalcha Chaha") {
                          handleNav("home", "food");
                        } else {
                          handleNav("home");
                        }
                      }}
                      className="text-left text-sm text-cream/85 hover:text-saffron transition-colors py-0.5 font-medium"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Below: Pune Skyline Vector (2x size, flush attached to breaker line) */}
              <div className="w-full max-w-[560px] sm:max-w-[620px] lg:max-w-[660px] flex flex-col items-center mt-auto">
                <img
                  src="/images/pune-skyline-cream.png"
                  alt="Hand-drawn architectural skyline of historic Pune landmarks"
                  className="w-full h-auto object-contain opacity-85 hover:opacity-100 transition-opacity duration-300 block -mb-0.5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nav columns - center and middle aligned */}
      <div className="relative border-b border-cream/10">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-10 lg:py-14">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 text-center">
            {FOOTER_NAV.map((col) => (
              <div key={col.label} className="flex flex-col items-center text-center">
                <button
                  onClick={() => handleNav(col.view ?? "home")}
                  className="block text-center mb-3"
                >
                  <p className="font-display text-lg font-semibold text-saffron hover:text-cream transition-colors">
                    {col.label}
                  </p>
                </button>
                <ul className="space-y-2 flex flex-col items-center w-full">
                  {col.items.map((i) => (
                    <li key={i.label} className="w-full flex justify-center">
                      <button
                        onClick={() => {
                          if (i.label === "Reserve a Table") {
                            setContactOpen(true);
                          } else {
                            handleNav(i.view ?? col.view ?? "home", i.anchor);
                          }
                        }}
                        className="text-sm text-cream/80 hover:text-saffron transition-all text-center inline-block"
                      >
                        {i.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar: left Marathi tagline, right copyright */}
      <div className="relative py-6">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="font-display italic text-saffron text-center sm:text-left text-xs flex items-center gap-1.5 flex-wrap justify-center sm:justify-start">
            <span>पुण्यातला स्वाद. मनापासून. ·</span>
            <span className="text-sm sm:text-base font-medium">Ya, basa. Jevun ghya.</span>
          </p>
          <p className="text-cream/60 text-center sm:text-right">
            © 1957–2026 Mrunmayee Hospitality LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
