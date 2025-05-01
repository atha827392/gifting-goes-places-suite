
import React from 'react';
import { CheckCircle } from 'lucide-react';

interface Reason {
  id: number;
  title: string;
  description: string;
}

const WhyChooseUsSection = () => {
  const reasons: Reason[] = [
    {
      id: 1,
      title: "Premium Quality",
      description: "Each bag is crafted with meticulous attention to detail using premium materials that ensure longevity and functionality."
    },
    {
      id: 2,
      title: "Dedicated Customer Support",
      description: "Our specialized corporate team provides personalized assistance at every step, from selection to delivery."
    },
    {
      id: 3,
      title: "Swift Delivery Timeline",
      description: "Industry-leading turnaround times, even for customized bulk orders. We prioritize punctuality without compromising quality."
    },
    {
      id: 4,
      title: "Streamlined Reordering",
      description: "We maintain your specifications on file for easy reordering, ensuring consistent branding and efficient procurement."
    }
  ];
  
  return (
    <section id="why-us" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Why Choose Us
          </h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            We stand apart in corporate gifting through our commitment to excellence at every level.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason) => (
            <div key={reason.id} className="flex items-start gap-4 animate-slide-in">
              <div className="mt-1 text-navy">
                <CheckCircle size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">{reason.title}</h3>
                <p className="text-charcoal/70">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
