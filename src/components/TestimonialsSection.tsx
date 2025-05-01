
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
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            What Our Clients Say
          </h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            Feedback from industry leaders who trust our products for their corporate gifting needs.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Desktop Testimonial */}
          <div className="hidden md:block relative bg-white p-8 md:p-12 rounded-lg shadow-lg">
            <div className="flex items-center mb-8">
              <div className="mr-8 w-16 h-16 flex items-center justify-center rounded-full bg-beige text-charcoal text-2xl font-bold">
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <div>
                <h4 className="text-xl font-semibold text-charcoal">{testimonials[currentIndex].name}</h4>
                <p className="text-charcoal/70">{testimonials[currentIndex].title}, {testimonials[currentIndex].company}</p>
              </div>
            </div>
            <blockquote className="text-lg md:text-xl italic text-charcoal mb-6">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <div className="flex justify-end space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full hover:bg-beige"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full hover:bg-beige"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
          
          {/* Mobile Testimonials */}
          <div className="md:hidden bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-charcoal">{testimonials[currentIndex].name}</h4>
              <p className="text-sm text-charcoal/70">{testimonials[currentIndex].title}, {testimonials[currentIndex].company}</p>
            </div>
            <blockquote className="text-base italic text-charcoal mb-6">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <div className="flex justify-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="rounded-full hover:bg-beige"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="rounded-full hover:bg-beige"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? "bg-navy" : "bg-gray-300"
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
