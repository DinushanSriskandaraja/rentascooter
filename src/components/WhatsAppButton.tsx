import React from 'react';
import { siteConfig } from '@/config/site';

interface WhatsAppButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  message?: string;
  className?: string;
  children?: React.ReactNode;
}

export function WhatsAppButton({ 
  message = "Hi, I would like to rent a vehicle in Sri Lanka. Please let me know about availability.", 
  className = "", 
  children,
  ...props 
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-medium transition-colors ${className}`}
      {...props}
    >
      {children || "WhatsApp Us"}
    </a>
  );
}
