import React from 'react';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      >
        <circle cx="6" cy="17" r="2.5" />
        <circle cx="18" cy="17" r="2.5" />
        <path d="M6 14.5h2.5l2.5-4h4.5l1.5 4h1" />
        <path d="M11 10.5V5h3" />
        <path d="M14 5h-1" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="text-[10px] text-text-muted uppercase tracking-wider font-medium font-sans">Rent a</span>
        <span className="text-xl font-bold text-text-main font-heading tracking-tight leading-none">SCOOTER</span>
      </div>
    </div>
  );
}
