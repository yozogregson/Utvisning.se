'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { format } from 'date-fns';
import { sv } from 'date-fns/locale';
import { CalendarIcon, Loader2 } from 'lucide-react';
import React, { useEffect } from 'react';
import { useFirebase, initiateAnonymousSignIn, addDocumentNonBlocking } from '@/firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';

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

  const { firebaseApp, firestore, auth, user, isUserLoading } = useFirebase();
  const storage = firebaseApp ? getStorage(firebaseApp) : null;

  useEffect(() => {
    if (auth && !isUserLoading && !user) {
      initiateAnonymousSignIn(auth);
    }
  }, [auth, isUserLoading, user]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!firestore || !storage || !auth) {
      toast({
        variant: 'destructive',
        title: 'Något gick fel.',
        description: 'Kunde inte ansluta till servern. Försök igen.',
      });
      return;
    }
    
    if (isUserLoading || !user) {
      toast({
        title: 'Vänta ett ögonblick...',
        description: 'Anslutning upprättas. Försök skicka igen om några sekunder.',
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const file = values.decisionFile[0];
      const storageRef = ref(storage, `submissions/${user.uid}/${Date.now()}-${file.name}`);
      const uploadTask = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(uploadTask.ref);

      const submissionData = {
        name: values.name,
        phone: values.phone,
        email: values.email,
        appealDeadline: values.appealDeadline,
        fileUrl: downloadURL,
        submissionDate: new Date(),
        submitterUid: user.uid,
      };
      
      const mailData = {
        to: 'formular@utvisning.se',
        message: {
            subject: `Nytt ärende från: ${values.name}`,
            html: `
                <p><strong>Namn:</strong> ${values.name}</p>
                <p><strong>Telefon:</strong> ${values.phone}</p>
                <p><strong>E-post:</strong> ${values.email}</p>
                <p><strong>Sista överklagningsdag:</strong> ${format(values.appealDeadline, 'PPP', { locale: sv })}</p>
                <p><strong>Länk till beslut:</strong> <a href="${downloadURL}">Ladda ner fil</a></p>
            `,
        },
      };

      // Save the main submission data
      addDocumentNonBlocking(collection(firestore, 'contact_form_submissions'), submissionData);
      
      // Trigger the email by adding a document to the 'mail' collection
      addDoc(collection(firestore, "mail"), mailData);
      
      toast({
        title: 'Tack för dina uppgifter!',
        description: 'Vi har tagit emot dina dokument och återkommer snart.',
      });
      form.reset();
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error: any) {
      console.error('Submission error:', error);
      toast({
        variant: 'destructive',
        title: 'Fel vid uppladdning',
        description: error.message || 'Kunde inte skicka in ditt ärende. Försök igen.',
      });
    } finally {
      setIsSubmitting(false);
    }
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
                  onChange={(e) => {
                    if (e.target.files) {
                      onChange(e.target.files);
                    }
                  }}
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
          disabled={isSubmitting || isUserLoading}
        >
          {(isSubmitting || isUserLoading) && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
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
