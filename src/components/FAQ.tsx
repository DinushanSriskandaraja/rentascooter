"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "What documents do I need to rent a vehicle?",
    a: "Please contact us on WhatsApp to confirm the current document and licensing requirements based on your nationality and the vehicle you choose."
  },
  {
    q: "Can I get the vehicle delivered?",
    a: "Yes. Island-wide delivery and pickup is available for listed destinations. For other locations, please contact us on WhatsApp to check availability and pricing."
  },
  {
    q: "Can I rent for multiple days?",
    a: "Yes. You can rent for multiple days, weeks, or even months. Contact us for availability and pricing based on your specific rental period."
  },
  {
    q: "Can I pick up at Colombo Airport?",
    a: "Yes. Colombo Airport (CMB) delivery and pickup is available for $80."
  },
  {
    q: "Do you offer scooters and motorbikes?",
    a: "Yes. Our current fleet includes the Honda Dio, TVS Ntorq, and Yamaha FZ, offering options for both city exploring and long-distance mountain rides."
  },
  {
    q: "How do I book?",
    a: "Choose a vehicle and click the WhatsApp button. A pre-filled message will open so you can quickly ask about availability and confirm your booking."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28 lg:py-32 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-text-main">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div 
            key={idx} 
            className="bg-surface border border-border-main rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/10"
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex items-center justify-between p-6 text-left"
              aria-expanded={openIndex === idx}
            >
              <span className="text-lg font-medium text-text-main font-heading pr-4">{faq.q}</span>
              <ChevronDown 
                className={`text-text-muted transition-transform duration-300 shrink-0 ${openIndex === idx ? 'rotate-180' : ''}`}
                size={20} 
              />
            </button>
            <div 
              className={`px-6 text-text-muted overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === idx ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
