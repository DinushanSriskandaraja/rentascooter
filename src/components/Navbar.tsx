"use client";
import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { siteConfig } from '@/config/site';
import { Menu, X } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/40 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#">
              <Logo />
            </a>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-text-muted hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          <div className="hidden md:flex">
            <WhatsAppButton className="px-5 py-2.5 rounded-full text-sm">
              Check Availability
            </WhatsAppButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-text-main hover:text-primary transition-colors p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background-main border-b border-white/10">
          <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-text-muted hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 px-3">
               <WhatsAppButton className="w-full px-5 py-3 rounded-full justify-center">
                Check Availability
              </WhatsAppButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
