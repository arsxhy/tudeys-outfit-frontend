"use client";

import { Suspense, useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShopProductCard, { ShopProduct } from "@/components/ShopProductCard";

function WomenPage() {
  const { isEn } = useLanguage();
  const [products, setProducts] = useState<ShopProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${process.env.BACKEND_URL || 'http://103.55.38.176:3001'}/products`);
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
          setProducts(formattedProducts.filter((p: any) => p.category === 'Women'));
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const lang = isEn ? "en" : "id";

  return (
    <div className="bg-background text-on-surface font-body-main antialiased selection:bg-champagne-gold selection:text-deep-espresso">
      <Navbar lang={lang} />
      
      <main className="w-full">
        {/* Hero Section */}
        <section className="relative w-full h-[819px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-neutral-light dark:bg-[#1a1c1c]">
            <img 
              alt={isEn ? "Women's Collection Hero" : "Hero Koleksi Wanita"} 
              className="w-full h-full object-cover object-top opacity-90" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfSAPh5zg6xb7LKk9Jhlp5X00Zm99UmpYV8-MiwtoaRmSrM3utDcpAN4o620auG1j8rRVMR4tT_a1y8Tm5Kz1mACp3cjfxaH9GJuwp8_hUO9W6NP5xVPqTYhddkP0yP2JlI6llhBcgtVKPJRJNSriQW3T128lPeGH_7VJgaIcbJn-u6XCCouXE37TMzNxvLzqZfJVcrOhskwZ76F1L3twxAWUdrTK9jHHHJQlL9zt_p1fA8bFRVO7xXYXxpWEi8GqqaK78TWYq" 
            />
          </div>
          <div className="relative z-10 text-center flex flex-col items-center">
            <h1 className="font-hero-title text-hero-title-mobile md:text-hero-title text-pure-white mb-6 uppercase tracking-widest">
              {isEn ? "Women" : "Wanita"}
            </h1>
            <p className="font-body-main text-body-main text-pure-white/90 max-w-lg mb-8 px-4">
              {isEn 
                ? "Discover a curated selection of sophisticated silhouettes, impeccable tailoring, and timeless elegance." 
                : "Temukan pilihan siluet canggih, jahitan sempurna, dan keanggunan abadi."}
            </p>
            <a className="font-button-label text-button-label uppercase text-pure-white border-b-2 border-pure-white hover:text-champagne-gold hover:border-champagne-gold transition-colors pb-1" href="#collection">
              {isEn ? "Explore Collection" : "Jelajahi Koleksi"}
            </a>
          </div>
        </section>

        {/* Product Grid */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-16 py-[120px]" id="collection">
          <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-6">
            <h2 className="font-section-title text-[30px] md:text-[48px] font-bold uppercase">
              {isEn ? "New Arrivals" : "Kedatangan Baru"}
            </h2>
            <div className="flex items-center space-x-4">
              <button className="text-on-surface-variant hover:text-champagne-gold transition-colors font-button-label text-[14px] uppercase tracking-widest flex items-center gap-2 font-semibold">
                {isEn ? "Filter" : "Saring"} <span className="material-symbols-outlined text-sm">tune</span>
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-16">
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
            <a className="font-button-label text-[14px] font-semibold uppercase text-on-surface border-b border-white/20 hover:text-champagne-gold hover:border-champagne-gold transition-colors pb-1 tracking-widest" href="#">
              {isEn ? "View All New Arrivals" : "Lihat Semua Kedatangan Baru"}
            </a>
          </div>
        </section>

        {/* Editorial Lookbook Banner */}
        <section className="w-full h-[614px] md:h-[819px] relative overflow-hidden bg-deep-espresso mt-[120px]">
          <div className="absolute inset-0">
            <img 
              alt={isEn ? "Editorial Lookbook" : "Lookbook Editorial"} 
              className="w-full h-full object-cover opacity-60" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1wo6wSMi2dUgHCpvW9_RLUwucXbZH3T_DtUsMpsfO5BwPyWFPjPR2kDK_sHiWpKIvLZuiiGOnZ0VM0rCYoOBlaxg_9jpaAHV7pgRSJSRcwBIw7dY2ax_TSUEzOWQi5K1OHzn3YjL-ZuTSfCy45r8ZkToXjmamcSCyayGCCD3lpYa50WER26ZRPjvp9adDuVmH1d37bIezBg8FOK7qkzg6pV_PkT7PSwyaU1_hYgN05BTsK1DRfHA1-Hljjh8D-8HeDTqD5iBM" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-black via-transparent to-transparent opacity-80"></div>
          </div>
          <div className="relative z-10 h-full flex flex-col justify-end p-4 md:p-16 max-w-[1440px] mx-auto">
            <div className="max-w-2xl">
              <h2 className="font-hero-title text-[48px] md:text-[72px] font-black text-pure-white uppercase mb-4">
                {isEn ? "The Evening Edit" : "Edisi Malam"}
              </h2>
              <p className="font-body-main text-[16px] text-on-surface-variant mb-8 text-lg">
                {isEn 
                  ? "A masterclass in modern after-dark dressing. Discover our latest curation of event-ready silhouettes designed with architectural precision." 
                  : "Kelas master dalam berpakaian malam modern. Temukan kurasi terbaru kami untuk siluet siap acara yang dirancang dengan presisi arsitektural."}
              </p>
              <a className="inline-block bg-pure-white text-charcoal-black font-button-label text-[14px] font-semibold uppercase px-8 py-4 hover:bg-champagne-gold transition-colors" href="#">
                {isEn ? "Explore the Edit" : "Jelajahi Edisi"}
              </a>
            </div>
          </div>
        </section>

        
      </main>
      
      <Footer lang={lang} />
    </div>
  );
}

export default function WomenPageWrapper() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <WomenPage />
    </Suspense>
  );
}

