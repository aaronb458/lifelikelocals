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

      {/* ========== SECTION 2: Introduction - ASYMMETRIC with BIGGER decorations ========== */}
      <section className="py-24 px-4 bg-[#FFFAF5] relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - Text */}
            <div className="lg:pr-8">
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

            {/* Right Column - BIGGER decorative elements (150-200px) */}
            <div className="relative min-h-[500px] hidden lg:block">
              {/* Woman's EYES - prominent */}
              <div className="absolute top-0 right-0 w-[340px] h-[150px] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/images/why-choose-us.png"
                  alt="Bahamian woman eyes"
                  width={1440}
                  height={615}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 30%', borderRadius: '16px' }}
                />
              </div>

              {/* Hat - TOP RIGHT - BIG (200px) */}
              <div
                className="absolute top-[20px] right-[-30px] w-[180px] float"
                style={{ '--rotation': '-10deg' } as React.CSSProperties}
              >
                <Image
                  src="/images/hat1.png"
                  alt="Bahamian hat"
                  width={297}
                  height={710}
                  className="w-full h-auto drop-shadow-xl"
                  style={{ borderRadius: '0' }}
                />
              </div>

              {/* Watermelon - BOTTOM RIGHT - BIG (180px) */}
              <div
                className="absolute bottom-0 right-[20px] w-[150px] float float-delay-1"
                style={{ '--rotation': '8deg' } as React.CSSProperties}
              >
                <Image
                  src="/images/Watermelon.png"
                  alt="Watermelon slice"
                  width={168}
                  height={391}
                  className="w-full h-auto drop-shadow-xl"
                  style={{ borderRadius: '0' }}
                />
              </div>

              {/* Starfish - BOTTOM LEFT - BIG (150px) */}
              <div
                className="absolute bottom-[60px] left-0 w-[150px] float float-delay-2"
                style={{ '--rotation': '-12deg' } as React.CSSProperties}
              >
                <Image
                  src="/images/Starfish.png"
                  alt="Starfish"
                  width={277}
                  height={475}
                  className="w-full h-auto drop-shadow-xl"
                  style={{ borderRadius: '0' }}
                />
              </div>

              {/* Orange slice - TOP LEFT - BIG (150px) */}
              <div
                className="absolute top-[180px] left-[20px] w-[130px] float"
                style={{ '--rotation': '5deg' } as React.CSSProperties}
              >
                <Image
                  src="/images/orange-slice.png"
                  alt="Orange slice"
                  width={364}
                  height={447}
                  className="w-full h-auto drop-shadow-xl"
                  style={{ borderRadius: '0' }}
                />
              </div>

              {/* Purple Drink - MIDDLE - BIG (120px) */}
              <div
                className="absolute top-[280px] left-[140px] w-[100px] float float-delay-1"
                style={{ '--rotation': '3deg' } as React.CSSProperties}
              >
                <Image
                  src="/images/Purple-drink-1.png"
                  alt="Purple drink"
                  width={251}
                  height={521}
                  className="w-full h-auto drop-shadow-xl"
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

      {/* ========== SECTION 4: Full-Bleed Underwater Photo ========== */}
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

      {/* ========== SECTION 5: Why Choose Us - WITH TEAL BLOB ========== */}
      <section className="py-24 px-4 bg-[#FFFAF5] relative overflow-hidden" id="what-is-we-do">
        {/* THE GIANT TEAL BLOB - positioned right */}
        <div
          className="absolute hidden lg:block"
          style={{
            width: '50%',
            height: '140%',
            right: '-5%',
            top: '-20%',
            background: '#40E0D0',
            borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
            zIndex: 0,
            opacity: 0.85,
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text (ASYMMETRIC - text is LEFT aligned) */}
            <div>
              <h2 className="section-title text-3xl mb-3">Why Choose Us?</h2>
              <p className="subtitle-script">&quot;Why go wit us?&quot;</p>

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
                <p className="font-semibold italic text-lg">
                  &quot;Yeah ya&apos;ll ga miss us!&quot;
                </p>
              </div>
            </div>

            {/* Right - Decorative space inside the teal blob */}
            <div className="relative min-h-[300px] hidden lg:flex items-center justify-center">
              {/* Blue starfish inside the teal blob */}
              <div className="absolute top-[20%] right-[20%] w-[120px] float">
                <Image
                  src="/images/image-10.png"
                  alt="Blue starfish"
                  width={277}
                  height={382}
                  className="w-full h-auto drop-shadow-xl"
                  style={{ borderRadius: '0' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 6: What To Expect - ROUNDED SQUARES (not circles!) ========== */}
      <section className="py-24 px-4 bg-[#FFF8DC]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="section-title text-3xl mb-3">What To Expect</h2>
            <p className="subtitle-script">&quot;Unique Experiences Unlocked&quot;</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 justify-items-center">
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
                {/* ROUNDED SQUARE with text overlay */}
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

      {/* ========== SECTION 7: What's Included - TILTED IMAGES ========== */}
      <section className="py-24 px-4 bg-[#FFFAF5]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="section-title text-3xl mb-3">What&apos;s Included</h2>
            <p className="subtitle-script">&quot;What yinna getting&quot;</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 - TILTED LEFT */}
            <div className="text-center">
              <div className="image-zoom w-full h-56 mb-6 shadow-xl tilt-left" style={{ borderRadius: '20px' }}>
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

            {/* Card 2 - TILTED RIGHT */}
            <div className="text-center">
              <div className="image-zoom w-full h-56 mb-6 shadow-xl tilt-right" style={{ borderRadius: '20px' }}>
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

            {/* Card 3 - TILTED SLIGHT */}
            <div className="text-center">
              <div className="image-zoom w-full h-56 mb-6 shadow-xl tilt-slight" style={{ borderRadius: '20px' }}>
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
              <Link href="/tours-and-prices" className="text-[#40E0D0] hover:text-[#F97068] text-sm font-semibold transition-colors">
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
