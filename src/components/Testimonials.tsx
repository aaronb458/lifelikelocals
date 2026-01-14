'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "New York, USA",
    image: "/images/What-to-expect-1.png",
    rating: 5,
    text: "This wasn't just a tour - it was a transformation. The moment we stepped off the beaten path with our guide, we discovered the REAL Bahamas. The food, the stories, the laughter... I've never felt more connected to a place.",
    highlight: "Life-changing experience"
  },
  {
    id: 2,
    name: "James & Emily Thompson",
    location: "London, UK",
    image: "/images/What-to-expect-2.png",
    rating: 5,
    text: "We've traveled to 40+ countries, and this is hands down the most authentic cultural experience we've ever had. Our guide treated us like family. We didn't just visit the Bahamas - we LIVED it.",
    highlight: "Best trip in 40+ countries"
  },
  {
    id: 3,
    name: "Maria Santos",
    location: "Miami, Florida",
    image: "/images/What-to-expect-3.png",
    rating: 5,
    text: "I grew up thinking I knew Caribbean culture. Life Like Locals showed me I knew nothing! The home-cooked meals, the stories from elders, dancing in the streets... This is how travel should be.",
    highlight: "Eye-opening journey"
  },
  {
    id: 4,
    name: "David Chen",
    location: "Toronto, Canada",
    image: "/images/What-to-expect-4.png",
    rating: 5,
    text: "Skip the resorts. This is the experience you're looking for. Our guide shared secret spots, introduced us to local artisans, and made us feel like we belonged. Already planning our return trip!",
    highlight: "Already booking again"
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleDotClick = (index: number) => {
    if (isAnimating || index === activeIndex) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <div className="testimonials-container">
      {/* Quote decoration */}
      <div className="testimonial-quote-mark">"</div>

      {/* Main testimonial card */}
      <div className={`testimonial-card ${isAnimating ? 'animating' : ''}`}>
        {/* Highlight badge */}
        <div className="testimonial-badge">
          {currentTestimonial.highlight}
        </div>

        {/* Stars */}
        <div className="testimonial-stars">
          {[...Array(currentTestimonial.rating)].map((_, i) => (
            <svg key={i} className="star" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>

        {/* Quote text */}
        <blockquote className="testimonial-text">
          {currentTestimonial.text}
        </blockquote>

        {/* Author info */}
        <div className="testimonial-author">
          <div className="testimonial-avatar">
            <Image
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
              width={60}
              height={60}
              className="testimonial-avatar-img"
            />
          </div>
          <div className="testimonial-author-info">
            <p className="testimonial-name">{currentTestimonial.name}</p>
            <p className="testimonial-location">{currentTestimonial.location}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="testimonial-nav">
        <button
          onClick={handlePrev}
          className="testimonial-nav-btn"
          aria-label="Previous testimonial"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`testimonial-dot ${index === activeIndex ? 'active' : ''}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="testimonial-nav-btn"
          aria-label="Next testimonial"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
