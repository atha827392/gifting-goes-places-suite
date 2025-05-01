
import React from 'react';
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  features: string[];
}

const ProductsSection = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Executive Laptop Carrier",
      category: "Laptop Bags",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      features: ["Water-resistant material", "Extra padding", "Multiple compartments"]
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
      features: ["Spacious main compartment", "Genuine leather handles", "Detachable shoulder strap"]
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
    <section id="products" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Premium Collections
          </h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            Explore our range of high-quality bags designed for the modern professional.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-charcoal/70 mb-1">{product.category}</div>
                <h3 className="text-xl font-semibold text-charcoal mb-3">{product.name}</h3>
                <ul className="mb-4 space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-sm text-charcoal/70 flex items-center">
                      <span className="mr-2 text-navy">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-beige text-charcoal hover:bg-taupe">
                  Bulk Inquiry
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
