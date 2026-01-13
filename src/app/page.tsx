import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* ========== SECTION 1: Hero Banner ========== */}
      <section
        className="relative min-h-[70vh] flex items-center justify-center pt-[65px]"
        style={{
          backgroundImage: `url('/images/Banner.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
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

      {/* ========== SECTION 2: Introduction Content ========== */}
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

            {/* Right Column - Decorative elements */}
            <div className="lg:col-span-2 relative min-h-[450px] hidden lg:block">
              {/* Orange Slice - top left */}
              <div className="absolute top-0 left-0 w-[120px]">
                <Image
                  src="/images/orange-slice.png"
                  alt="Orange slice"
                  width={364}
                  height={447}
                  className="w-full h-auto drop-shadow-lg"
                />
              </div>

              {/* Purple Drink - top right */}
              <div className="absolute top-0 right-0 w-[100px]">
                <Image
                  src="/images/Purple-drink-1.png"
                  alt="Purple drink"
                  width={251}
                  height={521}
                  className="w-full h-auto drop-shadow-lg"
                />
              </div>

              {/* Hat - middle */}
              <div className="absolute top-[100px] left-[80px] w-[120px]">
                <Image
                  src="/images/hat1.png"
                  alt="Bahamian hat"
                  width={297}
                  height={710}
                  className="w-full h-auto drop-shadow-lg"
                />
              </div>

              {/* Starfish - bottom left */}
              <div className="absolute bottom-0 left-0 w-[110px]">
                <Image
                  src="/images/Starfish.png"
                  alt="Starfish"
                  width={277}
                  height={475}
                  className="w-full h-auto drop-shadow-lg"
                />
              </div>

              {/* Watermelon - bottom right */}
              <div className="absolute bottom-0 right-[20px] w-[80px]">
                <Image
                  src="/images/Watermelon.png"
                  alt="Watermelon slice"
                  width={168}
                  height={391}
                  className="w-full h-auto drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 3: Coral CTA Banner ========== */}
      <section className="bg-[#F97068] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title-white text-3xl mb-2">
            Explore Our Top Experiences
          </h2>
          <p className="subtitle-script-white mb-8">
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
          backgroundImage: `url('/images/Banner-4.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* ========== SECTION 5: Why Choose Us ========== */}
      <section className="py-20 px-4 bg-white" id="what-is-we-do">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title text-3xl mb-2 text-center">Why Choose Us?</h2>
          <p className="subtitle-script text-center mb-10">&quot;Why go wit us?&quot;</p>

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

      {/* ========== SECTION 6: What To Expect (8 circular images) ========== */}
      <section className="py-20 px-4 bg-[#f9f9f9]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title text-3xl mb-2">What To Expect</h2>
            <p className="subtitle-script">&quot;Unique Experiences Unlocked&quot;</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { label: "Creative Tourism", img: "/images/What-to-expect-1.png" },
              { label: "Local Gastronomy", img: "/images/What-to-expect-2.png" },
              { label: "Discovery Of Culture", img: "/images/What-to-expect-3.png" },
              { label: "History & Mystery", img: "/images/What-to-expect-4.png" },
              { label: "Tru tru Bahamian Dialect", img: "/images/What-to-expect-5.png" },
              { label: "Immersive Activities", img: "/images/What-to-expect-6.png" },
              { label: "Education Made Fun", img: "/images/What-to-expect-7.png" },
              { label: "Real real Bahamian life", img: "/images/What-to-expect-8.png" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-28 h-28 md:w-36 md:h-36 relative">
                  <Image
                    src={item.img}
                    alt={item.label}
                    width={260}
                    height={233}
                    className="w-full h-full object-contain drop-shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 7: What's Included (3 columns) ========== */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title text-3xl mb-2">What&apos;s Included</h2>
            <p className="subtitle-script">&quot;What yinna getting&quot;</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-full h-48 rounded-lg overflow-hidden mb-5 shadow-md">
                <Image
                  src="/images/Whats-included-1-1-1.png"
                  alt="Food and Drink Tastings"
                  width={345}
                  height={285}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="item-title text-lg mb-3">Food and Drink Tastings</h4>
              <p className="text-[#666] text-sm leading-relaxed">
                Let your taste buds dive into home-made Bahamian dishes that will
                &quot;have ya belly full&quot;! You will definitely remember this tour and
                the variety of flavours for sure.
              </p>
            </div>

            <div className="text-center">
              <div className="w-full h-48 rounded-lg overflow-hidden mb-5 shadow-md">
                <Image
                  src="/images/Whats-included-2.png"
                  alt="In-house Tours"
                  width={345}
                  height={285}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="item-title text-lg mb-3">In-house Tours</h4>
              <p className="text-[#666] text-sm leading-relaxed">
                Become infused with the local vibe as you blend into Bahamian lifestyle.
                Hear our stories and make some island friends. Feast your eyes, ears,
                and stomachs on all that is &quot;truly Bahamian&quot;.
              </p>
            </div>

            <div className="text-center">
              <div className="w-full h-48 rounded-lg overflow-hidden mb-5 shadow-md">
                <Image
                  src="/images/Whats-included-3.png"
                  alt="Endless Add-Ons"
                  width={345}
                  height={285}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="item-title text-lg mb-3">Endless Add-Ons</h4>
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
          <h2 className="section-title-white text-3xl mb-6">Ready to Plan a Trip?</h2>
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
