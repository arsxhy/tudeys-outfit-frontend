"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";

export default function ProductDetailPage() {
    const { isEn } = useLanguage();
    const { addToCart } = useCart();

    const [selectedColor, setSelectedColor] = useState("Charcoal");
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [openAccordion, setOpenAccordion] = useState<string>("Details & Care");

    const toggleAccordion = (name: string) => {
        setOpenAccordion(openAccordion === name ? "" : name);
    };

    return (
        <div className="min-h-screen bg-background">
            <Navbar lang={isEn ? "en" : "id"} />
            <main>
                <section className="max-w-[1440px] mx-auto px-4 md:px-16 pt-10 md:pt-20 grid grid-cols-1 lg:grid-cols-2 gap-6 mb-24">
                    {/* Product Gallery (Left) */}
                    <div className="relative overflow-hidden bg-[#f0f0f0] dark:bg-[#1a1814]">
                        <div className="aspect-[3/4] md:aspect-auto md:h-full w-full overflow-hidden relative">
                            <Image 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0p4OLeRlO7AB8PdfVyTha5_XzoRomGLn8u3VkMMvH2BHcH9RWQ1b13vYveB2UIEIdRMT_Df4K77ZgYLn5c4m399LUFzUTyGnta9BQiXy--4cqIQbkCx-979Wuh5LXoikeMHHi2YwrsVaNHSqx1S7Quwju0H0-q7UGvZZKQ6JgkxX937ha1T4Gc2vnK6rmhZJgfauweUYzOvf0VXe5W7RSopAkgF3Qq351WYd5_q20ZOtsN4gu08jjMwI3cj2Dc-kUeM1pF3y6" 
                                alt="Tailored Wool Blazer Detail" 
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 hover:scale-105 mix-blend-multiply image-blend"
                            />
                        </div>
                    </div>

                    {/* Product Info (Right) */}
                    <div className="flex flex-col justify-center py-8 lg:py-0 lg:pl-12">
                        {/* Breadcrumbs */}
                        <nav className="flex mb-8 space-x-2 font-heading text-[12px] font-semibold uppercase tracking-widest text-[#737373]">
                            <Link className="hover:text-[#151515] dark:hover:text-white transition-colors" href="/shop">Shop</Link>
                            <span>/</span>
                            <Link className="hover:text-[#151515] dark:hover:text-white transition-colors" href="/men">{isEn ? "Men" : "Pria"}</Link>
                            <span>/</span>
                            <span className="text-[#151515] dark:text-white">{isEn ? "Blazers" : "Jas"}</span>
                        </nav>
                        
                        <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold uppercase mb-4 tracking-tighter text-[#151515] dark:text-white">
                            {isEn ? "TAILORED WOOL BLAZER" : "BLAZER WOL DISESUAIKAN"}
                        </h1>
                        
                        <div className="flex items-baseline space-x-4 mb-10">
                            <span className="font-sans text-lg font-bold text-[#151515] dark:text-white">Rp 4.499.000</span>
                            <span className="text-[#737373] text-[13px] uppercase tracking-wider italic">
                                {isEn ? "Inc. All Taxes" : "Termasuk Pajak"}
                            </span>
                        </div>

                        {/* Color Selection */}
                        <div className="mb-8">
                            <p className="font-heading text-sm font-semibold uppercase mb-4 tracking-widest text-[#151515] dark:text-white">
                                {isEn ? "Color" : "Warna"}: <span className="text-[#737373] font-normal">{selectedColor}</span>
                            </p>
                            <div className="flex space-x-4">
                                <button 
                                    onClick={() => setSelectedColor("Charcoal")}
                                    className={`w-8 h-8 rounded-full bg-[#363636] ring-2 ring-offset-2 ring-offset-white dark:ring-offset-[#121414] transition-all ${selectedColor === "Charcoal" ? "ring-[#c4a179]" : "ring-transparent hover:ring-[#737373]"}`} 
                                />
                                <button 
                                    onClick={() => setSelectedColor("Obsidian")}
                                    className={`w-8 h-8 rounded-full bg-[#000000] ring-2 ring-offset-2 ring-offset-white dark:ring-offset-[#121414] transition-all ${selectedColor === "Obsidian" ? "ring-[#c4a179]" : "ring-transparent hover:ring-[#737373]"}`} 
                                />
                                <button 
                                    onClick={() => setSelectedColor("Sand")}
                                    className={`w-8 h-8 rounded-full bg-[#d2b48c] ring-2 ring-offset-2 ring-offset-white dark:ring-offset-[#121414] transition-all ${selectedColor === "Sand" ? "ring-[#c4a179]" : "ring-transparent hover:ring-[#737373]"}`} 
                                />
                            </div>
                        </div>

                        {/* Size Selection */}
                        <div className="mb-10">
                            <div className="flex justify-between items-center mb-4">
                                <p className="font-heading text-sm font-semibold uppercase tracking-widest text-[#151515] dark:text-white">
                                    {isEn ? "Select Size" : "Pilih Ukuran"}
                                </p>
                                <button className="text-[#c4a179] text-[12px] font-heading font-semibold uppercase tracking-widest border-b border-[#c4a179]/30 hover:border-[#c4a179]">
                                    {isEn ? "Size Guide" : "Panduan Ukuran"}
                                </button>
                            </div>
                            <div className="grid grid-cols-4 gap-2">
                                {['S', 'M', 'L', 'XL'].map(size => {
                                    const isOutOfStock = size === 'XL';
                                    return (
                                        <button 
                                            key={size}
                                            disabled={isOutOfStock}
                                            onClick={() => setSelectedSize(size)}
                                            className={`h-12 border transition-colors flex items-center justify-center font-heading text-sm font-semibold uppercase ${
                                                isOutOfStock 
                                                ? "border-gray-200 dark:border-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed" 
                                                : selectedSize === size 
                                                    ? "border-[#151515] bg-[#151515] text-white dark:border-white dark:bg-white dark:text-[#151515]" 
                                                    : "border-gray-300 dark:border-gray-700 text-[#151515] dark:text-white hover:border-[#151515] dark:hover:border-white"
                                            }`}
                                        >
                                            {size}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* CTA */}
                        <button 
                            onClick={(e) => {
                                e.preventDefault();
                                addToCart({
                                    id: 'pdp-1',
                                    name: 'Tailored Wool Blazer',
                                    nameId: 'Blazer Wol Disesuaikan',
                                    price: 4499000,
                                    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0p4OLeRlO7AB8PdfVyTha5_XzoRomGLn8u3VkMMvH2BHcH9RWQ1b13vYveB2UIEIdRMT_Df4K77ZgYLn5c4m399LUFzUTyGnta9BQiXy--4cqIQbkCx-979Wuh5LXoikeMHHi2YwrsVaNHSqx1S7Quwju0H0-q7UGvZZKQ6JgkxX937ha1T4Gc2vnK6rmhZJgfauweUYzOvf0VXe5W7RSopAkgF3Qq351WYd5_q20ZOtsN4gu08jjMwI3cj2Dc-kUeM1pF3y6',
                                    size: selectedSize || 'M',
                                    color: selectedColor
                                });
                            }}
                            className="w-full bg-[#151515] dark:bg-white py-5 font-heading text-sm font-semibold uppercase tracking-widest border border-transparent text-white dark:text-[#151515] hover:bg-[#c4a179] hover:border-[#c4a179] dark:hover:bg-[#c4a179] hover:text-white dark:hover:text-[#151515] transition-all duration-300 mb-12 group flex items-center justify-center space-x-3"
                        >
                            <span>{isEn ? "ADD TO CART" : "TAMBAH KE KERANJANG"}</span>
                            <span className="material-symbols-outlined text-[18px] opacity-0 group-hover:opacity-100 transition-opacity">shopping_bag</span>
                        </button>

                        {/* Description Accordion */}
                        <div className="space-y-0 border-t border-gray-200 dark:border-gray-800 pt-4">
                            {/* Accordion 1 */}
                            <div className="border-b border-gray-200 dark:border-gray-800">
                                <button 
                                    className="w-full flex justify-between items-center py-5 text-left group" 
                                    onClick={() => toggleAccordion("Details & Care")}
                                >
                                    <span className="font-heading text-sm font-semibold uppercase tracking-widest text-[#151515] dark:text-white">
                                        {isEn ? "Details & Care" : "Detail & Perawatan"}
                                    </span>
                                    <span className={`material-symbols-outlined transition-transform duration-300 text-[#151515] dark:text-white ${openAccordion === "Details & Care" ? "rotate-180" : ""}`}>
                                        expand_more
                                    </span>
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${openAccordion === "Details & Care" ? "max-h-96 opacity-100 mb-6" : "max-h-0 opacity-0"}`}>
                                    <p className="text-[#737373] dark:text-gray-400 font-sans text-[15px] leading-relaxed">
                                        {isEn 
                                            ? "A cornerstone of the modern wardrobe. This single-breasted blazer is crafted from premium Italian wool with a slight stretch for comfort. Featuring structured shoulders, notched lapels, and functional flap pockets." 
                                            : "Fondasi utama dari lemari pakaian modern. Jas dengan kancing tunggal ini dibuat dari wol Italia premium dengan sedikit elastisitas untuk kenyamanan. Dilengkapi dengan bantalan bahu yang terstruktur, kerah berlekuk, dan saku berpenutup fungsional."}
                                    </p>
                                </div>
                            </div>
                            
                            {/* Accordion 2 */}
                            <div className="border-b border-gray-200 dark:border-gray-800">
                                <button 
                                    className="w-full flex justify-between items-center py-5 text-left group" 
                                    onClick={() => toggleAccordion("Composition")}
                                >
                                    <span className="font-heading text-sm font-semibold uppercase tracking-widest text-[#151515] dark:text-white">
                                        {isEn ? "Composition" : "Komposisi"}
                                    </span>
                                    <span className={`material-symbols-outlined transition-transform duration-300 text-[#151515] dark:text-white ${openAccordion === "Composition" ? "rotate-180" : ""}`}>
                                        expand_more
                                    </span>
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${openAccordion === "Composition" ? "max-h-96 opacity-100 mb-6" : "max-h-0 opacity-0"}`}>
                                    <p className="text-[#737373] dark:text-gray-400 font-sans text-[15px] leading-relaxed">
                                        {isEn 
                                            ? <>Exterior: 98% Virgin Wool, 2% Elastane.<br/>Lining: 100% Viscose. Produced ethically in our certified atelier.</>
                                            : <>Eksterior: 98% Wol Murni, 2% Elastane.<br/>Furing: 100% Viskosa. Diproduksi secara etis di sanggar bersertifikat kami.</>}
                                    </p>
                                </div>
                            </div>

                            {/* Accordion 3 */}
                            <div className="border-b border-gray-200 dark:border-gray-800">
                                <button 
                                    className="w-full flex justify-between items-center py-5 text-left group" 
                                    onClick={() => toggleAccordion("Fit Guide")}
                                >
                                    <span className="font-heading text-sm font-semibold uppercase tracking-widest text-[#151515] dark:text-white">
                                        {isEn ? "Fit Guide" : "Panduan Ukuran & Potongan"}
                                    </span>
                                    <span className={`material-symbols-outlined transition-transform duration-300 text-[#151515] dark:text-white ${openAccordion === "Fit Guide" ? "rotate-180" : ""}`}>
                                        expand_more
                                    </span>
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${openAccordion === "Fit Guide" ? "max-h-96 opacity-100 mb-6" : "max-h-0 opacity-0"}`}>
                                    <p className="text-[#737373] dark:text-gray-400 font-sans text-[15px] leading-relaxed">
                                        {isEn 
                                            ? "Tailored silhouette. Designed for a precise fit through the waist. For a more relaxed, oversized look, we recommend sizing up." 
                                            : "Siluet pakaian disesuaikan secara ahli. Dirancang agar pas di pinggang dengan presisi. Untuk tampilan yang lebih longgar dan kasual, kami menyarankan Anda memilih satu ukuran lebih besar."}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
            <Footer lang={isEn ? "en" : "id"} />
        </div>
    );
}
