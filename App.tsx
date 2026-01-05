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
import Pricing from './components/Pricing';
import ComparisonTable from './components/ComparisonTable';
import ProcessSteps from './components/ProcessSteps';
import FAQ from './components/FAQ';
import { Analytics } from "@vercel/analytics/react";

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-charcoal text-offwhite antialiased selection:bg-champagne selection:text-charcoal relative overflow-x-hidden">
      {/* Visual Effects */}
      <AnimatedBackground />
      <CursorGlow />

      {/* Sales Funnel Flow */}

      {/* 1. Hook */}
      <Hero />

      {/* 2. Anchor Price & Trust (Why us vs hiring) */}
      <ComparisonTable />

      {/* 3. Authority (Who am I) */}
      <Introduction />

      {/* 4. Remove Friction (How it works) */}
      <ProcessSteps />

      {/* 5. The Solution (Services) */}
      <Services />

      {/* 6. Proof (Work) */}
      <WorkGallery />

      {/* 7. Credibility (Tech Stack) */}
      <TechStack />

      {/* 8. The Offer (Pricing) */}
      <Pricing />

      {/* 9. Handle Objections (FAQ) */}
      <FAQ />

      {/* 10. Final Call to Action */}
      <ContactForm />

      <Footer />
      <Analytics />
    </main>
  );
};

export default App;