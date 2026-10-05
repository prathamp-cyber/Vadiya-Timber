import React from 'react';

export default function GalleryGrid({ images = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {images.map((img, idx) => (
        <div key={idx} className="rounded-xl overflow-hidden bg-background-secondary border border-brown-tan/20 aspect-video">
          <img src={img} alt={`Gallery image ${idx + 1}`} width={600} height={337} loading="lazy" decoding="async" className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
}
