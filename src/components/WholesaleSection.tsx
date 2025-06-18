
import React from 'react';
import { Button } from "@/components/ui/button";
import { Package, Users, Settings, TrendingUp } from 'lucide-react';

const WholesaleSection = () => {
  const benefits = [
    {
      icon: Package,
      title: "Bulk Pricing",
      description: "Significant discounts on large orders with flexible minimum quantities"
    },
    {
      icon: Settings,
      title: "Custom Branding",
      description: "Add your logo, choose colors, and create unique designs for your brand"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "Personal account manager to guide you through every step"
    },
    {
      icon: TrendingUp,
      title: "Private Label",
      description: "Complete white-label solutions for your luxury handbag line"
    }
  ];

  return (
    <section id="wholesale" className="section-luxury bg-gradient-to-br from-warm-cream to-champagne">
      <div className="container-luxury">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-dark-chocolate mb-6">
            For Forward-Thinking 
            <span className="block bg-gradient-to-r from-gold to-bronze bg-clip-text text-transparent">
              Businesses
            </span>
          </h2>
          <p className="luxury-text text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Partner with us to bring ethical luxury to your customers. From corporate gifts to retail partnerships, we make it seamless.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="bg-cream/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft hover:shadow-luxury transition-all duration-500 group text-center">
                <div className="bg-gradient-to-br from-gold to-bronze p-6 rounded-2xl shadow-soft group-hover:glow-gold transition-all duration-500 w-fit mx-auto mb-6">
                  <IconComponent className="text-white" size={32} />
                </div>
                <h3 className="font-serif text-2xl text-dark-chocolate mb-4">{benefit.title}</h3>
                <p className="luxury-text opacity-90 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Order Tiers */}
        <div className="bg-cream/60 backdrop-blur-sm rounded-3xl p-12 shadow-luxury mb-12">
          <h3 className="font-display text-4xl text-center text-dark-chocolate mb-12">Order Tiers & Pricing</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-b from-pearl to-soft-gray shadow-soft">
              <h4 className="font-serif text-2xl text-dark-chocolate mb-4">Starter</h4>
              <p className="luxury-text text-4xl font-bold text-gold mb-2">25-99</p>
              <p className="luxury-text opacity-80 mb-4">pieces</p>
              <p className="luxury-text">15% off retail price</p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-b from-champagne to-gold/20 shadow-luxury border-2 border-gold/30">
              <h4 className="font-serif text-2xl text-dark-chocolate mb-4">Professional</h4>
              <p className="luxury-text text-4xl font-bold text-gold mb-2">100-499</p>
              <p className="luxury-text opacity-80 mb-4">pieces</p>
              <p className="luxury-text">25% off retail price</p>
              <div className="mt-4 bg-gold text-white px-4 py-2 rounded-full text-sm font-medium">Most Popular</div>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-b from-pearl to-soft-gray shadow-soft">
              <h4 className="font-serif text-2xl text-dark-chocolate mb-4">Enterprise</h4>
              <p className="luxury-text text-4xl font-bold text-gold mb-2">500+</p>
              <p className="luxury-text opacity-80 mb-4">pieces</p>
              <p className="luxury-text">Custom pricing</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button className="btn-luxury text-xl py-6 px-12 flex items-center gap-3 mx-auto group">
            <Package className="group-hover:scale-110 transition-transform" size={24} />
            Request Bulk Quote
          </Button>
          <p className="luxury-text opacity-80 mt-4">Get a custom quote within 24 hours</p>
        </div>
      </div>
    </section>
  );
};

export default WholesaleSection;
