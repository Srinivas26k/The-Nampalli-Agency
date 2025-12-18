import React from 'react';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Services from './components/Services';
import WorkGallery from './components/WorkGallery';
import TechStack from './components/TechStack';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-charcoal text-offwhite antialiased selection:bg-champagne selection:text-charcoal">
      {/* Navigation / Header could go here, but design brief implies minimal hero interactions */}

      <Hero />

      <Introduction />

      <Services />

      <WorkGallery />

      <TechStack />

      <Footer />

    </main>
  );
};

export default App;