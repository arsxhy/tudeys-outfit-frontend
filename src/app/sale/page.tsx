"use client";

import React, { Suspense } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function SalePage() {
  const { isEn } = useLanguage();
  const { addToCart } = useCart();

  return (
    <main className="w-full">
      <Navbar lang={isEn ? 'en' : 'id'} />
      {/* Sale Hero Banner */}
      <section className="relative w-full h-[614px] min-h-[500px] flex items-center justify-center overflow-hidden bg-charcoal-black dark:bg-pure-white">
        <div
          className="absolute inset-0 bg-cover bg-center w-full h-full opacity-60"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD7FTrPrbATTXoqZp-2-oP_XWPmdZdXWSkeo_Au-Kh-0_spREve-nJ0Co5oIS8Hd_quIzWYrRf1ax2QYJzjZ8AfufAN4uqMJyYykHIEIY9WqhMx-MtiBglYfT9al1CHY5IR30gwUe_6onbvnL-NO9oSyIexQpei6YZTQEXafcUoouBOqbbJLnhZk7ikHyd3EUluWLCfDoULugHjoLYuDXKiwJLrImukeRDVhew4QNc8Lm1hmRRHopbWeSXKAhWgHTQx8xOoU47-')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        <div className="relative z-10 text-center px-gutter flex flex-col items-center">
          <span className="font-button-label text-button-label uppercase text-champagne-gold tracking-[0.2em] mb-4 block">
            {isEn ? "The Private Archive" : "Arsip Pribadi"}
          </span>
          <h1 className="font-hero-title text-hero-title text-pure-white mb-6 uppercase">
            {isEn ? "Seasonal Sale" : "Obral Musiman"}
          </h1>
          <p className="font-body-main text-body-main text-on-surface-variant max-w-lg mx-auto mb-8">
            {isEn
              ? "Discover a curated selection of our minimalist pieces. An invitation to elevate your wardrobe with sustainable luxury."
              : "Temukan pilihan kurasi potongan minimalis kami. Sebuah undangan untuk meningkatkan lemari pakaian Anda dengan kemewahan yang berkelanjutan."}
          </p>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="px-margin-desktop py-section-gap max-w-container-max mx-auto">
        {/* Filters & Sort */}
        <div className="flex justify-between items-center mb-16 pb-4 border-b border-white/10">
          <div className="flex space-x-8">
            <button className="font-button-label text-button-label uppercase text-foreground hover:text-champagne-gold transition-colors flex items-center gap-2">
              {isEn ? "Filter" : "Saring"}{" "}
              <span className="material-symbols-outlined text-[18px]">tune</span>
            </button>
            <div className="hidden md:flex space-x-6">
              <span className="font-button-label text-button-label uppercase text-muted-grey">
                {isEn ? "Size" : "Ukuran"}
              </span>
              <span className="font-button-label text-button-label uppercase text-muted-grey">
                {isEn ? "Color" : "Warna"}
              </span>
            </div>
          </div>
          <div>
            <button className="font-button-label text-button-label uppercase text-foreground hover:text-champagne-gold transition-colors flex items-center gap-2">
              {isEn ? "Sort By" : "Urutkan"}{" "}
              <span className="material-symbols-outlined text-[18px]">expand_more</span>
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-gutter gap-y-24">
          {/* Product 1 */}
          <div className="product-card group relative flex flex-col">
            <div className="relative aspect-[361/510] bg-neutral-light dark:bg-[#1a1c1c] overflow-hidden mb-6 flex items-center justify-center">
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-primary-container text-champagne-gold font-button-label text-[10px] uppercase tracking-widest px-3 py-1">
                  {isEn ? "Archive" : "Arsip"}
                </span>
              </div>
              <Image className="product-image w-full h-full object-cover object-center image-blend transition-transform duration-500 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClZlH87RamcrHCkt7XRWBEsq9XYWzXxye6AoiMMyxVEb7A1xOX6I9K0HJmvCCS-vFq-sdar4ru8qgWEZ3EBXL5FTe7cN8W6UblxzzB-sii7xl6t4lbwZzRklT3g5cHZCE1i4iLeoHe6bekipcb2tVaTBqJKyObDVP4pFGtdB--5gorV1w0VQB1ucqn2PstTJusjcSyp8zk_fLvUgr_MUDNslxSoTDdKOTQNqfT77ygb-QVdePcQDtqJNObYCRpjDGqDzpiN_Ya" alt={isEn ? "Silk Evening Dress" : "Gaun Malam Sutra"} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              {/* Hover Add to Cart */}
              <button 
                onClick={(e) => {
                    e.preventDefault();
                    addToCart({
                        id: 'sale-1',
                        name: 'Structural Wool Coat',
                        nameId: 'Mantel Wol Struktural',
                        price: 6750000,
                        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClZlH87RamcrHCkt7XRWBEsq9XYWzXxye6AoiMMyxVEb7A1xOX6I9K0HJmvCCS-vFq-sdar4ru8qgWEZ3EBXL5FTe7cN8W6UblxzzB-sii7xl6t4lbwZzRklT3g5cHZCE1i4iLeoHe6bekipcb2tVaTBqJKyObDVP4pFGtdB--5gorV1w0VQB1ucqn2PstTJusjcSyp8zk_fLvUgr_MUDNslxSoTDdKOTQNqfT77ygb-QVdePcQDtqJNObYCRpjDGqDzpiN_Ya',
                        size: 'M',
                        color: 'Charcoal'
                    });
                }}
                className="absolute bottom-0 left-0 w-full bg-primary-container text-pure-white font-button-label text-button-label uppercase py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out hover:text-champagne-gold"
              >
                {isEn ? "Add to Cart" : "Tambah ke Keranjang"}
              </button>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-body-main text-body-main text-foreground font-bold mb-1">
                  {isEn ? "Structural Wool Coat" : "Mantel Wol Struktural"}
                </h3>
                <p className="font-body-main text-[14px] text-muted-grey">
                  {isEn ? "Charcoal" : "Arang"}
                </p>
              </div>
              <div className="text-right flex flex-col items-end">
                <span className="font-price-tag text-price-tag text-champagne-gold">Rp 6.750.000</span>
                <span className="font-price-tag text-[14px] text-muted-grey line-through">Rp 10.200.000</span>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="product-card group relative flex flex-col">
            <div className="relative aspect-[361/510] bg-neutral-light dark:bg-[#1a1c1c] overflow-hidden mb-6 flex items-center justify-center">
              <Image className="product-image w-full h-full object-cover object-center image-blend transition-transform duration-500 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnD7UF02lJOewB2gD16MtCmopjcugeo1VhBcPZT4RRiG7iV2GTa9joc1JVCX7Jia8x9CFZbMDcOccp9A-gZaZHs7UPI1wBUWYa7g2buXuCuHxdiCaJ7nvBOir6hZB158GCcxFe1WhclY7PTsU7xPULDdwrR7axuOeAIdy0sQrKExsJi0XhdIgpPpvAf_4FxxzswbCWmkxLvMEOoQi6wdi1slkrBd0zsXLZSQO8dRS1dgQqXkTGwzblRfpbTlSLsG3GDvdEDSsW" alt={isEn ? "Cashmere Overcoat" : "Mantel Kasmir"} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              <button 
                onClick={(e) => {
                    e.preventDefault();
                    addToCart({
                        id: 'sale-2',
                        name: 'Oversized Cashmere Knit',
                        nameId: 'Rajutan Kasmir Kebesaran',
                        price: 3300000,
                        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnD7UF02lJOewB2gD16MtCmopjcugeo1VhBcPZT4RRiG7iV2GTa9joc1JVCX7Jia8x9CFZbMDcOccp9A-gZaZHs7UPI1wBUWYa7g2buXuCuHxdiCaJ7nvBOir6hZB158GCcxFe1WhclY7PTsU7xPULDdwrR7axuOeAIdy0sQrKExsJi0XhdIgpPpvAf_4FxxzswbCWmkxLvMEOoQi6wdi1slkrBd0zsXLZSQO8dRS1dgQqXkTGwzblRfpbTlSLsG3GDvdEDSsW',
                        size: 'M',
                        color: 'Espresso'
                    });
                }}
                className="absolute bottom-0 left-0 w-full bg-primary-container text-pure-white font-button-label text-button-label uppercase py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out hover:text-champagne-gold"
              >
                {isEn ? "Add to Cart" : "Tambah ke Keranjang"}
              </button>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-body-main text-body-main text-foreground font-bold mb-1">
                  {isEn ? "Oversized Cashmere Knit" : "Rajutan Kasmir Kebesaran"}
                </h3>
                <p className="font-body-main text-[14px] text-muted-grey">
                  {isEn ? "Espresso" : "Espreso"}
                </p>
              </div>
              <div className="text-right flex flex-col items-end">
                <span className="font-price-tag text-price-tag text-champagne-gold">Rp 3.300.000</span>
                <span className="font-price-tag text-[14px] text-muted-grey line-through">Rp 5.250.000</span>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="product-card group relative flex flex-col">
            <div className="relative aspect-[361/510] bg-neutral-light dark:bg-[#1a1c1c] overflow-hidden mb-6 flex items-center justify-center">
              <Image className="product-image w-full h-full object-cover object-center image-blend transition-transform duration-500 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoLTpiClEQE-SNQIOoHAxZY07tERzK-KqBYEO_CXS7wiENja9naQ6bNQTgZiQK1Tc7QqKxHljSr8ijg8qMkD2xKsiwsxAk0pQiB-h1ZASZHQNOyNvU0kcuvtG14nH4sXh9J7F54xE0imTEhX7bP2zRNRFaGqqO_dKsaDxmJQS8n-H0UOF6Ee2kCnT_1tjSZZkXBOz5qxLdGoagVezhWVzWe-m4K8550xYxmFbLl088Fcwye5xopV2YPqWgetNKDdTY4o87pxfX" alt={isEn ? "Structured Leather Tote" : "Tas Jinjing Kulit"} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              <button 
                onClick={(e) => {
                    e.preventDefault();
                    addToCart({
                        id: 'sale-3',
                        name: 'Tailored Wide Trousers',
                        nameId: 'Celana Lebar Disesuaikan',
                        price: 2700000,
                        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoLTpiClEQE-SNQIOoHAxZY07tERzK-KqBYEO_CXS7wiENja9naQ6bNQTgZiQK1Tc7QqKxHljSr8ijg8qMkD2xKsiwsxAk0pQiB-h1ZASZHQNOyNvU0kcuvtG14nH4sXh9J7F54xE0imTEhX7bP2zRNRFaGqqO_dKsaDxmJQS8n-H0UOF6Ee2kCnT_1tjSZZkXBOz5qxLdGoagVezhWVzWe-m4K8550xYxmFbLl088Fcwye5xopV2YPqWgetNKDdTY4o87pxfX',
                        size: 'M',
                        color: 'Sand'
                    });
                }}
                className="absolute bottom-0 left-0 w-full bg-primary-container text-pure-white font-button-label text-button-label uppercase py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out hover:text-champagne-gold"
              >
                {isEn ? "Add to Cart" : "Tambah ke Keranjang"}
              </button>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-body-main text-body-main text-foreground font-bold mb-1">
                  {isEn ? "Tailored Wide Trousers" : "Celana Lebar Disesuaikan"}
                </h3>
                <p className="font-body-main text-[14px] text-muted-grey">
                  {isEn ? "Sand" : "Pasir"}
                </p>
              </div>
              <div className="text-right flex flex-col items-end">
                <span className="font-price-tag text-price-tag text-champagne-gold">Rp 2.700.000</span>
                <span className="font-price-tag text-[14px] text-muted-grey line-through">Rp 4.425.000</span>
              </div>
            </div>
          </div>

          {/* Product 4 */}
          <div className="product-card group relative flex flex-col">
            <div className="relative aspect-[361/510] bg-neutral-light dark:bg-[#1a1c1c] overflow-hidden mb-6 flex items-center justify-center">
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-primary-container text-champagne-gold font-button-label text-[10px] uppercase tracking-widest px-3 py-1">
                  {isEn ? "Last Pieces" : "Potongan Terakhir"}
                </span>
              </div>
              <Image className="product-image w-full h-full object-cover object-center image-blend transition-transform duration-500 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeVwli2so7dyt9bQUeUWJDoLlBUXf1Vb4K2-JMCGEc2Np4pxCAx7gKWkAi9VQkvVaedEhkCGyz-w2Om95UtrBLaP-6F6YDj2jgalcMAt0MKct8l6a_f1FKE8QOYs36DwylaomkdUQr6wJEaw72qB-AisbNJL6iaAacphWM48U1rL_TpFZndKrp4osxfBpNNKjfXsh9w7h-DbU5Qun_EUwhg9SLtXPIZBH7CqpzctseX-lgzTbXcGYUeCaU7EVlM9vMkVt9f7W8" alt={isEn ? "Minimalist Sunglasses" : "Kacamata Hitam Minimalis"} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              <button className="absolute bottom-0 left-0 w-full bg-primary-container text-pure-white font-button-label text-button-label uppercase py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out hover:text-champagne-gold">
                {isEn ? "Add to Cart" : "Tambah ke Keranjang"}
              </button>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-body-main text-body-main text-foreground font-bold mb-1">
                  {isEn ? "Fluid Silk Dress" : "Gaun Sutra Cair"}
                </h3>
                <p className="font-body-main text-[14px] text-muted-grey">
                  {isEn ? "Noir" : "Hitam"}
                </p>
              </div>
              <div className="text-right flex flex-col items-end">
                <span className="font-price-tag text-price-tag text-champagne-gold">Rp 4.350.000</span>
                <span className="font-price-tag text-[14px] text-muted-grey line-through">Rp 6.300.000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Load More */}
        <div className="mt-24 text-center">
          <button className="font-button-label text-button-label uppercase text-foreground border-b-2 border-foreground pb-1 hover:text-champagne-gold hover:border-champagne-gold transition-colors duration-300">
            {isEn ? "Discover More" : "Temukan Lebih Banyak"}
          </button>
        </div>
      </section>
      <Footer lang={isEn ? 'en' : 'id'} />
    </main>
  );
}

export default function SalePageWrapper() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <SalePage />
    </Suspense>
  );
}
