
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-32 hero-gradient overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-taupe/30 to-transparent blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-sage/30 to-transparent blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-45"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-1/2 space-y-8 animate-elegant-fade">
            <div className="space-y-8">
              <div className="relative">
                <h1 className="elenor-logo-large leading-tight hover:scale-105 transition-transform duration-700 cursor-default">
                  Elenor
                </h1>
                <div className="absolute inset-0 bg-gradient-to-r from-taupe/10 to-sage/10 blur-2xl opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-elegant font-bold leading-tight">
                <span className="block text-charcoal">Elegance That</span>
                <span className="block text-gold-gradient shine-text">Travels.</span>
              </h2>
              
              <div className="flex items-center gap-4 mb-8 group">
                <Sparkles className="text-taupe h-8 w-8 group-hover:rotate-180 transition-transform duration-700" />
                <span className="text-taupe font-medium tracking-widest text-lg animate-fade-slide">PREMIUM CORPORATE GIFTS</span>
              </div>
              
              <p className="text-2xl md:text-3xl text-charcoal/80 max-w-2xl leading-relaxed animate-fade-slide" style={{animationDelay: '0.3s'}}>
                Curated handbags that create unforgettable impressions for your team, clients, and partners.
              </p>
            </div>
            
            <div className="pt-8 animate-fade-slide" style={{animationDelay: '0.6s'}}>
              <Button 
                asChild 
                size="lg" 
                className="group bg-luxury-gradient hover:scale-110 transition-all duration-700 text-white px-12 py-6 text-xl font-medium shadow-2xl hover:shadow-4xl premium-hover border-2 border-transparent hover:border-taupe/30"
              >
                <a href="#products" className="flex items-center">
                  Explore Luxury Collection
                  <ChevronRight className="ml-3 h-6 w-6 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-500" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative animate-elegant-fade" style={{animationDelay: '0.4s'}}>
            <div className="relative hover-lift-enhanced group">
              <div className="absolute inset-0 bg-gradient-to-tr from-taupe/30 to-sage/30 rounded-3xl blur-2xl group-hover:blur-xl transition-all duration-700"></div>
              <div className="relative overflow-hidden rounded-3xl shadow-4xl group-hover:shadow-5xl transition-all duration-700 border-4 border-white/20 group-hover:border-white/40">
                <img 
                  alt="Premium Laptop Bag" 
                  className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-1000" 
                  src="/lovable-uploads/06208440-ffc7-4fbb-8f77-7bbe76a3ab49.png" 
                />
                <div className="absolute inset-0 shimmer-enhanced opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/40 transition-all duration-700"></div>
              </div>
            </div>
            
            {/* Enhanced floating accent elements */}
            <div className="absolute -top-8 -right-8 w-16 h-16 rounded-full bg-gradient-to-br from-taupe/40 to-sage/40 floating-enhanced shadow-xl" style={{animationDelay: '1s'}}></div>
            <div className="absolute -bottom-8 -left-8 w-12 h-12 rounded-full bg-gradient-to-tr from-sage/50 to-taupe/50 floating-enhanced shadow-lg" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/4 -left-6 w-6 h-6 rounded-full bg-gold-gradient floating-enhanced shadow-md" style={{animationDelay: '1.5s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
