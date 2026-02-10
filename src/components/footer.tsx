'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t bg-secondary/50">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-[12px] md:text-[14px] text-muted-foreground leading-relaxed max-w-2xl">
            Vi värnar om din integritet. utvisning.se hanterar alla personuppgifter säkert och enligt GDPR.
          </p>
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
            <Link 
              href="/gdpr" 
              className="text-[12px] md:text-[14px] font-medium text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
            >
              Integritetspolicy & GDPR
            </Link>
            <span className="hidden sm:inline text-muted-foreground/30 text-[12px]">|</span>
            <p className="text-[12px] md:text-[14px] text-muted-foreground/70">
              © 2025 Utvisning.se. Alla rättigheter förbehållna.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
