"use client";

import { Suspense } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function AccessoriesPage() {
  const { isEn } = useLanguage();
  const { addToCart } = useCart();

  return (
    <div className="bg-background text-on-surface font-body-main antialiased selection:bg-champagne-gold selection:text-deep-espresso">
      <Navbar lang={isEn ? 'en' : 'id'} />
      <main className="min-h-screen">
        {/* Hero Banner */}
        <section className="relative w-full h-[614px] md:h-[716px] flex items-center justify-center overflow-hidden mb-section-gap">
          <div
            className="absolute inset-0 bg-cover bg-center"
            data-alt="A highly detailed, editorial-style close-up photograph of a luxury leather handbag resting on a pristine white marble block. The lighting is dramatic and moody, emphasizing the rich texture of the deep black leather and the glint of champagne gold hardware. The background is a soft, out-of-focus studio setting, evoking a sense of high-end fashion and exclusivity. The overall aesthetic is modern, elegant, and sophisticated."
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDQ5F8_5ghmdkMAHHbHxw86_5MLcd21xBL4KnztEd3mUrTbN_PMjNxr1rZQbrjx9r4GyH9daYDjvOMGb9CVitWtzuxk8-AYTbzXr2u9vZImlcllM-ORT5MU8ZedDUvzUjUperQWILteCUgUqQBUmUoL9Kc2XPn_-q2aBnCDOh9mRQy5zEgcSS4_p7u0zkrnBVjrgp4qt2Cru37t2goYjHfEdHz2O6FcPTVUTJD4NLbEKRneKglhJ2_nSk5UTwFKgL2nixcZ62Lz')"
            }}
          ></div>
          <div className="absolute inset-0 bg-charcoal-black/50"></div>
          <div className="relative z-10 text-center px-margin-mobile">
            <h1 className="font-hero-title-mobile text-hero-title-mobile md:font-hero-title md:text-hero-title text-pure-white mb-4">
              {isEn ? 'Accessories' : 'Aksesoris'}
            </h1>
            <p className="font-body-main text-body-main text-pure-white max-w-2xl mx-auto opacity-90">
              {isEn
                ? 'Elevate your ensemble with our curated collection of luxury bags, fine jewelry, and statement eyewear. Crafted for the modern aesthete.'
                : 'Tingkatkan gaya Anda dengan koleksi tas mewah, perhiasan halus, dan kacamata statement kami. Dibuat untuk penikmat estetika modern.'}
            </p>
          </div>
        </section>

        {/* Filters & Sort */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-y border-white/10 py-6 gap-6">
            <div className="flex flex-wrap gap-4 font-button-label text-button-label uppercase">
              <button className="text-champagne-gold border-b-2 border-champagne-gold pb-1 tracking-widest">
                {isEn ? 'All' : 'Semua'}
              </button>
              <button className="text-on-surface-variant hover:text-pure-white dark:hover:text-champagne-gold transition-colors tracking-widest">
                {isEn ? 'Bags' : 'Tas'}
              </button>
              <button className="text-on-surface-variant hover:text-pure-white dark:hover:text-champagne-gold transition-colors tracking-widest">
                {isEn ? 'Jewelry' : 'Perhiasan'}
              </button>
              <button className="text-on-surface-variant hover:text-pure-white dark:hover:text-champagne-gold transition-colors tracking-widest">
                {isEn ? 'Eyewear' : 'Kacamata'}
              </button>
              <button className="text-on-surface-variant hover:text-pure-white dark:hover:text-champagne-gold transition-colors tracking-widest">
                {isEn ? 'Belts' : 'Sabuk'}
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-on-surface-variant">
                {isEn ? 'Sort by:' : 'Urutkan:'}
              </span>
              <button className="flex items-center space-x-2 text-sm hover:text-champagne-gold transition-colors">
                <span>{isEn ? 'Featured' : 'Unggulan'}</span>
                <span className="material-symbols-outlined text-[20px]">
                  expand_more
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-section-gap">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-gutter gap-y-16">
            {/* Product Card 1 */}
            <div className="group product-card-hover cursor-pointer flex flex-col">
              <div className="bg-neutral-light dark:bg-[#1a1c1c] aspect-3-4 mb-6 overflow-hidden relative flex items-center justify-center">
                <img
                  className="w-full h-full object-contain p-8 mix-blend-multiply dark:mix-blend-normal product-image transition-transform duration-500 ease-out"
                  data-alt="A professional studio shot of a sleek, minimalist black leather crossbody bag..."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe7iyvkHB5UwDXsQgrU3oUi60-zVQ8tJNFmWqkwu2l_zjKMrAeWJZG8Vvazr8I5D31jGREpkWl02w2LNP1_RouXCzo3L7xf6zDMJevsmI4nVa9o_DFQaf2jFR3bKQGKvqkQ-89EYQrU5tsf2kpE2PjmNM_JGTdRI_PCCgp5mDWC_Egl8fzC3xQLm-Q8Excm7WWLkemRNkFIixgmLD1oCTigorsSzbseXHOpxbCMeS1ktEXMhCjYPqXO0cqofStQpvsnTkJJatX"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-charcoal-black dark:bg-pure-white text-champagne-gold font-button-label text-xs uppercase px-3 py-1 tracking-widest">
                    {isEn ? 'New' : 'Baru'}
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart({
                        id: 'acc-1',
                        name: 'The Architectural Tote',
                        nameId: 'The Architectural Tote',
                        price: 12750000,
                        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAe7iyvkHB5UwDXsQgrU3oUi60-zVQ8tJNFmWqkwu2l_zjKMrAeWJZG8Vvazr8I5D31jGREpkWl02w2LNP1_RouXCzo3L7xf6zDMJevsmI4nVa9o_DFQaf2jFR3bKQGKvqkQ-89EYQrU5tsf2kpE2PjmNM_JGTdRI_PCCgp5mDWC_Egl8fzC3xQLm-Q8Excm7WWLkemRNkFIixgmLD1oCTigorsSzbseXHOpxbCMeS1ktEXMhCjYPqXO0cqofStQpvsnTkJJatX',
                        size: 'One Size',
                        color: 'Black'
                      });
                    }}
                    className="w-full bg-charcoal-black dark:bg-pure-white hover:bg-champagne-gold text-pure-white dark:text-charcoal-black font-button-label text-button-label uppercase py-4 transition-colors duration-300"
                  >
                    {isEn ? 'Add to Cart' : 'Tambah ke Keranjang'}
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-start mt-auto">
                <div>
                  <h3 className="font-button-label text-button-label uppercase tracking-widest text-on-surface mb-2">
                    {isEn ? 'The Architectural Tote' : 'The Architectural Tote'}
                  </h3>
                  <p className="font-price-tag text-price-tag text-on-surface-variant">
                    Rp 12.750.000
                  </p>
                </div>
                <button className="text-on-surface-variant hover:text-champagne-gold transition-colors">
                  <span className="material-symbols-outlined">
                    favorite_border
                  </span>
                </button>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="group product-card-hover cursor-pointer flex flex-col">
              <div className="bg-neutral-light dark:bg-[#1a1c1c] aspect-3-4 mb-6 overflow-hidden relative flex items-center justify-center">
                <img
                  className="w-full h-full object-contain p-12 mix-blend-multiply dark:mix-blend-normal product-image transition-transform duration-500 ease-out"
                  data-alt="A meticulously styled product photograph of a delicate gold chain necklace..."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBY0sLWBh-RJX3XQfJ4ok9Yow2rrqNCrxTcgACFDu6ww_DlRod2cC15fiZtYRMCruMS1UKi8-J4CkZFJDD1gsuty3WipCzQ1PQeYQe3uDoh6K0mbMEDh0dmnGSpBpFGfQj4Cu8QmuQT1dVjPJcCPmOm-kkr7aGYuu4GuqM8xQvdzWd6eajDcTUMSWnAo4_kRjYqGD4JZBbcOYSPQrlzb5H7mJkzsw7BtYokxSoaQVdzLtEMJxTXOdi7tZYpzHUOHzcEkBzWyGEK"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart({
                        id: 'acc-2',
                        name: 'Linear Gold Pendant',
                        nameId: 'Linear Gold Pendant',
                        price: 4800000,
                        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBY0sLWBh-RJX3XQfJ4ok9Yow2rrqNCrxTcgACFDu6ww_DlRod2cC15fiZtYRMCruMS1UKi8-J4CkZFJDD1gsuty3WipCzQ1PQeYQe3uDoh6K0mbMEDh0dmnGSpBpFGfQj4Cu8QmuQT1dVjPJcCPmOm-kkr7aGYuu4GuqM8xQvdzWd6eajDcTUMSWnAo4_kRjYqGD4JZBbcOYSPQrlzb5H7mJkzsw7BtYokxSoaQVdzLtEMJxTXOdi7tZYpzHUOHzcEkBzWyGEK',
                        size: 'One Size',
                        color: 'Gold'
                      });
                    }}
                    className="w-full bg-charcoal-black dark:bg-pure-white hover:bg-champagne-gold text-pure-white dark:text-charcoal-black font-button-label text-button-label uppercase py-4 transition-colors duration-300"
                  >
                    {isEn ? 'Add to Cart' : 'Tambah ke Keranjang'}
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-start mt-auto">
                <div>
                  <h3 className="font-button-label text-button-label uppercase tracking-widest text-on-surface mb-2">
                    {isEn ? 'Linear Gold Pendant' : 'Linear Gold Pendant'}
                  </h3>
                  <p className="font-price-tag text-price-tag text-on-surface-variant">
                    Rp 4.800.000
                  </p>
                </div>
                <button className="text-on-surface-variant hover:text-champagne-gold transition-colors">
                  <span className="material-symbols-outlined">
                    favorite_border
                  </span>
                </button>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="group product-card-hover cursor-pointer flex flex-col">
              <div className="bg-neutral-light dark:bg-[#1a1c1c] aspect-3-4 mb-6 overflow-hidden relative flex items-center justify-center">
                <img
                  className="w-full h-full object-contain p-8 mix-blend-multiply dark:mix-blend-normal product-image transition-transform duration-500 ease-out"
                  data-alt="A front-facing studio shot of thick-framed, oversized black sunglasses..."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ1DAAinXdvqTlFgc0tLVEkLVIkvefgzxvcmsccJAGD8VTnURVdYUIFfyH55zvdm5X2Us-y4ZuYDsbmsbGlrJNoRgwzkCjomT1N7itdlhYYQ7IzWnFtv2UtEEySpw4VdAsmIJRoE2yhJ4UKf0VZnreZE2afVhoWheNAuDCP2JoMY7sCYnxNduYh2Z2CKdxmo2QnljNpFvP_9ykAHDz47jGjPehXy3k0BKkfEgKXNNUDYVDwQHL-aldNn0SXlqZbIOMh3ySfduJ"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart({
                        id: 'acc-3',
                        name: 'Eclipse Sunglasses',
                        nameId: 'Eclipse Sunglasses',
                        price: 4200000,
                        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZ1DAAinXdvqTlFgc0tLVEkLVIkvefgzxvcmsccJAGD8VTnURVdYUIFfyH55zvdm5X2Us-y4ZuYDsbmsbGlrJNoRgwzkCjomT1N7itdlhYYQ7IzWnFtv2UtEEySpw4VdAsmIJRoE2yhJ4UKf0VZnreZE2afVhoWheNAuDCP2JoMY7sCYnxNduYh2Z2CKdxmo2QnljNpFvP_9ykAHDz47jGjPehXy3k0BKkfEgKXNNUDYVDwQHL-aldNn0SXlqZbIOMh3ySfduJ',
                        size: 'One Size',
                        color: 'Black'
                      });
                    }}
                    className="w-full bg-charcoal-black dark:bg-pure-white hover:bg-champagne-gold text-pure-white dark:text-charcoal-black font-button-label text-button-label uppercase py-4 transition-colors duration-300"
                  >
                    {isEn ? 'Add to Cart' : 'Tambah ke Keranjang'}
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-start mt-auto">
                <div>
                  <h3 className="font-button-label text-button-label uppercase tracking-widest text-on-surface mb-2">
                    {isEn ? 'Eclipse Sunglasses' : 'Eclipse Sunglasses'}
                  </h3>
                  <p className="font-price-tag text-price-tag text-on-surface-variant">
                    Rp 4.200.000
                  </p>
                </div>
                <button className="text-on-surface-variant hover:text-champagne-gold transition-colors">
                  <span className="material-symbols-outlined">
                    favorite_border
                  </span>
                </button>
              </div>
            </div>

            {/* Product Card 4 */}
            <div className="group product-card-hover cursor-pointer flex flex-col">
              <div className="bg-neutral-light dark:bg-[#1a1c1c] aspect-3-4 mb-6 overflow-hidden relative flex items-center justify-center">
                <img
                  className="w-full h-full object-contain p-10 mix-blend-multiply dark:mix-blend-normal product-image transition-transform duration-500 ease-out"
                  data-alt="A premium catalog image of a wide, textured black leather belt..."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9gvaS6R54RN98tE91Uih99kWt0posuzbgkUJ5fGUhYC0a7h3YAytgQj_gxkNzHguTdgZ_APOAIAyJnvKo3bfExIwjXFrrS1UokQK_-otLfJPaKW7pSdicvLMOFqKZ5Q-AH3Mv5Hjp0y-C22QLywneh8AdcB5Y8VrpUhImNT8oPZTsKmhWmnK63MpdgNML4u1QcvzWeKDZUq7vWVFsWWZu7NGtmC941WKzHqpYI5PKozJULkJLfH1lcWhk_IzcCMlAIQXFdd2l"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart({
                        id: 'acc-4',
                        name: 'Structured Waist Belt',
                        nameId: 'Structured Waist Belt',
                        price: 2925000,
                        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9gvaS6R54RN98tE91Uih99kWt0posuzbgkUJ5fGUhYC0a7h3YAytgQj_gxkNzHguTdgZ_APOAIAyJnvKo3bfExIwjXFrrS1UokQK_-otLfJPaKW7pSdicvLMOFqKZ5Q-AH3Mv5Hjp0y-C22QLywneh8AdcB5Y8VrpUhImNT8oPZTsKmhWmnK63MpdgNML4u1QcvzWeKDZUq7vWVFsWWZu7NGtmC941WKzHqpYI5PKozJULkJLfH1lcWhk_IzcCMlAIQXFdd2l',
                        size: 'One Size',
                        color: 'Black'
                      });
                    }}
                    className="w-full bg-charcoal-black dark:bg-pure-white hover:bg-champagne-gold text-pure-white dark:text-charcoal-black font-button-label text-button-label uppercase py-4 transition-colors duration-300"
                  >
                    {isEn ? 'Add to Cart' : 'Tambah ke Keranjang'}
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-start mt-auto">
                <div>
                  <h3 className="font-button-label text-button-label uppercase tracking-widest text-on-surface mb-2">
                    {isEn ? 'Structured Waist Belt' : 'Structured Waist Belt'}
                  </h3>
                  <p className="font-price-tag text-price-tag text-on-surface-variant">
                    Rp 2.925.000
                  </p>
                </div>
                <button className="text-on-surface-variant hover:text-champagne-gold transition-colors">
                  <span className="material-symbols-outlined">
                    favorite_border
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-24 flex justify-center">
            <button className="font-button-label text-button-label uppercase tracking-widest border-b-2 border-pure-white pb-1 hover:text-champagne-gold hover:border-champagne-gold transition-colors duration-300">
              {isEn ? 'Load More' : 'Muat Lebih Banyak'}
            </button>
          </div>
        </section>
      </main>
      <Footer lang={isEn ? 'en' : 'id'} />
    </div>
  );
}

export default function AccessoriesPageWrapper() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <AccessoriesPage />
    </Suspense>
  );
}
