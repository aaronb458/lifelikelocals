import Link from "next/link";
import Image from "next/image";
import WaveDivider from "@/components/WaveDivider";
import FadeInSection from "@/components/FadeInSection";
import Bubbles from "@/components/Bubbles";
import Testimonials from "@/components/Testimonials";
import PhotoGallery from "@/components/PhotoGallery";
import AnimatedStats from "@/components/AnimatedStats";
import MagneticButton from "@/components/MagneticButton";

export default function Home() {
  return (
    <>
      {/* ========== SECTION 1: Hero with ANIMATED GRADIENT ========== */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center pt-[65px] hero-gradient"
        style={{
          borderRadius: '0 0 50px 50px',
        }}
      >
        {/* Floating bubbles for atmosphere */}
        <Bubbles count={20} color="rgba(255, 255, 255, 0.25)" />

        {/* Hero image overlay with blend mode */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/images/gallery/VIC00148.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 35%',
            borderRadius: '0 0 50px 50px',
            mixBlendMode: 'overlay',
            opacity: 0.75,
          }}
        />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/20" style={{ borderRadius: '0 0 50px 50px' }} />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <FadeInSection>
            <h1 className="hero-title mb-6">
              Experience &quot;Life Like Locals&quot;<br />
              in the Bahamas
            </h1>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <p className="text-white text-xl max-w-2xl mx-auto mb-10 font-medium" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.6)' }}>
              Life Like Locals is an innovative, down-home Bahamian experience that
              inspires and evokes the real &quot;Bahamian connection&quot;.
            </p>
          </FadeInSection>
          <FadeInSection delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <MagneticButton href="/tours-and-prices" className="btn-primary">
                Learn More
              </MagneticButton>
              <MagneticButton href="/contact" className="btn-outline-white glass-card-dark">
                Contact Us
              </MagneticButton>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ========== SECTION 2: Introduction - ASYMMETRIC with HUGE decorations ========== */}
      <section className="py-28 px-4 bg-[#FFFAF5] relative overflow-hidden">
        {/* Subtle background image for vibrancy */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/images/gallery/VIC00148.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.07,
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text */}
            <FadeInSection direction="left">
              <div className="lg:pr-8">
                <h3 className="text-2xl font-bold text-[#F97068] mb-4" style={{ fontFamily: 'var(--font-josefin)' }}>
                  About the Experience
                </h3>
                <p className="text-[#5D4E37] text-lg leading-relaxed mb-6">
                  Hop on our 24-seater bus and let us roll you through Nassau the local way.
                  For 3½ hours, you&apos;ll see where we hang out, hear the kinda stories your hotel
                  guide won&apos;t tell you, and learn exactly how we does talk.
                </p>
                <p className="text-[#5D4E37] text-lg leading-relaxed mb-6">
                  We hittin&apos; historical sites, neighborhood corners, and them picture-perfect
                  spots you&apos;d only find if you had cousin, aunty, or somebody baby daddy to show you &apos;round.
                </p>
                <p className="text-[#5D4E37] text-lg leading-relaxed mb-6 font-medium">
                  We born here. We live here. We know the stories.
                  <br />
                  And we gon&apos; tell them to you just how we tell each other –
                  <span className="text-[#F97068]"> loud, funny, full of love, and always real.</span>
                </p>
                <p className="text-[#40E0D0] text-xl font-bold italic" style={{ fontFamily: 'var(--font-josefin)' }}>
                  &quot;This ain&apos;t no lie, you ain&apos;t go neva meet people like us, fa tru!&quot;
                </p>
              </div>
            </FadeInSection>

            {/* Right Column - HUGE decorative elements */}
            <div className="relative min-h-[550px] hidden lg:block">
              {/* Guide with Follow Me sign - prominent, with 3D tilt */}
              <FadeInSection delay={0.2} direction="right">
                <div className="absolute top-0 right-0 w-[380px] h-[320px] overflow-hidden rounded-3xl shadow-2xl tilt-3d color-shift">
                  <Image
                    src="/images/gallery/VIC00736.jpg"
                    alt="Your island guide"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 15%', borderRadius: '24px' }}
                  />
                </div>
              </FadeInSection>

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

      {/* Animated wave transition to coral */}
      <WaveDivider color="#F97068" animated />

      {/* ========== SECTION 3: Coral CTA Banner with Bubbles ========== */}
      <section className="coral-section py-24 px-4 relative overflow-hidden">
        {/* Bubbles rising in coral section */}
        <Bubbles count={12} color="rgba(255, 255, 255, 0.2)" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeInSection>
            <h2 className="section-title-white mb-4">
              Explore Our Top Experiences
            </h2>
          </FadeInSection>
          <FadeInSection delay={0.15}>
            <p className="subtitle-script-white mb-12">
              &quot;Unique Experiences Unlocked&quot;
            </p>
          </FadeInSection>
          <FadeInSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <MagneticButton href="/tours-and-prices" className="btn-outline-white glass-card-dark">
                See Tours
              </MagneticButton>
              <MagneticButton href="/contact" className="btn-outline-white glass-card-dark">
                Contact Us
              </MagneticButton>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Animated wave transition from coral */}
      <WaveDivider color="#FFFAF5" flip animated />

      {/* ========== SECTION 4: Full-Bleed Group Photo - OVERLAPS ========== */}
      <FadeInSection>
        <section
          className="h-[55vh] md:h-[65vh] w-full overlap-bottom color-shift"
          style={{
            backgroundImage: `url('/images/gallery/VIC00788.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 70%',
            borderRadius: '30px',
            maxWidth: '92%',
            marginLeft: 'auto',
            marginRight: 'auto',
            boxShadow: '0 20px 60px rgba(0,0,0,0.25), 0 40px 100px rgba(64, 224, 208, 0.15)',
          }}
        />
      </FadeInSection>

      {/* ========== SECTION 5: Why Choose Us - WITH MORPHING TEAL BLOB ========== */}
      <section className="py-32 px-4 bg-[#FFFAF5] relative overflow-hidden" id="what-is-we-do">
        {/* Subtle background image for vibrancy */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/images/gallery/VIC00843.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.08,
          }}
        />
        {/* THE MORPHING TEAL BLOB */}
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
              <FadeInSection>
                <h2 className="section-title mb-4">Why Choose Us?</h2>
                <p className="subtitle-script">&quot;Why go wit us?&quot;</p>
              </FadeInSection>

              <FadeInSection delay={0.2}>
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
              </FadeInSection>
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
            <FadeInSection>
              <h2 className="section-title mb-4">What To Expect</h2>
              <p className="subtitle-script">&quot;See what we do. Eat what we eat. Talk how we talk.&quot;</p>
            </FadeInSection>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 justify-items-center">
            {[
              { label: "Plenty Laughing", img: "/images/gallery/VIC00931.jpg" },
              { label: "Local Gastronomy", img: "/images/gallery/VIC00322-Edit.jpg" },
              { label: "Real Storytelling", img: "/images/gallery/VIC00991.jpg" },
              { label: "History & Mystery", img: "/images/gallery/VIC00788.jpg" },
              { label: "Local Slang", img: "/images/gallery/VIC00736.jpg" },
              { label: "Picture-Perfect Spots", img: "/images/gallery/VIC00129.jpg" },
              { label: "Hidden Gems", img: "/images/gallery/VIC01123.jpg" },
              { label: "Real Bahamian Life", img: "/images/gallery/VIC01206.jpg" },
            ].map((item, idx) => (
              <FadeInSection key={idx} delay={idx * 0.1}>
                <div className="flex flex-col items-center">
                  {/* ROUNDED SQUARE with 3D tilt */}
                  <div className="expect-square tilt-3d color-shift">
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
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 7: What's Included - DRAMATICALLY TILTED ========== */}
      <section className="py-28 px-4 bg-[#FFFAF5] relative overflow-hidden">
        {/* Subtle background image for vibrancy */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/images/gallery/VIC00519.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.07,
          }}
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <FadeInSection>
              <h2 className="section-title mb-4">What&apos;s Included</h2>
              <p className="subtitle-script">&quot;What yinna getting&quot;</p>
            </FadeInSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Card 1 - TILTED LEFT */}
            <FadeInSection delay={0}>
              <div className="text-center">
                <div className="image-zoom w-full h-64 mb-8 tilt-left color-shift overflow-hidden" style={{ borderRadius: '24px', boxShadow: '0 15px 50px rgba(0,0,0,0.15)' }}>
                  <Image
                    src="/images/gallery/VIC00406.jpg"
                    alt="Food and Drink Tastings"
                    width={600}
                    height={400}
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
            </FadeInSection>

            {/* Card 2 - TILTED RIGHT */}
            <FadeInSection delay={0.15}>
              <div className="text-center">
                <div className="image-zoom w-full h-64 mb-8 tilt-right color-shift overflow-hidden" style={{ borderRadius: '24px', boxShadow: '0 15px 50px rgba(0,0,0,0.15)' }}>
                  <Image
                    src="/images/gallery/VIC09911.jpg"
                    alt="In-house Tours"
                    width={600}
                    height={400}
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
            </FadeInSection>

            {/* Card 3 - SLIGHT TILT */}
            <FadeInSection delay={0.3}>
              <div className="text-center">
                <div className="image-zoom w-full h-64 mb-8 tilt-slight color-shift overflow-hidden" style={{ borderRadius: '24px', boxShadow: '0 15px 50px rgba(0,0,0,0.15)' }}>
                  <Image
                    src="/images/gallery/VIC00769.jpg"
                    alt="Cultural Experiences"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                    style={{ borderRadius: '24px' }}
                  />
                </div>
                <h4 className="item-title mb-4">Cultural Experiences</h4>
                <p className="text-[#7A6B5A] text-base leading-relaxed mb-4">
                  From Junkanoo drums to local storytelling, immerse yourself in authentic
                  Bahamian culture. We can customize your tour, your stops and
                  of course, we can arrange private group tours.
                </p>
                <Link href="/tours-and-prices" className="text-[#40E0D0] hover:text-[#F97068] text-base font-bold transition-colors">
                  View Tours →
                </Link>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ========== SECTION 8: Animated Statistics ========== */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#40E0D0] via-[#48D1CC] to-[#20B2AA] relative overflow-hidden">
        <Bubbles count={15} color="rgba(255, 255, 255, 0.2)" />
        <div className="max-w-5xl mx-auto relative z-10">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-josefin)', textShadow: '2px 2px 8px rgba(0,0,0,0.2)' }}>
                Our Island Impact
              </h2>
              <p className="text-white/90 text-xl italic">&quot;See why travelers love us&quot;</p>
            </div>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <AnimatedStats />
          </FadeInSection>
        </div>
      </section>

      {/* Animated wave transition */}
      <WaveDivider color="#FFF8DC" flip animated />

      {/* ========== SECTION 9: Photo Gallery ========== */}
      <section className="py-28 px-4 bg-[#FFF8DC]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <FadeInSection>
              <h2 className="section-title mb-4">Island Memories</h2>
              <p className="subtitle-script">&quot;Captured moments from our adventures&quot;</p>
            </FadeInSection>
          </div>
          <FadeInSection delay={0.2}>
            <PhotoGallery />
          </FadeInSection>
        </div>
      </section>

      {/* Animated wave transition to testimonials */}
      <WaveDivider color="#FFFAF5" animated />

      {/* ========== SECTION 10: Testimonials ========== */}
      <section className="py-28 px-4 bg-[#FFFAF5] relative overflow-hidden">
        {/* Subtle background image for vibrancy */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/images/gallery/VIC09850.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.07,
          }}
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <FadeInSection>
              <h2 className="section-title mb-4">What Travelers Say</h2>
              <p className="subtitle-script">&quot;Hear from our island family&quot;</p>
            </FadeInSection>
          </div>
          <FadeInSection delay={0.2}>
            <Testimonials />
          </FadeInSection>
        </div>
      </section>

      {/* Animated wave transition to coral */}
      <WaveDivider color="#F97068" animated />

      {/* ========== SECTION 11: Final CTA with Bubbles ========== */}
      <section className="coral-section py-24 px-4 relative overflow-hidden">
        <Bubbles count={10} color="rgba(255, 255, 255, 0.15)" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <FadeInSection>
            <h2 className="section-title-white mb-10">Ready to Plan a Trip?</h2>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <MagneticButton href="/tours-and-prices" className="btn-outline-white glass-card-dark">
                Learn More
              </MagneticButton>
              <MagneticButton href="/contact" className="btn-outline-white glass-card-dark">
                Contact Us
              </MagneticButton>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Animated wave transition from coral to footer */}
      <WaveDivider color="#f5f5f5" flip animated />
    </>
  );
}
