import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingBag, Package, Sparkles, Star } from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-white">
      {/* Enhanced Background with Parallax */}
      <div className="absolute inset-0">
        <div 
          className="magical-orb w-96 h-96 bg-gradient-to-r from-light-taupe/20 to-soft-beige/20 top-1/4 left-1/4"
          style={{
            transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
            animationDelay: '0s'
          }}
        ></div>
        <div 
          className="magical-orb w-80 h-80 bg-gradient-to-r from-warm-taupe/15 to-light-taupe/15 bottom-1/4 right-1/4"
          style={{
            transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`,
            animationDelay: '2s'
          }}
        ></div>
        <div 
          className="magical-orb w-60 h-60 bg-gradient-to-r from-soft-beige/25 to-sophisticated-beige/20 top-1/2 right-1/3"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            animationDelay: '4s'
          }}
        ></div>
      </div>

      {/* Floating Elements for Wow Factor */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-3 h-3 bg-gradient-to-r from-light-taupe to-soft-beige rounded-full animate-float-luxury opacity-60`}
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + (i * 8)}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${6 + (i * 0.5)}s`
            }}
          />
        ))}
      </div>
      
      <div className="container-luxury relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="relative">
                <h1 className="elenor-brand text-6xl md:text-7xl lg:text-8xl leading-tight animate-brand-glow">
                  Elenor
                </h1>
                <div className="absolute -top-4 -right-4 opacity-20">
                  <Star className="text-light-taupe h-12 w-12 animate-pulse-premium" />
                </div>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <Sparkles className="text-light-taupe h-8 w-8 animate-pulse-premium" />
                  <div className="absolute inset-0 animate-shimmer-premium rounded-full"></div>
                </div>
                <span className="luxury-text text-lg tracking-widest uppercase font-medium bg-gradient-to-r from-warm-taupe to-light-taupe bg-clip-text text-transparent">
                  Cruelty-Free Luxury
                </span>
              </div>
              
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-deep-taupe">
                Vegan handbags that 
                <span className="block bg-gradient-to-r from-light-taupe via-soft-beige to-warm-taupe bg-clip-text text-transparent font-bold">
                  redefine elegance.
                </span>
              </h2>
              
              <p className="luxury-text text-lg md:text-xl leading-relaxed max-w-2xl opacity-90">
                Discover our collection of ethically crafted handbags, where luxury meets conscience. Perfect for discerning individuals and forward-thinking businesses.
              </p>
            </div>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <Button className="btn-luxury flex items-center gap-3 text-lg py-6 px-10 group transform-3d">
                <ShoppingBag className="group-hover:scale-125 transition-transform duration-500" size={20} />
                Shop Retail Collection
                <div className="absolute inset-0 animate-shimmer-premium rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Button>
              
              <Button variant="outline" className="border-3 border-warm-taupe text-warm-taupe hover:bg-warm-taupe hover:text-white transition-all duration-500 text-lg py-6 px-10 flex items-center gap-3 group bg-white/80 backdrop-blur-sm shadow-soft">
                <Package className="group-hover:scale-125 transition-transform duration-500" size={20} />
                Request Bulk Quote
              </Button>
            </div>
          </div>
          
          {/* Enhanced Right Product Display */}
          <div className="relative animate-slide-up transform-3d" style={{animationDelay: '0.3s'}}>
            <div className="relative group">
              {/* Main Product Container with Enhanced 3D */}
              <div className="relative overflow-hidden rounded-3xl shadow-luxury group-hover:rotate-3d transition-all duration-1000 bg-gradient-to-br from-luxury-cream to-sophisticated-beige p-8">
                <img 
                  src="/lovable-uploads/06208440-ffc7-4fbb-8f77-7bbe76a3ab49.png"
                  alt="Luxury Vegan Handbag" 
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-1000 relative z-10"
                />
                
                {/* Enhanced Overlay Effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-warm-taupe/20 via-transparent to-light-taupe/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0 animate-shimmer-premium opacity-0 group-hover:opacity-50 rounded-3xl"></div>
                
                {/* Premium Badge */}
                <div className="absolute top-6 left-6 bg-gradient-to-r from-warm-taupe to-light-taupe text-white px-6 py-3 rounded-full text-sm font-semibold shadow-luxury">
                  Premium Collection
                </div>
              </div>
              
              {/* Enhanced 3D Floating Elements */}
              <div className="absolute -top-12 -left-12 w-24 h-24 bg-gradient-to-br from-light-taupe to-soft-beige rounded-full shadow-luxury animate-float-luxury opacity-90 glow-premium"></div>
              <div className="absolute -bottom-16 -right-16 w-20 h-20 bg-gradient-to-tr from-warm-taupe to-light-taupe rounded-full shadow-luxury animate-float-luxury opacity-80 glow-premium" style={{animationDelay: '2s'}}></div>
              <div className="absolute top-1/3 -right-8 w-12 h-12 bg-gradient-to-r from-soft-beige to-sophisticated-beige rounded-full shadow-soft animate-float-luxury opacity-70" style={{animationDelay: '1s'}}></div>
              
              {/* Enhanced Product Info Overlay */}
              <div className="absolute bottom-8 left-8 right-8 bg-luxury-cream/95 backdrop-blur-lg rounded-3xl p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 shadow-luxury border border-light-taupe/20">
                <h3 className="font-serif text-2xl text-deep-taupe mb-3">Signature Tote</h3>
                <p className="luxury-text opacity-80 mb-4">Handcrafted vegan leather</p>
                <div className="flex items-center justify-between">
                  <span className="text-light-taupe font-bold text-xl bg-gradient-to-r from-warm-taupe to-light-taupe bg-clip-text text-transparent">From $299</span>
                  <span className="text-sm luxury-text opacity-70 bg-soft-beige/20 px-3 py-1 rounded-full">Free shipping</span>
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
