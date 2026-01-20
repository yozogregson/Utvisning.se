import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Code, Edit3, Image as ImageIcon, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    icon: <Edit3 className="h-8 w-8 text-primary" />,
    title: 'Content Display',
    description: 'Structured and visually appealing content layouts for text, images, and videos.',
  },
  {
    icon: <Mail className="h-8 w-8 text-primary" />,
    title: 'Contact Form',
    description: 'Easy-to-use contact forms to allow your users to get in touch with you.',
  },
  {
    icon: <ImageIcon className="h-8 w-8 text-primary" />,
    title: 'Image Gallery',
    description: 'Showcase your best work with our beautiful and responsive image galleries.',
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: 'Blog Section',
    description: 'Share your thoughts and ideas with a fully-featured blog section.',
  },
];


export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] w-full text-white">
        {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              data-ai-hint={heroImage.imageHint}
              priority
            />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Welcome to WebWave
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            We craft beautiful, modern, and responsive websites to help your business grow.
          </p>
          <Button asChild className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      <section id="features" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Features
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Discover the powerful features that make WebWave the best choice for your online presence.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                    {feature.icon}
                  </div>
                  <CardTitle className="font-headline">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

       <section className="w-full bg-secondary py-12 md:py-24 lg:py-32">
        <div className="container mx-auto flex flex-col items-center justify-center px-4 text-center md:px-6">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            Ready to build your wave?
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground md:text-lg">
            Let's start a conversation about your next project.
          </p>
          <Button asChild className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
            <Link href="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
