'use client';

import React from 'react';

export function AnalysisForm() {
  return (
    <div style={{ width: '100%', maxWidth: '450px', height: '400px', overflow: 'hidden', margin: '0 auto', border: 'none' }}>
        <iframe 
            src="https://tally.so/embed/dW9Zgd?hideTitle=1&alignLeft=1&transparentBackground=1" 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            style={{ border: 'none', overflow: 'hidden' }}
            title="Starta din kostnadsfria analys">
        </iframe>
    </div>
  );
}
