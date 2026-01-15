import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | Life Like Locals",
  description:
    "Get in touch with Life Like Locals for tour bookings, questions, or custom experiences in Nassau, Bahamas.",
};

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-section pt-20"
        style={{
          backgroundImage: `url('/images/gallery/VIC00788.jpg')`,
          backgroundPosition: 'center 65%',
          minHeight: "400px",
        }}
      >
        <div className="container-custom hero-content">
          <h1 className="text-white mb-4">Contact Us</h1>
          <p className="text-white/90 text-xl max-w-2xl">
            Have questions about our tours or ready to book? We&apos;d love to hear
            from you!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding relative overflow-hidden">
        {/* Subtle background image for vibrancy */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/images/gallery/VIC00931.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.07,
          }}
        />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-[#333] mb-2">Send Us a Message</h2>
              <div className="divider mb-8"></div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-[#333] mb-2"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-[#333] mb-2"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#333] mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-[#333] mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-[#333] mb-2"
                  >
                    Subject *
                  </label>
                  <select id="subject" name="subject" required>
                    <option value="">Select a subject</option>
                    <option value="booking">Tour Booking</option>
                    <option value="inquiry">General Inquiry</option>
                    <option value="change">Booking Change</option>
                    <option value="cancellation">Cancellation Request</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#333] mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Tell us about your inquiry, including preferred tour dates if booking..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-[#333] mb-2">Get in Touch</h2>
              <div className="divider mb-8"></div>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 flex-shrink-0 bg-[#F97068] rounded-full flex items-center justify-center shadow-md">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[#333] font-semibold text-lg mb-0">Email</h4>
                    <a
                      href="mailto:lifelikelocals@gmail.com"
                      className="text-[#0D9488] hover:text-[#F97068] font-semibold transition-colors"
                    >
                      lifelikelocals@gmail.com
                    </a>
                    <p className="text-[#777] text-sm">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 flex-shrink-0 bg-[#F97068] rounded-full flex items-center justify-center shadow-md">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[#333] font-semibold text-lg mb-0">Phone / WhatsApp</h4>
                    <a
                      href="tel:242-815-8687"
                      className="text-[#0D9488] hover:text-[#F97068] font-semibold transition-colors"
                    >
                      242-815-8687
                    </a>
                    <p className="text-[#777] text-sm">
                      Tour line - call or WhatsApp
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 flex-shrink-0 bg-[#F97068] rounded-full flex items-center justify-center shadow-md">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[#333] font-semibold text-lg mb-0">Mailing Address</h4>
                    <p className="text-[#666]">
                      P.O. Box SS-19731
                    </p>
                    <p className="text-[#666]">
                      Nassau, Bahamas
                    </p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 flex-shrink-0 bg-[#F97068] rounded-full flex items-center justify-center shadow-md">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[#333] font-semibold text-lg mb-1">Social Media</h4>
                    <div className="flex gap-4">
                      <a
                        href="https://facebook.com/lifelikelocals"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0D9488] hover:text-[#F97068] font-semibold transition-colors"
                      >
                        Facebook
                      </a>
                      <a
                        href="https://instagram.com/lifelikelocalsbahamas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0D9488] hover:text-[#F97068] font-semibold transition-colors"
                      >
                        Instagram
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-12 p-6 bg-[#f7f7f7] rounded-lg">
                <h4 className="text-[#333] mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/tours-and-prices"
                      className="text-[#2ea3f2] hover:underline"
                    >
                      View Tours & Prices
                    </Link>
                  </li>
                  <li>
                    <Link href="/faqs" className="text-[#2ea3f2] hover:underline">
                      Frequently Asked Questions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/policies"
                      className="text-[#2ea3f2] hover:underline"
                    >
                      Cancellation & Refund Policies
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
