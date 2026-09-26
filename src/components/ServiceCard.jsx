import React from 'react';

export default function ServiceCard({ title, description, icon: Icon }) {
  return (
    <div className="bg-background-secondary rounded-xl p-6 border border-brown-tan/20">
      {Icon && <Icon className="text-3xl text-green-deep mb-3" />}
      <h4 className="font-heading text-lg font-bold text-brown-walnut mb-2">{title}</h4>
      <p className="text-text-muted text-sm">{description}</p>
    </div>
  );
}
