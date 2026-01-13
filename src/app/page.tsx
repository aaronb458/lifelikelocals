import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* ========== SECTION 1: Hero Banner ========== */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center pt-[65px]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content - Center aligned */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="hero-title mb-6">
            Experience &quot;Life Like Locals&quot;<br />
            in the Bahamas
          </h1>
          <p className="text-white text-lg max-w-2xl mx-auto mb-8" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
            Life Like Locals is an innovative, down-home Bahamian experience that
            inspires and evokes the real &quot;Bahamian connection&quot;.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tours-and-prices" className="btn-primary">
              Learn More
            </Link>
            <Link href="/contact" className="btn-outline-white">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ========== SECTION 2: Introduction Content (White Background) ========== */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Left Column - Text (60%) */}
            <div className="lg:col-span-3">
              <p className="text-[#333] text-base leading-relaxed mb-5">
                Life Like Locals is the curation of an indigenous collection of original and
                unique events that induct you into the &quot;real world of the locals&quot;,
                introducing our way of life, from the food, to the dances, to the heart and
                spirit of The Bahamas. Our goal is to give you an experience that you will
                never forget. &quot;This ain&apos;t no lie, you ain&apos;t go neva meet people like us, fa tru!&quot;
              </p>
              <p className="text-[#333] text-base leading-relaxed mb-5">
                We invite you to feel our vibrant character, learn our accent, embrace our
                lingo, share in the flavor of our food, and experience the unity of
                traditional and contemporary, and most importantly, become a part of it!
                Don&apos;t be a &quot;typical tourist&quot;, live a little and enjoy life.
              </p>
              <p className="text-[#333] text-base font-semibold">
                What are you waiting for?
              </p>
            </div>

            {/* Right Column - Woman's eyes + decorative elements (40%) */}
            <div className="lg:col-span-2 relative min-h-[400px] hidden lg:block">
              {/* Woman's eyes/face cropped photo */}
              <div className="absolute top-0 right-0 w-full h-[280px] overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80"
                  alt="Bahamian experience"
                  fill
                  className="object-cover object-[center_25%]"
                  unoptimized
                />
              </div>

              {/* Decorative elements - starfish */}
              <div className="absolute bottom-20 left-0 w-16 h-16">
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#F97068] opacity-80">
                  <polygon points="50,5 61,40 98,40 68,62 79,97 50,75 21,97 32,62 2,40 39,40" fill="currentColor"/>
                </svg>
              </div>

              {/* Decorative elements - watermelon slice */}
              <div className="absolute bottom-0 right-10 w-20 h-20">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M10 80 Q50 0 90 80 Z" fill="#ff6b6b"/>
                  <path d="M15 75 Q50 10 85 75 Z" fill="#ff8787"/>
                  <path d="M20 70 Q50 20 80 70 Z" fill="#ffa8a8"/>
                  <circle cx="35" cy="55" r="3" fill="#333"/>
                  <circle cx="50" cy="50" r="3" fill="#333"/>
                  <circle cx="65" cy="55" r="3" fill="#333"/>
                  <circle cx="42" cy="65" r="2" fill="#333"/>
                  <circle cx="58" cy="65" r="2" fill="#333"/>
                </svg>
              </div>

              {/* Decorative elements - tropical leaf */}
              <div className="absolute top-[300px] left-10 w-14 h-14 rotate-45">
                <svg viewBox="0 0 100 100" className="w-full h-full text-green-500 opacity-70">
                  <ellipse cx="50" cy="50" rx="20" ry="45" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 3: Coral CTA Banner ========== */}
      <section className="bg-[#F97068] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title text-white mb-2">
            Explore Our Top Experiences
          </h2>
          <p className="text-white/90 italic text-lg mb-8">
            &quot;Unique Experiences Unlocked&quot;
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tours-and-prices" className="btn-outline-white">
              See Tours
            </Link>
            <Link href="/contact" className="btn-outline-white">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ========== SECTION 4: Full-Bleed Underwater Photo ========== */}
      <section
        className="h-[50vh] md:h-[60vh] w-full"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* ========== SECTION 5: Why Choose Us (TEXT ONLY) ========== */}
      <section className="py-20 px-4 bg-white" id="what-is-we-do">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title text-[#333] mb-2 text-center">Why Choose Us?</h2>
          <p className="text-[#F97068] italic text-lg mb-8 text-center">&quot;Why go wit us?&quot;</p>

          <div className="text-[#333] leading-relaxed space-y-5">
            <p>
              When you book with us, you make a big commitment and we take
              that very seriously. Our mission is to connect people and cultures.
              &quot;We does bring people together!&quot;
            </p>
            <p>
              Rather than following the old-fashion way of visiting an island
              vacation country, experience the vibrancy of the real life that resides
              on this magnificent island. Become familiar and then become
              fascinated. You don&apos;t know what you will try, but at least try it!
            </p>
            <p>
              Life Like Local experiences delivered by our team members are
              curated by our team of travel experts. This way you&apos;re guaranteed
              authenticity, amusement and memorable moments. Everyone&apos;s story
              is different, and you will meet many characteristics. Get ready to
              laugh. Get ready to learn. And most of all get ready to be inspired.
            </p>
            <p className="font-semibold italic text-lg">
              &quot;Yeah ya&apos;ll ga miss us!&quot;
            </p>
          </div>
        </div>
      </section>

      {/* ========== SECTION 6: What To Expect (8 circular photos, 4x2 grid) ========== */}
      <section className="py-20 px-4 bg-[#f9f9f9]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title text-[#F97068] mb-2">What To Expect</h2>
            <p className="text-[#666] italic">&quot;Unique Experiences Unlocked&quot;</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { label: "Creative Tourism", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&q=80" },
              { label: "Local Gastronomy", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&q=80" },
              { label: "Discovery Of Culture", img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=300&q=80" },
              { label: "History & Mystery", img: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=300&q=80" },
              { label: "Tru tru Bahamian Dialect", img: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?w=300&q=80" },
              { label: "Immersive Activities", img: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=300&q=80" },
              { label: "Education Made Fun", img: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=300&q=80" },
              { label: "Real real Bahamian life", img: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=300&q=80" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden mb-3 shadow-lg">
                  <Image
                    src={item.img}
                    alt={item.label}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>
                <span className="text-[#333] text-sm text-center font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 7: What's Included (3 columns) ========== */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title text-[#F97068] mb-2">What&apos;s Included</h2>
            <p className="text-[#666] italic">&quot;What yinna getting&quot;</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Food and Drink Tastings */}
            <div className="text-center">
              <div className="w-full h-48 rounded-lg overflow-hidden mb-5 shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80"
                  alt="Food and Drink Tastings"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <h4 className="text-[#333] text-lg font-bold mb-3">Food and Drink Tastings</h4>
              <p className="text-[#666] text-sm leading-relaxed">
                Let your taste buds dive into home-made Bahamian dishes that will
                &quot;have ya belly full&quot;! You will definitely remember this tour and
                the variety of flavours for sure.
              </p>
            </div>

            {/* In-house Tours */}
            <div className="text-center">
              <div className="w-full h-48 rounded-lg overflow-hidden mb-5 shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80"
                  alt="In-house Tours"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <h4 className="text-[#333] text-lg font-bold mb-3">In-house Tours</h4>
              <p className="text-[#666] text-sm leading-relaxed">
                Become infused with the local vibe as you blend into Bahamian lifestyle.
                Hear our stories and make some island friends. Feast your eyes, ears,
                and stomachs on all that is &quot;truly Bahamian&quot;.
              </p>
            </div>

            {/* Endless Add-Ons */}
            <div className="text-center">
              <div className="w-full h-48 rounded-lg overflow-hidden mb-5 shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80"
                  alt="Endless Add-Ons"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <h4 className="text-[#333] text-lg font-bold mb-3">Endless Add-Ons</h4>
              <p className="text-[#666] text-sm leading-relaxed mb-2">
                For those of you that need that extra, we have a slew of add-on tours
                that add to the adventure. We can customize your tour, your stops and
                of course, we can arrange private tours.
              </p>
              <Link href="/tours-and-prices" className="text-[#F97068] hover:underline text-sm font-medium">
                Add-ons
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 8: Final CTA ========== */}
      <section className="bg-[#F97068] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title text-white mb-4">Ready to Plan a Trip?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tours-and-prices" className="btn-outline-white">
              Learn More
            </Link>
            <Link href="/contact" className="btn-outline-white">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
