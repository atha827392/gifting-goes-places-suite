
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="py-4 bg-white sticky top-0 z-50 border-b">
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <a href="/" className="text-charcoal font-semibold text-xl md:text-2xl tracking-tight">
            BagQuest
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-charcoal hover:text-navy transition-colors">Products</a>
            <a href="#services" className="text-charcoal hover:text-navy transition-colors">Services</a>
            <a href="#testimonials" className="text-charcoal hover:text-navy transition-colors">Testimonials</a>
            <a href="#why-us" className="text-charcoal hover:text-navy transition-colors">Why Us</a>
            <Button asChild className="bg-charcoal hover:bg-navy text-white">
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
            <a href="#products" className="block py-2 text-charcoal hover:text-navy transition-colors">
              Products
            </a>
            <a href="#services" className="block py-2 text-charcoal hover:text-navy transition-colors">
              Services
            </a>
            <a href="#testimonials" className="block py-2 text-charcoal hover:text-navy transition-colors">
              Testimonials
            </a>
            <a href="#why-us" className="block py-2 text-charcoal hover:text-navy transition-colors">
              Why Us
            </a>
            <Button asChild className="w-full bg-charcoal hover:bg-navy text-white">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
