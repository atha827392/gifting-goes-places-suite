
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass-effect shadow-xl py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center space-x-3 hover-lift">
            <img 
              src="/lovable-uploads/b71c7861-89b9-440f-b7ac-22bd54c86e8e.png" 
              alt="Elenor Logo" 
              className="h-10 md:h-12 w-auto drop-shadow-sm"
            />
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="#products" className="text-charcoal hover:text-taupe transition-all duration-300 font-medium hover:scale-105">
              Products
            </a>
            <a href="#services" className="text-charcoal hover:text-taupe transition-all duration-300 font-medium hover:scale-105">
              Services
            </a>
            <a href="#testimonials" className="text-charcoal hover:text-taupe transition-all duration-300 font-medium hover:scale-105">
              Testimonials
            </a>
            <a href="#why-us" className="text-charcoal hover:text-taupe transition-all duration-300 font-medium hover:scale-105">
              Why Us
            </a>
            <Button asChild className="luxury-gradient hover:scale-105 transition-all duration-300 text-white shadow-lg">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-charcoal hover:text-taupe transition-colors p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 space-y-4 glass-effect rounded-lg p-6 animate-fade-in">
            <a href="#products" className="block py-3 text-charcoal hover:text-taupe transition-colors font-medium">
              Products
            </a>
            <a href="#services" className="block py-3 text-charcoal hover:text-taupe transition-colors font-medium">
              Services
            </a>
            <a href="#testimonials" className="block py-3 text-charcoal hover:text-taupe transition-colors font-medium">
              Testimonials
            </a>
            <a href="#why-us" className="block py-3 text-charcoal hover:text-taupe transition-colors font-medium">
              Why Us
            </a>
            <Button asChild className="w-full luxury-gradient hover:scale-105 transition-all duration-300 text-white">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
