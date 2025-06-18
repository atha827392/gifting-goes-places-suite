
import React from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingBag, Package, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-white">
      {/* Clean background with subtle elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-bronze/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container-luxury relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="elenor-brand text-7xl md:text-8xl lg:text-9xl leading-tight">
                Elenor
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <Sparkles className="text-gold h-8 w-8 animate-pulse-gold" />
                <span className="luxury-text text-xl tracking-widest uppercase font-medium">
                  Cruelty-Free Luxury
                </span>
              </div>
              
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-dark-chocolate">
                Vegan handbags that 
                <span className="block bg-gradient-to-r from-gold to-bronze bg-clip-text text-transparent">
                  define elegance.
                </span>
              </h2>
              
              <p className="luxury-text text-xl md:text-2xl leading-relaxed max-w-2xl opacity-90">
                Discover our collection of ethically crafted handbags, where luxury meets conscience. Perfect for discerning individuals and forward-thinking businesses.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <Button className="btn-luxury flex items-center gap-3 text-lg py-6 px-8 group">
                <ShoppingBag className="group-hover:scale-110 transition-transform" size={20} />
                Shop Retail Collection
              </Button>
              
              <Button variant="outline" className="border-2 border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300 text-lg py-6 px-8 flex items-center gap-3 group">
                <Package className="group-hover:scale-110 transition-transform" size={20} />
                Request Bulk Quote
              </Button>
            </div>
          </div>
          
          {/* Right Product Display */}
          <div className="relative animate-slide-up" style={{animationDelay: '0.3s'}}>
            <div className="relative transform-3d group">
              {/* Main Product Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-luxury group-hover:rotate-3d transition-all duration-700">
                <img 
                  src="/lovable-uploads/06208440-ffc7-4fbb-8f77-7bbe76a3ab49.png"
                  alt="Luxury Vegan Handbag" 
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-chocolate/20 via-transparent to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-30"></div>
              </div>
              
              {/* 3D Floating Elements */}
              <div className="absolute -top-8 -left-8 w-20 h-20 bg-gradient-to-br from-gold to-bronze rounded-full shadow-soft animate-float-luxury opacity-80"></div>
              <div className="absolute -bottom-12 -right-12 w-16 h-16 bg-gradient-to-tr from-champagne to-gold rounded-full shadow-soft animate-float-luxury opacity-70" style={{animationDelay: '2s'}}></div>
              <div className="absolute top-1/3 -right-6 w-8 h-8 bg-bronze rounded-full shadow-soft animate-float-luxury opacity-60" style={{animationDelay: '1s'}}></div>
              
              {/* Product Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-cream/90 backdrop-blur-md rounded-2xl p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 shadow-luxury">
                <h3 className="font-serif text-2xl text-dark-chocolate mb-2">Signature Tote</h3>
                <p className="luxury-text opacity-80 mb-3">Handcrafted vegan leather</p>
                <div className="flex items-center justify-between">
                  <span className="text-gold font-semibold text-xl">From $299</span>
                  <span className="text-sm luxury-text opacity-70">Free shipping</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
