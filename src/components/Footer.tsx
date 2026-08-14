import React from 'react';
import { Logo } from './Logo';
import { siteConfig } from '@/config/site';
import { Mail, Phone } from 'lucide-react';

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const FacebookIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

export function Footer() {
  return (
    <footer className="bg-background-secondary py-12 md:py-16 border-t border-border-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-4 lg:col-span-5 text-center md:text-left">
            <Logo className="mb-4 justify-center md:justify-start" />
            <p className="text-text-muted text-sm max-w-xs mx-auto md:mx-0">
              Scooters & Motorbikes for Exploring Sri Lanka.
            </p>
          </div>

          <div className="col-span-1 md:col-span-4 lg:col-span-4 text-center md:text-left">
             <h4 className="font-bold text-text-main mb-4 font-heading">Contact Us</h4>
             <ul className="space-y-3 inline-block text-left">
                <li>
                  <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors text-sm">
                    <Mail size={16} /> {siteConfig.contact.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors text-sm">
                    <Phone size={16} /> {siteConfig.contact.phone}
                  </a>
                </li>
             </ul>
          </div>

          <div className="col-span-1 md:col-span-4 lg:col-span-3 text-center md:text-left">
             <h4 className="font-bold text-text-main mb-4 font-heading">Quick Links</h4>
             <ul className="space-y-2 flex flex-col items-center md:items-start">
               {siteConfig.navigation.map(item => (
                 <li key={item.label}>
                   <a href={item.href} className="text-text-muted hover:text-primary transition-colors text-sm font-medium">
                     {item.label}
                   </a>
                 </li>
               ))}
             </ul>
             
             <div className="flex justify-center md:justify-start gap-4 mt-6">
                <a href={siteConfig.contact.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
                  <InstagramIcon size={20} />
                </a>
                <a href={siteConfig.contact.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
                  <FacebookIcon size={20} />
                </a>
             </div>
          </div>
          
        </div>

        <div className="pt-8 border-t border-border-main text-center text-text-muted text-sm">
          <p>&copy; {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
