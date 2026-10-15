import type { Metadata } from "next";
import { Cormorant_Garamond, EB_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const body = EB_Garamond({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mrunmayee | Punyatla Swaad. Manapasun.",
  description:
    "Mrunmayee café pays homage to the heritage, hospitality, and authentic flavors of Pune. From morning misal, kothimbir vadi and bhakri-pithla to slow-brewed amruttulya chaha, festive sweets, and peth baithaks. Ya, basa. Jevun ghya.",
  keywords: [
    "Mrunmayee",
    "Pune Café",
    "Punyatla Swaad",
    "Puneri Misal",
    "Pithla Bhakri",
    "Thalipeeth",
    "Kothimbir Vadi",
    "Mastani",
    "Puran Poli",
    "Ukadiche Modak",
    "Amruttulya Chaha",
    "Sadashiv Peth",
    "FC Road Pune",
    "Maharashtrian Cuisine",
  ],
  authors: [{ name: "Mrunmayee" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Mrunmayee | Punyatla Swaad. Manapasun.",
    description:
      "A tribute to the rich food culture, historic wadas, and warm hospitality of Pune. Ya, basa. Jevun ghya.",
    siteName: "Mrunmayee",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mrunmayee | Punyatla Swaad. Manapasun.",
    description:
      "A tribute to the rich food culture, historic wadas, and warm hospitality of Pune. Ya, basa. Jevun ghya.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="mr" suppressHydrationWarning>
      <body
        className={`${display.variable} ${body.variable} ${sans.variable} antialiased bg-background text-foreground font-body`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
