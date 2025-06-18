
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="luxury-gradient text-white py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-taupe blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-sage blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <h3 className="elenor-logo-small text-white">Elenor</h3>
            </div>
            <p className="text-white/90 mb-8 text-lg leading-relaxed">
              Elevating corporate gifting with premium bags that create lasting impressions and meaningful connections.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/80 hover:text-taupe transition-all duration-300 hover:scale-110">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-white/80 hover:text-taupe transition-all duration-300 hover:scale-110">
                <span className="sr-only">Twitter</span>
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-elegant font-semibold mb-6 text-gold-gradient">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#products" className="text-white/80 hover:text-taupe transition-all duration-300 text-lg hover:translate-x-2 inline-block">Products</a></li>
              <li><a href="#services" className="text-white/80 hover:text-taupe transition-all duration-300 text-lg hover:translate-x-2 inline-block">Services</a></li>
              <li><a href="#testimonials" className="text-white/80 hover:text-taupe transition-all duration-300 text-lg hover:translate-x-2 inline-block">Testimonials</a></li>
              <li><a href="#why-us" className="text-white/80 hover:text-taupe transition-all duration-300 text-lg hover:translate-x-2 inline-block">Why Choose Us</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-taupe transition-all duration-300 text-lg hover:translate-x-2 inline-block">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-elegant font-semibold mb-6 text-gold-gradient">Contact</h3>
            <div className="space-y-4 text-lg">
              <p className="text-white/90">
                Andheri East, Mumbai<br />
                Maharashtra, India
              </p>
              <p className="text-white/90">
                <span className="text-taupe">Email:</span> corporate@elenor.com
              </p>
              <p className="text-white/90">
                <span className="text-taupe">Phone:</span> +91 12345 67890
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center text-white/70 text-lg">
          <p>&copy; {currentYear} Elenor. All rights reserved. Crafted with excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
