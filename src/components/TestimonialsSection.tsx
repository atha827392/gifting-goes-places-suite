
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  company: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "The laptop bags we ordered as year-end gifts for our executives were a perfect blend of quality and professional aesthetics. Our team loved them!",
      name: "Sarah Johnson",
      title: "HR Director",
      company: "TechAdvance Solutions"
    },
    {
      id: 2,
      quote: "From customization to delivery, the entire process was seamless. The quality of messenger bags exceeded our expectations and made a lasting impression on our clients.",
      name: "Michael Chen",
      title: "CEO",
      company: "Innovate Partners"
    },
    {
      id: 3,
      quote: "The eco-friendly duffle bags were a perfect fit for our company's sustainability initiative. Great quality, timely delivery, and excellent service.",
      name: "Priya Sharma",
      title: "Head of Procurement",
      company: "EcoSmart Enterprises"
    },
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-gray-50 to-beige/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/6 w-72 h-72 rounded-full bg-taupe blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/6 w-64 h-64 rounded-full bg-sage blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-elegant font-bold text-gradient mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
            Testimonials from industry leaders who trust our exceptional products for their corporate gifting needs.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Desktop Testimonial */}
          <div className="hidden md:block relative glass-effect p-12 rounded-3xl shadow-2xl hover-lift">
            <div className="flex items-center mb-10">
              <div className="mr-10 w-20 h-20 flex items-center justify-center rounded-full bg-luxury-gradient text-white text-3xl font-elegant font-bold shadow-lg">
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <div>
                <h4 className="text-2xl font-elegant font-semibold text-charcoal mb-2">{testimonials[currentIndex].name}</h4>
                <p className="text-lg text-taupe font-medium">{testimonials[currentIndex].title}</p>
                <p className="text-charcoal/70">{testimonials[currentIndex].company}</p>
              </div>
            </div>
            <blockquote className="text-xl md:text-2xl font-elegant italic text-charcoal mb-8 leading-relaxed">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <div className="flex justify-end space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full hover:bg-taupe hover:text-white hover:border-taupe transition-all duration-300 w-12 h-12"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full hover:bg-taupe hover:text-white hover:border-taupe transition-all duration-300 w-12 h-12"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
          
          {/* Mobile Testimonials */}
          <div className="md:hidden glass-effect p-8 rounded-2xl shadow-xl">
            <div className="mb-6">
              <h4 className="text-xl font-elegant font-semibold text-charcoal mb-1">{testimonials[currentIndex].name}</h4>
              <p className="text-sm text-taupe font-medium">{testimonials[currentIndex].title}</p>
              <p className="text-sm text-charcoal/70">{testimonials[currentIndex].company}</p>
            </div>
            <blockquote className="text-lg font-elegant italic text-charcoal mb-6 leading-relaxed">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <div className="flex justify-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="rounded-full hover:bg-taupe hover:text-white transition-all duration-300"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="rounded-full hover:bg-taupe hover:text-white transition-all duration-300"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-taupe scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
