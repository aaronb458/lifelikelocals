import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "COVID-19 Guidelines | Life Like Locals",
  description: "Learn about our COVID-19 safety measures and guidelines for Life Like Locals tours in Nassau, Bahamas.",
};

export default function CovidGuidelines() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-section pt-20"
        style={{
          backgroundImage: `url('/images/Banner-2.jpg')`,
          minHeight: "400px",
        }}
      >
        <div className="container-custom hero-content">
          <h1 className="text-white mb-4">COVID-19 Guidelines</h1>
          <p className="text-white/90 text-xl max-w-2xl">
            Your safety is our priority. Learn about our health and safety
            measures.
          </p>
        </div>
      </section>

      {/* Current Status */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Status Banner */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-green-600"
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
                </div>
                <div>
                  <h2 className="text-xl font-bold text-green-800 mb-2">
                    Current Status: No COVID Restrictions
                  </h2>
                  <p className="text-green-700">
                    As of October 2022, there are NO COVID RESTRICTIONS required
                    to participate in our tours. You do not need a Health Pass.
                  </p>
                </div>
              </div>
            </div>

            {/* Safety Measures */}
            <h2 className="text-2xl font-bold text-text-dark mb-6">
              Our Safety Measures
            </h2>
            <p className="text-text-light mb-8">
              While restrictions have been lifted, we continue to maintain
              cleanliness protocols for your comfort and safety. Here&apos;s what we
              do to ensure a safe experience:
            </p>

            <div className="space-y-8">
              {/* Social Distancing */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-dark mb-2">
                      Social Distancing
                    </h3>
                    <p className="text-text-light">
                      Your host will enforce social distancing during your tour
                      when appropriate. Instead of traditional greetings, guests
                      receive smiles or friendly bows. The tour maintains
                      effectiveness while keeping participants safely apart when
                      needed.
                    </p>
                  </div>
                </div>
              </div>

              {/* Masks & Hygiene */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-dark mb-2">
                      Masks & Hygiene
                    </h3>
                    <p className="text-text-light">
                      Your host will always carry a mask with them, and we kindly
                      ask guests to bring their own if they prefer to wear one.
                      Hand sanitizers are recommended for personal use, though
                      hosts provide them throughout experiences as needed.
                    </p>
                  </div>
                </div>
              </div>

              {/* Crowd Management */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-dark mb-2">
                      Crowd Management
                    </h3>
                    <p className="text-text-light">
                      When popular landmarks attract crowds, hosts identify
                      alternative viewing locations offering equal visibility from
                      safe distances—whether across streets or elevated positions.
                      Hosts also suggest less-busy times for viewing major
                      attractions up close.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="mt-12 bg-primary/5 rounded-lg p-6">
              <h3 className="text-xl font-bold text-text-dark mb-4">
                Our Commitment
              </h3>
              <p className="text-text-light">
                Life Like Locals prioritizes guest and staff safety through
                preventative measures including maintained distance when needed,
                mask availability, hand sanitization stations, and strategic route
                adjustments to avoid congestion during island tours. We continuously
                monitor local guidelines and adjust our practices accordingly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg-light section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-text-dark mb-4">
              Questions About Our Guidelines?
            </h2>
            <p className="text-text-light text-lg mb-8">
              If you have specific health concerns or questions, please reach out
              to us before booking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link href="/faqs" className="btn-outline">
                View FAQs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
