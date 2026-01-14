'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    // Hide loader after animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className={`page-loader ${progress >= 100 ? 'fade-out' : ''}`}>
      {/* Animated gradient background */}
      <div className="loader-bg" />

      {/* Floating decorations */}
      <div className="loader-decorations">
        <div className="loader-bubble" style={{ '--delay': '0s', '--left': '10%' } as React.CSSProperties} />
        <div className="loader-bubble" style={{ '--delay': '0.5s', '--left': '30%' } as React.CSSProperties} />
        <div className="loader-bubble" style={{ '--delay': '1s', '--left': '50%' } as React.CSSProperties} />
        <div className="loader-bubble" style={{ '--delay': '0.3s', '--left': '70%' } as React.CSSProperties} />
        <div className="loader-bubble" style={{ '--delay': '0.8s', '--left': '90%' } as React.CSSProperties} />
      </div>

      {/* Content */}
      <div className="loader-content">
        {/* Logo */}
        <div className="loader-logo">
          <Image
            src="/images/LLL_Logo_1.png"
            alt="Life Like Locals"
            width={100}
            height={100}
            className="loader-logo-img"
          />
        </div>

        {/* Wave animation */}
        <div className="loader-wave">
          <span style={{ '--i': 1 } as React.CSSProperties}></span>
          <span style={{ '--i': 2 } as React.CSSProperties}></span>
          <span style={{ '--i': 3 } as React.CSSProperties}></span>
          <span style={{ '--i': 4 } as React.CSSProperties}></span>
          <span style={{ '--i': 5 } as React.CSSProperties}></span>
        </div>

        {/* Loading text */}
        <p className="loader-text">
          Preparing your island escape...
        </p>

        {/* Progress bar */}
        <div className="loader-progress">
          <div
            className="loader-progress-bar"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
}
