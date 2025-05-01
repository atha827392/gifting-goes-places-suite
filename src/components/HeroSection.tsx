
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-beige">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
              Gifting That <span className="text-navy">Goes Places.</span>
            </h1>
            <p className="text-lg md:text-xl text-charcoal/80 max-w-md">
              Premium corporate bags that make lasting impressions for your team, clients, and partners.
            </p>
            <div className="pt-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-navy hover:bg-charcoal transition-colors text-white"
              >
                <a href="#products">
                  Explore Corporate Solutions
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 overflow-hidden rounded-lg shadow-2xl animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
              alt="Premium Laptop Bag" 
              className="w-full h-auto object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
