import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, XCircle } from 'lucide-react';

const HeroSection = () => (
  <section className="w-full py-20 md:py-32 lg:py-40 bg-secondary">
    <div className="container mx-auto px-4 md:px-6 text-center">
      <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-primary">
        Hotad av utvisning?
      </h1>
      <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
        Du är inte ensam, och det finns hopp. Ett utvisningsbeslut känns ofta överväldigande och orättvist. Vi hjälper dig att navigera i processen och kämpa för din rätt att stanna.
      </p>
      <div className="mt-8">
        <p className="font-semibold mb-4">Se vår video för att förstå hur vi kan hjälpa dig:</p>
        <div className="aspect-video bg-card max-w-2xl mx-auto rounded-lg flex items-center justify-center border">
          <p className="text-muted-foreground">(Video 1: Introduktion)</p>
        </div>
      </div>
      <Button asChild className="mt-10 bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
        <a href="#plan">Se vår 3-stegsplan</a>
      </Button>
    </div>
  </section>
);

const ProblemAndGuideSection = () => (
    <section className="w-full py-20 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-primary">Du står inför en av livets största utmaningar</h2>
                    <p className="mt-4 text-muted-foreground">
                        Känslan av maktlöshet, rädsla och förvirring är överväldigande när framtiden i Sverige är osäker. Systemet är komplicerat och svårt att förstå. Det är precis därför vi finns – vi är din guide i en svår process.
                    </p>
                    <p className="mt-4 font-semibold">
                        Vi har hjälpt hundratals personer i din situation att formulera starka överklaganden. Vi förstår vad du går igenom och har expertisen som krävs.
                    </p>
                </div>
                 <div>
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle>Vanliga känslor just nu:</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-start gap-4">
                                <XCircle className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold">Förvirring & Maktlöshet</h3>
                                    <p className="text-sm text-muted-foreground">"Jag förstår inte beslutet eller vad jag ska göra nu."</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-4">
                                <XCircle className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold">Rädsla & Oro</h3>
                                    <p className="text-sm text-muted-foreground">"Vad händer med mig, min familj och mitt liv?"</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-4">
                                <XCircle className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold">Hopplöshet</h3>
                                    <p className="text-sm text-muted-foreground">"Är det ens någon idé att kämpa emot?"</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                 </div>
            </div>
        </div>
    </section>
);

const PlanSection = () => (
  <section id="plan" className="w-full py-20 md:py-24 lg:py-32 bg-secondary">
    <div className="container mx-auto px-4 md:px-6">
      <div className="mb-12 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
          En tydlig plan ger dig kontrollen tillbaka
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
          Vi gör processen enkel och begriplig. Följ dessa tre steg för att starta din överklagan.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">1</div>
            <CardTitle className="font-headline mt-4">Boka ett samtal</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Börja med ett kostnadsfritt och konfidentiellt samtal där du förklarar din situation. Vi lyssnar och ger en första bedömning.</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardHeader>
             <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">2</div>
            <CardTitle className="font-headline mt-4">Vi granskar ditt fall</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Våra experter analyserar ditt utvisningsbeslut och alla relevanta dokument för att hitta de starkaste argumenten för din överklagan.</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardHeader>
             <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">3</div>
            <CardTitle className="font-headline mt-4">Vi formulerar överklagan</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Vi skriver en professionell och juridiskt välgrundad överklagan som maximerar dina chanser att få stanna i Sverige.</p>
          </CardContent>
        </Card>
      </div>
      <div className="text-center mt-12">
        <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
          <a href="#cta">Boka ditt kostnadsfria samtal</a>
        </Button>
      </div>
    </div>
  </section>
);

const VSL2Section = () => (
    <section className="w-full py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Se exakt hur vi bygger ditt ärende</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
                I den här videon går vi igenom vår process i detalj, från första analys till färdig överklagan.
            </p>
             <div className="mt-8 aspect-video bg-card max-w-2xl mx-auto rounded-lg flex items-center justify-center border">
                <p className="text-muted-foreground">(Video 2: Detaljerad process)</p>
            </div>
        </div>
    </section>
);

const StakesSection = () => (
  <section className="w-full py-20 md:py-24 lg:py-32 bg-secondary">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="rounded-lg border border-destructive/50 bg-card p-6">
          <div className="flex items-center gap-4">
            <XCircle className="h-10 w-10 text-destructive flex-shrink-0" />
            <h3 className="font-headline text-2xl font-bold">Vad du riskerar utan hjälp</h3>
          </div>
          <ul className="mt-4 list-none space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2"><XCircle className="h-5 w-5 text-destructive/80 mt-1 shrink-0" /><span>En svag eller felaktigt formulerad överklagan som avslås.</span></li>
            <li className="flex items-start gap-2"><XCircle className="h-5 w-5 text-destructive/80 mt-1 shrink-0" /><span>Att bli utvisad och tvingas lämna ditt liv i Sverige.</span></li>
            <li className="flex items-start gap-2"><XCircle className="h-5 w-5 text-destructive/80 mt-1 shrink-0" /><span>Separation från familj, vänner och arbete.</span></li>
            <li className="flex items-start gap-2"><XCircle className="h-5 w-5 text-destructive/80 mt-1 shrink-0" /><span>Ångra att du inte gjorde allt du kunde.</span></li>
          </ul>
        </div>

        <div className="rounded-lg border border-accent/50 bg-card p-6">
          <div className="flex items-center gap-4">
            <CheckCircle className="h-10 w-10 text-accent flex-shrink-0" />
            <h3 className="font-headline text-2xl font-bold">En möjlig framtid med oss</h3>
          </div>
          <ul className="mt-4 list-none space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-accent/80 mt-1 shrink-0" /><span>En stark, professionell överklagan som belyser din situation.</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-accent/80 mt-1 shrink-0" /><span>Ökad chans att få ditt utvisningsbeslut upphävt.</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-accent/80 mt-1 shrink-0" /><span>Trygghet och sinnesro i att veta att du har experter på din sida.</span></li>
            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-accent/80 mt-1 shrink-0" /><span>Möjligheten att bygga din framtid vidare i Sverige.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section id="cta" className="w-full py-20 md:py-24 lg:py-32">
    <div className="container mx-auto flex flex-col items-center justify-center px-4 text-center md:px-6">
      <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
        Agera nu – din framtid väntar inte.
      </h2>
      <p className="mt-4 max-w-xl text-muted-foreground md:text-lg">
        Tiden är kritisk när man överklagar ett utvisningsbeslut. Varje dag räknas. Ta det första, viktigaste steget idag genom att boka ett kostnadsfritt samtal med oss.
      </p>
      <Button asChild className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
        <a href="mailto:kontakt@utvisning.se">Boka kostnadsfritt samtal nu</a>
      </Button>
        <p className="mt-4 text-sm text-muted-foreground">eller maila oss direkt på <a href="mailto:kontakt@utvisning.se" className="underline font-semibold text-primary">kontakt@utvisning.se</a></p>
    </div>
  </section>
);

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ProblemAndGuideSection />
      <PlanSection />
      <VSL2Section />
      <StakesSection />
      <CTASection />
    </div>
  );
}
