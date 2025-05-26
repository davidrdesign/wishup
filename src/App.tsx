import React from 'react';
import AppRouter from './AppRouter';
import MetaSEO from './MetaSEO';
import Analytics from './Analytics';

export default function App() {
  return (
    <>
      <MetaSEO />
      <Analytics />
      <AppRouter />
    </>
  );
}