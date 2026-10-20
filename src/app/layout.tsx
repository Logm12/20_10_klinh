import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Dancing_Script } from "next/font/google";
import { personalConfig } from "@/content/personal";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-playfair",
  display: "swap",
});

const dancing = Dancing_Script({
  subsets: ["latin", "vietnamese"],
  variable: "--font-dancing",
  display: "swap",
});

export const metadata: Metadata = {
  title: personalConfig.siteMeta.title,
  description: personalConfig.siteMeta.description,
  authors: [{ name: personalConfig.brother.signOff }],
  openGraph: {
    title: personalConfig.siteMeta.title,
    description: personalConfig.siteMeta.description,
    type: "website",
    locale: "vi_VN",
    siteName: "Một Chút Dịu Dàng Dành Cho Em",
  },
  twitter: {
    card: "summary_large_image",
    title: personalConfig.siteMeta.title,
    description: personalConfig.siteMeta.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFF9F2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${inter.variable} ${playfair.variable} ${dancing.variable} scroll-smooth`}>
      <body className="bg-cream text-warm-brown font-sans antialiased selection:bg-blush-pink selection:text-warm-brown min-h-screen">
        {children}
      </body>
    </html>
  );
}
