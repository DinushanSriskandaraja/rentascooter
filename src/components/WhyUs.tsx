import React from 'react';
import { MessageCircle, MapPin, BadgeDollarSign, Compass } from 'lucide-react';

const features = [
  {
    icon: MessageCircle,
    title: 'Easy Booking',
    description: 'Book directly through WhatsApp without complicated forms or registration.'
  },
  {
    icon: MapPin,
    title: 'Island-wide Delivery',
    description: 'Get your vehicle delivered to popular destinations around Sri Lanka.'
  },
  {
    icon: BadgeDollarSign,
    title: 'Transparent Pricing',
    description: 'Know the daily rental price before you book. No hidden fees.'
  },
  {
    icon: Compass,
    title: 'Travel Your Way',
    description: 'Explore beaches, mountains, cities and hidden roads at your own pace.'
  }
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 lg:py-32 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-text-main">
            More Than Just a Rental.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-surface p-8 rounded-3xl border border-border-main hover:border-white/10 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-6">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold font-heading mb-3 text-text-main">{feature.title}</h3>
              <p className="text-text-muted leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
