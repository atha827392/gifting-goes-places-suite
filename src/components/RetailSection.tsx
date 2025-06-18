
import React from 'react';
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart, Award, Truck } from 'lucide-react';

const RetailSection = () => {
  const features = [
    {
      icon: Heart,
      title: "100% Cruelty-Free",
      description: "Every piece crafted with love, without harm to any living being"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Luxurious vegan materials that rival traditional leather"
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Complimentary delivery on orders over $150"
    }
  ];

  return (
    <section id="retail" className="section-luxury bg-white">
      <div className="container-luxury">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-dark-chocolate mb-6">
            For the Conscious 
            <span className="block bg-gradient-to-r from-gold to-bronze bg-clip-text text-transparent">
              Individual
            </span>
          </h2>
          <p className="luxury-text text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Discover handbags that make a statement about who you are. Each piece tells a story of ethical luxury and timeless design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Product Showcase */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-cream/60 backdrop-blur-sm rounded-2xl p-6 shadow-soft hover:shadow-luxury transition-all duration-500 rotate-3d group">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                    alt="Elegant Tote Bag"
                    className="w-full h-48 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform duration-500"
                  />
                  <h3 className="font-serif text-xl text-dark-chocolate mb-2">Classic Tote</h3>
                  <p className="luxury-text opacity-80 text-sm mb-3">Perfect for everyday elegance</p>
                  <span className="text-gold font-semibold">$299</span>
                </div>
              </div>
              
              <div className="space-y-6 pt-12">
                <div className="bg-cream/60 backdrop-blur-sm rounded-2xl p-6 shadow-soft hover:shadow-luxury transition-all duration-500 rotate-3d group">
                  <img 
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                    alt="Crossbody Bag"
                    className="w-full h-48 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform duration-500"
                  />
                  <h3 className="font-serif text-xl text-dark-chocolate mb-2">Crossbody</h3>
                  <p className="luxury-text opacity-80 text-sm mb-3">Hands-free sophistication</p>
                  <span className="text-gold font-semibold">$249</span>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex items-start gap-6 group">
                  <div className="bg-gradient-to-br from-gold to-bronze p-4 rounded-2xl shadow-soft group-hover:glow-gold transition-all duration-500">
                    <IconComponent className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-dark-chocolate mb-3">{feature.title}</h3>
                    <p className="luxury-text text-lg opacity-90 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <Button className="btn-luxury text-xl py-6 px-12 flex items-center gap-3 mx-auto group">
            <ShoppingBag className="group-hover:scale-110 transition-transform" size={24} />
            Explore Retail Collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RetailSection;
