import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section - Tropical Island */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80')`,
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 pt-20">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide mb-6 drop-shadow-lg">
            Experience &quot;Life Like Locals&quot;<br />
            <span className="font-normal">in the Bahamas</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 drop-shadow-md">
            Life Like Locals is an innovative, down-home Bahamian experience that
            inspires and evokes the real &quot;Bahamian connection&quot;.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tours-and-prices" className="btn-coral text-lg px-8 py-4">
              Learn More
            </Link>
            <Link href="/contact" className="btn-outline-white text-lg px-8 py-4">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Floating Drink Image */}
        <div className="absolute bottom-0 right-0 md:right-10 lg:right-20 w-48 md:w-64 lg:w-80 transform translate-y-10">
          <Image
            src="https://lifelikelocals.tempurl.host/wp-content/uploads/2021/09/Purple-drink-1.png"
            alt="Tropical Drink"
            width={320}
            height={500}
            className="drop-shadow-2xl"
            unoptimized
          />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <p className="text-[#666] text-lg leading-relaxed mb-6">
                Life Like Locals is the curation of an indigenous collection of original and
                unique events that induct you into the &quot;real world of the locals&quot;,
                introducing our way of life, from the food, to the dances, to the heart and
                spirit of The Bahamas. Our goal is to give you an experience that you will
                never forget. &quot;This ain&apos;t no lie, you ain&apos;t go neva meet people like us, fa tru!&quot;
              </p>
              <p className="text-[#666] text-lg leading-relaxed mb-6">
                We invite you to feel our vibrant character, learn our accent, embrace our
                lingo, share in the flavor of our food, and experience the unity of
                traditional and contemporary, and most importantly, become a part of it!
                Don&apos;t be a &quot;typical tourist&quot;, live a little and enjoy life.
              </p>
              <p className="text-[#666] text-lg font-semibold">
                What are you waiting for?
              </p>
            </div>
            <div className="relative h-[400px] hidden lg:block">
              {/* Floating fruit/drink composition */}
              <Image
                src="https://lifelikelocals.tempurl.host/wp-content/uploads/2021/09/Purple-drink-1.png"
                alt="Tropical Drink"
                width={200}
                height={400}
                className="absolute right-10 top-0 drop-shadow-xl transform rotate-6"
                unoptimized
              />
              <Image
                src="https://lifelikelocals.tempurl.host/wp-content/uploads/2021/09/orange-slice.png"
                alt="Orange Slice"
                width={150}
                height={150}
                className="absolute left-0 top-20 drop-shadow-xl"
                unoptimized
              />
              {/* Decorative leaf */}
              <div className="absolute -left-10 top-0 w-32 h-32 opacity-60">
                <svg viewBox="0 0 100 100" className="w-full h-full text-green-500">
                  <path fill="currentColor" d="M50 0 C80 30 90 70 50 100 C10 70 20 30 50 0Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Experiences - Coral Banner with Face Image */}
      <section className="relative bg-coral overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Face Image */}
          <div
            className="h-64 lg:h-auto lg:min-h-[400px] bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80')`,
              backgroundPosition: 'center 20%',
            }}
          />
          {/* Content */}
          <div className="py-16 px-8 lg:px-16 flex flex-col justify-center">
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wider mb-4">
              Explore Our Top<br />Experiences
            </h2>
            <p className="text-white/90 text-lg italic mb-8">&quot;Unique Experiences Unlocked&quot;</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/tours-and-prices" className="btn-white">
                See Tours
              </Link>
              <Link href="/contact" className="btn-outline-white">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image with floating elements */}
            <div className="relative">
              <div
                className="rounded-2xl overflow-hidden h-[500px] bg-cover bg-center shadow-2xl"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80')`,
                }}
              />
              {/* Floating drink */}
              <div className="absolute -right-10 -bottom-10 w-48 hidden lg:block">
                <Image
                  src="https://lifelikelocals.tempurl.host/wp-content/uploads/2021/09/Purple-drink-1.png"
                  alt="Tropical Drink"
                  width={192}
                  height={350}
                  className="drop-shadow-2xl"
                  unoptimized
                />
              </div>
              {/* Floating fruit */}
              <div className="absolute -left-5 bottom-20 hidden lg:block">
                <Image
                  src="https://lifelikelocals.tempurl.host/wp-content/uploads/2021/09/orange-slice.png"
                  alt="Orange"
                  width={100}
                  height={100}
                  className="drop-shadow-xl"
                  unoptimized
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-[#333] text-3xl md:text-4xl font-bold mb-2">Why Choose Us?</h2>
              <p className="text-coral italic text-lg mb-6">&quot;Why go wit us?&quot;</p>
              <p className="text-[#666] mb-4 leading-relaxed">
                When you book with us, you make a big commitment and we take
                that very seriously. Our mission is to connect people and cultures.
                &quot;We does bring people together!&quot;
              </p>
              <p className="text-[#666] mb-4 leading-relaxed">
                Rather than following the old-fashion way of visiting an island
                vacation country, experience the vibrancy of the real life that resides
                on this magnificent island. Become familiar and then become
                fascinated. You don&apos;t know what you will try, but at least try it!
              </p>
              <p className="text-[#666] mb-4 leading-relaxed">
                Life Like Local experiences delivered by our team members are
                curated by our team of travel experts. This way you&apos;re guaranteed
                authenticity, amusement and memorable moments. Everyone&apos;s story
                is different, and you will meet many characteristics. Get ready to
                laugh. Get ready to learn. And most of all get ready to be inspired.
              </p>
              <p className="text-[#666] font-semibold italic text-lg">
                &quot;Yeah ya&apos;ll ga miss us!&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Grid */}
      <section className="py-20 bg-[#f8f8f8]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-coral text-3xl md:text-4xl font-bold uppercase tracking-wider mb-3">
              What to Expect
            </h2>
            <p className="text-[#666] italic text-lg">&quot;Unique Experiences Unlocked&quot;</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Creative Tourism", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80" },
              { label: "Local Gastronomy", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80" },
              { label: "Discovery & Culture", img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80" },
              { label: "History & Mystery", img: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=400&q=80" },
              { label: '"Tru tru" Bahamian Dialect', img: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?w=400&q=80" },
              { label: "Immersive Activities", img: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=400&q=80" },
              { label: "Education Made Fun", img: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400&q=80" },
              { label: '"Real real Bahamian life"', img: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=400&q=80" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative h-40 md:h-48 rounded-lg overflow-hidden group cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${item.img}')` }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-coral/70 transition-colors duration-300" />
                <span className="absolute bottom-4 left-4 right-4 text-white font-semibold text-sm md:text-base drop-shadow-lg">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-coral text-3xl md:text-4xl font-bold uppercase tracking-wider mb-3">
              What&apos;s Included
            </h2>
            <p className="text-[#666] italic text-lg">&quot;What yinna getting&quot;</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80')` }}
                />
              </div>
              <h4 className="text-[#333] text-xl font-bold mb-3">Food and Drink Tastings</h4>
              <p className="text-[#666] leading-relaxed">
                Let your taste buds dive into home-made
                Bahamian dishes that will &quot;have ya belly
                full&quot;! You will definitely remember this tour
                and the variety of flavours for sure.
              </p>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80')` }}
                />
              </div>
              <h4 className="text-[#333] text-xl font-bold mb-3">In-house Tours</h4>
              <p className="text-[#666] leading-relaxed">
                Become infused with the local vibe as you
                blend into Bahamian lifestyle. Hear our
                stories and make some island friends. Feast
                your eyes, ears, and stomachs on all that is
                &quot;truly Bahamian&quot;.
              </p>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80')` }}
                />
              </div>
              <h4 className="text-[#333] text-xl font-bold mb-3">Endless Add-Ons</h4>
              <p className="text-[#666] leading-relaxed mb-2">
                For those of you that need that extra, we
                have a slew of add-on tours that add to the
                adventure. We can customize your tour,
                your stops and of course, we can arrange
                private tours.
              </p>
              <Link href="/tours-and-prices" className="text-coral hover:underline font-medium">
                Add-ons
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Tours Section */}
      <section className="py-20 bg-[#f8f8f8]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-[#333] text-3xl md:text-4xl font-bold mb-4">Our Tours</h2>
            <p className="text-[#666] max-w-2xl mx-auto">
              Choose from our carefully crafted experiences designed to show you
              the real Bahamas.
            </p>
          </div>

          {/* Main Tour */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div
                className="h-72 lg:h-auto lg:min-h-[400px] bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80')`,
                }}
              />
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-[#333] text-2xl md:text-3xl font-bold mb-4">
                  Cultural Experience Tour with Lunch
                </h3>
                <p className="text-[#666] mb-6 leading-relaxed">
                  Immerse yourself in authentic Bahamian culture with our
                  signature tour. Meet local Bahamians, enjoy traditional dishes,
                  and hear authentic stories from residents who emphasize
                  genuine interaction over typical tourist experiences.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Traditional Bahamian lunch included",
                    "Native guide with local expertise",
                    "Visit to cultural sites",
                    "Authentic storytelling",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[#666]">
                      <svg className="w-5 h-5 text-coral flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-coral text-4xl font-bold">$50</span>
                  <span className="text-[#666]">/adult</span>
                  <span className="text-[#999] text-sm ml-2">$25 for Kids 10 and under</span>
                </div>
                <Link href="/contact" className="btn-coral self-start">
                  Book Now
                </Link>
              </div>
            </div>
          </div>

          {/* Add-on Tours */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div
                className="h-56 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80')`,
                }}
              />
              <div className="p-6">
                <span className="inline-block bg-coral text-white text-xs font-bold px-3 py-1 rounded mb-3 uppercase tracking-wide">
                  Add-On Tour
                </span>
                <h4 className="text-[#333] text-xl font-bold mb-2">Two-Hour Bus Tour</h4>
                <p className="text-[#666] text-sm mb-4 leading-relaxed">
                  Explore neighborhoods tourists typically don&apos;t visit. See how
                  locals live, discover hidden spots, and learn about communities
                  across Nassau.
                </p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-coral text-2xl font-bold">$50</span>
                  <span className="text-[#666] text-sm">/person</span>
                </div>
                <Link href="/tours-and-prices" className="btn-outline text-sm">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div
                className="h-56 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80')`,
                }}
              />
              <div className="p-6">
                <span className="inline-block bg-coral text-white text-xs font-bold px-3 py-1 rounded mb-3 uppercase tracking-wide">
                  Add-On Tour
                </span>
                <h4 className="text-[#333] text-xl font-bold mb-2">Walking Tour</h4>
                <p className="text-[#666] text-sm mb-4 leading-relaxed">
                  A 45-minute guided walk through a historic area near our home
                  base. Discover significant island landmarks and hidden stories.
                </p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-coral text-2xl font-bold">$30</span>
                  <span className="text-[#666] text-sm">/person</span>
                </div>
                <Link href="/tours-and-prices" className="btn-outline text-sm">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-[#333] text-3xl md:text-4xl font-bold mb-4">
            Ready to Plan a Trip?
          </h2>
          <p className="text-[#666] text-lg mb-8 max-w-2xl mx-auto">
            Book your authentic Bahamian adventure today and create memories that
            will last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tours-and-prices" className="btn-coral text-lg px-8 py-4">
              Learn More
            </Link>
            <Link href="/contact" className="btn-outline text-lg px-8 py-4">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#f8f8f8]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-[#333] text-3xl md:text-4xl font-bold">Get In Touch</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-coral rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-[#333] font-bold text-lg mb-2">Email Us</h4>
              <a href="mailto:lifelikelocals@gmail.com" className="text-coral hover:underline">
                lifelikelocals@gmail.com
              </a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-coral rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h4 className="text-[#333] font-bold text-lg mb-2">Call Us</h4>
              <a href="tel:242-815-8687" className="text-coral hover:underline">
                242-815-8687 (TOUR)
              </a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-coral rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-[#333] font-bold text-lg mb-2">Location</h4>
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
