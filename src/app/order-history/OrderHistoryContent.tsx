"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useAccountData } from "@/context/AccountDataContext";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AccountSidebar from "@/components/AccountSidebar";
import Image from "next/image";
import Link from "next/link";

export default function OrderHistoryContent() {
  const searchParams = useSearchParams();
  const { isEn, toggleLanguage } = useLanguage();
  const { orders } = useAccountData();

  const lang = searchParams.get("lang");
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    if (lang === "id" && isEn) {
      toggleLanguage();
    } else if (lang === "en" && !isEn) {
      toggleLanguage();
    }
  }, [lang, isEn, toggleLanguage]);

  if (!mounted) return null;
  const currentLang = isEn ? "en" : "id";

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-charcoal-black transition-colors duration-300">
      <Navbar />

      <main className="flex-grow flex flex-col w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24 pt-32">
        <div className="mb-16">
          <h1 className="font-hero-title text-hero-title-mobile md:text-hero-title uppercase text-charcoal-black dark:text-white border-b border-black/10 dark:border-white/10 pb-4">
            {isEn ? "ORDER HISTORY" : "RIWAYAT PESANAN"}
          </h1>
          <p className="text-on-surface-variant max-w-xl text-body-main font-body-main mt-4">
            {isEn 
              ? "Track your recent purchases, view order details, and initiate returns if necessary."
              : "Lacak pembelian terbaru Anda, lihat detail pesanan, dan ajukan pengembalian jika perlu."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <AccountSidebar activeTab="order-history" />

          <section className="md:col-span-9">
            {orders.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 bg-neutral-light/30 dark:bg-surface-container/30 border border-black/10 dark:border-white/10 h-full">
                <span className="material-symbols-outlined text-6xl text-black/20 dark:text-white/20 mb-6" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 48" }}>
                  shopping_bag
                </span>
                <h3 className="font-hero-title text-2xl uppercase tracking-widest text-charcoal-black dark:text-white mb-4 text-center">
                  {isEn ? "NO RECENT ORDERS" : "BELUM ADA PESANAN"}
                </h3>
                <p className="font-body-main text-on-surface-variant mb-8 text-center max-w-md">
                  {isEn ? "You haven't placed any orders yet. Discover our latest collections and find your new style." : "Anda belum melakukan pemesanan apa pun. Temukan koleksi terbaru kami dan temukan gaya baru Anda."}
                </p>
                <Link 
                  href={`/shop?lang=${currentLang}`}
                  className="bg-charcoal-black dark:bg-champagne-gold text-pure-white dark:text-deep-espresso font-button-label text-button-label uppercase tracking-widest py-4 px-10 hover:bg-champagne-gold hover:text-charcoal-black dark:hover:bg-pure-white transition-colors duration-300"
                >
                  {isEn ? "Start Shopping" : "Mulai Belanja"}
                </Link>
              </div>
            ) : (
              <div className="space-y-12">
                {orders.map((order) => (
                  <div key={order.id} className="bg-neutral-light/50 dark:bg-surface-container border border-black/10 dark:border-white/10 p-6 md:p-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-black/10 dark:border-white/10 pb-6 mb-8 gap-4">
                      <div>
                        <p className="font-button-label text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">{isEn ? "Order Number" : "Nomor Pesanan"}</p>
                        <p className="font-body-main text-lg text-charcoal-black dark:text-pure-white font-bold">{order.id}</p>
                      </div>
                      <div className="flex gap-8">
                        <div>
                          <p className="font-button-label text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">{isEn ? "Date" : "Tanggal"}</p>
                          <p className="font-body-main text-sm text-charcoal-black dark:text-pure-white">{order.date}</p>
                        </div>
                        <div>
                          <p className="font-button-label text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">{isEn ? "Total Amount" : "Total Harga"}</p>
                          <p className="font-body-main text-sm text-charcoal-black dark:text-pure-white font-bold">RP {order.total.toLocaleString("id-ID")}</p>
                        </div>
                        <div>
                          <p className="font-button-label text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">Status</p>
                          <p className={`font-body-main text-sm font-bold uppercase ${
                            order.statusId === "delivered" ? "text-success" : 
                            order.statusId === "processing" ? "text-champagne-gold" : 
                            "text-charcoal-black dark:text-pure-white"
                          }`}>
                            {order.status}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-8">
                      {order.items.map((item: any, index: number) => (
                        <div key={index} className="flex flex-col sm:flex-row gap-6">
                          <div className="w-full sm:w-32 h-40 relative bg-black/5 dark:bg-white/5">
                            <Image src={item.image} alt={item.name} fill className="object-cover" />
                          </div>
                          <div className="flex-1 flex flex-col justify-center">
                            <h4 className="font-hero-title tracking-widest text-lg uppercase text-charcoal-black dark:text-pure-white mb-2">{item.name}</h4>
                            <p className="font-body-main text-sm text-on-surface-variant mb-1">{isEn ? "Size" : "Ukuran"}: {item.size}</p>
                            <p className="font-body-main text-sm text-on-surface-variant mb-4">{isEn ? "Color" : "Warna"}: {item.color}</p>
                            <div className="flex justify-between items-center mt-auto">
                              <p className="font-body-main text-sm text-charcoal-black dark:text-pure-white">{isEn ? "Qty" : "Jml"}: {item.qty}</p>
                              <p className="font-body-main font-bold text-charcoal-black dark:text-pure-white">RP {item.price.toLocaleString("id-ID")}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-8 border-t border-black/10 dark:border-white/10 flex flex-wrap gap-4">
                      <button className="font-button-label text-button-label uppercase tracking-widest px-6 py-3 border border-charcoal-black dark:border-white text-charcoal-black dark:text-pure-white hover:bg-charcoal-black hover:text-white dark:hover:bg-white dark:hover:text-charcoal-black transition-colors">
                        {isEn ? "View Invoice" : "Lihat Faktur"}
                      </button>
                      <button className="font-button-label text-button-label uppercase tracking-widest px-6 py-3 border border-transparent bg-charcoal-black dark:bg-champagne-gold text-pure-white dark:text-deep-espresso hover:bg-champagne-gold hover:text-charcoal-black dark:hover:bg-pure-white transition-colors">
                        {isEn ? "Track Package" : "Lacak Paket"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
      
      <Footer lang={currentLang} />
    </div>
  );
}
