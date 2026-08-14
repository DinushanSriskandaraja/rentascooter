import React from 'react';
import { Logo } from './Logo';
import { siteConfig } from '@/config/site';

export function Footer() {
  return (
    <footer className="bg-background-secondary py-12 md:py-16 border-t border-border-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          <div className="text-center md:text-left max-w-xs">
            <Logo className="mb-4 justify-center md:justify-start" />
            <p className="text-text-muted text-sm">
              Scooters & Motorbikes for Exploring Sri Lanka
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8">
            {siteConfig.navigation.map(item => (
              <a key={item.label} href={item.href} className="text-text-muted hover:text-primary transition-colors text-sm font-medium">
                {item.label}
              </a>
            ))}
            <a 
              href={`https://wa.me/${siteConfig.whatsappNumber}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-text-muted hover:text-primary transition-colors text-sm font-medium"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-border-main text-center text-text-muted text-sm">
          <p>&copy; {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
