"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ShopProductCard, { ShopProduct } from "@/components/ShopProductCard";

function MenPage() {
  const { isEn } = useLanguage();
  const [products, setProducts] = useState<ShopProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/products`);
        if (res.ok) {
          const data = await res.json();
          const formattedProducts = data.map((p: any) => ({
            id: p.id,
            name: p.nama_produk,
            color: p.variants?.[0]?.warna || "Default",
            price: new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(p.variants?.[0]?.harga || 0),
            rating: 5.0,
            image: p.image,
            badge: p.badge,
            href: `/shop/${p.id}`,
            category: p.category?.nama_kategori
          }));
          setProducts(formattedProducts.filter((p: any) => p.category === 'Men'));
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="bg-background text-on-surface font-body-main antialiased selection:bg-champagne-gold selection:text-deep-espresso">
      <Navbar lang={isEn ? 'en' : 'id'} />
      <main className="w-full">
        {/* Hero Section */}
        <section className="relative w-full h-[819px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-neutral-light dark:bg-[#1a1c1c]">
            <img 
              alt={isEn ? "Men's Collection Hero" : "Hero Koleksi Pria"} 
              className="w-full h-full object-cover object-top opacity-90" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuACmw3fY3SUxxAQsUz5swrLNZZuoBC-I1FR_Elw_6U5xzh_r49TfDgZ3IS1Yli-KVSfs34HF-MydwQ_yBd8azhr-Mu2axJKNfBB7ZEBufSi48PYZVmCbkU71wAWqhU6OA1DwDD3euPVCp9XSdU6OnKeIfoV15hdSU0DhSVNvGijlZr8ak5KfO2pptaahzF1gBrISqScAcHNnaywpGJvnWyKeXk1E5ALzxKLWCxbIVysAV31eMywEii0CjvKh2Qi2rNkDbcghlA_"
            />
          </div>
          <div className="relative z-10 text-center flex flex-col items-center mt-32">
            <h1 className="font-hero-title text-hero-title-mobile md:text-hero-title text-pure-white">
              {isEn ? 'Men' : 'Pria'}
            </h1>
            <p className="font-body-main text-body-main text-pure-white/80 max-w-lg mb-8 px-4">
              {isEn 
                ? 'Architectural precision meets sustainable luxury. Discover the new standard in modern menswear.' 
                : 'Presisi arsitektural berpadu dengan kemewahan berkelanjutan. Temukan standar baru dalam pakaian pria modern.'}
            </p>
            <a className="font-button-label text-button-label uppercase text-pure-white dark:text-charcoal-black border-b-2 border-pure-white hover:text-champagne-gold hover:border-champagne-gold transition-colors pb-1" href="#collection">
              {isEn ? 'Explore Collection' : 'Jelajahi Koleksi'}
            </a>
          </div>
        </section>

        {/* Product Grid */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap" id="collection">
          <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-6">
            <h2 className="font-section-title text-section-title-mobile md:text-section-title uppercase">
              {isEn ? 'New Arrivals' : 'Pendatang Baru'}
            </h2>
            <div className="flex items-center space-x-4">
              <button className="text-on-surface-variant hover:text-champagne-gold transition-colors font-button-label text-button-label uppercase tracking-widest flex items-center gap-2">
                {isEn ? 'Filter' : 'Saring'} <span className="material-symbols-outlined text-sm">tune</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-gutter gap-y-16">
            {loading ? (
              <div className="col-span-full text-center py-12">Loading...</div>
            ) : products.length > 0 ? (
              products.map((product, index) => (
                <ShopProductCard key={product.id} product={product} priority={index < 4} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">No products found.</div>
            )}
          </div>
          <div className="flex justify-center mt-16">
            <a className="font-button-label text-button-label uppercase text-on-surface border-b border-white/20 hover:text-champagne-gold hover:border-champagne-gold transition-colors pb-1 tracking-widest" href="#">
              {isEn ? 'View All Menswear' : 'Lihat Semua Pakaian Pria'}
            </a>
          </div>
        </section>

        {/* Editorial Lookbook Banner */}
        <section className="w-full h-[614px] md:h-[819px] relative overflow-hidden bg-deep-espresso mt-section-gap">
          <div className="absolute inset-0">
            <img 
              alt={isEn ? "Editorial Lookbook" : "Lookbook Editorial"} 
              className="w-full h-full object-cover opacity-60" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD76IHovpiSVKk1b7GOruIY8BemLJU98y-zag2mzB2e1wg3MsokIEeCkyWHs5O8KX-A21XT0_eSaz1eKzcl_SIIatlann7c2RAI5wxuBg8JY7AAJ4oKDcx2k2vSUJTFkoJMdS-YI2Qaeg1Jk9a_XfLaJH2-Uxx62F7zWEM526wUetDZulUF7chingUWVbq7noNctHEM3WARS4T05iKJMtWwQRg1Bvew4QPcKU1Ca6ax4L7idhd5FpkoXv43ToT_GIKRJwf8ZaOH"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-black via-transparent to-transparent opacity-80"></div>
          </div>
          <div className="relative z-10 h-full flex flex-col justify-end p-margin-mobile md:p-margin-desktop max-w-container-max mx-auto">
            <div className="max-w-2xl">
              <h2 className="font-hero-title text-hero-title-mobile md:text-hero-title text-pure-white dark:text-charcoal-black uppercase mb-4">
                {isEn ? 'The Tailored Edit' : 'Edisi Khusus'}
              </h2>
              <p className="font-body-main text-body-main text-on-surface-variant mb-8 text-lg">
                {isEn 
                  ? 'A masterclass in modern dressing. Discover our latest curation of silhouettes designed with architectural precision.' 
                  : 'Mahakarya dalam berpakaian modern. Temukan kurasi siluet terbaru kami yang dirancang dengan presisi arsitektural.'}
              </p>
              <a className="inline-block bg-pure-white dark:bg-charcoal-black text-charcoal-black dark:text-pure-white font-button-label text-button-label uppercase px-8 py-4 hover:bg-champagne-gold transition-colors" href="#">
                {isEn ? 'Explore the Edit' : 'Jelajahi Edisi'}
              </a>
            </div>
          </div>
        </section>


      </main>
      <Footer lang={isEn ? 'en' : 'id'} />
    </div>
  );
}

export default function MenPageWrapper() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <MenPage />
    </Suspense>
  );
}
