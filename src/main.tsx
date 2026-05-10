import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="min-h-screen bg-background font-inter p-8">
      <h1 className="text-2xl font-bold text-foreground mb-2">FlexPrice Component Library</h1>
      <p className="text-muted-foreground">
        Run <code className="bg-muted px-1 py-0.5 rounded text-sm">npm run storybook</code> to explore all components.
      </p>
    </div>
  </React.StrictMode>
);
