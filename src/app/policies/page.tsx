import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Policies | Life Like Locals",
  description: "Review our cancellation, refund, and privacy policies for Life Like Locals tours in Nassau, Bahamas.",
};

export default function Policies() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-section pt-20"
        style={{
          backgroundImage: `url('/images/Banner-3.jpg')`,
          minHeight: "400px",
        }}
      >
        <div className="container-custom hero-content">
          <h1 className="text-white mb-4">Policies</h1>
          <p className="text-white/90 text-xl max-w-2xl">
            Important information about our cancellation, refund, and privacy
            policies.
          </p>
        </div>
      </section>

      {/* Policies Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Cancellation Policy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-text-dark mb-6 flex items-center gap-3">
                <svg
                  className="w-8 h-8 text-primary"
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
                Cancellation Policy
              </h2>
              <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
                <p className="text-text-light">
                  Life Like Locals does run in the rain, but we do cancel tours at
                  times based on unsafe conditions. This decision is made by our
                  Corporate office.
                </p>
                <div className="bg-bg-light p-4 rounded-md">
                  <h3 className="font-semibold text-text-dark mb-2">
                    Guest Cancellations:
                  </h3>
                  <ul className="text-text-light space-y-2">
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
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
                      <span>
                        <strong>14+ days before tour:</strong> Full refund
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                      <span>
                        <strong>Less than 14 days:</strong> Contact us to discuss
                        options
                      </span>
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
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span>
                        <strong>Postponement within 1 year:</strong> No penalty or
                        change fee
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Refund Policy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-text-dark mb-6 flex items-center gap-3">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Refund Policy
              </h2>
              <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
                <p className="text-text-light">
                  We want you to have a great experience. If circumstances require
                  a refund, here&apos;s what to expect:
                </p>
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
                    Tours canceled due to unsafe weather conditions result in full
                    refunds or rescheduling at customer discretion.
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
                    We accept VISA and Mastercard international credit cards.
                  </li>
                </ul>
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md">
                  <p className="text-text-dark text-sm">
                    <strong>Please Note:</strong> We do not refund if cruise ships
                    divert to other ports or if bookings are made at wrong
                    locations.
                  </p>
                </div>
              </div>
            </div>

            {/* Privacy Policy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-text-dark mb-6 flex items-center gap-3">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                Privacy & Data Collection
              </h2>
              <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
                <p className="text-text-light">
                  Life Like Locals collects personal identifiable information
                  through our website to provide you with the best possible
                  service. We are committed to protecting your privacy.
                </p>
                <h3 className="font-semibold text-text-dark">
                  Our Privacy Practices:
                </h3>
                <ul className="text-text-light space-y-2">
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
                    We use cookies and web beacons to improve your browsing
                    experience
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
                    We collect site usage statistics to improve our services
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
                    Third-party access to personal information is limited and
                    controlled
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
                    We comply with legally-required disclosures
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
                    Policy changes will be communicated through our website
                  </li>
                </ul>
              </div>
            </div>

            {/* External Links */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-text-dark mb-6 flex items-center gap-3">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                External Links
              </h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <p className="text-text-light">
                  Our website may contain links to external sites that are not
                  operated by us. We have no control over the content and practices
                  of these sites and cannot accept responsibility for their
                  respective privacy policies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-bg-light section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-text-dark mb-4">
              Questions About Our Policies?
            </h2>
            <p className="text-text-light text-lg mb-8">
              If you have any questions about our policies, please don&apos;t
              hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link href="/terms-and-conditions" className="btn-outline">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
