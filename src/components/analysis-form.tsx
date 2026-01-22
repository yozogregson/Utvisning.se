'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { format } from 'date-fns';
import { sv } from 'date-fns/locale';
import { CalendarIcon, Loader2 } from 'lucide-react';
import React from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useToast } from '@/hooks/use-toast';

// This is a placeholder for our backend submission logic
async function submitForm(values: z.infer<typeof formSchema>): Promise<void> {
  // In the next step, we'll implement this to upload the file to Firebase Storage
  // and save the data to Firestore.
  console.log('Submitting form with values:', values);

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // To test the error case, you can uncomment the following line:
  // throw new Error("Simulated backend error");
}

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Namn måste vara minst 2 tecken.',
  }),
  phone: z.string().min(5, {
    message: 'Ange ett giltigt telefonnummer.',
  }),
  email: z.string().email({
    message: 'Ange en giltig e-postadress.',
  }),
  appealDeadline: z.date({
    required_error: 'Ett datum för överklagan krävs.',
  }),
  decisionFile: z
    .any()
    .refine((files) => files?.length === 1, 'En fil måste laddas upp.'),
});

export function AnalysisForm() {
  const { toast } = useToast();
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      await submitForm(values);
      toast({
        title: 'Tack för dina uppgifter!',
        description: 'Vi har tagit emot dina dokument och återkommer snart.',
      });
      form.reset();
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Något gick fel.',
        description: 'Kunde inte skicka in dina uppgifter. Försök igen.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  // To prevent hydration errors, we only render the form on the client
  if (!isMounted) {
    return null;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Namn</FormLabel>
              <FormControl>
                <Input placeholder="Ditt fullständiga namn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefon</FormLabel>
              <FormControl>
                <Input placeholder="Ditt telefonnummer" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-post</FormLabel>
              <FormControl>
                <Input placeholder="din.epost@adress.se" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="appealDeadline"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Sista datum för överklagan</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-full justify-start text-left font-normal',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {field.value ? (
                        format(field.value, 'PPP', { locale: sv })
                      ) : (
                        <span>Välj ett datum</span>
                      )}
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="decisionFile"
          render={({ field: { onChange, value, ...rest } }) => (
            <FormItem>
              <FormLabel>Ladda upp ditt beslut här</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  ref={fileInputRef}
                  onChange={(e) => onChange(e.target.files)}
                  {...rest}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Skicka in för analys
        </Button>
        <p className="pt-2 text-center text-xs text-muted-foreground">
          Dina dokument granskas under sekretess. Vi kontaktar dig så snart vi
          har läst igenom ditt ärende.
        </p>
      </form>
    </Form>
  );
}
