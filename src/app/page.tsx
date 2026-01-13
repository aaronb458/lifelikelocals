import Link from "next/link";
import Image from "next/image";
import WaveDivider from "@/components/WaveDivider";

export default function Home() {
  return (
    <>
      {/* ========== SECTION 1: Hero Banner - AERIAL BEACH ========== */}
      <section
        className="relative min-h-[75vh] flex items-center justify-center pt-[65px]"
        style={{
          backgroundImage: `url('/images/Banner.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '0 0 40px 40px',
        }}
      >
        <div className="absolute inset-0 bg-black/30" style={{ borderRadius: '0 0 40px 40px' }} />
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
      <section className="py-24 px-4 bg-[#FFFAF5] relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Left Column - Text (60%) */}
            <div className="lg:col-span-3">
              <p className="text-[#4A3728] text-base leading-relaxed mb-5">
                Life Like Locals is the curation of an indigenous collection of original and
                unique events that induct you into the &quot;real world of the locals&quot;,
                introducing our way of life, from the food, to the dances, to the heart and
                spirit of The Bahamas. Our goal is to give you an experience that you will
                never forget. &quot;This ain&apos;t no lie, you ain&apos;t go neva meet people like us, fa tru!&quot;
              </p>
              <p className="text-[#4A3728] text-base leading-relaxed mb-5">
                We invite you to feel our vibrant character, learn our accent, embrace our
                lingo, share in the flavor of our food, and experience the unity of
                traditional and contemporary, and most importantly, become a part of it!
                Don&apos;t be a &quot;typical tourist&quot;, live a little and enjoy life.
              </p>
              <p className="text-[#4A3728] text-base font-semibold">
                What are you waiting for?
              </p>
            </div>

            {/* Right Column - Woman's EYES photo + FLOATING decorative elements */}
            <div className="lg:col-span-2 relative min-h-[450px] hidden lg:block">
              {/* Woman's EYES - the main photo cropped to show eyes through palm leaves */}
              <div className="absolute top-8 right-0 w-[320px] h-[140px] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/why-choose-us.png"
                  alt="Bahamian woman eyes"
                  width={1440}
                  height={615}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 30%', borderRadius: '16px' }}
                />
              </div>

              {/* Watermelon slice - bottom right - FLOATING */}
              <div
                className="absolute bottom-0 right-0 w-[100px] float"
                style={{ '--rotation': '10deg' } as React.CSSProperties}
              >
                <Image
                  src="/images/Watermelon.png"
                  alt="Watermelon slice"
                  width={168}
                  height={391}
                  className="w-full h-auto drop-shadow-lg"
                  style={{ borderRadius: '0' }}
                />
              </div>

              {/* Starfish - bottom left - FLOATING */}
              <div
                className="absolute bottom-20 left-0 w-[120px] float float-delay-1"
                style={{ '--rotation': '-15deg' } as React.CSSProperties}
              >
                <Image
                  src="/images/Starfish.png"
                  alt="Starfish"
                  width={277}
                  height={475}
                  className="w-full h-auto drop-shadow-lg"
                  style={{ borderRadius: '0' }}
                />
              </div>

              {/* Orange slice - top left - FLOATING */}
              <div
                className="absolute top-0 left-4 w-[100px] float float-delay-2"
                style={{ '--rotation': '5deg' } as React.CSSProperties}
              >
                <Image
                  src="/images/orange-slice.png"
                  alt="Orange slice"
                  width={364}
                  height={447}
                  className="w-full h-auto drop-shadow-lg"
                  style={{ borderRadius: '0' }}
                />
              </div>

              {/* Purple Drink - middle - FLOATING */}
              <div
                className="absolute top-[180px] left-[100px] w-[80px] float"
                style={{ '--rotation': '3deg' } as React.CSSProperties}
              >
                <Image
                  src="/images/Purple-drink-1.png"
                  alt="Purple drink"
                  width={251}
                  height={521}
                  className="w-full h-auto drop-shadow-lg"
                  style={{ borderRadius: '0' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave transition to coral */}
      <WaveDivider color="#F97068" />

      {/* ========== SECTION 3: Coral CTA Banner ========== */}
      <section className="bg-[#F97068] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title-white text-3xl mb-3">
            Explore Our Top Experiences
          </h2>
          <p className="subtitle-script-white mb-10">
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

      {/* Wave transition from coral */}
      <WaveDivider color="#FFFAF5" flip />

      {/* ========== SECTION 4: Full-Bleed Underwater/Swimming Photo ========== */}
      <section
        className="h-[50vh] md:h-[60vh] w-full my-8"
        style={{
          backgroundImage: `url('/images/Banner-2-2.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '24px',
          maxWidth: '95%',
          marginLeft: 'auto',
          marginRight: 'auto',
          boxShadow: '0 8px 30px rgba(139, 115, 85, 0.2)',
        }}
      />

      {/* ========== SECTION 5: Why Choose Us ========== */}
      <section className="py-24 px-4 bg-[#FFFAF5]" id="what-is-we-do">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title text-3xl mb-3 text-center">Why Choose Us?</h2>
          <p className="subtitle-script text-center">&quot;Why go wit us?&quot;</p>

          <div className="text-[#4A3728] leading-relaxed space-y-5">
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
            <p className="font-semibold italic text-lg text-center">
              &quot;Yeah ya&apos;ll ga miss us!&quot;
            </p>
          </div>
        </div>
      </section>

      {/* ========== SECTION 6: What To Expect (8 CIRCULAR photos with text OVERLAY) ========== */}
      <section className="py-24 px-4 bg-[#FFF8DC]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="section-title text-3xl mb-3">What To Expect</h2>
            <p className="subtitle-script">&quot;Unique Experiences Unlocked&quot;</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 justify-items-center">
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
                {/* Circular image with text overlay ON TOP */}
                <div className="expect-circle">
                  <Image
                    src={item.img}
                    alt={item.label}
                    width={260}
                    height={233}
                    className="expect-circle-image"
                  />
                  <div className="expect-circle-overlay" />
                  <span className="expect-circle-label">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 7: What's Included (3 columns) ========== */}
      <section className="py-24 px-4 bg-[#FFFAF5]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="section-title text-3xl mb-3">What&apos;s Included</h2>
            <p className="subtitle-script">&quot;What yinna getting&quot;</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="image-zoom w-full h-52 mb-6 shadow-lg" style={{ borderRadius: '20px' }}>
                <Image
                  src="/images/Whats-included-1-1-1.png"
                  alt="Food and Drink Tastings"
                  width={345}
                  height={285}
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '20px' }}
                />
              </div>
              <h4 className="item-title text-lg mb-3">Food and Drink Tastings</h4>
              <p className="text-[#7A6B5A] text-sm leading-relaxed">
                Let your taste buds dive into home-made Bahamian dishes that will
                &quot;have ya belly full&quot;! You will definitely remember this tour and
                the variety of flavours for sure.
              </p>
            </div>

            <div className="text-center">
              <div className="image-zoom w-full h-52 mb-6 shadow-lg" style={{ borderRadius: '20px' }}>
                <Image
                  src="/images/Whats-included-2.png"
                  alt="In-house Tours"
                  width={345}
                  height={285}
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '20px' }}
                />
              </div>
              <h4 className="item-title text-lg mb-3">In-house Tours</h4>
              <p className="text-[#7A6B5A] text-sm leading-relaxed">
                Become infused with the local vibe as you blend into Bahamian lifestyle.
                Hear our stories and make some island friends. Feast your eyes, ears,
                and stomachs on all that is &quot;truly Bahamian&quot;.
              </p>
            </div>

            <div className="text-center">
              <div className="image-zoom w-full h-52 mb-6 shadow-lg" style={{ borderRadius: '20px' }}>
                <Image
                  src="/images/Whats-included-3.png"
                  alt="Endless Add-Ons"
                  width={345}
                  height={285}
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '20px' }}
                />
              </div>
              <h4 className="item-title text-lg mb-3">Endless Add-Ons</h4>
              <p className="text-[#7A6B5A] text-sm leading-relaxed mb-3">
                For those of you that need that extra, we have a slew of add-on tours
                that add to the adventure. We can customize your tour, your stops and
                of course, we can arrange private tours.
              </p>
              <Link href="/tours-and-prices" className="text-[#F97068] hover:underline text-sm font-semibold">
                View Add-ons →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Wave transition to coral */}
      <WaveDivider color="#F97068" />

      {/* ========== SECTION 8: Final CTA ========== */}
      <section className="bg-[#F97068] py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title-white text-3xl mb-8">Ready to Plan a Trip?</h2>
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

      {/* Wave transition from coral to footer */}
      <WaveDivider color="#f5f5f5" flip />
    </>
  );
}
