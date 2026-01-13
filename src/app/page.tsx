import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section - Beach Aerial */}
      <section
        className="hero-section pt-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80')`,
          minHeight: "90vh",
        }}
      >
        <div className="container-custom hero-content text-center mx-auto">
          <h1 className="text-white uppercase tracking-wide">
            Experience &quot;Life Like Locals&quot;<br />
            in the Bahamas
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Life Like Locals is an innovative, down-home Bahamian experience that
            inspires and evokes the real &quot;Bahamian connection&quot;.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tours-and-prices" className="btn-coral">
              Learn More
            </Link>
            <Link href="/contact" className="btn-outline-white">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* About Section with Images */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#666] mb-4">
                Life Like Locals is the curation of an indigenous collection of original and
                unique events that induct you into the &quot;real world of the locals&quot;,
                introducing our way of life, from the food, to the dances, to the heart and
                spirit of The Bahamas. Our goal is to give you an experience that you will
                never forget. &quot;This ain&apos;t no lie, you ain&apos;t go neva meet people like us, fa tru!&quot;
              </p>
              <p className="text-[#666] mb-4">
                We invite you to feel our vibrant character, learn our accent, embrace our
                lingo, share in the flavor of our food, and experience the unity of
                traditional and contemporary, and most importantly, become a part of it!
                Don&apos;t be a &quot;typical tourist&quot;, live a little and enjoy life.
              </p>
              <p className="text-[#666] font-semibold">
                What are you waiting for?
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://lifelikelocals.tempurl.host/wp-content/uploads/2021/09/Purple-drink-1.png"
                alt="Bahamian Drink"
                width={250}
                height={500}
                className="absolute right-0 top-0 z-10"
                unoptimized
              />
              <Image
                src="https://lifelikelocals.tempurl.host/wp-content/uploads/2021/09/orange-slice.png"
                alt="Orange Slice"
                width={200}
                height={200}
                className="absolute left-10 bottom-10"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Explore Experiences - Coral Banner */}
      <section className="section-coral section-padding">
        <div className="container-custom">
          <h2 className="mb-4">Explore Our Top Experiences</h2>
          <p className="text-white/90 mb-8">&quot;Unique Experiences Unlocked&quot;</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tours-and-prices" className="btn-white">
              See Tours
            </Link>
            <Link href="/contact" className="btn-outline-white">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className="min-h-[500px] rounded-lg bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80')`,
              }}
            />
            <div>
              <h2 className="text-[#333] mb-2">Why Choose Us?</h2>
              <p className="text-[#f26b5b] italic mb-6">&quot;Why go wit us?&quot;</p>
              <p className="text-[#666] mb-4">
                When you book with us, you make a big commitment and we take
                that very seriously. Our mission is to connect people and cultures.
                &quot;We does bring people together!&quot;
              </p>
              <p className="text-[#666] mb-4">
                Rather than following the old-fashion way of visiting an island
                vacation country, experience the vibrancy of the real life that resides
                on this magnificent island. Become familiar and then become
                fascinated. You don&apos;t know what you will try, but at least try it!
              </p>
              <p className="text-[#666] mb-4">
                Life Like Local experiences delivered by our team members are
                curated by our team of travel experts. This way you&apos;re guaranteed
                authenticity, amusement and memorable moments. Everyone&apos;s story
                is different, and you will meet many characteristics. Get ready to
                laugh. Get ready to learn. And most of all get ready to be inspired.
              </p>
              <p className="text-[#666] font-semibold italic">
                &quot;Yeah ya&apos;ll ga miss us!&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Grid */}
      <section className="section-light section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-[#f26b5b] uppercase tracking-wider mb-2">What to Expect</h2>
            <p className="text-[#666] italic">&quot;Unique Experiences Unlocked&quot;</p>
          </div>
          <div className="experience-grid">
            <div
              className="experience-item"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1533777324565-a040eb52facd?w=400&q=80')` }}
            >
              <span>Creative Tourism</span>
            </div>
            <div
              className="experience-item"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80')` }}
            >
              <span>Local Gastronomy</span>
            </div>
            <div
              className="experience-item"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&q=80')` }}
            >
              <span>Discovery & Culture</span>
            </div>
            <div
              className="experience-item"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1461360370896-922624d12a74?w=400&q=80')` }}
            >
              <span>History & Mystery</span>
            </div>
            <div
              className="experience-item"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1516939884455-1445c8652f83?w=400&q=80')` }}
            >
              <span>&quot;Tru tru&quot; Bahamian Dialect</span>
            </div>
            <div
              className="experience-item"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80')` }}
            >
              <span>Immersive Activities</span>
            </div>
            <div
              className="experience-item"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=400&q=80')` }}
            >
              <span>Education Made Fun</span>
            </div>
            <div
              className="experience-item"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80')` }}
            >
              <span>&quot;Real real Bahamian life&quot;</span>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-[#f26b5b] uppercase tracking-wider mb-2">What&apos;s Included</h2>
            <p className="text-[#666] italic">&quot;What yinna getting&quot;</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div
                className="h-48 rounded-lg bg-cover bg-center mb-6"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80')` }}
              />
              <h4 className="text-[#333] mb-3">Food and Drink Tastings</h4>
              <p className="text-[#666] text-sm">
                Let your taste buds dive into home-made
                Bahamian dishes that will &quot;have ya belly
                full&quot;! You will definitely remember this tour
                and the variety of flavours for sure.
              </p>
            </div>
            <div className="text-center">
              <div
                className="h-48 rounded-lg bg-cover bg-center mb-6"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&q=80')` }}
              />
              <h4 className="text-[#333] mb-3">In-house Tours</h4>
              <p className="text-[#666] text-sm">
                Become infused with the local vibe as you
                blend into Bahamian lifestyle. Hear our
                stories and make some island friends. Feast
                your eyes, ears, and stomachs on all that is
                &quot;truly Bahamian&quot;.
              </p>
            </div>
            <div className="text-center">
              <div
                className="h-48 rounded-lg bg-cover bg-center mb-6"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80')` }}
              />
              <h4 className="text-[#333] mb-3">Endless Add-Ons</h4>
              <p className="text-[#666] text-sm">
                For those of you that need that extra, we
                have a slew of add-on tours that add to the
                adventure. We can customize your tour,
                your stops and of course, we can arrange
                private tours.
              </p>
              <Link href="/tours-and-prices" className="text-[#2ea3f2] text-sm hover:underline">
                Add-ons
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Tours Section */}
      <section className="section-light section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-[#333] mb-4">Our Tours</h2>
            <p className="text-[#666] max-w-2xl mx-auto">
              Choose from our carefully crafted experiences designed to show you
              the real Bahamas.
            </p>
          </div>

          {/* Main Tour */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 mb-8 bg-white rounded-lg overflow-hidden shadow-lg">
            <div
              className="min-h-[300px] bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80')`,
              }}
            />
            <div className="p-8">
              <h3 className="text-[#333] mb-4">Cultural Experience Tour with Lunch</h3>
              <p className="text-[#666] mb-4 text-sm">
                Immerse yourself in authentic Bahamian culture with our
                signature tour. Meet local Bahamians, enjoy traditional dishes,
                and hear authentic stories from residents who emphasize
                genuine interaction over typical tourist experiences.
              </p>
              <ul className="feature-list mb-6 text-sm">
                <li>Traditional Bahamian lunch included</li>
                <li>Native guide with local expertise</li>
                <li>Visit to cultural sites</li>
                <li>Authentic storytelling</li>
              </ul>
              <div className="flex items-center gap-4 mb-6">
                <div className="price-tag">$50 <small>/adult</small></div>
                <span className="text-[#666] text-sm">$25 for Kids 10 and under</span>
              </div>
              <Link href="/contact" className="btn-primary">
                Book Now
              </Link>
            </div>
          </div>

          {/* Add-on Tours */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <div
                className="card-image"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80')`,
                }}
              />
              <div className="card-content">
                <span className="badge-coral mb-3">Add-On Tour</span>
                <h4 className="text-[#333] mb-2">Two-Hour Bus Tour</h4>
                <p className="text-[#666] text-sm mb-4">
                  Explore neighborhoods tourists typically don&apos;t visit. See how
                  locals live, discover hidden spots, and learn about communities
                  across Nassau.
                </p>
                <div className="price-tag mb-4">$50 <small>/person</small></div>
                <Link href="/tours-and-prices" className="btn-outline text-sm">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="card">
              <div
                className="card-image"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80')`,
                }}
              />
              <div className="card-content">
                <span className="badge-coral mb-3">Add-On Tour</span>
                <h4 className="text-[#333] mb-2">Walking Tour</h4>
                <p className="text-[#666] text-sm mb-4">
                  A 45-minute guided walk through a historic area near our home
                  base. Discover significant island landmarks and hidden stories.
                </p>
                <div className="price-tag mb-4">$30 <small>/person</small></div>
                <Link href="/tours-and-prices" className="btn-outline text-sm">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-coral section-padding">
        <div className="container-custom text-center">
          <h2 className="mb-4">Ready to Experience the Real Bahamas?</h2>
          <p className="text-white/90 max-w-xl mx-auto mb-8">
            Book your authentic Bahamian adventure today and create memories that
            will last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tours-and-prices" className="btn-white">
              Book Your Tour
            </Link>
            <Link href="/faqs" className="btn-outline-white">
              View FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-[#333]">Get In Touch</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="blurb">
              <div className="blurb-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4>Email Us</h4>
              <a href="mailto:lifelikelocals@gmail.com" className="text-[#2ea3f2] hover:underline">
                lifelikelocals@gmail.com
              </a>
            </div>
            <div className="blurb">
              <div className="blurb-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h4>Call Us</h4>
              <a href="tel:242-815-8687" className="text-[#2ea3f2] hover:underline">
                242-815-8687 (TOUR)
              </a>
            </div>
            <div className="blurb">
              <div className="blurb-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4>Location</h4>
              <p className="text-[#666]">
                P.O. Box SS-19731<br />
                Nassau, Bahamas
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
