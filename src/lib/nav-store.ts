"use client";

import { create } from "zustand";

export type ViewKey =
  | "home"
  | "menus"
  | "shop"
  | "festivities";

type NavState = {
  view: ViewKey;
  setView: (v: ViewKey) => void;
  /** optional anchor to scroll to when switching to home */
  anchor: string | null;
  setAnchor: (a: string | null) => void;
  /** search overlay */
  searchOpen: boolean;
  setSearchOpen: (o: boolean) => void;
  /** contact side drawer (opens Sheet with booking form) */
  contactOpen: boolean;
  setContactOpen: (o: boolean) => void;
  /** mobile nav open */
  mobileNavOpen: boolean;
  setMobileNavOpen: (o: boolean) => void;
};

export const useNav = create<NavState>((set) => ({
  view: "home",
  setView: (v) =>
    set({
      view: v,
      anchor: null,
      mobileNavOpen: false,
      searchOpen: false,
    }),
  anchor: null,
  setAnchor: (a) => set({ anchor: a }),
  searchOpen: false,
  setSearchOpen: (o) => set({ searchOpen: o }),
  contactOpen: false,
  setContactOpen: (o) => set({ contactOpen: o }),
  mobileNavOpen: false,
  setMobileNavOpen: (o) => set({ mobileNavOpen: o }),
}));
