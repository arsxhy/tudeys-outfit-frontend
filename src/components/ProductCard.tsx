"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

interface Product {
  id: number;
  name: string;
  price: string;
  rating: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white dark:bg-[#1f1d1a] dark:border dark:border-gray-800/80 p-4 shadow-sm group transition-colors duration-300">
      <div className="w-full aspect-[361/510] bg-gray-100 mb-4 relative overflow-hidden group-hover:shadow-inner transition-shadow">
        <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
      </div>
      <h3 className="font-sans font-medium text-gray-900 dark:text-gray-100 text-sm mb-2 h-10 line-clamp-2 transition-colors">
        {product.name}
      </h3>
      <div className="flex justify-between items-center mb-4">
        <span className="font-heading font-bold text-lg text-[#151515] dark:text-[#c4a179] transition-colors">{product.price}</span>
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
          <Star className="w-4 h-4 text-yellow-500 mr-1 fill-yellow-500" />
          {product.rating}
        </div>
      </div>
      <button 
        onClick={() => addToCart({
          id: `product-${product.id}`,
          name: product.name,
          nameId: product.name,
          price: parseInt(product.price.replace(/\D/g, '')) || 0,
          image: product.image,
          size: 'M',
          color: 'Default'
        })}
        className="w-full bg-[#151515] dark:bg-[#c4a179] text-white dark:text-[#151515] py-3 font-sans text-xs font-semibold tracking-widest hover:bg-[#c4a179] dark:hover:bg-white transition-colors"
      >
        ADD TO CART
      </button>
    </div>
  );
}
