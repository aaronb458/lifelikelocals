import type { Metadata } from "next";
import FAQContent from "@/components/FAQContent";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Find answers to frequently asked questions about Life Like Locals tours in Nassau, Bahamas. Booking info, cancellations, payments, and more.",
  openGraph: {
    title: "FAQs | Life Like Locals",
    description: "Answers to common questions about our authentic Bahamian tours, bookings, and policies.",
    images: ["/images/gallery/VIC00519.jpg"],
  },
};

export default function FAQs() {
  return <FAQContent />;
}
