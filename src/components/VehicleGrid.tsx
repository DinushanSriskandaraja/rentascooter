import React from 'react';
import { siteConfig } from '@/config/site';
import { VehicleCard } from './VehicleCard';

export function VehicleGrid() {
  return (
    <section id="vehicles" className="py-20 md:py-28 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-text-main">
          Choose Your Ride
        </h2>
        <p className="text-lg text-text-muted">
          Simple daily pricing. No complicated booking process.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {siteConfig.vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </section>
  );
}
