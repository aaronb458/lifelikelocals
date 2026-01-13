import Link from "next/link";
import Image from "next/image";
import WaveDivider from "@/components/WaveDivider";

export default function Home() {
  return (
    <>
      {/* ========== SECTION 1: Hero Banner - AERIAL BEACH ========== */}
      <section
        className="relative min-h-[80vh] flex items-center justify-center pt-[65px]"
        style={{
          backgroundImage: `url('/images/Banner.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '0 0 50px 50px',
        }}
      >
        <div className="absolute inset-0 bg-black/35" style={{ borderRadius: '0 0 50px 50px' }} />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="hero-title mb-6">
            Experience &quot;Life Like Locals&quot;<br />
            in the Bahamas
          </h1>
          <p className="text-white text-xl max-w-2xl mx-auto mb-10 font-medium" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.6)' }}>
            Life Like Locals is an innovative, down-home Bahamian experience that
            inspires and evokes the real &quot;Bahamian connection&quot;.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/tours-and-prices" className="btn-primary">
              Learn More
            </Link>
            <Link href="/contact" className="btn-outline-white">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ========== SECTION 2: Introduction - ASYMMETRIC with HUGE decorations ========== */}
      <section className="py-28 px-4 bg-[#FFFAF5] relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text */}
            <div className="lg:pr-8">
              <p className="text-[#5D4E37] text-lg leading-relaxed mb-6">
                Life Like Locals is the curation of an indigenous collection of original and
                unique events that induct you into the &quot;real world of the locals&quot;,
                introducing our way of life, from the food, to the dances, to the heart and
                spirit of The Bahamas. Our goal is to give you an experience that you will
                never forget. &quot;This ain&apos;t no lie, you ain&apos;t go neva meet people like us, fa tru!&quot;
              </p>
              <p className="text-[#5D4E37] text-lg leading-relaxed mb-6">
                We invite you to feel our vibrant character, learn our accent, embrace our
                lingo, share in the flavor of our food, and experience the unity of
                traditional and contemporary, and most importantly, become a part of it!
                Don&apos;t be a &quot;typical tourist&quot;, live a little and enjoy life.
              </p>
              <p className="text-[#5D4E37] text-lg font-bold">
                What are you waiting for?
              </p>
            </div>

            {/* Right Column - HUGE decorative elements */}
            <div className="relative min-h-[550px] hidden lg:block">
              {/* Woman's EYES - prominent, overlapping */}
              <div className="absolute top-0 right-0 w-[380px] h-[170px] overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/images/why-choose-us.png"
                  alt="Bahamian woman eyes"
                  width={1440}
                  height={615}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 30%', borderRadius: '24px' }}
                />
              </div>

              {/* Hat - TOP RIGHT - HUGE (220px) */}
              <div
                className="absolute top-[10px] right-[-50px] w-[220px] float decoration"
                style={{ '--rotation': '-12deg' } as React.CSSProperties}
              >
                <Image
                  src="/images/hat1.png"
                  alt="Bahamian hat"
                  width={297}
                  height={710}
                  className="w-full h-auto"
                  style={{ borderRadius: '0' }}
                />
              </div>

              {/* Watermelon - BOTTOM RIGHT - HUGE (220px) */}
              <div
                className="absolute bottom-[-20px] right-[10px] w-[220px] float float-delay-1 decoration"
                style={{ '--rotation': '10deg' } as React.CSSProperties}
              >
                <Image
                  src="/images/Watermelon.png"
                  alt="Watermelon slice"
                  width={168}
                  height={391}
                  className="w-full h-auto"
                  style={{ borderRadius: '0' }}
                />
              </div>

              {/* Starfish - BOTTOM LEFT - BIG (160px) */}
              <div
                className="absolute bottom-[40px] left-[-30px] w-[160px] float float-delay-2 decoration"
                style={{ '--rotation': '-15deg' } as React.CSSProperties}
              >
                <Image
                  src="/images/Starfish.png"
                  alt="Starfish"
                  width={277}
                  height={475}
                  className="w-full h-auto"
                  style={{ borderRadius: '0' }}
                />
              </div>

              {/* Orange slice - TOP LEFT - BIG (160px) */}
              <div
                className="absolute top-[200px] left-[0px] w-[160px] float float-delay-3 decoration"
                style={{ '--rotation': '8deg' } as React.CSSProperties}
              >
                <Image
                  src="/images/orange-slice.png"
                  alt="Orange slice"
                  width={364}
                  height={447}
                  className="w-full h-auto"
                  style={{ borderRadius: '0' }}
                />
              </div>

              {/* Purple Drink - MIDDLE - BIG (130px) */}
              <div
                className="absolute top-[320px] left-[160px] w-[130px] float float-delay-4 decoration"
                style={{ '--rotation': '5deg' } as React.CSSProperties}
              >
                <Image
                  src="/images/Purple-drink-1.png"
                  alt="Purple drink"
                  width={251}
                  height={521}
                  className="w-full h-auto"
                  style={{ borderRadius: '0' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave transition to coral */}
      <WaveDivider color="#F97068" />

      {/* ========== SECTION 3: Coral CTA Banner - WITH GRADIENT ========== */}
      <section className="coral-section py-24 px-4">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="section-title-white mb-4">
            Explore Our Top Experiences
          </h2>
          <p className="subtitle-script-white mb-12">
            &quot;Unique Experiences Unlocked&quot;
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
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

      {/* ========== SECTION 4: Full-Bleed Underwater Photo - OVERLAPS INTO NEXT SECTION ========== */}
      <section
        className="h-[55vh] md:h-[65vh] w-full overlap-bottom"
        style={{
          backgroundImage: `url('/images/Banner-2-2.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '30px',
          maxWidth: '92%',
          marginLeft: 'auto',
          marginRight: 'auto',
          boxShadow: '0 20px 60px rgba(0,0,0,0.25), 0 40px 100px rgba(64, 224, 208, 0.15)',
        }}
      />

      {/* ========== SECTION 5: Why Choose Us - WITH MORPHING TEAL BLOB ========== */}
      <section className="py-32 px-4 bg-[#FFFAF5] relative overflow-hidden" id="what-is-we-do">
        {/* THE MORPHING TEAL BLOB - uses CSS animation */}
        <div
          className="teal-blob hidden lg:block"
          style={{
            width: '55%',
            height: '150%',
            right: '-8%',
            top: '-25%',
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text */}
            <div className="pt-16">
              <h2 className="section-title mb-4">Why Choose Us?</h2>
              <p className="subtitle-script">&quot;Why go wit us?&quot;</p>

              <div className="text-[#5D4E37] leading-relaxed space-y-6 text-lg">
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
                <p className="font-bold italic text-xl text-[#F97068]">
                  &quot;Yeah ya&apos;ll ga miss us!&quot;
                </p>
              </div>
            </div>

            {/* Right - Decorative elements inside the teal blob */}
            <div className="relative min-h-[400px] hidden lg:flex items-center justify-center">
              {/* Blue starfish - HUGE and floating */}
              <div
                className="absolute top-[15%] right-[15%] w-[180px] float decoration"
                style={{ '--rotation': '-8deg' } as React.CSSProperties}
              >
                <Image
                  src="/images/image-10.png"
                  alt="Blue starfish"
                  width={277}
                  height={382}
                  className="w-full h-auto"
                  style={{ borderRadius: '0' }}
                />
              </div>

              {/* Orange slice floating in blob */}
              <div
                className="absolute bottom-[25%] right-[35%] w-[120px] float float-delay-2 decoration"
                style={{ '--rotation': '15deg' } as React.CSSProperties}
              >
                <Image
                  src="/images/orange-slice.png"
                  alt="Orange slice"
                  width={364}
                  height={447}
                  className="w-full h-auto"
                  style={{ borderRadius: '0' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 6: What To Expect - IMPERFECT GRID ========== */}
      <section className="py-28 px-4 bg-[#FFF8DC]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">What To Expect</h2>
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
                {/* ROUNDED SQUARE with varied transforms via CSS nth-child */}
                <div className="expect-square">
                  <Image
                    src={item.img}
                    alt={item.label}
                    width={260}
                    height={233}
                    className="expect-square-image"
                  />
                  <div className="expect-square-overlay" />
                  <span className="expect-square-label">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 7: What's Included - DRAMATICALLY TILTED ========== */}
      <section className="py-28 px-4 bg-[#FFFAF5]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title mb-4">What&apos;s Included</h2>
            <p className="subtitle-script">&quot;What yinna getting&quot;</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Card 1 - TILTED LEFT */}
            <div className="text-center">
              <div className="image-zoom w-full h-64 mb-8 tilt-left" style={{ borderRadius: '24px', boxShadow: '0 15px 50px rgba(0,0,0,0.15)' }}>
                <Image
                  src="/images/Whats-included-1-1-1.png"
                  alt="Food and Drink Tastings"
                  width={345}
                  height={285}
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '24px' }}
                />
              </div>
              <h4 className="item-title mb-4">Food and Drink Tastings</h4>
              <p className="text-[#7A6B5A] text-base leading-relaxed">
                Let your taste buds dive into home-made Bahamian dishes that will
                &quot;have ya belly full&quot;! You will definitely remember this tour and
                the variety of flavours for sure.
              </p>
            </div>

            {/* Card 2 - TILTED RIGHT */}
            <div className="text-center">
              <div className="image-zoom w-full h-64 mb-8 tilt-right" style={{ borderRadius: '24px', boxShadow: '0 15px 50px rgba(0,0,0,0.15)' }}>
                <Image
                  src="/images/Whats-included-2.png"
                  alt="In-house Tours"
                  width={345}
                  height={285}
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '24px' }}
                />
              </div>
              <h4 className="item-title mb-4">In-house Tours</h4>
              <p className="text-[#7A6B5A] text-base leading-relaxed">
                Become infused with the local vibe as you blend into Bahamian lifestyle.
                Hear our stories and make some island friends. Feast your eyes, ears,
                and stomachs on all that is &quot;truly Bahamian&quot;.
              </p>
            </div>

            {/* Card 3 - SLIGHT TILT */}
            <div className="text-center">
              <div className="image-zoom w-full h-64 mb-8 tilt-slight" style={{ borderRadius: '24px', boxShadow: '0 15px 50px rgba(0,0,0,0.15)' }}>
                <Image
                  src="/images/Whats-included-3.png"
                  alt="Endless Add-Ons"
                  width={345}
                  height={285}
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '24px' }}
                />
              </div>
              <h4 className="item-title mb-4">Endless Add-Ons</h4>
              <p className="text-[#7A6B5A] text-base leading-relaxed mb-4">
                For those of you that need that extra, we have a slew of add-on tours
                that add to the adventure. We can customize your tour, your stops and
                of course, we can arrange private tours.
              </p>
              <Link href="/tours-and-prices" className="text-[#40E0D0] hover:text-[#F97068] text-base font-bold transition-colors">
                View Add-ons →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Wave transition to coral */}
      <WaveDivider color="#F97068" />

      {/* ========== SECTION 8: Final CTA - WITH GRADIENT ========== */}
      <section className="coral-section py-24 px-4">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="section-title-white mb-10">Ready to Plan a Trip?</h2>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
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
