"use client";

import React, { Suspense } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { useAccountData } from "@/context/AccountDataContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AccountSidebar from "@/components/AccountSidebar";

function WishlistContent() {
  const { isEn } = useLanguage();
  const { addToCart } = useCart();
  const { user } = useAuth();
  const { wishlist, removeFromWishlist } = useAccountData();
  const lang = isEn ? "en" : "id";

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-main antialiased selection:bg-champagne-gold selection:text-deep-espresso">
      <Navbar lang={lang} />

      {/* Main Content */}
      <main className="flex-grow flex flex-col w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24 pt-32">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="font-hero-title text-hero-title-mobile md:text-hero-title uppercase text-charcoal-black dark:text-white border-b border-black/10 dark:border-white/10 pb-4">
            {isEn ? "MY WISHLIST" : "WISHLIST SAYA"}
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Left Sidebar Navigation */}
          <AccountSidebar activeTab="wishlist" />

          {/* Right Main Content */}
          <section className="md:col-span-9">
            <p className="text-on-surface-variant mb-8 max-w-xl text-body-main font-body-main">
              {isEn
                ? "Curated pieces reserved for your collection. Exceptional quality, enduring style."
                : "Koleksi yang dikurasi khusus untuk Anda. Kualitas luar biasa, gaya abadi."}
            </p>

            {wishlist.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 bg-neutral-light/30 dark:bg-surface-container/30 border border-black/10 dark:border-white/10 h-full">
                <span className="material-symbols-outlined text-6xl text-black/20 dark:text-white/20 mb-6" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 48" }}>
                  favorite
                </span>
                <h3 className="font-hero-title text-2xl uppercase tracking-widest text-charcoal-black dark:text-white mb-4 text-center">
                  {isEn ? "YOUR WISHLIST IS EMPTY" : "WISHLIST ANDA KOSONG"}
                </h3>
                <p className="font-body-main text-on-surface-variant mb-8 text-center max-w-md">
                  {isEn ? "Save your favorite items here. Discover our latest collections and find your new style." : "Simpan item favorit Anda di sini. Temukan koleksi terbaru kami dan temukan gaya baru Anda."}
                </p>
                <a 
                  href={`/shop?lang=${lang}`}
                  className="bg-charcoal-black dark:bg-champagne-gold text-pure-white dark:text-deep-espresso font-button-label text-button-label uppercase tracking-widest py-4 px-10 hover:bg-champagne-gold hover:text-charcoal-black dark:hover:bg-pure-white transition-colors duration-300"
                >
                  {isEn ? "Start Shopping" : "Mulai Belanja"}
                </a>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-gutter gap-y-16">
                {wishlist.map((item) => (
                  <article key={item.id} className="group relative flex flex-col">
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      aria-label="Remove from wishlist"
                      className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-surface-container-high/80 backdrop-blur-sm rounded-full text-on-surface-variant hover:text-error hover:bg-surface-container transition-all duration-300 shadow-sm"
                    >
                      <span className="material-symbols-outlined text-[20px]">close</span>
                    </button>
                    <div className="aspect-[361/510] bg-neutral-light overflow-hidden relative mb-4">
                      <img
                        alt={isEn ? item.name : item.nameId}
                        className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                        src={item.image}
                      />
                      {/* Overlay Add to Cart (Desktop Hover) */}
                      <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out hidden md:block bg-gradient-to-t from-deep-espresso/90 to-transparent">
                        <button 
                          onClick={(e) => {
                              e.preventDefault();
                              addToCart({
                                  ...item,
                                  size: 'M',
                                  color: 'Default',
                                  qty: 1
                              });
                          }}
                          className="w-full bg-primary-container hover:bg-champagne-gold text-pure-white hover:text-deep-espresso font-button-label text-button-label uppercase py-4 transition-colors duration-300"
                        >
                          {isEn ? "ADD TO CART" : "TAMBAH KE KERANJANG"}
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col flex-grow justify-between">
                      <div>
                        <h3 className="font-button-label text-button-label text-on-background uppercase mb-2">
                          {isEn ? item.name : item.nameId}
                        </h3>
                      </div>
                      <div className="flex justify-between items-end mt-auto">
                        <span className="font-price-tag text-price-tag text-champagne-gold">
                          RP {item.price.toLocaleString("id-ID")}
                        </span>
                      </div>
                    </div>
                    {/* Mobile Add to Cart */}
                    <button 
                      onClick={(e) => {
                          e.preventDefault();
                          addToCart({
                              ...item,
                              size: 'M',
                              color: 'Default',
                              qty: 1
                          });
                      }}
                      className="w-full mt-4 md:hidden bg-primary-container text-pure-white font-button-label text-button-label uppercase py-3 border border-black/10 dark:border-white/10"
                    >
                      {isEn ? "ADD TO CART" : "TAMBAH KE KERANJANG"}
                    </button>
                  </article>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>

      <Footer lang={lang} />
    </div>
  );
}

export default function Wishlist() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background"></div>}>
      <WishlistContent />
    </Suspense>
  );
}
