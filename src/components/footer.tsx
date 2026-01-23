'use client';

import { ShieldCheck } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);


  return (
    <footer className="w-full border-t bg-secondary">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row md:px-6">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-primary" />
          <p className="text-sm text-muted-foreground">
            &copy; {isClient ? new Date().getFullYear() : '2024'} Utvisning.se. Alla rättigheter förbehållna. Webbplats av Firebase Studio.
          </p>
        </div>
      </div>
    </footer>
  );
}