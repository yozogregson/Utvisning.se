'use client';

import React from 'react';

export function AnalysisForm() {
  return (
    <div style={{ width: '100%', maxWidth: '450px', height: '400px', overflow: 'hidden', position: 'relative', border: 'none' }}>
      <iframe 
        src="https://tally.so/embed/dW9Zgd?hideTitle=1&alignLeft=1&transparentBackground=1" 
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none', overflow: 'hidden' }}
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        frameBorder="0"
        title="Starta din kostnadsfria analys">
      </iframe>
    </div>
  );
}
