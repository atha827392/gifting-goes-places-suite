
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'nav-luxury shadow-luxury py-3' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container-luxury">
        <div className="flex justify-between items-center">
          <a href="/" className="group">
            <h1 className="elenor-brand text-4xl md:text-5xl group-hover:scale-105 transition-transform duration-300">
              Elenor
            </h1>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <a href="#retail" className="nav-link text-lg">
              Retail Collection
            </a>
            <a href="#wholesale" className="nav-link text-lg">
              Wholesale
            </a>
            <a href="#products" className="nav-link text-lg">
              Products
            </a>
            <a href="#services" className="nav-link text-lg">
              Services
            </a>
            <a href="#about" className="nav-link text-lg">
              About
            </a>
            <Button className="btn-luxury flex items-center gap-2">
              <ShoppingBag size={18} />
              Shop Now
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-dark-chocolate hover:text-gold transition-colors duration-300 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-8 pb-8 space-y-6 bg-cream/95 backdrop-blur-lg rounded-2xl p-8 shadow-luxury border border-gold/20">
            <a href="#retail" className="block py-3 nav-link text-xl">
              Retail Collection
            </a>
            <a href="#wholesale" className="block py-3 nav-link text-xl">
              Wholesale
            </a>
            <a href="#products" className="block py-3 nav-link text-xl">
              Products
            </a>
            <a href="#services" className="block py-3 nav-link text-xl">
              Services
            </a>
            <a href="#about" className="block py-3 nav-link text-xl">
              About
            </a>
            <Button className="w-full btn-luxury flex items-center justify-center gap-2 mt-6">
              <ShoppingBag size={18} />
              Shop Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
