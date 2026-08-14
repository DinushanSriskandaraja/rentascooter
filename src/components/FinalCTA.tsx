import React from 'react';
import { WhatsAppButton } from './WhatsAppButton';

export function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero/sri-lanka-road.jpg"
          alt="Sri Lankan Adventure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background-main/90"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl md:text-6xl font-bold font-heading mb-6 text-text-main leading-tight">
          Your Sri Lankan <br className="hidden sm:block" /> Adventure Starts Here.
        </h2>
        <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto">
          Pick your ride, send us a WhatsApp message and get ready to explore the island on your own terms.
        </p>
        <WhatsAppButton className="px-10 py-5 rounded-full text-xl shadow-2xl shadow-primary/20">
          WhatsApp Us to Book
        </WhatsAppButton>
      </div>
    </section>
  );
}
