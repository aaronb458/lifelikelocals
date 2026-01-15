"use client";

import { useState } from "react";
import Link from "next/link";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  faqs: FAQ[];
}

const faqCategories: FAQCategory[] = [
  {
    title: "General Information",
    faqs: [
      {
        question: "Why book with Life Like Locals?",
        answer:
          "We're an experience-based travel company led by passionate native Bahamians offering authentic cultural tours and family-friendly activities, avoiding typical tourist traps. Our guides share down-home stories and traditional cuisine that you won't find on regular tours.",
      },
      {
        question: "Who are the Cultural Specialists?",
        answer:
          "Our Cultural Specialists are local experts carefully recruited for their knowledge, personalities, and friendliness—including guides, historians, chefs, and comedians who've undergone extensive screening to ensure the best experience for our guests.",
      },
      {
        question: "Are your tours private?",
        answer:
          "Though privately owned, tours include other guests alongside your group. This creates a fun, social atmosphere while still maintaining an intimate experience.",
      },
      {
        question: "Are all your tours family-friendly?",
        answer:
          "Yes! We have planned every tour with family travelers in mind. This includes families of all kinds. Children under 18 are always welcome with adult supervision.",
      },
      {
        question: "Is the bus tour already planned out?",
        answer:
          "Yes, the itinerary is designed to showcase important island locations, but specific requests can be discussed with us prior to your tour.",
      },
    ],
  },
  {
    title: "Bookings & Changes",
    faqs: [
      {
        question: "How can I change my booking?",
        answer:
          "Contact us at lifelikelocals@gmail.com or call 242-815-8687 to modify your booking dates or times. We're happy to accommodate changes when possible.",
      },
      {
        question: "How do I get confirmation?",
        answer:
          "Once your bank authorizes your payment, you will receive a confirmation via your email address within 24 hours.",
      },
      {
        question: "Can I add another person to my booking?",
        answer:
          "Yes! Contact us about availability and additional costs. We'll do our best to accommodate your request.",
      },
      {
        question: "What if there's no online availability?",
        answer:
          "Email us and we'll attempt to accommodate your request, though advance booking is always recommended for the best experience.",
      },
      {
        question: "Are there any penalty or change fees?",
        answer:
          "No penalty or change fee will be charged if this is a postponement within 1 year of your original booking date.",
      },
    ],
  },
  {
    title: "Tour Day Information",
    faqs: [
      {
        question: "What if I'm late or don't show up?",
        answer:
          "Please arrive 15 minutes early and notify us if you're running late. Bookings expire 15 minutes after scheduled departure, and missing your departure time forfeits any refund.",
      },
      {
        question: "What transportation is included?",
        answer:
          "Air-conditioned buses are used for our tours, providing comfortable transportation throughout your experience.",
      },
      {
        question: "What happens in bad weather?",
        answer:
          "Most tours proceed in light rain; we'll adapt the itinerary for your comfort. If conditions become unsafe, tours may be cancelled with full refunds offered.",
      },
      {
        question: "What if Life Like Locals cancels my tour?",
        answer:
          "If we cancel your tour, we'll suggest alternatives or provide a refund within 10 business days (except for force majeure situations).",
      },
    ],
  },
  {
    title: "Payment & Refunds",
    faqs: [
      {
        question: "Which payment methods are accepted?",
        answer:
          "We accept payment with international credit cards (VISA, Mastercard).",
      },
      {
        question: "How do I get a refund?",
        answer:
          "We will refund you within 10 business days with the credit card you used. Cancellations made 14+ days before the tour date receive full refunds.",
      },
    ],
  },
  {
    title: "COVID-19",
    faqs: [
      {
        question: "Do I need a Health Pass to do your tours?",
        answer:
          "As of October 2022, there are NO COVID RESTRICTIONS. However, we still maintain cleanliness protocols for your comfort and safety.",
      },
    ],
  },
];

function FAQItem({ faq }: { faq: FAQ }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <button
        className="accordion-header w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{faq.question}</span>
        <svg
          className={`accordion-icon ${isOpen ? "open" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="accordion-content">
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQs() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-section pt-20"
        style={{
          backgroundImage: `url('/images/gallery/VIC00519.jpg')`,
          backgroundPosition: 'center 50%',
          minHeight: "400px",
        }}
      >
        <div className="container-custom hero-content">
          <h1 className="text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-white/90 text-xl max-w-2xl">
            Find answers to common questions about our tours, bookings, and
            policies.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {faqCategories.map((category, index) => (
              <div key={index} className="mb-12">
                <h2 className="text-[#333] text-2xl mb-2">{category.title}</h2>
                <div className="divider mb-6"></div>
                <div className="bg-white rounded-lg shadow-md p-6">
                  {category.faqs.map((faq, faqIndex) => (
                    <FAQItem key={faqIndex} faq={faq} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-dark section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-4">Still Have Questions?</h2>
            <div className="divider divider-center"></div>
            <p className="text-white/85 text-lg mt-6 mb-8">
              We&apos;re here to help! Reach out to us and we&apos;ll get back to you as
              soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="mailto:lifelikelocals@gmail.com" className="btn-primary">
                Email Us
              </a>
              <a href="tel:242-815-8687" className="btn-white">
                Call 242-815-8687
              </a>
            </div>
            <p className="text-white/70">
              You can also reach us on{" "}
              <a
                href="https://wa.me/2428158687"
                className="text-[#2ea3f2] hover:underline"
              >
                WhatsApp
              </a>
              ,{" "}
              <a
                href="https://facebook.com/lifelikelocals"
                className="text-[#2ea3f2] hover:underline"
              >
                Facebook
              </a>
              , or{" "}
              <a
                href="https://instagram.com/lifelikelocalsbahamas"
                className="text-[#2ea3f2] hover:underline"
              >
                Instagram
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="hero-section hero-light section-padding parallax"
        style={{
          backgroundImage: `url('/images/Banner.jpg')`,
        }}
      >
        <div className="container-custom hero-content text-center mx-auto">
          <h2 className="text-white text-4xl mb-4">Ready to Book Your Tour?</h2>
          <p className="text-white/90 text-xl max-w-2xl mx-auto mb-8">
            Experience authentic Bahamian culture with our native guides.
          </p>
          <Link href="/tours-and-prices" className="btn-secondary">
            View Tours & Prices
          </Link>
        </div>
      </section>
    </>
  );
}
