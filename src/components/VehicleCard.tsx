import React from 'react';
import { siteConfig } from '@/config/site';

type Vehicle = typeof siteConfig.vehicles[0];

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const message = siteConfig.whatsappMessage.template
    .replace('{vehicle}', vehicle.name)
    .replace('{category}', vehicle.category)
    .replace('{price}', vehicle.price.toString());

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="group bg-surface rounded-2xl border border-border-main overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-primary/5 flex flex-col">
      <div className="relative h-56 bg-background-secondary overflow-hidden p-6 flex items-center justify-center">
        <img 
          src={vehicle.image} 
          alt={vehicle.name} 
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-2xl"
        />
        <div className="absolute top-4 left-4 bg-background-main/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium border border-white/10 text-text-main">
          {vehicle.category}
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold font-heading text-text-main">{vehicle.name}</h3>
          <div className="text-right">
            <span className="text-xl font-bold text-primary">${vehicle.price}</span>
            <span className="text-sm text-text-muted"> / {vehicle.priceUnit}</span>
          </div>
        </div>

        <div className="flex gap-4 text-sm text-text-muted mb-6">
          <div className="flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 3"/></svg>
            {vehicle.transmission}
          </div>
          <div className="flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 22V8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14"/><path d="M11 22H3"/><path d="M21 22V6a2 2 0 0 0-2-2h-3"/><path d="M16 22h5"/><path d="M7 12h.01"/></svg>
            {vehicle.fuel}
          </div>
        </div>

        <p className="text-sm text-text-muted mb-6 mt-auto">
          {vehicle.suitableFor}
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-primary text-text-main hover:text-white font-medium py-3 rounded-xl border border-white/10 hover:border-primary transition-all duration-300"
        >
          Rent This {vehicle.category}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </a>
      </div>
    </div>
  );
}
