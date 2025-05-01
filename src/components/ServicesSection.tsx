
import React from 'react';
import { Package, PenTool, Truck, Leaf } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const ServicesSection = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "Bulk Corporate Gifting",
      description: "Streamlined ordering for large quantities with special pricing and dedicated account management.",
      icon: Package
    },
    {
      id: 2,
      title: "Custom Branding",
      description: "Add your company logo, colors, and personalized touches to create uniquely branded gifts.",
      icon: PenTool
    },
    {
      id: 3,
      title: "Pan-India Delivery",
      description: "Fast, reliable delivery to any location across India with real-time tracking capabilities.",
      icon: Truck
    },
    {
      id: 4,
      title: "Eco-conscious Options",
      description: "Sustainable materials and eco-friendly manufacturing processes for environmentally responsible gifting.",
      icon: Leaf
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Our Services
          </h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            Comprehensive solutions to elevate your corporate gifting experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="p-6 bg-beige rounded-lg hover:bg-beige/90 transition-colors animate-fade-in">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-navy">
                  <IconComponent size={24} />
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">{service.title}</h3>
                <p className="text-charcoal/70">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
