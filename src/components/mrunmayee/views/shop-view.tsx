"use client";

import { useState, useRef } from "react";
import { ShoppingBag, Truck, Gift, Award } from "lucide-react";
import { SHOP_PRODUCTS } from "@/lib/content";
import { useNav } from "@/lib/nav-store";

const CATEGORIES = [
  "All Items",
  "Masale & Pantry",
  "Chaha & Bakery",
  "Homeware & Brass",
  "Festive Hampers",
  "Bhet Khas (Gifts)",
];

/** Dedicated Puneri artisanal shop & pantry page */
export function ShopView() {
  const { setContactOpen } = useNav();
  const [selectedCategory, setSelectedCategory] = useState("All Items");
  const gridSectionRef = useRef<HTMLElement>(null);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    // Maintain scroll position anchored to the product grid section if user scrolled down
    if (gridSectionRef.current) {
      const rect = gridSectionRef.current.getBoundingClientRect();
      const stickyHeaderHeight = 140; // navbar (~76px) + filter bar (~64px)
      if (rect.top < stickyHeaderHeight) {
        window.scrollTo({
          top: window.scrollY + rect.top - stickyHeaderHeight + 10,
          behavior: "smooth",
        });
      }
    }
  };

  const items = SHOP_PRODUCTS.filter((p) => {
    if (selectedCategory === "All Items") return true;
    if (selectedCategory === "Chaha & Bakery") {
      return p.category === "Chaha & Bakery" || p.category === "Bakery";
    }
    if (selectedCategory === "Bhet Khas (Gifts)") {
      return p.category === "Bhet Khas (Gifts)" || p.category === "Merch";
    }
    if (selectedCategory === "Festive Hampers") {
      return p.category === "Festive Hampers" || p.id === "brass-strainer";
    }
    if (selectedCategory === "Homeware & Brass") {
      return p.category === "Homeware & Brass";
    }
    if (selectedCategory === "Masale & Pantry") {
      return p.category === "Masale & Pantry";
    }
    return p.category === selectedCategory;
  });

  return (
    <div className="bg-cream pt-[64px] lg:pt-[76px] min-h-screen">
      {/* Shop by category strip - clearly positioned below the fixed navbar */}
      <section className="sticky top-[64px] lg:top-[76px] z-30 bg-[#FAF6F0] border-b border-maroon/15 py-3.5 sm:py-4 shadow-xs">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar -mx-1 px-1">
            {CATEGORIES.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => handleCategorySelect(s)}
                className={`shrink-0 px-4 sm:px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer select-none ${
                  selectedCategory === s
                    ? "bg-maroon text-cream shadow-sm ring-1 ring-maroon"
                    : "bg-white text-maroon/85 hover:bg-maroon/5 border border-maroon/20 hover:border-maroon/40"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products grid section - maintained scroll anchor, min-height to prevent jitter, and ample breathing room */}
      <section
        ref={gridSectionRef}
        id="shop-products"
        className="bg-cream pt-8 sm:pt-10 pb-16 lg:pb-20 min-h-[65vh] sm:min-h-[75vh] snap-start scroll-mt-[130px] lg:scroll-mt-[150px]"
      >
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          {items.length === 0 ? (
            <div className="py-16 px-6 text-center bg-card rounded-[2px] border border-maroon/15 max-w-2xl mx-auto">
              <Gift className="h-10 w-10 text-saffron mx-auto mb-3" />
              <h3 className="font-display text-2xl font-bold text-maroon">
                Custom {selectedCategory}
              </h3>
              <p className="mt-2 text-sm text-maroon/75 max-w-md mx-auto leading-relaxed">
                Curated festival hampers, faral boxes, and artisanal gift sets are assembled fresh to order for families and corporate events.
              </p>
              <button
                onClick={() => setContactOpen(true)}
                className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-maroon text-cream text-xs font-semibold hover:bg-saffron hover:text-maroon transition-colors"
              >
                Inquire / Place Custom Order
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((p) => (
                <article
                  key={p.id}
                  className="group flex flex-col bg-card rounded-[2px] overflow-hidden border border-maroon/15 hover:shadow-xl hover:shadow-maroon/5 transition-all hover:-translate-y-1"
                >
                  <figure className="relative aspect-square overflow-hidden bg-white p-3 sm:p-4 flex items-center justify-center border-b border-maroon/10">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    {p.badge && (
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-saffron text-maroon text-[10px] tracking-widest uppercase font-bold">
                        {p.badge}
                      </span>
                    )}
                  </figure>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-[10px] tracking-widest uppercase text-saffron font-bold mb-1">
                        {p.category}
                      </p>
                      <h3 className="font-display text-xl font-semibold text-maroon leading-snug">
                        {p.name}
                      </h3>
                      <p className="text-xs text-saffron font-medium mt-0.5">
                        {p.marathiName}
                      </p>
                      <p className="mt-2 text-xs text-maroon/75 leading-relaxed">
                        {p.blurb}
                      </p>
                    </div>
                    <div className="mt-5 pt-4 border-t border-maroon/10 flex items-center justify-between">
                      <span className="font-display text-xl font-bold text-maroon">
                        {p.price}
                      </span>
                      <button
                        onClick={() => setContactOpen(true)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-maroon text-cream text-xs font-semibold hover:bg-saffron hover:text-maroon transition-colors"
                      >
                        <ShoppingBag className="h-3.5 w-3.5" />
                        Order / Inquire
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Features note */}
          <div className="mt-12 sm:mt-16 grid sm:grid-cols-3 gap-5 sm:gap-6 p-5 sm:p-8 bg-card rounded-[2px] border border-maroon/15">
            <div className="flex items-start gap-3">
              <Truck className="h-5 w-5 text-saffron shrink-0 mt-0.5" />
              <div>
                <p className="font-display font-semibold text-maroon text-base">Pune &amp; All-India Delivery</p>
                <p className="text-xs text-maroon/70 mt-1">Carefully packed in traditional eco-friendly paper hampers.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Award className="h-5 w-5 text-saffron shrink-0 mt-0.5" />
              <div>
                <p className="font-display font-semibold text-maroon text-base">Handmade in Tambat Ali</p>
                <p className="text-xs text-maroon/70 mt-1">Direct support to authentic local artisan coppersmiths.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Gift className="h-5 w-5 text-saffron shrink-0 mt-0.5" />
              <div>
                <p className="font-display font-semibold text-maroon text-base">Custom Ganeshotsav &amp; Diwali Kits</p>
                <p className="text-xs text-maroon/70 mt-1">Curated festival hampers with freshly made sweets and faral.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
