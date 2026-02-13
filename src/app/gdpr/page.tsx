import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function GDPRPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-3xl">
      <Button asChild variant="ghost" className="mb-8 hover:bg-secondary">
        <Link href="/" className="flex items-center gap-2 text-muted-foreground">
          <ArrowLeft className="h-4 w-4" />
          Tillbaka till startsidan
        </Link>
      </Button>
      
      <article className="space-y-10">
        <header>
          <h1 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-primary mb-4">
            Integritetspolicy för Utvisning.se
          </h1>
          <p className="text-muted-foreground">Senast uppdaterad: 13 februari 2026</p>
        </header>
        
        <section className="space-y-4">
          <h2 className="font-headline text-xl font-bold text-foreground">1. Allmänt</h2>
          <p className="text-muted-foreground leading-relaxed">
            Vi värnar om din personliga integritet. Denna policy förklarar hur vi samlar in och använder data för att ge dig bästa möjliga hjälp i frågor gällande utvisningsbeslut.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-headline text-xl font-bold text-foreground">2. Vilken data samlar vi in?</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">Besöksstatistik:</strong> Vi använder Google Analytics 4 (GA4) för att förstå hur besökare använder vår sida, hur länge man ser på vår video och vilka knappar som används. Detta hjälper oss att förbättra vår rådgivning.
            </p>
            <p>
              <strong className="text-foreground">Samtycke:</strong> Vi använder Cookiebot för att hantera ditt samtycke. Cookiebot sparar din status (om du godkänt cookies eller inte) i 12 månader.
            </p>
            <p>
              <strong className="text-foreground">Video:</strong> Vi använder Vimeo för att visa vår informationsvideo. När du ser videon kan Vimeo samla in viss teknisk data om din enhet.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-headline text-xl font-bold text-foreground">3. Laglig grund</h2>
          <p className="text-muted-foreground leading-relaxed">
            Vi behandlar din data baserat på ditt samtycke (via vår cookie-banner) samt vårt berättigade intresse att marknadsföra våra tjänster via Google Ads.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-headline text-xl font-bold text-foreground">4. Dina rättigheter</h2>
          <p className="text-muted-foreground leading-relaxed">
            Du har rätt att när som helst dra tillbaka ditt samtycke, begära utdrag av din data eller be oss radera information. Du kan enkelt ändra dina inställningar via den lilla ikonen från Cookiebot nere i hörnet.
          </p>
        </section>

        <section className="space-y-4 pt-6 border-t">
          <h2 className="font-headline text-xl font-bold text-foreground">5. Kontakt</h2>
          <p className="text-muted-foreground leading-relaxed">
            För frågor om din data, kontakta oss på: <a href="mailto:info@utvisning.se" className="font-medium text-primary hover:underline">info@utvisning.se</a>
          </p>
        </section>
      </article>
    </div>
  );
}
