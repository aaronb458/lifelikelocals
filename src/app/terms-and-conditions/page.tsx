import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions | Life Like Locals",
  description: "Read our terms and conditions for booking tours with Life Like Locals in Nassau, Bahamas.",
};

export default function TermsAndConditions() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-section pt-20"
        style={{
          backgroundImage: `url('/images/Banner-4.jpg')`,
          minHeight: "400px",
        }}
      >
        <div className="container-custom hero-content">
          <h1 className="text-white mb-4">Terms and Conditions</h1>
          <p className="text-white/90 text-xl max-w-2xl">
            Please read these terms carefully before booking a tour with Life
            Like Locals.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {/* Booking Requirements */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-text-dark mb-4">
                  1. Booking Requirements
                </h2>
                <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-bold text-sm">1</span>
                    </div>
                    <p className="text-text-light">
                      <strong className="text-text-dark">Arrival Time:</strong>{" "}
                      Guests must arrive at the designated meeting point at least
                      15 minutes before the scheduled tour departure time.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-bold text-sm">2</span>
                    </div>
                    <p className="text-text-light">
                      <strong className="text-text-dark">Ticket Validity:</strong>{" "}
                      Bookings expire 15 minutes after the scheduled departure
                      time. Late arrivals may not be accommodated.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary font-bold text-sm">3</span>
                    </div>
                    <p className="text-text-light">
                      <strong className="text-text-dark">
                        Non-Transferability:
                      </strong>{" "}
                      Tour tickets are non-transferable and valid only for the
                      named guest(s) and specified date/time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Ticket Value & Refunds */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-text-dark mb-4">
                  2. Ticket Value & Refunds
                </h2>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md mb-4">
                    <p className="text-text-dark font-semibold">
                      Tickets have no cash value and are non-refundable except as
                      specified in our Policies.
                    </p>
                  </div>
                  <ul className="text-text-light space-y-3">
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Cancellations made 14+ days before the tour date are eligible
                      for full refunds.
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Weather-related cancellations by Life Like Locals result in
                      refunds or rescheduling at customer&apos;s choice.
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Refunds are processed within 10 business days to the original
                      payment method.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Children & Supervision */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-text-dark mb-4">
                  3. Children & Supervision
                </h2>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <p className="text-text-light mb-4">
                    All children under 18 years of age must be accompanied by an
                    adult supervisor at all times during the tour.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-md">
                    <p className="text-text-dark">
                      <strong>Child Pricing:</strong> Children under 10 years of
                      age are eligible for reduced pricing on applicable tours.
                      Proof of age may be requested.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tour Conduct */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-text-dark mb-4">
                  4. Tour Conduct
                </h2>
                <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
                  <p className="text-text-light">
                    Guests are expected to behave respectfully toward guides, staff,
                    and other tour participants. Life Like Locals reserves the right
                    to remove any guest whose behavior is disruptive or
                    inappropriate, without refund.
                  </p>
                  <p className="text-text-light">
                    Photography and video for personal use is permitted. Commercial
                    use requires prior written permission.
                  </p>
                </div>
              </div>

              {/* Liability */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-text-dark mb-4">
                  5. Limitation of Liability
                </h2>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <p className="text-text-light mb-4">
                    Life Like Locals is not responsible for:
                  </p>
                  <ul className="text-text-light space-y-2">
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      Loss or theft of personal belongings during tours
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      Cruise ships diverting to other ports
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      Bookings made for incorrect locations or dates
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      Force majeure events beyond our control
                    </li>
                  </ul>
                </div>
              </div>

              {/* Changes to Terms */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-text-dark mb-4">
                  6. Changes to Terms
                </h2>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <p className="text-text-light">
                    Life Like Locals reserves the right to modify these terms and
                    conditions at any time. Changes will be posted on this page.
                    Continued use of our services constitutes acceptance of any
                    modifications.
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-text-dark mb-4">
                  7. Contact Information
                </h2>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <p className="text-text-light mb-4">
                    For questions regarding these terms and conditions, please
                    contact us:
                  </p>
                  <ul className="text-text-light space-y-2">
                    <li>
                      <strong className="text-text-dark">Email:</strong>{" "}
                      <a
                        href="mailto:lifelikelocals@gmail.com"
                        className="text-primary hover:underline"
                      >
                        lifelikelocals@gmail.com
                      </a>
                    </li>
                    <li>
                      <strong className="text-text-dark">Phone:</strong>{" "}
                      <a
                        href="tel:242-815-8687"
                        className="text-primary hover:underline"
                      >
                        242-815-8687
                      </a>
                    </li>
                    <li>
                      <strong className="text-text-dark">Address:</strong> P.O. Box
                      SS-19731, Nassau, Bahamas
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Last Updated */}
            <p className="text-text-light text-sm text-center mt-8">
              Last updated: January 2024
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg-light section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-text-dark mb-4">
              Ready to Book?
            </h2>
            <p className="text-text-light text-lg mb-8">
              By booking a tour, you agree to these terms and conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tours-and-prices" className="btn-primary">
                View Tours & Prices
              </Link>
              <Link href="/policies" className="btn-outline">
                View Policies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
