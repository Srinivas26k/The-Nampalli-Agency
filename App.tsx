import React from 'react';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Services from './components/Services';
import WorkGallery from './components/WorkGallery';
import TechStack from './components/TechStack';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import CursorGlow from './components/CursorGlow';
import { Analytics } from "@vercel/analytics/next"

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-charcoal text-offwhite antialiased selection:bg-champagne selection:text-charcoal relative">
      {/* Visual Effects */}
      <AnimatedBackground />
      <CursorGlow />

      {/* Navigation / Header could go here, but design brief implies minimal hero interactions */}

      <Hero />

      <Introduction />

      <Services />

      <WorkGallery />

      <TechStack />

      <ContactForm />
      <Footer />
      <Analytics/>
    </main>
  );
};

export default App;