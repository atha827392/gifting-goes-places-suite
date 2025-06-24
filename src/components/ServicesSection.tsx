
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
    <section id="services" className="section-luxury bg-gradient-to-br from-luxury-cream to-warm-beige">
      <div className="container-luxury">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-deep-taupe mb-6">
            Our 
            <span className="block bg-gradient-to-r from-warm-taupe to-sophisticated-beige bg-clip-text text-transparent">
              Promise
            </span>
          </h2>
          <p className="luxury-text text-lg max-w-4xl mx-auto leading-relaxed opacity-90">
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
                <div className="bg-gradient-to-br from-warm-taupe to-sophisticated-beige p-6 rounded-3xl shadow-luxury group-hover:glow-premium transition-all duration-500 w-fit mx-auto mb-6">
                  <IconComponent className="text-white" size={32} />
                </div>
                
                <h3 className="font-serif text-xl text-deep-taupe mb-4">{service.title}</h3>
                <p className="luxury-text leading-relaxed opacity-90 text-sm">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
