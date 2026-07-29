"use client";

import { Suspense, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ShopProduct {
  id: string;
  name: string;
  color: string;
  price: string;
  rating: number;
  image: string;
  badge?: string;
  href: string;
}

function CollectionsPage() {
    const { isEn } = useLanguage();
    const [products, setProducts] = useState<ShopProduct[]>([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await fetch(`${process.env.BACKEND_URL || 'http://103.55.38.176:3001'}/products`, {
                    next: { revalidate: 0 }
                });
                if (res.ok) {
                    const data = await res.json();
                    setProducts(data.map((p: any) => ({
                        id: p.id,
                        name: p.nama_produk,
                        color: p.variants?.[0]?.warna || "Default",
                        price: new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(p.variants?.[0]?.harga || 0),
                        rating: 5.0,
                        image: p.image,
                        badge: p.badge,
                        href: `/shop/${p.id}`
                    })));
                }
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        }
        fetchProducts();
    }, []);

    return (
        <main className="w-full">
            <Navbar lang={isEn ? 'en' : 'id'} />
            {/* Hero Collection Section */}
            <section className="relative w-full min-h-[921px] bg-[#e8e8e8] dark:bg-surface-container-low flex items-center justify-center overflow-hidden pt-20 pb-section-gap px-margin-mobile md:px-margin-desktop">
                <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter items-center relative z-10 w-full">
                    <div className="flex flex-col gap-6 max-w-xl z-20">
                        <p className="font-button-label text-button-label text-brand-accent tracking-[0.2em] uppercase">
                            {isEn ? "Curated Vision" : "Visi Terkurasi"}
                        </p>
                        <h1 className="font-hero-title text-hero-title-mobile md:text-hero-title uppercase text-foreground leading-none">
                            {isEn ? "Summer" : "Musim Panas"} <br /> <span className="text-brand-accent">{isEn ? "2026" : "2026"}</span>
                        </h1>
                        <p className="font-body-main text-body-main text-foreground/80 max-w-md">
                            {isEn
                                ? "Embrace the warmth with our latest collection. Breathable fabrics, sunset hues, and silhouettes designed for the effortless modern wanderer."
                                : "Sambut kehangatan dengan koleksi terbaru kami. Kain yang sejuk, warna senja, dan siluet yang dirancang untuk pengembara modern yang bebas."}
                        </p>
                        <div className="mt-8">
                            <Link
                                href="#"
                                className="inline-flex items-center gap-3 border-b-2 border-foreground text-foreground pb-1 font-button-label text-button-label uppercase hover:text-brand-accent hover:border-brand-accent transition-colors duration-300"
                            >
                                {isEn ? "Explore Collection" : "Jelajahi Koleksi"} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                    <div className="relative h-[614px] md:h-[819px] w-full flex justify-end">
                        <div className="w-full md:w-4/5 h-full overflow-hidden bg-primary-container/10 relative" style={{ clipPath: 'ellipse(65% 50% at 50% 50%)' }}>
                            <img
                                alt="Tailored Wool Blazer"
                                className="object-cover w-full h-full transition-transform duration-1000 hover:scale-105"
                                style={{ mixBlendMode: 'multiply' }}
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0p4OLeRlO7AB8PdfVyTha5_XzoRomGLn8u3VkMMvH2BHcH9RWQ1b13vYveB2UIEIdRMT_Df4K77ZgYLn5c4m399LUFzUTyGnta9BQiXy--4cqIQbkCx-979Wuh5LXoikeMHHi2YwrsVaNHSqx1S7Quwju0H0-q7UGvZZKQ6JgkxX937ha1T4Gc2vnK6rmhZJgfauweUYzOvf0VXe5W7RSopAkgF3Qq351WYd5_q20ZOtsN4gu08jjMwI3cj2Dc-kUeM1pF3y6"
                            />
                        </div>
                    </div>
                </div>
                {/* Abstract background element */}
                <div className="absolute inset-0 pointer-events-none opacity-5">
                    <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern height="40" id="grid" patternUnits="userSpaceOnUse" width="40">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"></path>
                            </pattern>
                        </defs>
                        <rect fill="url(#grid)" height="100%" width="100%"></rect>
                    </svg>
                </div>
            </section>

            {/* Essential Minimalist Collection */}
            <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-white dark:bg-surface w-full">
                <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
                    <div className="lg:col-span-5 order-2 lg:order-1 relative">
                        <div className="aspect-[3/4] overflow-hidden bg-surface-container-low relative group">
                            <img
                                alt="Essential Minimalist"
                                className="object-cover w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAborvLao7rwq0Sa_goSX0k0VXcJKZURgGIrqyT0u5xk-dD78xVhDrw5Ub7cjkixcwKMTL6qSzP9vBL2WqfsmNVRKlojEEfiNqzRWKs6A8OP4aZCRVMScxXWrWByqFEvL2kYIkGlEIzmYK_JT-aU1cij08jbrg-EDgwyrjkUTD5u3N6VR085ORS9lEK2G9Gx6xs5CDmBloVuWlbJyiGvwsOlSVUu8Vinqun7UMjgodrTmxQmzVp01sd6HKHIO7-_dD1jliJHbk8"
                            />
                            <div className="absolute inset-0 border border-white/10 m-4 pointer-events-none"></div>
                        </div>
                        {/* Floating Accent */}
                        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-deep-espresso hidden md:flex items-center justify-center border border-white/5 z-10">
                            <span className="font-hero-title text-3xl text-surface-variant rotate-90">ESS</span>
                        </div>
                    </div>
                    <div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2 flex flex-col gap-6 pl-0 lg:pl-12">
                        <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-surface-container-high border border-black/10 dark:border-white/10 text-brand-accent dark:text-champagne-gold font-button-label text-[10px] tracking-widest uppercase w-max">
                            {isEn ? "Core" : "Inti"}
                        </span>
                        <h2 className="font-section-title text-section-title-mobile md:text-section-title uppercase text-brand-primary dark:text-pure-white leading-tight">
                            {isEn ? "Essential" : "Esensial"} <br /> {isEn ? "Minimalist" : "Minimalis"}
                        </h2>
                        <p className="font-body-main text-body-main text-brand-primary/80 dark:text-pure-white/80 max-w-md">
                            {isEn
                                ? "The foundation of a considered wardrobe. Stripped back to pure form and function, these pieces offer architectural precision for everyday life. Less, but definitively better."
                                : "Fondasi lemari pakaian yang dipertimbangkan. Dikembalikan ke bentuk dan fungsi murni, karya-karya ini menawarkan presisi arsitektural untuk kehidupan sehari-hari. Lebih sedikit, tetapi pastinya lebih baik."}
                        </p>
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="aspect-[361/510] bg-surface-container-lowest overflow-hidden group cursor-pointer relative">
                                <img
                                    alt="White Shirt Detail"
                                    className="object-cover w-full h-full opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ8KRubdiIYHd1okxlYIJO7v0LTwFV8Y9g0CHGjWfIyHp4GDjqLxTA8vo4CAeqMKN7NhrVhhGo4WI86xvthv6v5X5NawTWnqkq-VfceuIJOiN0-RhECGTc5rsfdTY8qh8DMWLBqdrLJMHgqfamyrVjRL_vdInItjy7UWNbij72uXO2CEtIWQ82e5ZR_MU9X9GYlr2-gEJzr5kB04iB4fDwpyg3sy5rpjeVH8oOLRcbhm054eU4ZCLV6bdiBMpAPiW4_PE2DyZv"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <span className="font-button-label text-xs uppercase text-pure-white">
                                        {isEn ? "The Perfect White Shirt" : "Kemeja Putih Sempurna"}
                                    </span>
                                </div>
                            </div>
                            <div className="aspect-[361/510] bg-surface-container-lowest overflow-hidden group cursor-pointer relative">
                                <img
                                    alt="Trousers Detail"
                                    className="object-cover w-full h-full opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc_tn5gZisv0WTIY8E71f-Xe5eNKGUleCqtYP6_0JwRyXgu-X-DwtPMHur_3iapmkiL6N-tJAuz3NEGbnpixgAdme4j8fVjRJgjCZPl3NDPppZJQK6r4RIP4oVeqeaIuhkXCCEVMQ-iDkO8WAmk6pcpA2YN0t-o5NhqL3JNmlpISkzegM_lVRSt7SgaeBPlLGbmIZyhmbdB5JoDS2ICWkF7fpdEnEFLQHMJHb4rJEwT4Q3AHdFDAdRRYFt0fVUYWLHIXldJ6VL"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <span className="font-button-label text-xs uppercase text-pure-white">
                                        {isEn ? "Tailored Trousers" : "Celana Panjang Disesuaikan"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sustainable Luxury Full Bleed */}
            <section className="relative w-full min-h-[819px] flex items-center py-section-gap overflow-hidden rounded-b-[80px]">
                <div className="absolute inset-0 w-full h-full z-0">
                    <img
                        alt="Sustainable Nature Background"
                        className="object-cover w-full h-full"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGUMJ1BJbU_FtGxRISfrCoQL_PpxYqaLQ9ooGaj--K0qxy6VRmjOSCYx7lwqPUy4yU3OAMo-r2SuSnkJ_v5sVwemDa1TWqVF0U5r1gfyLUYt2vY7vSUrvceGmBFMCixVEdxAyrAI7qANWghyWU_yiLCbo3bvEKslzgXeuKyfgtPiKQqSzzebf5fit-cb8c7VAZC9Xq9E3u_jt6U8h50hoLoCCCv0JM4Ts-NrOMbSDzdq2OcbjyhLbaWbYG1xuDPQ4mum-UU5ij"
                    />
                    <div className="absolute inset-0 bg-charcoal-black/60"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-black via-transparent to-transparent"></div>
                </div>
                <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 w-full flex flex-col items-center text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-champagne-gold/30 mb-8 backdrop-blur-sm">
                        <span className="material-symbols-outlined text-champagne-gold" style={{ fontVariationSettings: "'FILL' 0" }}>eco</span>
                    </div>
                    <h2 className="font-hero-title text-hero-title-mobile md:text-hero-title uppercase text-pure-white mb-6">
                        {isEn ? "Sustainable" : "Berkelanjutan"} <br /> <span className="italic font-light text-champagne-gold">{isEn ? "Luxury" : "Mewah"}</span>
                    </h2>
                    <p className="font-body-main text-body-main text-pure-white/80 max-w-2xl mx-auto mb-12">
                        {isEn
                            ? "Committed to a greener future. This collection features 100% recycled materials, ethically sourced natural fibers, and a closed-loop production process. Elegance without compromise."
                            : "Berkomitmen untuk masa depan yang lebih hijau. Koleksi ini menampilkan 100% bahan daur ulang, serat alami yang bersumber secara etis, dan proses produksi loop tertutup. Keanggunan tanpa kompromi."}
                    </p>
                    <button className="bg-primary-container text-pure-white px-8 py-4 font-button-label text-button-label uppercase tracking-widest hover:bg-champagne-gold hover:text-primary-container transition-colors duration-300 rounded-none border border-white/10">
                        {isEn ? "Discover The Initiative" : "Temukan Inisiatif"}
                    </button>
                </div>
            </section>
            <Footer lang={isEn ? 'en' : 'id'} />
        </main>
    );
}

export default function CollectionsPageWrapper() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <CollectionsPage />
    </Suspense>
  );
}
