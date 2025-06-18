
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-32 hero-gradient overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-taupe/20 to-transparent blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-sage/20 to-transparent blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-1/2 space-y-8 animate-fade-in">
            <div className="mb-8 floating">
              <img 
                src="/lovable-uploads/b71c7861-89b9-440f-b7ac-22bd54c86e8e.png" 
                alt="Elenor Logo" 
                className="h-20 md:h-24 w-auto mb-6 drop-shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-elegant font-bold leading-tight">
                <span className="block text-charcoal">Elegance That</span>
                <span className="block text-gold-gradient">Travels.</span>
              </h1>
              
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="text-taupe h-6 w-6" />
                <span className="text-taupe font-medium tracking-wide">PREMIUM CORPORATE GIFTS</span>
              </div>
              
              <p className="text-xl md:text-2xl text-charcoal/80 max-w-lg leading-relaxed">
                Curated handbags that create unforgettable impressions for your team, clients, and partners.
              </p>
            </div>
            
            <div className="pt-6">
              <Button 
                asChild 
                size="lg" 
                className="group bg-luxury-gradient hover:scale-105 transition-all duration-300 text-white px-8 py-4 text-lg font-medium shadow-2xl hover:shadow-3xl"
              >
                <a href="#products" className="flex items-center">
                  Explore Luxury Collection
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative hover-lift">
              <div className="absolute inset-0 bg-gradient-to-tr from-taupe/20 to-sage/20 rounded-2xl blur-xl"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  alt="Premium Laptop Bag" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" 
                  src="/lovable-uploads/06208440-ffc7-4fbb-8f77-7bbe76a3ab49.png" 
                />
                <div className="absolute inset-0 shimmer opacity-30"></div>
              </div>
            </div>
            
            {/* Floating accent elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-taupe/30 floating" style={{animationDelay: '1s'}}></div>
            <div className="absolute -bottom-6 -left-6 w-8 h-8 rounded-full bg-sage/40 floating" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
