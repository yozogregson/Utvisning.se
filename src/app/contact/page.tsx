import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from './contact-form';

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12 md:px-6">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
          We&apos;d love to hear from you. Reach out with any questions or to start your project.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="flex flex-col space-y-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold font-headline">Email</h3>
              <p className="text-muted-foreground">Send us an email for any inquiries.</p>
              <a href="mailto:hello@webwave.com" className="font-medium text-primary hover:underline">
                hello@webwave.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold font-headline">Phone</h3>
              <p className="text-muted-foreground">Give us a call during business hours.</p>
              <a href="tel:+1234567890" className="font-medium text-primary hover:underline">
                +1 (234) 567-890
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold font-headline">Office</h3>
              <p className="text-muted-foreground">123 Wave Street, Ocean City, 12345</p>
              <a href="#" className="font-medium text-primary hover:underline">
                Get Directions
              </a>
            </div>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
