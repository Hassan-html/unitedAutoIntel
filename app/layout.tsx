import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SocialMediaIcons from "@/app/components/SocialButtons";

const inter = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: " United Auto - Premium Auto Spare Parts in Dubai",
  description: "Your trusted source for premium auto spare parts in Dubai.",
  openGraph: {
    title: " United Auto - Premium Auto Spare Parts in Dubai",
    description:
      "Explore our wide range of quality auto spare parts for all major automotive brands. Trusted in Dubai.",
    url: "https://www.unitedautointl.com/",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: " United Auto - Auto Spare Parts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@unitedautointl",
    title: " United Auto - Premium Auto Spare Parts in Dubai",
    description:
      "Explore our wide range of quality auto spare parts for all major brands. Trusted in Dubai.",
    images: "/images/twitter-image.jpg",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.unitedautointl.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <SocialMediaIcons />
      </body>
    </html>
  );
}
