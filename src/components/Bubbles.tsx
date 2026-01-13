'use client';

interface BubblesProps {
  count?: number;
  color?: string;
}

export default function Bubbles({ count = 15, color = 'rgba(255, 255, 255, 0.3)' }: BubblesProps) {
  return (
    <div className="bubbles-container">
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="bubble"
          style={{
            '--size': `${Math.random() * 25 + 8}px`,
            '--left': `${Math.random() * 100}%`,
            '--delay': `${Math.random() * 8}s`,
            '--duration': `${Math.random() * 12 + 10}s`,
            '--color': color,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
