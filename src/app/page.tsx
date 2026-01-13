import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section - Tropical Island */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-visible">
        {/* Background Image - Tropical Island Aerial */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80')`,
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 pt-16 max-w-4xl mx-auto">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wider mb-6" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            Experience &quot;Life Like Locals&quot;<br />
            in the Bahamas
          </h1>
          <p className="text-white text-base md:text-lg max-w-2xl mx-auto mb-8" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
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

        {/* Floating Drink Image - positioned to extend below hero */}
        <div className="absolute -bottom-32 right-4 md:right-16 lg:right-24 z-20 w-40 md:w-56 lg:w-72">
          <Image
            src="https://lifelikelocals.tempurl.host/wp-content/uploads/2021/09/Purple-drink-1.png"
            alt="Tropical Drink"
            width={288}
            height={450}
            className="drop-shadow-2xl"
            style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))' }}
            unoptimized
          />
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 overflow-visible relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="lg:pr-8">
              <p className="text-[#666] text-base leading-relaxed mb-5">
                Life Like Locals is the curation of an indigenous collection of original and
                unique events that induct you into the &quot;real world of the locals&quot;,
                introducing our way of life, from the food, to the dances, to the heart and
                spirit of The Bahamas. Our goal is to give you an experience that you will
                never forget. &quot;This ain&apos;t no lie, you ain&apos;t go neva meet people like us, fa tru!&quot;
              </p>
              <p className="text-[#666] text-base leading-relaxed mb-5">
                We invite you to feel our vibrant character, learn our accent, embrace our
                lingo, share in the flavor of our food, and experience the unity of
                traditional and contemporary, and most importantly, become a part of it!
                Don&apos;t be a &quot;typical tourist&quot;, live a little and enjoy life.
              </p>
              <p className="text-[#666] text-base font-semibold">
                What are you waiting for?
              </p>
            </div>
            {/* Empty space for floating drink to show */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      {/* Explore Experiences - Coral Banner (Face on LEFT, Text on RIGHT) */}
      <section className="relative bg-coral overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Face Image - LEFT side */}
          <div
            className="h-80 lg:h-auto lg:min-h-[450px] bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80')`,
              backgroundPosition: 'center 30%',
            }}
          />
          {/* Content - RIGHT side */}
          <div className="py-16 px-8 lg:px-16 flex flex-col justify-center items-start">
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wider mb-2 leading-tight">
              Explore Our Top<br />Experiences
            </h2>
            <p className="text-white/90 text-base italic mb-8">&quot;Unique Experiences Unlocked&quot;</p>
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

      {/* Why Choose Us - Beach image LEFT, Content RIGHT, floating elements */}
      <section className="py-20 overflow-visible relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image with floating elements - LEFT */}
            <div className="relative">
              <div
                className="rounded-2xl overflow-hidden h-[450px] lg:h-[550px] bg-cover bg-center shadow-xl"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80')`,
                }}
              />
              {/* Floating drink overlapping from right */}
              <div className="absolute -right-8 lg:-right-16 bottom-0 w-36 lg:w-48 z-10">
                <Image
                  src="https://lifelikelocals.tempurl.host/wp-content/uploads/2021/09/Purple-drink-1.png"
                  alt="Tropical Drink"
                  width={192}
                  height={350}
                  className="drop-shadow-2xl"
                  unoptimized
                />
              </div>
              {/* Floating orange slice */}
              <div className="absolute -right-4 lg:-right-8 top-1/4 w-20 lg:w-28 z-10">
                <Image
                  src="https://lifelikelocals.tempurl.host/wp-content/uploads/2021/09/orange-slice.png"
                  alt="Orange"
                  width={112}
                  height={112}
                  className="drop-shadow-xl"
                  unoptimized
                />
              </div>
            </div>

            {/* Content - RIGHT */}
            <div className="lg:pl-8">
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
      <section className="py-20 bg-[#f5f5f5]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-coral text-3xl md:text-4xl font-bold uppercase tracking-wider mb-2">
              What to Expect
            </h2>
            <p className="text-[#666] italic">&quot;Unique Experiences Unlocked&quot;</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
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
                className="relative h-36 md:h-44 overflow-hidden group cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${item.img}')` }}
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-coral/80 transition-all duration-300" />
                <span className="absolute bottom-3 left-3 right-3 text-white font-semibold text-xs md:text-sm" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-coral text-3xl md:text-4xl font-bold uppercase tracking-wider mb-2">
              What&apos;s Included
            </h2>
            <p className="text-[#666] italic">&quot;What yinna getting&quot;</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-5 rounded-full overflow-hidden shadow-lg border-4 border-white">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80')` }}
                />
              </div>
              <h4 className="text-[#333] text-lg font-bold mb-3">Food and Drink Tastings</h4>
              <p className="text-[#666] text-sm leading-relaxed">
                Let your taste buds dive into home-made
                Bahamian dishes that will &quot;have ya belly
                full&quot;! You will definitely remember this tour
                and the variety of flavours for sure.
              </p>
            </div>

            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-5 rounded-full overflow-hidden shadow-lg border-4 border-white">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80')` }}
                />
              </div>
              <h4 className="text-[#333] text-lg font-bold mb-3">In-house Tours</h4>
              <p className="text-[#666] text-sm leading-relaxed">
                Become infused with the local vibe as you
                blend into Bahamian lifestyle. Hear our
                stories and make some island friends. Feast
                your eyes, ears, and stomachs on all that is
                &quot;truly Bahamian&quot;.
              </p>
            </div>

            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-5 rounded-full overflow-hidden shadow-lg border-4 border-white">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80')` }}
                />
              </div>
              <h4 className="text-[#333] text-lg font-bold mb-3">Endless Add-Ons</h4>
              <p className="text-[#666] text-sm leading-relaxed mb-2">
                For those of you that need that extra, we
                have a slew of add-on tours that add to the
                adventure. We can customize your tour,
                your stops and of course, we can arrange
                private tours.
              </p>
              <Link href="/tours-and-prices" className="text-coral hover:underline text-sm font-medium">
                Add-ons
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Tours Section */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-[#333] text-3xl md:text-4xl font-bold mb-3">Our Tours</h2>
            <p className="text-[#666]">
              Choose from our carefully crafted experiences designed to show you
              the real Bahamas.
            </p>
          </div>

          {/* Main Tour */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div
                className="h-64 lg:h-auto lg:min-h-[350px] bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80')`,
                }}
              />
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-[#333] text-2xl font-bold mb-3">
                  Cultural Experience Tour with Lunch
                </h3>
                <p className="text-[#666] text-sm mb-5 leading-relaxed">
                  Immerse yourself in authentic Bahamian culture with our
                  signature tour. Meet local Bahamians, enjoy traditional dishes,
                  and hear authentic stories from residents who emphasize
                  genuine interaction over typical tourist experiences.
                </p>
                <ul className="space-y-2 mb-5">
                  {[
                    "Traditional Bahamian lunch included",
                    "Native guide with local expertise",
                    "Visit to cultural sites",
                    "Authentic storytelling",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[#666] text-sm">
                      <svg className="w-4 h-4 text-coral flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-baseline gap-2 mb-5">
                  <span className="text-coral text-3xl font-bold">$50</span>
                  <span className="text-[#666] text-sm">/adult</span>
                  <span className="text-[#999] text-xs ml-2">$25 for Kids 10 and under</span>
                </div>
                <Link href="/contact" className="btn-coral self-start text-sm">
                  Book Now
                </Link>
              </div>
            </div>
          </div>

          {/* Add-on Tours */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80')`,
                }}
              />
              <div className="p-5">
                <span className="inline-block bg-coral text-white text-[10px] font-bold px-2 py-1 rounded mb-2 uppercase tracking-wide">
                  Add-On Tour
                </span>
                <h4 className="text-[#333] text-lg font-bold mb-2">Two-Hour Bus Tour</h4>
                <p className="text-[#666] text-sm mb-3 leading-relaxed">
                  Explore neighborhoods tourists typically don&apos;t visit. See how
                  locals live, discover hidden spots, and learn about communities
                  across Nassau.
                </p>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-coral text-xl font-bold">$50</span>
                  <span className="text-[#666] text-xs">/person</span>
                </div>
                <Link href="/tours-and-prices" className="btn-outline text-xs py-2 px-4">
                  Learn More
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80')`,
                }}
              />
              <div className="p-5">
                <span className="inline-block bg-coral text-white text-[10px] font-bold px-2 py-1 rounded mb-2 uppercase tracking-wide">
                  Add-On Tour
                </span>
                <h4 className="text-[#333] text-lg font-bold mb-2">Walking Tour</h4>
                <p className="text-[#666] text-sm mb-3 leading-relaxed">
                  A 45-minute guided walk through a historic area near our home
                  base. Discover significant island landmarks and hidden stories.
                </p>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-coral text-xl font-bold">$30</span>
                  <span className="text-[#666] text-xs">/person</span>
                </div>
                <Link href="/tours-and-prices" className="btn-outline text-xs py-2 px-4">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Clean white background */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-[#333] text-3xl font-bold mb-3">
            Ready to Plan a Trip?
          </h2>
          <p className="text-[#666] mb-8">
            Book your authentic Bahamian adventure today and create memories that
            will last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tours-and-prices" className="btn-coral">
              Learn More
            </Link>
            <Link href="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-[#333] text-3xl font-bold">Get In Touch</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 bg-coral rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-[#333] font-bold mb-1">Email Us</h4>
              <a href="mailto:lifelikelocals@gmail.com" className="text-coral hover:underline text-sm">
                lifelikelocals@gmail.com
              </a>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-coral rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h4 className="text-[#333] font-bold mb-1">Call Us</h4>
              <a href="tel:242-815-8687" className="text-coral hover:underline text-sm">
                242-815-8687 (TOUR)
              </a>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-coral rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-[#333] font-bold mb-1">Location</h4>
              <p className="text-[#666] text-sm">
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
