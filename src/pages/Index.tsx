import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import VacancyHighlight from '@/components/VacancyHighlight';
import ExamSections from '@/components/ExamSections';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <VacancyHighlight />
        <ExamSections />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
