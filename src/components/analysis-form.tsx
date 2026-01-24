'use client';

import React from 'react';

// 1. VIKTIGT: Gå till tally.so, skapa ett formulär och klistra in ditt unika Form ID här.
const TALLY_FORM_ID = 'YOUR_TALLY_FORM_ID';

// Du kan anpassa formuläret med olika alternativ.
// Se Tallys dokumentation: https://tally.so/help/embed-a-form
const TALLY_EMBED_URL = `https://tally.so/embed/${TALLY_FORM_ID}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`;

export function AnalysisForm() {
  if (TALLY_FORM_ID === 'YOUR_TALLY_FORM_ID') {
    return (
      <div className="text-center p-4 border-2 border-dashed border-destructive rounded-lg bg-destructive/10">
        <p className="font-semibold text-destructive">Formulär ej konfigurerat</p>
        <p className="text-sm text-muted-foreground mt-2">
          Redigera filen <code className="font-mono bg-muted p-1 rounded-sm">src/components/analysis-form.tsx</code> och byt ut <code className="font-mono bg-muted p-1 rounded-sm">'YOUR_TALLY_FORM_ID'</code> med ditt Form ID från Tally.
        </p>
      </div>
    );
  }

  // Tallys 'embed.js'-skript (som laddas i layout.tsx) kommer automatiskt
  // att hitta denna iframe och ladda formuläret.
  return (
    <iframe
      data-tally-src={TALLY_EMBED_URL}
      loading="lazy"
      width="100%"
      height="400"
      frameBorder="0"
      marginHeight="0"
      marginWidth="0"
      title="Ansökan om kostnadsfri analys"
    ></iframe>
  );
}
