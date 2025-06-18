
import React from 'react';
import { Leaf, Palette, Globe, Shield } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Leaf,
      title: "Eco-Conscious Materials",
      description: "Premium vegan leather made from sustainable plant-based materials that look and feel luxurious while respecting our planet."
    },
    {
      icon: Palette,
      title: "Custom Design Services",
      description: "Work with our design team to create bespoke pieces that reflect your brand's unique identity and values."
    },
    {
      icon: Globe,
      title: "Global Shipping",
      description: "Worldwide delivery with eco-friendly packaging. Carbon-neutral shipping options available for conscious consumers."
    },
    {
      icon: Shield,
      title: "Lifetime Craftsmanship Guarantee",
      description: "We stand behind our quality. Every Elenor piece comes with our commitment to exceptional craftsmanship."
    }
  ];

  return (
    <section id="services" className="section-luxury bg-gradient-to-br from-pearl to-soft-gray">
      <div className="container-luxury">
        <div className="text-center mb-20">
          <h2 className="font-display text-6xl md:text-7xl text-dark-chocolate mb-8">
            Our 
            <span className="block bg-gradient-to-r from-gold to-bronze bg-clip-text text-transparent">
              Promise
            </span>
          </h2>
          <p className="luxury-text text-2xl max-w-4xl mx-auto leading-relaxed opacity-90">
            Beyond beautiful handbags, we offer a complete luxury experience built on ethical practices, superior service, and unwavering quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="text-center group animate-fade-in"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="bg-gradient-to-br from-gold to-bronze p-8 rounded-3xl shadow-luxury group-hover:glow-gold transition-all duration-500 w-fit mx-auto mb-8">
                  <IconComponent className="text-white" size={40} />
                </div>
                
                <h3 className="font-serif text-2xl text-dark-chocolate mb-6">{service.title}</h3>
                <p className="luxury-text leading-relaxed opacity-90">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
