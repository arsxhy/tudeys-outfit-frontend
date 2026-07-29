"use client";

import { useState } from "react";
import { ShoppingBag, Heart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useAccountData } from "@/context/AccountDataContext";

export default function ClientButtons({ product }: { product: any }) {
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useAccountData();
  const [isAdding, setIsAdding] = useState(false);
  
  const isWishlisted = wishlist.some(item => item.id === String(product.id));

  const handleWishlistToggle = () => {
    if (isWishlisted) {
      removeFromWishlist(String(product.id));
    } else {
      addToWishlist({
        id: String(product.id),
        name: product.nama_produk,
        nameId: product.nama_produk,
        price: product.variants?.[0]?.harga || 0,
        image: product.image || "/placeholder.jpg"
      });
    }
  };

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart({
      id: String(product.id),
      name: product.nama_produk,
      nameId: product.nama_produk,
      price: product.variants?.[0]?.harga || 0,
      image: product.image || "/placeholder.jpg",
      size: "M",
      color: product.variants?.[0]?.warna || "Default"
    });
    setTimeout(() => {
      setIsAdding(false);
    }, 800);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-8">
      <button
        onClick={handleAddToCart}
        disabled={isAdding}
        className="flex-1 bg-[#151515] dark:bg-white text-white dark:text-[#151515] py-4 px-8 flex items-center justify-center gap-3 font-sans text-sm uppercase tracking-widest font-semibold hover:bg-[#c4a179] dark:hover:bg-[#c4a179] hover:text-white dark:hover:text-white transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        <ShoppingBag className="w-5 h-5" />
        {isAdding ? "Adding..." : "Add to Cart"}
      </button>

      <button
        aria-label="Add to wishlist"
        onClick={handleWishlistToggle}
        className={`sm:w-16 h-14 sm:h-auto border border-gray-300 dark:border-gray-700 flex items-center justify-center transition-colors duration-300 ${
          isWishlisted
            ? "bg-[#c4a179] border-[#c4a179] text-white"
            : "text-gray-600 dark:text-gray-400 hover:border-[#c4a179] hover:text-[#c4a179]"
        }`}
      >
        <Heart className={`w-5 h-5 ${isWishlisted ? "fill-current" : ""}`} />
      </button>
    </div>
  );
}
