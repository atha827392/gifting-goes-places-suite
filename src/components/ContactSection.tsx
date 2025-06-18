
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, MessageSquare, Mail, Clock, Phone } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const serviceId = 'service_bp033a7';
      const templateId = 'template_i10z3wl'
      const publicKey = '0X1x8MOrd2vnvfJks';
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        message: formData.message,
        to_email: 'corporate@elenor.com'
      };
      
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. Our team will contact you shortly.",
      });
      
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <section id="contact" className="section-padding hero-gradient relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-taupe/20 to-transparent blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-tr from-sage/20 to-transparent blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-12"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-elegant-fade">
          <h2 className="text-5xl md:text-6xl font-elegant font-bold text-gradient mb-8">
            Get in Touch
          </h2>
          <p className="text-xl md:text-2xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
            Ready to elevate your corporate gifting experience? Let's create something extraordinary together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-4xl hover:shadow-5xl transition-all duration-700 border border-white/40 hover:border-taupe/30 animate-fade-slide group">
            <h3 className="text-3xl font-elegant font-semibold text-charcoal mb-8 group-hover:text-gradient transition-all duration-500">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="form-group">
                <label htmlFor="name" className="block text-lg font-medium text-charcoal mb-3">
                  Your Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full h-14 text-lg border-2 border-sage/30 focus:border-taupe/60 rounded-xl transition-all duration-300 hover:border-taupe/40"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="block text-lg font-medium text-charcoal mb-3">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@company.com"
                  className="w-full h-14 text-lg border-2 border-sage/30 focus:border-taupe/60 rounded-xl transition-all duration-300 hover:border-taupe/40"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="company" className="block text-lg font-medium text-charcoal mb-3">
                  Company Name *
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  placeholder="Your Company"
                  className="w-full h-14 text-lg border-2 border-sage/30 focus:border-taupe/60 rounded-xl transition-all duration-300 hover:border-taupe/40"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="block text-lg font-medium text-charcoal mb-3">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your requirements..."
                  className="w-full min-h-[150px] text-lg border-2 border-sage/30 focus:border-taupe/60 rounded-xl transition-all duration-300 hover:border-taupe/40"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full h-16 text-xl luxury-gradient hover:scale-105 transition-all duration-500 text-white shadow-2xl hover:shadow-3xl premium-hover"
              >
                {isLoading ? "Sending..." : "Send Message"}
                <Send className="ml-3 h-6 w-6" />
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col justify-center space-y-10 animate-fade-slide" style={{animationDelay: '0.3s'}}>
            <div>
              <h3 className="text-4xl font-elegant font-semibold text-charcoal mb-10">Quick Connect</h3>
              <div className="space-y-8">
                <div className="contact-card group">
                  <Mail className="h-8 w-8 text-taupe group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h4 className="text-xl font-medium text-charcoal mb-2">Business Email</h4>
                    <a href="mailto:corporate@elenor.com" className="text-lg text-navy hover:text-taupe transition-colors duration-300 hover:underline">
                      corporate@elenor.com
                    </a>
                  </div>
                </div>
                
                <div className="contact-card group">
                  <MessageSquare className="h-8 w-8 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                  <div className="flex-1">
                    <h4 className="text-xl font-medium text-charcoal mb-4">WhatsApp Business</h4>
                    <Button 
                      asChild
                      variant="outline" 
                      className="gap-3 bg-green-50 border-green-200 text-green-700 hover:bg-green-100 h-12 px-6 text-lg transition-all duration-300 hover:scale-105"
                    >
                      <a href="https://wa.me/9112345678901" target="_blank" rel="noopener noreferrer">
                        <MessageSquare className="h-5 w-5" />
                        Connect on WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
                
                <div className="contact-card group">
                  <Clock className="h-8 w-8 text-taupe group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h4 className="text-xl font-medium text-charcoal mb-2">Office Hours</h4>
                    <p className="text-lg text-charcoal/70 leading-relaxed">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
                
                <div className="contact-card group">
                  <Phone className="h-8 w-8 text-taupe group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <h4 className="text-xl font-medium text-charcoal mb-2">Response Time</h4>
                    <p className="text-lg text-charcoal/70 leading-relaxed">
                      We typically respond to inquiries within 24 business hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
