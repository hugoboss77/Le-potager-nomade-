import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Le Potager Nomade | Food Truck frais, local & fait maison",

  description:
    "Le Potager Nomade, c’est une cuisine de saison, généreuse et faite maison qui vient à votre rencontre en Seine-et-Marne et en Isère. Découvrez notre carte, nos emplacements et nos événements.",

  keywords: [
    "Le Potager Nomade",
    "food truck",
    "food truck Seine-et-Marne",
    "food truck 77",
    "food truck Isère",
    "food truck 38",
    "cuisine maison",
    "cuisine de saison",
    "produits locaux",
    "événement food truck",
  ],

  openGraph: {
    title: "Le Potager Nomade",
    description:
      "Une cuisine généreuse, locale et faite maison, imaginée au rythme des saisons.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
