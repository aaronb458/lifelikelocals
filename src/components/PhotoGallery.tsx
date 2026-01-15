'use client';

import { useState } from 'react';
import Image from 'next/image';

const galleryImages = [
  { src: '/images/new/1.jpeg', alt: 'Tour Group Fun', category: 'tours' },
  { src: '/images/new/3.jpeg', alt: 'Guided Experience', category: 'tours' },
  { src: '/images/new/IMG_0043.jpeg', alt: 'Nassau Landmarks', category: 'culture' },
  { src: '/images/new/IMG_0059.jpeg', alt: 'Local Drinks', category: 'food' },
  { src: '/images/new/IMG_1637.jpeg', alt: 'Family Adventures', category: 'tours' },
  { src: '/images/new/IMG_3120.jpeg', alt: 'Life Like Locals Bus', category: 'tours' },
  { src: '/images/new/IMG_3147.jpeg', alt: 'Junkanoo Culture', category: 'culture' },
  { src: '/images/new/IMG_8206.jpeg', alt: 'Colonial Architecture', category: 'culture' },
  { src: '/images/new/IMG_8526.jpeg', alt: 'Beach Day', category: 'tours' },
  { src: '/images/new/IMG_8900.jpeg', alt: 'Crystal Waters', category: 'tours' },
  { src: '/images/new/IMG_9677.jpeg', alt: 'Making Memories', category: 'tours' },
  { src: '/images/new/IMG_9774.jpeg', alt: 'Tour Bus Fun', category: 'tours' },
  { src: '/images/new/c268fa37-9749-46ef-bc46-14e61711cd0f.jpg', alt: 'Happy Travelers', category: 'tours' },
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
