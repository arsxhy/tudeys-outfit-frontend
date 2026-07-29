"use client";

import { Suspense } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function NewArrivalsPage() {
    const { isEn } = useLanguage();
    const { addToCart } = useCart();

    return (
        <div className="bg-background text-on-surface font-body-main antialiased selection:bg-champagne-gold selection:text-deep-espresso">
            <Navbar lang={isEn ? 'en' : 'id'} />
            {/* Hero Section */}
            <section className="relative w-full h-[819px] md:h-[921px] flex items-center justify-center overflow-hidden mb-section-gap">
                <div className="absolute inset-0 z-0 bg-neutral-light dark:bg-[#1a1c1c]">
                    <div 
                        className="w-full h-full bg-cover bg-center image-blend opacity-80" 
                        data-alt="High-end editorial fashion photography featuring a model in a stark, minimalist environment."
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCVdMpo0NynR_y6RQBDwba2GLE0a_5x0F2Sbp38fHziuUbNRmOJ5wLSCZAJmPoabOTuZ-S338zAthrcmdkQdSG_JDuTYdPfJQB2jLQOeI35P9wiAFx4Fw4nYk3t2zxT05jqVlZXFbMq71PGmplDJRskuuj6pedE35p8igEmmxmp8P1yXfzv_0oj8z98QKF4MccVJpcttKYOY43NVuPJ-7fWb7VY-HJZ7Z5xBnvvnu_gH-b5VigL93scQ_1rrFRXCxele9ULKIFk')" }}
                    ></div>
                    {/* Overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-espresso via-transparent to-transparent opacity-90"></div>
                </div>

                <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop mt-32">
                    <h1 className="font-hero-title-mobile text-hero-title-mobile md:font-hero-title md:text-hero-title text-pure-white uppercase mb-6 tracking-widest drop-shadow-lg">
                        {isEn ? (
                            <>The 2026<br/><span className="text-champagne-gold">Arrivals</span></>
                        ) : (
                            <>Kedatangan<br/><span className="text-champagne-gold">2026</span></>
                        )}
                    </h1>
                    <p className="font-body-main text-body-main text-pure-white/90 drop-shadow-md max-w-lg mx-auto mb-10">
                        {isEn 
                            ? "Discover the latest silhouettes defining modern elegance. Engineered for the sophisticated urban environment, where luxury meets architectural minimalism." 
                            : "Temukan siluet terbaru yang mendefinisikan keanggunan modern. Dirancang untuk lingkungan urban yang canggih, di mana kemewahan bertemu dengan minimalisme arsitektur."}
                    </p>
                    <a href="#just-in" className="inline-block bg-primary-container text-pure-white font-button-label text-button-label uppercase px-8 py-4 tracking-widest hover:bg-champagne-gold hover:text-deep-espresso transition-colors duration-300 rounded-none border border-white/10 hover:border-champagne-gold">
                        {isEn ? "Explore Collection" : "Jelajahi Koleksi"}
                    </a>
                </div>
            </section>

            {/* Content Area: New Arrivals Grid */}
            <section id="just-in" className="w-full bg-[#f8f8f8] dark:bg-surface py-section-gap mb-section-gap">
                <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
                    <div className="flex justify-between items-end mb-12 border-b border-black/10 dark:border-white/10 pb-6">
                        <h2 className="font-section-title-mobile text-section-title-mobile md:font-section-title md:text-section-title text-deep-espresso dark:text-pure-white">
                            {isEn ? "JUST IN" : "BARU MASUK"}
                        </h2>
                        <div className="hidden md:flex gap-6">
                            <button className="font-button-label text-button-label uppercase tracking-widest text-deep-espresso border-b border-deep-espresso dark:text-champagne-gold dark:border-champagne-gold pb-1 font-bold">
                                {isEn ? "All" : "Semua"}
                            </button>
                            <button className="font-button-label text-button-label uppercase tracking-widest text-deep-espresso/60 hover:text-deep-espresso dark:text-pure-white/60 dark:hover:text-champagne-gold transition-colors">
                                {isEn ? "Outerwear" : "Pakaian Luar"}
                            </button>
                            <button className="font-button-label text-button-label uppercase tracking-widest text-deep-espresso/60 hover:text-deep-espresso dark:text-pure-white/60 dark:hover:text-champagne-gold transition-colors">
                                {isEn ? "Essentials" : "Esensial"}
                            </button>
                        </div>
                    </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
                    {/* Product Card 1 */}
                    <article className="product-card group relative bg-surface-container-low overflow-hidden cursor-pointer">
                        <div className="absolute top-4 left-4 z-20">
                            <span className="bg-primary-container text-champagne-gold font-button-label text-button-label uppercase px-3 py-1 border border-white/10">
                                {isEn ? "New" : "Baru"}
                            </span>
                        </div>
                        <div className="relative w-full aspect-product overflow-hidden bg-neutral-light dark:bg-[#1a1c1c]">
                            <Image className="product-image w-full h-full object-cover object-center image-blend transition-transform duration-500 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEF__Ilwq0AxbAs1l4IK_in41pEXCgcPgPYtbhBmni6FHfQ6JuWIXuoCWs3DHkPC4d7s3NPtYwLTnp81r8EUN-lowveUFdLs6KUiWUxg0p0Jm0JjZLcs5op5tFrMkBCbvoN6iADwU5MIcKQ1gxeBfmyeDigKXA15wWXGsVuAc71YmUPFYyId1L0HbVs2FI0_PPiX-sqruGlP7C4YTM0hJGkb7IpgBexZ4it39DN-oFkLZwMOrtMLwpVMGMgZo99nUniEmmjaaJ" alt={isEn ? "Obsidian Trench" : "Trench Obsidian"} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                            {/* Hover Add to Cart */}
                            <div className="absolute bottom-0 left-0 w-full bg-deep-espresso/90 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                                <button 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        addToCart({
                                            id: 'new-1',
                                            name: 'Obsidian Trench',
                                            nameId: 'Trench Obsidian',
                                            price: 13425000,
                                            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEF__Ilwq0AxbAs1l4IK_in41pEXCgcPgPYtbhBmni6FHfQ6JuWIXuoCWs3DHkPC4d7s3NPtYwLTnp81r8EUN-lowveUFdLs6KUiWUxg0p0Jm0JjZLcs5op5tFrMkBCbvoN6iADwU5MIcKQ1gxeBfmyeDigKXA15wWXGsVuAc71YmUPFYyId1L0HbVs2FI0_PPiX-sqruGlP7C4YTM0hJGkb7IpgBexZ4it39DN-oFkLZwMOrtMLwpVMGMgZo99nUniEmmjaaJ',
                                            size: 'M',
                                            color: 'Black'
                                        });
                                    }}
                                    className="w-full py-4 text-center font-button-label text-button-label uppercase tracking-widest text-pure-white hover:text-champagne-gold transition-colors"
                                >
                                    {isEn ? "Add to Cart" : "Tambah ke Keranjang"}
                                </button>
                            </div>
                        </div>
                        <div className="p-6 bg-white dark:bg-charcoal-black flex justify-between items-start">
                            <div>
                                <h3 className="font-button-label text-button-label text-brand-primary dark:text-pure-white mb-2 uppercase tracking-wide">
                                    {isEn ? "Obsidian Trench" : "Trench Obsidian"}
                                </h3>
                                <p className="font-price-tag text-price-tag text-muted-grey">Rp 13.425.000</p>
                            </div>
                            <div className="flex gap-1 text-champagne-gold">
                                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            </div>
                        </div>
                    </article>

                    {/* Product Card 2 */}
                    <article className="product-card group relative bg-surface-container-low overflow-hidden cursor-pointer">
                        <div className="absolute top-4 left-4 z-20">
                            <span className="bg-primary-container text-champagne-gold font-button-label text-button-label uppercase px-3 py-1 border border-white/10">
                                {isEn ? "Limited" : "Terbatas"}
                            </span>
                        </div>
                        <div className="relative w-full aspect-product overflow-hidden bg-neutral-light dark:bg-[#1a1c1c]">
                            <Image className="product-image w-full h-full object-cover object-center image-blend transition-transform duration-500 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoE7OinUmsY-RqxisnPPrUg_SEtqAAd8UkJ0RJKthaQYmEp-5zICsPQnvK8So3Dsz2OOaTOTU_Bxs2C-o9wagRGa3t0OYrA1XQTCjiq3SExDs2hpZfC1159XvN6RXPLC0uFHegmxXGmTeO0jiE6l0_2olMaSom7NxaTptTTLgDgvmAMqZU92iQ0xnzUXwjBKxoRWyajv3HzZvN4TqNd9SKK-RyFpxE4dLYvLmqp_Wg6mNAD19a_VFwYPSnL4BYg59kgH8OQUrD" alt={isEn ? "Asymmetric Silk Blouse" : "Blus Sutra Asimetris"} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                            <div className="absolute bottom-0 left-0 w-full bg-deep-espresso/90 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                                <button 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        addToCart({
                                            id: 'new-2',
                                            name: 'Asymmetric Silk Blouse',
                                            nameId: 'Blus Sutra Asimetris',
                                            price: 6300000,
                                            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoE7OinUmsY-RqxisnPPrUg_SEtqAAd8UkJ0RJKthaQYmEp-5zICsPQnvK8So3Dsz2OOaTOTU_Bxs2C-o9wagRGa3t0OYrA1XQTCjiq3SExDs2hpZfC1159XvN6RXPLC0uFHegmxXGmTeO0jiE6l0_2olMaSom7NxaTptTTLgDgvmAMqZU92iQ0xnzUXwjBKxoRWyajv3HzZvN4TqNd9SKK-RyFpxE4dLYvLmqp_Wg6mNAD19a_VFwYPSnL4BYg59kgH8OQUrD',
                                            size: 'M',
                                            color: 'Default'
                                        });
                                    }}
                                    className="w-full py-4 text-center font-button-label text-button-label uppercase tracking-widest text-pure-white hover:text-champagne-gold transition-colors"
                                >
                                    {isEn ? "Add to Cart" : "Tambah ke Keranjang"}
                                </button>
                            </div>
                        </div>
                        <div className="p-6 bg-white dark:bg-charcoal-black flex justify-between items-start">
                            <div>
                                <h3 className="font-button-label text-button-label text-brand-primary dark:text-pure-white mb-2 uppercase tracking-wide">
                                    {isEn ? "Asymmetric Silk Blouse" : "Blus Sutra Asimetris"}
                                </h3>
                                <p className="font-price-tag text-price-tag text-muted-grey">Rp 6.300.000</p>
                            </div>
                            <div className="flex gap-1 text-champagne-gold">
                                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span className="material-symbols-outlined text-sm">star</span>
                            </div>
                        </div>
                    </article>

                    {/* Product Card 3 */}
                    <article className="product-card group relative bg-surface-container-low overflow-hidden cursor-pointer">
                        <div className="absolute top-4 left-4 z-20">
                            <span className="bg-primary-container text-pure-white font-button-label text-button-label uppercase px-3 py-1 border border-white/10">
                                {isEn ? "Sustainable" : "Berkelanjutan"}
                            </span>
                        </div>
                        <div className="relative w-full aspect-product overflow-hidden bg-neutral-light dark:bg-[#1a1c1c]">
                            <Image className="product-image w-full h-full object-cover object-center image-blend transition-transform duration-500 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbQa68hl5CXfnx7N0r4zHdEeH5Uc7BkVQ3fAZ_3fw3xR1jZFXce-j7CUlkSIv-42Dtv7Y9kOw4ZV1_hGVVMV1_2Yq7VKsKP-dN0BKlDkAlFhz2rAGkUsqI0LCVfSHjejvAZMkXm3kJnGrpjZ8zN5eFQ2eUzoTwDerak0RklRsbrhcXb5I4hOqMrywiECNFi9zl2Jp5oUkN55Wy8_e_zncaDkdcelaPU6t7KwLjIf1IqApDM2CaT2PXg8cPhbbFFB1kitjslmIw" alt={isEn ? "Architect Trousers" : "Celana Arsitek"} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                            <div className="absolute bottom-0 left-0 w-full bg-deep-espresso/90 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                                <button 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        addToCart({
                                            id: 'new-3',
                                            name: 'Architect Trousers',
                                            nameId: 'Celana Arsitek',
                                            price: 5700000,
                                            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbQa68hl5CXfnx7N0r4zHdEeH5Uc7BkVQ3fAZ_3fw3xR1jZFXce-j7CUlkSIv-42Dtv7Y9kOw4ZV1_hGVVMV1_2Yq7VKsKP-dN0BKlDkAlFhz2rAGkUsqI0LCVfSHjejvAZMkXm3kJnGrpjZ8zN5eFQ2eUzoTwDerak0RklRsbrhcXb5I4hOqMrywiECNFi9zl2Jp5oUkN55Wy8_e_zncaDkdcelaPU6t7KwLjIf1IqApDM2CaT2PXg8cPhbbFFB1kitjslmIw',
                                            size: 'M',
                                            color: 'Default'
                                        });
                                    }}
                                    className="w-full py-4 text-center font-button-label text-button-label uppercase tracking-widest text-pure-white hover:text-champagne-gold transition-colors"
                                >
                                    {isEn ? "Add to Cart" : "Tambah ke Keranjang"}
                                </button>
                            </div>
                        </div>
                        <div className="p-6 bg-white dark:bg-charcoal-black flex justify-between items-start">
                            <div>
                                <h3 className="font-button-label text-button-label text-brand-primary dark:text-pure-white mb-2 uppercase tracking-wide">
                                    {isEn ? "Architect Trousers" : "Celana Arsitek"}
                                </h3>
                                <p className="font-price-tag text-price-tag text-muted-grey">Rp 5.700.000</p>
                            </div>
                            <div className="flex gap-1 text-champagne-gold">
                                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            </div>
                        </div>
                    </article>
                </div>

                <div className="mt-16 flex justify-center">
                    <a href="#" className="font-button-label text-button-label uppercase tracking-widest border-b border-brand-primary dark:border-pure-white dark:border-charcoal-black dark:border-pure-white text-brand-primary dark:text-pure-white pb-1 hover:text-brand-accent hover:border-brand-accent transition-colors duration-300">
                        {isEn ? "View All New Arrivals" : "Lihat Semua Koleksi Baru"}
                    </a>
                </div>
                </div>
            </section>
            <Footer lang={isEn ? 'en' : 'id'} />
        </div>
    );
}

export default function NewArrivalsPageWrapper() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <NewArrivalsPage />
    </Suspense>
  );
}
