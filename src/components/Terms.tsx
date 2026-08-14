import React from 'react';
import { CheckCircle2, ShieldCheck, CreditCard, FileText } from 'lucide-react';

export function Terms() {
  return (
    <section className="py-20 md:py-28 lg:py-32 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Terms */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-text-main">
              Rental Terms
            </h2>
            <p className="text-lg text-text-muted mb-8">
              We believe in 100% transparency. To ensure a safe & enjoyable Sri Lankan adventure, we've kept our scooter & car rental guidelines straightforward with absolutely no hidden clauses.
            </p>

            <ul className="space-y-4">
              {[
                "All engine repairs are done by the company",
                "Please respect the Sri Lanka road rules and culture",
                "The operator should take full responsibility for the custody of the vehicle",
                "If any accident happens, the payment for the 'garage period' will be settled by mutual understanding with the authorized owner"
              ].map((term, i) => (
                <li key={i} className="flex gap-3 text-text-muted items-start">
                  <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                  <span>{term}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div className="bg-surface border border-border-main rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-5">
              <ShieldCheck size={120} className="text-primary" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold font-heading mb-8 text-text-main">
                Minimum Deposits And Rental Requirements
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary shrink-0">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-main text-lg">Valid Driving License</h4>
                    <p className="text-sm text-text-muted">International or local license required.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary shrink-0">
                    <CreditCard size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-main text-lg">$100 Deposit</h4>
                    <p className="text-sm text-text-muted">For all scooters and bikes.</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary shrink-0">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-main text-lg">Copy of Passport</h4>
                    <p className="text-sm text-text-muted">For identity verification.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
