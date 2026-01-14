'use client';

import { useEffect, useRef, useState } from 'react';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

const stats: Stat[] = [
  { value: 5000, suffix: '+', label: 'Happy Travelers', icon: '🌴' },
  { value: 15, suffix: '+', label: 'Years of Experience', icon: '⭐' },
  { value: 50, suffix: '+', label: 'Unique Experiences', icon: '🎉' },
  { value: 98, suffix: '%', label: 'Would Recommend', icon: '❤️' },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setDisplayValue(value);
              clearInterval(timer);
            } else {
              setDisplayValue(Math.floor(current));
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span ref={ref} className="stat-number">
      {displayValue.toLocaleString()}{suffix}
    </span>
  );
}

export default function AnimatedStats() {
  return (
    <div className="stats-container">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="stat-item"
          style={{ animationDelay: `${index * 0.15}s` }}
        >
          <div className="stat-icon">{stat.icon}</div>
          <AnimatedNumber value={stat.value} suffix={stat.suffix} />
          <span className="stat-label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
