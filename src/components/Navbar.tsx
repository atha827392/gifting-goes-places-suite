
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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ease-in-out ${
      isScrolled 
        ? 'glass-effect shadow-2xl py-2 backdrop-blur-xl' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center hover-lift group">
            <div className="relative">
              <h1 className="text-3xl md:text-4xl font-elegant font-bold text-gradient group-hover:scale-110 transition-all duration-500">
                Elenor
              </h1>
              <div className="absolute inset-0 bg-gradient-to-r from-taupe/20 to-sage/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="#products" className="nav-link">
              Products
            </a>
            <a href="#services" className="nav-link">
              Services
            </a>
            <a href="#testimonials" className="nav-link">
              Testimonials
            </a>
            <a href="#why-us" className="nav-link">
              Why Us
            </a>
            <Button asChild className="luxury-gradient hover:scale-110 transition-all duration-500 text-white shadow-2xl hover:shadow-3xl premium-hover">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-charcoal hover:text-taupe transition-all duration-300 p-2 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 space-y-4 glass-effect rounded-2xl p-6 animate-elegant-fade border border-white/20">
            <a href="#products" className="block py-3 nav-link-mobile">
              Products
            </a>
            <a href="#services" className="block py-3 nav-link-mobile">
              Services
            </a>
            <a href="#testimonials" className="block py-3 nav-link-mobile">
              Testimonials
            </a>
            <a href="#why-us" className="block py-3 nav-link-mobile">
              Why Us
            </a>
            <Button asChild className="w-full luxury-gradient hover:scale-105 transition-all duration-500 text-white shadow-xl">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
