import type { Metadata } from "next";
import { Open_Sans, Raleway, Josefin_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import PageLoader from "@/components/PageLoader";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const josefinSans = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Life Like Locals | Authentic Bahamian Tours in Nassau",
    template: "%s | Life Like Locals",
  },
  description: "Experience the real Bahamas with native guides. Cultural tours, traditional cuisine, and down-home stories in Nassau. Book your authentic island adventure today!",
  keywords: ["Bahamas tours", "Nassau tours", "Bahamian culture", "local guides", "Caribbean travel", "authentic experiences", "cultural tours", "Nassau excursions"],
  authors: [{ name: "Life Like Locals" }],
  creator: "Life Like Locals",
  metadataBase: new URL("https://lifelikelocals.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lifelikelocals.com",
    siteName: "Life Like Locals",
    title: "Life Like Locals | Authentic Bahamian Tours in Nassau",
    description: "Experience the real Bahamas with native guides. Cultural tours, traditional cuisine, and down-home stories. Book your authentic island adventure!",
    images: [
      {
        url: "/images/gallery/VIC00788.jpg",
        width: 1200,
        height: 630,
        alt: "Life Like Locals - Authentic Bahamian Tour Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Life Like Locals | Authentic Bahamian Tours",
    description: "Experience the real Bahamas with native guides. Cultural tours, traditional cuisine, and down-home stories in Nassau.",
    images: ["/images/gallery/VIC00788.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${raleway.variable} ${josefinSans.variable} antialiased`}>
        <PageLoader />
        <CustomCursor />
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
