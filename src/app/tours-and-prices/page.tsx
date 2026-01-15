import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tours and Prices | Life Like Locals",
  description:
    "Explore our authentic Bahamian tours including Cultural Experience Tour, Bus Tour, and Walking Tour. Book your Nassau adventure today.",
};

export default function ToursAndPrices() {
  return (
    <>
      {/* Hero Section with Banner */}
      <section
        className="hero-section pt-20"
        style={{
          backgroundImage: `url('/images/gallery/VIC00843.jpg')`,
          backgroundPosition: 'center 50%',
          minHeight: "400px",
        }}
      >
        <div className="container-custom hero-content">
          <h1 className="text-white mb-4">Tours & Prices</h1>
          <p className="text-white/90 text-xl max-w-2xl">
            Hop on our 24-seater bus and let us roll you through Nassau the local way.
            All tours are led by passionate native Bahamian guides who were born here, live here, and know all the stories.
          </p>
        </div>
      </section>

      {/* Main Tour - Cultural Experience */}
      <section className="section-dark section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className="min-h-[400px] rounded-lg bg-cover bg-center shadow-2xl"
              style={{
                backgroundImage: `url('/images/gallery/VIC09911.jpg')`,
                backgroundPosition: 'center 30%',
              }}
            />
            <div>
              <span className="inline-block bg-[#f7941d] text-white text-sm px-4 py-2 rounded mb-4 uppercase tracking-wider font-semibold">
                Our Signature Experience
              </span>
              <h2 className="text-white mb-4">Cultural Experience Tour with Lunch</h2>
              <div className="divider"></div>
              <p className="text-white/85 text-lg mb-6">
                Immerse yourself in authentic Bahamian culture with our signature
                tour. Meet local Bahamians, enjoy traditional dishes, and hear
                authentic stories from residents who emphasize genuine interaction
                over typical tourist experiences.
              </p>
              <ul className="text-white/85 space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#2ea3f2]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Traditional Bahamian lunch included
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#2ea3f2]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Native guide with local expertise
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#2ea3f2]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Visit to cultural sites
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#2ea3f2]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Authentic storytelling
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#2ea3f2]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Photo opportunities
                </li>
              </ul>
              <div className="flex flex-wrap items-end gap-6 mb-8">
                <div>
                  <span className="text-white/60 text-sm uppercase tracking-wider">
                    Adults
                  </span>
                  <div className="text-white text-4xl font-bold">$50</div>
                </div>
                <div>
                  <span className="text-white/60 text-sm uppercase tracking-wider">
                    Kids (under 10)
                  </span>
                  <div className="text-white text-4xl font-bold">$25</div>
                </div>
              </div>
              <Link href="/contact" className="btn-secondary">
                Book This Tour
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Add-On Tours */}
      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-[#333] mb-4">Add-On Tours</h2>
            <div className="divider divider-center"></div>
            <p className="text-[#666] text-lg max-w-2xl mx-auto mt-4">
              Enhance your experience with our additional tour options.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Bus Tour */}
            <div className="card">
              <div
                className="card-image"
                style={{
                  backgroundImage: `url('/images/gallery/VIC00532.jpg')`,
                  backgroundPosition: 'center 40%',
                }}
              />
              <div className="card-content">
                <span className="inline-block bg-[#f7941d] text-white text-sm px-3 py-1 rounded mb-4 uppercase tracking-wider">
                  Add-On Tour
                </span>
                <h3 className="text-[#333] mb-4">Two-Hour Bus Tour</h3>
                <p className="text-[#666] mb-6">
                  Explore neighborhoods tourists typically don&apos;t visit. Our
                  knowledgeable guides take you through local areas, showcasing
                  how Bahamians really live. See hidden spots, discover local
                  cuisine locations, and learn about communities across Nassau.
                </p>
                <ul className="feature-list mb-6">
                  <li>Air-conditioned bus</li>
                  <li>Expert local guide</li>
                  <li>Visit to key landmarks</li>
                  <li>Neighborhood exploration</li>
                  <li>Historical commentary</li>
                </ul>
                <div className="flex items-center justify-between">
                  <div className="price-tag">
                    $50 <small>/person</small>
                  </div>
                  <Link href="/contact" className="btn-primary">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Private Group Tours */}
            <div className="card">
              <div
                className="card-image"
                style={{
                  backgroundImage: `url('/images/gallery/VIC00519.jpg')`,
                  backgroundPosition: 'center 40%',
                }}
              />
              <div className="card-content">
                <span className="inline-block bg-[#f7941d] text-white text-sm px-3 py-1 rounded mb-4 uppercase tracking-wider">
                  Private Experience
                </span>
                <h3 className="text-[#333] mb-4">Private Group Tours</h3>
                <p className="text-[#666] mb-6">
                  Want the whole bus to yourself? Perfect for families, corporate
                  groups, or celebrations. We customize the tour to your interests,
                  timing, and special requests. Your group, your vibe, our expertise.
                </p>
                <ul className="feature-list mb-6">
                  <li>Exclusive bus for your group</li>
                  <li>Customized itinerary</li>
                  <li>Flexible timing</li>
                  <li>Special occasion packages</li>
                  <li>Corporate team building</li>
                </ul>
                <div className="flex items-center justify-between">
                  <div className="price-tag">
                    Contact <small>for quote</small>
                  </div>
                  <Link href="/contact" className="btn-primary">
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-[#333] mb-4">Booking Information</h2>
            <div className="divider divider-center"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="blurb">
              <div className="blurb-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <h4>Payment Methods</h4>
              <p>We accept VISA and Mastercard international credit cards.</p>
            </div>

            <div className="blurb">
              <div className="blurb-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4>Confirmation</h4>
              <p>
                You&apos;ll receive booking confirmation within 24 hours via email.
              </p>
            </div>

            <div className="blurb">
              <div className="blurb-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4>Cancellation</h4>
              <p>Full refunds available for cancellations 14+ days before tour.</p>
            </div>

            <div className="blurb">
              <div className="blurb-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h4>Children</h4>
              <p>Children under 18 are welcome with adult supervision.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="hero-section hero-light section-padding parallax"
        style={{
          backgroundImage: `url('/images/gallery/VIC00649.jpg')`,
          backgroundPosition: 'center 50%',
        }}
      >
        <div className="container-custom hero-content text-center mx-auto">
          <h2 className="text-white text-4xl mb-4">Ready to Book?</h2>
          <p className="text-white/90 text-xl max-w-2xl mx-auto mb-8">
            Contact us to reserve your spot on an authentic Bahamian adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
            <Link href="/faqs" className="btn-white">
              View FAQs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
