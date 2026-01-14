'use client';

import { useState } from 'react';
import Image from 'next/image';

const galleryImages = [
  { src: '/images/What-to-expect-1.png', alt: 'Creative Tourism', category: 'culture' },
  { src: '/images/What-to-expect-2.png', alt: 'Local Gastronomy', category: 'food' },
  { src: '/images/What-to-expect-3.png', alt: 'Discovery Of Culture', category: 'culture' },
  { src: '/images/What-to-expect-4.png', alt: 'History & Mystery', category: 'culture' },
  { src: '/images/Whats-included-1-1-1.png', alt: 'Food Tasting', category: 'food' },
  { src: '/images/Whats-included-2.png', alt: 'Local Tours', category: 'tours' },
  { src: '/images/Whats-included-3.png', alt: 'Add-On Experiences', category: 'tours' },
  { src: '/images/What-to-expect-5.png', alt: 'Bahamian Dialect', category: 'culture' },
  { src: '/images/What-to-expect-6.png', alt: 'Immersive Activities', category: 'tours' },
];

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const filteredImages = filter === 'all'
    ? galleryImages
    : galleryImages.filter((img) => img.category === filter);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = '';
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const goToPrev = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <>
      {/* Filter buttons */}
      <div className="gallery-filters">
        {['all', 'culture', 'food', 'tours'].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`gallery-filter-btn ${filter === category ? 'active' : ''}`}
          >
            {category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Gallery grid */}
      <div className="gallery-grid">
        {filteredImages.map((image, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => openLightbox(index)}
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={300}
              className="gallery-image"
            />
            <div className="gallery-overlay">
              <span className="gallery-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                  <path d="M11 8v6M8 11h6" />
                </svg>
              </span>
              <span className="gallery-caption">{image.alt}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => { e.stopPropagation(); goToPrev(); }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <Image
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              width={1200}
              height={800}
              className="lightbox-image"
            />
            <p className="lightbox-caption">{filteredImages[selectedImage].alt}</p>
          </div>

          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Thumbnails */}
          <div className="lightbox-thumbnails">
            {filteredImages.map((image, index) => (
              <button
                key={index}
                onClick={(e) => { e.stopPropagation(); setSelectedImage(index); }}
                className={`lightbox-thumb ${index === selectedImage ? 'active' : ''}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={80}
                  height={60}
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
