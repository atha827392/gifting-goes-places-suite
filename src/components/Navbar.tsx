
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="py-4 bg-white sticky top-0 z-50 border-b">
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/b71c7861-89b9-440f-b7ac-22bd54c86e8e.png" 
              alt="Elenor Logo" 
              className="h-8 md:h-10 w-auto"
            />
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-charcoal hover:text-taupe transition-colors">Products</a>
            <a href="#services" className="text-charcoal hover:text-taupe transition-colors">Services</a>
            <a href="#testimonials" className="text-charcoal hover:text-taupe transition-colors">Testimonials</a>
            <a href="#why-us" className="text-charcoal hover:text-taupe transition-colors">Why Us</a>
            <Button asChild className="bg-taupe hover:bg-charcoal text-white">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-charcoal"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-3 animate-fade-in">
            <a href="#products" className="block py-2 text-charcoal hover:text-taupe transition-colors">
              Products
            </a>
            <a href="#services" className="block py-2 text-charcoal hover:text-taupe transition-colors">
              Services
            </a>
            <a href="#testimonials" className="block py-2 text-charcoal hover:text-taupe transition-colors">
              Testimonials
            </a>
            <a href="#why-us" className="block py-2 text-charcoal hover:text-taupe transition-colors">
              Why Us
            </a>
            <Button asChild className="w-full bg-taupe hover:bg-charcoal text-white">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
