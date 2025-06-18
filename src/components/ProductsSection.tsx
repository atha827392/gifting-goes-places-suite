
import React from 'react';
import { Button } from "@/components/ui/button";
import { Star } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  features: string[];
  premium?: boolean;
}

const ProductsSection = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Executive Laptop Carrier",
      category: "Laptop Bags",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      features: ["Water-resistant material", "Extra padding", "Multiple compartments"],
      premium: true
    },
    {
      id: 2,
      name: "Urban Messenger",
      category: "Messenger Bags",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      features: ["Adjustable strap", "Easy-access pockets", "Durable construction"]
    },
    {
      id: 3,
      name: "Weekender Duffle",
      category: "Duffle Bags",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      features: ["Spacious main compartment", "Genuine leather handles", "Detachable shoulder strap"],
      premium: true
    },
    {
      id: 4,
      name: "Daily Essentials Tote",
      category: "Daily Utility Bags",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
      features: ["Lightweight", "Eco-friendly materials", "Multiple organizational pockets"]
    },
  ];
  
  return (
    <section id="products" className="section-padding bg-gradient-to-br from-cream to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-elegant font-bold text-gradient mb-6">
            Premium Collections
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
            Discover our curated range of exceptional bags, each designed to elevate the modern professional experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group hover-lift bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              {product.premium && (
                <div className="absolute top-4 left-4 z-10 bg-gold-gradient text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Star size={12} fill="currentColor" />
                  Premium
                </div>
              )}
              
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <div className="p-6">
                <div className="text-sm text-taupe font-medium mb-2 tracking-wide uppercase">{product.category}</div>
                <h3 className="text-xl font-elegant font-semibold text-charcoal mb-4">{product.name}</h3>
                
                <ul className="mb-6 space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-sm text-charcoal/70 flex items-start">
                      <span className="mr-2 text-taupe text-lg leading-none">•</span>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full bg-beige hover:bg-taupe text-charcoal hover:text-white transition-all duration-300 font-medium">
                  Request Quote
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
