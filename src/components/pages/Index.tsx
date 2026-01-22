"use client";

import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { PhilosophySection } from '@/components/PhilosophySection';
import { StatsSection } from '@/components/StatsSection';
import { NoticeBoardSection } from '@/components/NoticeBoardSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Snapshot */}
      <AboutSection />
      
      {/* Learning Philosophy */}
      <PhilosophySection />
      
      {/* Statistics / Credibility Numbers */}
      <StatsSection />
      
      {/* Notice Board */}
      <NoticeBoardSection />
      
      {/* Footer with Contact Info */}
      <Footer />
    </div>
  );
};

export default Index;
