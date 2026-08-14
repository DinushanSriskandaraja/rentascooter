import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Choose Your Ride',
    desc: 'Pick the scooter or motorbike that suits your trip.'
  },
  {
    num: '02',
    title: 'Message Us',
    desc: 'Click the WhatsApp button and tell us your rental dates.'
  },
  {
    num: '03',
    title: 'Ride Sri Lanka',
    desc: 'Arrange pickup or delivery and start exploring.'
  }
];

export function HowItWorks() {
  return (
    <section className="py-20 md:py-28 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-text-main">
            How It Works
          </h2>
          <p className="text-lg text-text-muted mb-12">
            We've made the rental process as simple as possible. No complicated forms, no hidden fees. Just direct communication.
          </p>
          
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-6 relative">
                {idx !== steps.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-[-2.5rem] w-px bg-border-main"></div>
                )}
                <div className="w-12 h-12 shrink-0 rounded-full bg-surface border border-border-main flex items-center justify-center font-bold text-primary font-heading text-lg z-10">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading mb-2 text-text-main">{step.title}</h3>
                  <p className="text-text-muted">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-auto lg:h-[600px] border border-border-main shadow-2xl">
           <img 
            src="/destinations/sri-lanka-road.jpg" 
            alt="Riding in Sri Lanka" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-main via-background-main/20 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
