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
            Integritetspolicy för utvisning.se
          </h1>
          <p className="text-muted-foreground">Senast uppdaterad: 2025-01-27</p>
        </header>
        
        <section className="space-y-4">
          <h2 className="font-headline text-xl font-bold text-foreground">Vilka vi är</h2>
          <p className="text-muted-foreground leading-relaxed">
            Vi driver utvisning.se för att hjälpa individer att få rättssäker hjälp med att överklaga utvisningsbeslut.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-headline text-xl font-bold text-foreground">Data vi samlar in</h2>
          <p className="text-muted-foreground leading-relaxed">
            När du använder vårt kontaktformulär samlar vi in namn, e-postadress, telefonnummer och den information du väljer att dela om ditt ärende.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-headline text-xl font-bold text-foreground">Varför vi sparar data</h2>
          <p className="text-muted-foreground leading-relaxed">
            Vi behöver dina uppgifter för att kunna granska ditt fall, ge dig rådgivning och förmedla kontakt till våra juridiska samarbetspartners.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-headline text-xl font-bold text-foreground">Lagringstid</h2>
          <p className="text-muted-foreground leading-relaxed">
            Vi sparar dina uppgifter så länge ärendet är aktivt, eller tills du ber oss radera dem.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-headline text-xl font-bold text-foreground">Dina rättigheter</h2>
          <p className="text-muted-foreground leading-relaxed">
            Du har när som helst rätt att begära utdrag på vilken information vi har om dig, få uppgifter rättade eller begära att vi raderar allt.
          </p>
        </section>

        <section className="space-y-4 pt-6 border-t">
          <h2 className="font-headline text-xl font-bold text-foreground">Kontakt</h2>
          <p className="text-muted-foreground leading-relaxed">
            För frågor om din data, kontakta oss på: <span className="font-medium text-primary">[Här skriver du din e-post]</span>
          </p>
        </section>
      </article>
    </div>
  );
}
