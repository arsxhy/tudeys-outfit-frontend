"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import Footer from "@/components/Footer";

function CartContent() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || "id";
  const isEn = lang === "en";
  const { cartItems, removeFromCart, updateQuantity, subtotal, tax, total } = useCart();

  return (
    <div className="min-h-screen flex flex-col bg-background antialiased selection:bg-champagne-gold selection:text-deep-espresso">
      {/* Minimal Header */}
      <header className="bg-surface/90 dark:bg-charcoal-black/95 backdrop-blur-md w-full top-0 sticky z-50 border-b border-black/10 dark:border-white/10 no-shadows">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
          <div className="flex items-center">
            <Link
              href={`/?lang=${lang}`}
              className="font-hero-title-mobile text-section-title-mobile text-charcoal-black dark:text-pure-white tracking-tighter uppercase block"
            >
              <span className="text-charcoal-black dark:text-pure-white">TUDEYS</span>
              <span className="text-champagne-gold">OUTFIT</span>
            </Link>
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href={`/shop?lang=${lang}`}
              className="font-button-label text-button-label uppercase tracking-widest text-on-surface-variant hover:text-champagne-gold transition-colors"
            >
              {isEn ? "Shop" : "Belanja"}
            </Link>
            <Link
              href={`/new-arrivals?lang=${lang}`}
              className="font-button-label text-button-label uppercase tracking-widest text-on-surface-variant hover:text-champagne-gold transition-colors"
            >
              {isEn ? "New Arrivals" : "Produk Baru"}
            </Link>
            <Link
              href={`/collections?lang=${lang}`}
              className="font-button-label text-button-label uppercase tracking-widest text-on-surface-variant hover:text-champagne-gold transition-colors"
            >
              {isEn ? "Collections" : "Koleksi"}
            </Link>
            <Link
              href={`/men?lang=${lang}`}
              className="font-button-label text-button-label uppercase tracking-widest text-on-surface-variant hover:text-champagne-gold transition-colors"
            >
              {isEn ? "Men" : "Pria"}
            </Link>
            <Link
              href={`/women?lang=${lang}`}
              className="font-button-label text-button-label uppercase tracking-widest text-on-surface-variant hover:text-champagne-gold transition-colors"
            >
              {isEn ? "Women" : "Wanita"}
            </Link>
          </nav>
          <div className="flex items-center space-x-6 text-on-surface-variant dark:text-on-surface-variant">
            <Link
              href={`/?lang=${lang}`}
              className="hover:text-champagne-gold transition-all duration-300 scale-95 ease-in-out flex items-center justify-center"
            >
              <span className="material-symbols-outlined">close</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="flex-grow w-full px-margin-mobile md:px-margin-desktop py-12 md:py-24 max-w-container-max mx-auto bg-background">
        {/* Minimalist Heading */}
        <div className="mb-12 border-b border-black/10 dark:border-white/10 pb-6">
          <h1 className="font-hero-title-mobile text-hero-title-mobile md:font-hero-title md:text-hero-title uppercase text-charcoal-black dark:text-pure-white">
            {isEn ? "YOUR BAG" : "TAS BELANJA ANDA"}
          </h1>
          <p className="font-body-main text-body-main text-on-surface-variant mt-2">
            {isEn ? `${cartItems.length} items ready for checkout.` : `${cartItems.length} item siap untuk checkout.`}
          </p>
        </div>

        {/* Cart Layout: List View (Left) & Summary Panel (Right) */}
        <div className="flex flex-col lg:flex-row gap-gutter">
          {/* Items List */}
          <div className="flex-1 space-y-8">
            {cartItems.length === 0 ? (
                <div className="py-12 text-center text-muted-grey">
                    {isEn ? "Your cart is empty." : "Keranjang belanja Anda kosong."}
                </div>
            ) : (
                cartItems.map((item) => (
                    <div key={`${item.id}-${item.size}-${item.color}`} className="flex flex-col sm:flex-row gap-6 pb-8 border-b border-black/10 dark:border-white/10 group">
                      {/* Image 3:4 Ratio */}
                      <div className="w-full sm:w-1/3 md:w-1/4 aspect-[3/4] bg-neutral-light/5 relative overflow-hidden flex-shrink-0">
                        <img
                          alt={isEn ? item.name : item.nameId}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          src={item.image}
                        />
                      </div>
                      {/* Details */}
                      <div className="flex-1 flex flex-col justify-between py-2">
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-button-label text-button-label uppercase tracking-widest text-charcoal-black dark:text-pure-white">
                              {isEn ? item.name : item.nameId}
                            </h3>
                            <button
                              aria-label="Remove item"
                              onClick={() => removeFromCart(item.id, item.size, item.color)}
                              className="text-on-surface-variant hover:text-error transition-colors p-1"
                            >
                              <span className="material-symbols-outlined text-[20px]">delete</span>
                            </button>
                          </div>
                          <p className="font-body-main text-body-main text-muted-grey mb-4">
                            {isEn ? `Color: ${item.color}` : `Warna: ${item.color}`}
                          </p>
                          <div className="flex items-center space-x-6 text-sm">
                            <div>
                              <span className="text-on-surface-variant block mb-1">
                                {isEn ? "Size" : "Ukuran"}
                              </span>
                              <span className="text-charcoal-black dark:text-pure-white font-medium border border-black/20 dark:border-white/20 px-3 py-1 bg-surface-container-low">
                                {item.size}
                              </span>
                            </div>
                            <div>
                              <span className="text-on-surface-variant block mb-1">
                                {isEn ? "Qty" : "Jml"}
                              </span>
                              <div className="flex items-center border border-black/20 dark:border-white/20 bg-surface-container-low">
                                <button onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)} className="px-2 py-1 hover:text-champagne-gold transition-colors text-charcoal-black dark:text-pure-white">
                                  -
                                </button>
                                <span className="px-3 font-medium text-charcoal-black dark:text-pure-white">{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)} className="px-2 py-1 hover:text-champagne-gold transition-colors text-charcoal-black dark:text-pure-white">
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-6 sm:mt-0 self-start sm:self-end">
                          <span className="font-price-tag text-price-tag text-charcoal-black dark:text-pure-white">
                            RP {(item.price * item.quantity).toLocaleString("id-ID")}
                          </span>
                        </div>
                      </div>
                    </div>
                ))
            )}

            <div className="pt-4">
              <Link
                href={`/shop?lang=${lang}`}
                className="font-button-label text-button-label uppercase tracking-widest text-charcoal-black dark:text-pure-white inline-flex items-center border-b-2 border-black dark:border-white pb-1 hover:border-champagne-gold hover:text-champagne-gold transition-colors"
              >
                <span className="material-symbols-outlined mr-2 text-[18px]">
                  arrow_back
                </span>
                {isEn ? "Continue Shopping" : "Lanjutkan Belanja"}
              </Link>
            </div>
          </div>

          {/* Summary Panel */}
          <div className="w-full lg:w-[400px] flex-shrink-0 mt-12 lg:mt-0">
            <div className="bg-surface dark:bg-deep-espresso p-8 border border-black/5 dark:border-white/5 sticky top-32">
              <h2 className="font-button-label text-button-label uppercase tracking-widest text-champagne-gold mb-6 border-b border-black/10 dark:border-white/10 pb-4">
                {isEn ? "Order Summary" : "Ringkasan Pesanan"}
              </h2>
              <div className="space-y-4 font-body-main text-body-main mb-8">
                <div className="flex justify-between text-on-surface-variant">
                  <span>{isEn ? "Subtotal" : "Subtotal"}</span>
                  <span className="text-charcoal-black dark:text-pure-white">RP {subtotal.toLocaleString("id-ID")}</span>
                </div>
                <div className="flex justify-between text-on-surface-variant">
                  <span>{isEn ? "Shipping" : "Pengiriman"}</span>
                  <span className="text-champagne-gold">
                    {isEn ? "Complimentary" : "Gratis"}
                  </span>
                </div>
                <div className="flex justify-between text-on-surface-variant">
                  <span>{isEn ? "Tax (11%)" : "Pajak (11%)"}</span>
                  <span className="text-charcoal-black dark:text-pure-white">
                    RP {tax.toLocaleString("id-ID")}
                  </span>
                </div>
                <div className="pt-4 mt-4 border-t border-black/10 dark:border-white/10 flex justify-between items-center">
                  <span className="font-button-label text-button-label uppercase tracking-widest text-charcoal-black dark:text-pure-white">
                    {isEn ? "Total" : "Total"}
                  </span>
                  <span className="font-price-tag text-[24px] font-bold text-charcoal-black dark:text-pure-white">
                    RP {total.toLocaleString("id-ID")}
                  </span>
                </div>
              </div>
              <Link href={`/checkout?lang=${lang}`} className="block">
                <button className="w-full bg-charcoal-black text-pure-white font-button-label text-button-label uppercase tracking-widest py-5 border border-charcoal-black dark:border-white/20 hover:bg-champagne-gold hover:border-champagne-gold hover:text-charcoal-black transition-all duration-300 rounded-none">
                  {isEn ? "Proceed to Checkout" : "Lanjut ke Checkout"}
                </button>
              </Link>
              <div className="mt-6 flex items-center justify-center space-x-4 opacity-50">
                <span className="material-symbols-outlined text-charcoal-black dark:text-pure-white">lock</span>
                <span className="text-xs uppercase tracking-wider font-medium text-on-surface-variant">
                  {isEn ? "Secure Checkout" : "Checkout Aman"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer lang={lang} />
    </div>
  );
}

export default function Cart() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background"></div>}>
      <CartContent />
    </Suspense>
  );
}
