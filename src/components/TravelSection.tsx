import React from 'react';

export function TravelSection() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-background-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden aspect-video lg:aspect-[4/5] border border-border-main shadow-2xl">
             <img 
              src="/destinations/sri-lanka-road.jpg" 
              alt="Sri Lanka Travel" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-text-main">
              From Coastlines to Mountains.
            </h2>
            <p className="text-lg text-text-muted mb-8 leading-relaxed">
              One island. Hundreds of roads worth exploring. Take the scenic route, stop when you want and experience Sri Lanka beyond the usual tourist path.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {['Colombo', 'Galle', 'Unawatuna', 'Mirissa', 'Weligama', 'Matara', 'Ella', 'Kandy', 'Nuwara Eliya', 'Yala'].map(dest => (
                <span key={dest} className="px-4 py-2 rounded-full bg-surface border border-border-main text-sm text-text-muted font-medium">
                  {dest}
                </span>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
