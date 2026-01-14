'use client';

import { useState, useRef, useEffect } from 'react';

export default function AmbientSound() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Show the button after a delay
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const toggleSound = () => {
    if (!audioRef.current) {
      // Create audio element on first click (to comply with autoplay policies)
      audioRef.current = new Audio('/sounds/ocean-waves.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {
        // Handle autoplay restrictions gracefully
        console.log('Audio playback requires user interaction');
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={toggleSound}
      className={`ambient-sound-btn ${isVisible ? 'visible' : ''} ${isPlaying ? 'playing' : ''}`}
      aria-label={isPlaying ? 'Mute ambient sound' : 'Play ambient sound'}
      title={isPlaying ? 'Mute ocean sounds' : 'Play ocean sounds'}
    >
      <div className="sound-icon">
        {isPlaying ? (
          // Sound waves animation
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M11 5L6 9H2v6h4l5 4V5z" />
            <path className="sound-wave wave-1" d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path className="sound-wave wave-2" d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          </svg>
        ) : (
          // Muted icon
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M11 5L6 9H2v6h4l5 4V5z" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        )}
      </div>
      <span className="sound-label">
        {isPlaying ? 'Ocean sounds on' : 'Play ocean sounds'}
      </span>
    </button>
  );
}
