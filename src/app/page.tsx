"use client";

import { useEffect } from "react";
import { useNav } from "@/lib/nav-store";
import { Navbar } from "@/components/mrunmayee/navbar";
import { Footer } from "@/components/mrunmayee/footer";
import { ContactDrawer } from "@/components/mrunmayee/contact-drawer";
import { HomeView } from "@/components/mrunmayee/views/home-view";
import { MenusView } from "@/components/mrunmayee/views/menus-view";
import { ShopView } from "@/components/mrunmayee/views/shop-view";
import { FestivitiesView } from "@/components/mrunmayee/views/festivities-view";

export default function Page() {
  const { view, anchor } = useNav();

  // Scroll to anchored section on view change
  useEffect(() => {
    if (view === "home" && anchor) {
      const t = setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) {
          // account for fixed header
          const top = el.getBoundingClientRect().top + window.scrollY - 90;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 120);
      return () => clearTimeout(t);
    }
  }, [view, anchor]);

  // Reset scroll on view change
  useEffect(() => {
    if (!anchor) window.scrollTo({ top: 0, behavior: "smooth" });
  }, [view, anchor]);

  return (
    <div className="sticky-footer-wrap bg-background">
      <Navbar />
      <main className="flex-1">
        {view === "home" && <HomeView />}
        {view === "menus" && <MenusView />}
        {view === "shop" && <ShopView />}
        {view === "festivities" && <FestivitiesView />}
      </main>
      <Footer />
      {/* Contact side drawer (opens from "Book a Table" / footer "Contact us" links) */}
      <ContactDrawer />
    </div>
  );
}
