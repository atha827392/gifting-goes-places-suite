
import React from 'react';

const ClientsSection = () => {
  // Placeholder client logos (would be replaced with actual client logos in production)
  const clients = [
    { id: 1, name: 'Tech Solutions Inc.', logo: 'TS' },
    { id: 2, name: 'Global Travels', logo: 'GT' },
    { id: 3, name: 'Metro Corp', logo: 'MC' },
    { id: 4, name: 'Future Systems', logo: 'FS' },
    { id: 5, name: 'Innovate Group', logo: 'IG' },
  ];
  
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            Partnering with forward-thinking companies across industries to elevate their corporate gifting experience.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {clients.map((client) => (
            <div key={client.id} className="group flex items-center justify-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-beige flex items-center justify-center text-2xl font-bold text-charcoal border border-gray-200 transition-all group-hover:bg-navy group-hover:text-white">
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
