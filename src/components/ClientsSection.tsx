
import React from 'react';

const ClientsSection = () => {
  const clients = [
    { id: 1, name: 'Tech Solutions Inc.', logo: 'TS' },
    { id: 2, name: 'Global Travels', logo: 'GT' },
    { id: 3, name: 'Metro Corp', logo: 'MC' },
    { id: 4, name: 'Future Systems', logo: 'FS' },
    { id: 5, name: 'Innovate Group', logo: 'IG' },
  ];
  
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-taupe blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-sage blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-elegant font-bold text-gradient mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
            Partnering with visionary companies across industries to transform their corporate gifting experience.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {clients.map((client, index) => (
            <div key={client.id} className="group flex items-center justify-center animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-beige to-cream flex items-center justify-center text-2xl md:text-3xl font-elegant font-bold text-charcoal border-4 border-white shadow-lg hover-lift group-hover:shadow-2xl transition-all duration-500 group-hover:bg-luxury-gradient group-hover:text-white">
                {client.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
