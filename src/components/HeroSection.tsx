
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-beige to-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6 animate-fade-in">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/b71c7861-89b9-440f-b7ac-22bd54c86e8e.png" 
                alt="Elenor Logo" 
                className="h-16 md:h-20 w-auto mb-4"
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
              Elegance That <span className="text-taupe">Travels.</span>
            </h1>
            <p className="text-lg md:text-xl text-charcoal/80 max-w-md">
              Premium corporate handbags that make lasting impressions for your team, clients, and partners.
            </p>
            <div className="pt-4">
              <Button asChild size="lg" className="bg-taupe hover:bg-charcoal transition-colors text-white">
                <a href="#products">
                  Explore Luxury Collection
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 overflow-hidden rounded-lg shadow-2xl animate-fade-in">
            <img 
              alt="Premium Laptop Bag" 
              className="w-full h-auto object-cover" 
              src="/lovable-uploads/06208440-ffc7-4fbb-8f77-7bbe76a3ab49.png" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
