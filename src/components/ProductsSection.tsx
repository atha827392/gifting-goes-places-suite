
import React from 'react';
import { Button } from "@/components/ui/button";
import { Eye, ShoppingBag, Sparkles } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  price: string;
  description: string;
  features: string[];
  premium?: boolean;
}

const ProductsSection = () => {
  const products: Product[] = [
    {
      id: "tote-signature",
      name: "Signature Tote",
      category: "Everyday Luxury",
      image: "/lovable-uploads/06208440-ffc7-4fbb-8f77-7bbe76a3ab49.png",
      price: "$299",
      description: "Our flagship piece - spacious, elegant, and ethically made",
      features: ["Premium vegan leather", "Interior organizer", "Magnetic closure"],
      premium: true
    },
    {
      id: "crossbody-chic",
      name: "Chic Crossbody",
      category: "On-the-Go",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      price: "$249",
      description: "Perfect companion for busy days and elegant evenings",
      features: ["Adjustable strap", "Multiple compartments", "Phone pocket"]
    },
    {
      id: "clutch-evening",
      name: "Evening Clutch",
      category: "Special Occasions",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      price: "$189",
      description: "Sophisticated elegance for your most important moments",
      features: ["Detachable chain", "Satin lining", "Card slots"],
      premium: true
    },
    {
      id: "backpack-urban",
      name: "Urban Backpack",
      category: "Modern Professional",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      price: "$329",
      description: "Where functionality meets luxury design",
      features: ["Laptop compartment", "Water-resistant", "Ergonomic design"]
    }
  ];

  return (
    <section id="products" className="section-luxury texture-leather">
      <div className="container-luxury">
        <div className="text-center mb-20">
          <h2 className="font-display text-6xl md:text-7xl text-dark-chocolate mb-8">
            Our 
            <span className="block bg-gradient-to-r from-gold to-bronze bg-clip-text text-transparent">
              Collections
            </span>
          </h2>
          <p className="luxury-text text-2xl max-w-4xl mx-auto leading-relaxed opacity-90">
            Each piece in our collection represents our commitment to ethical luxury, superior craftsmanship, and timeless design that transcends seasons.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="bg-cream/70 backdrop-blur-sm rounded-3xl overflow-hidden shadow-luxury hover:shadow-soft transition-all duration-700 group transform-3d hover:rotate-3d"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {product.premium && (
                <div className="absolute top-6 left-6 z-10 bg-gradient-to-r from-gold to-bronze text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                  <Sparkles size={16} />
                  Premium Collection
                </div>
              )}

              <div className="relative h-80 overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-chocolate/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-20"></div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex gap-4">
                    <Button className="bg-cream/90 text-dark-chocolate hover:bg-cream border-2 border-gold/30 shadow-luxury">
                      <Eye size={20} />
                    </Button>
                    <Button className="btn-luxury">
                      <ShoppingBag size={20} />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="mb-4">
                  <span className="luxury-text text-sm uppercase tracking-wider text-gold font-medium">
                    {product.category}
                  </span>
                </div>
                
                <h3 className="font-serif text-3xl text-dark-chocolate mb-3">{product.name}</h3>
                <p className="luxury-text text-lg opacity-90 mb-6 leading-relaxed">{product.description}</p>
                
                <div className="space-y-3 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gold rounded-full"></div>
                      <span className="luxury-text opacity-80">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl text-gold font-bold">{product.price}</span>
                  <Button className="btn-luxury py-3 px-6">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="btn-luxury text-xl py-6 px-12 group">
            View Complete Collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
