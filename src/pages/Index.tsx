
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import RetailSection from '@/components/RetailSection';
import WholesaleSection from '@/components/WholesaleSection';
import ProductsSection from '@/components/ProductsSection';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <RetailSection />
        <WholesaleSection />
        <ProductsSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
