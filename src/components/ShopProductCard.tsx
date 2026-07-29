"use client";

import { Star, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useAccountData } from "@/context/AccountDataContext";

export interface ShopProduct {
  id: number;
  name: string;
  color: string;
  price: string;
  rating: number;
  image: string;
  badge?: "New" | "Sustainable" | string;
  href?: string;
}

interface ShopProductCardProps {
  product: ShopProduct;
  priority?: boolean;
}

export default function ShopProductCard({ product, priority = false }: ShopProductCardProps) {
  const { addToCart } = useCart();
  const { isInWishlist, addToWishlist, removeFromWishlist } = useAccountData();
  const CardWrapper = product.href ? Link : 'div';
  
  const wishId = `shop-${product.id}`;
  const isWishlisted = isInWishlist(wishId);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isWishlisted) {
      removeFromWishlist(wishId);
    } else {
      addToWishlist({
        id: wishId,
        name: product.name,
        nameId: product.name, // Usually we might have localization, but using name for now
        price: parseInt(product.price.replace(/\D/g, '')) || 0,
        image: product.image
      });
    }
  };

  return (
    <CardWrapper href={product.href || '#'} className="group flex flex-col gap-3 cursor-pointer">
      {/* Image Container */}
      <div className="bg-[#f0f0f0] dark:bg-[#1a1c1c] aspect-[361/510] overflow-hidden relative rounded-none flex items-center justify-center">
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-[#151515]/10 dark:bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-4">
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart({
                id: `shop-${product.id}`,
                name: product.name,
                nameId: product.name,
                price: parseInt(product.price.replace(/\D/g, '')) || 0,
                image: product.image,
                size: 'M',
                color: product.color
              });
            }}
            className="w-full bg-[#121414] dark:bg-white text-white dark:text-[#121414] font-sans text-xs uppercase py-3 font-semibold tracking-widest hover:bg-[#c4a179] dark:hover:bg-[#c4a179] dark:hover:text-white transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
        
        <Image 
          src={product.image} 
          alt={product.name} 
          fill
          priority={priority}
          className="object-cover mix-blend-multiply dark:mix-blend-normal group-hover:scale-105 transition-transform duration-700 ease-out"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Badges */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-20 flex flex-col gap-2">
            <span className={`font-sans text-[10px] font-semibold uppercase px-2 py-1 tracking-wider ${
              product.badge === 'New' 
                ? 'bg-[#c4a179] text-white' 
                : 'bg-[#121414] text-white'
            }`}>
              {product.badge}
            </span>
          </div>
        )}

        {/* Favorite Button */}
        <div className="absolute top-3 right-3 z-20">
          <button 
            onClick={toggleWishlist}
            className="text-[#121414] hover:text-[#c4a179] transition-colors bg-white rounded-full p-2 flex items-center justify-center w-8 h-8 shadow-sm"
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-error text-error hover:text-error' : ''}`} />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex justify-between items-start pt-2">
        <div>
          <h3 className="font-sans font-semibold text-[12px] text-[#151515] dark:text-white uppercase tracking-widest mb-1">
            {product.name}
          </h3>
          <p className="font-sans text-[13px] text-gray-500 dark:text-gray-400">
            {product.color}
          </p>
        </div>
        <div className="text-right">
          <span className="font-sans text-[14px] text-[#151515] dark:text-white font-bold">
            {product.price}
          </span>
          <div className="flex items-center justify-end mt-1 text-gray-500 dark:text-gray-400">
            <Star className="w-3 h-3 text-[#c4a179] fill-[#c4a179]" />
            <span className="font-sans text-[11px] ml-1">{product.rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
}
