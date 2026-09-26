import React from 'react';

export default function StoreCard({ store }) {
  return (
    <div className="bg-background-primary rounded-xl border border-brown-tan/30 p-6 shadow-sm">
      <h3 className="font-heading text-xl font-bold text-brown-walnut">{store?.name}</h3>
      <p className="text-text-muted mt-2">{store?.tagline}</p>
    </div>
  );
}
