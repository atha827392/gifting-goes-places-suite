
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-dark-chocolate to-warm-brown text-cream section-luxury relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-bronze rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-luxury relative z-10">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="elenor-brand text-5xl text-gold">Elenor</h3>
            <p className="text-cream/90 text-xl leading-relaxed max-w-2xl">
              Where ethical luxury meets timeless design. Our vegan handbags represent a new standard in conscious fashion, proving that beauty and responsibility can coexist beautifully.
            </p>
            
            <div className="flex gap-6">
              {[Instagram, Facebook, Twitter].map((Social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="bg-gold/20 hover:bg-gold hover:scale-110 transition-all duration-300 p-4 rounded-2xl group"
                >
                  <Social className="text-gold group-hover:text-white" size={24} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-2xl text-gold mb-8">Collections</h4>
            <ul className="space-y-4">
              {['Retail Collection', 'Wholesale Orders', 'Custom Designs', 'Gift Sets', 'New Arrivals'].map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-cream/80 hover:text-gold transition-colors duration-300 text-lg hover:translate-x-2 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-2xl text-gold mb-8">Get in Touch</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="text-gold mt-1" size={20} />
                <div>
                  <p className="text-cream/90 text-lg">hello@elenor.com</p>
                  <p className="text-cream/70">General inquiries</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="text-gold mt-1" size={20} />
                <div>
                  <p className="text-cream/90 text-lg">+1 (555) 123-4567</p>
                  <p className="text-cream/70">Customer service</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin className="text-gold mt-1" size={20} />
                <div>
                  <p className="text-cream/90 text-lg">New York, NY</p>
                  <p className="text-cream/70">Design Studio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-cream/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-cream/70 text-lg">
            &copy; {currentYear} Elenor. All rights reserved. Crafted with conscience.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-cream/70 hover:text-gold transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-cream/70 hover:text-gold transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-cream/70 hover:text-gold transition-colors duration-300">Sustainability</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
