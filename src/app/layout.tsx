import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Template from './template';

export const metadata: Metadata = {
  title: 'Utvisning.se - Vi hjälper dig överklaga ditt utvisningsbeslut',
  description: 'Hotad av utvisning? Vi guidar dig genom processen för att överklaga Migrationsverkets beslut. Få professionell hjälp och kämpa för din rätt att stanna i Sverige.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <Template>{children}</Template>
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
