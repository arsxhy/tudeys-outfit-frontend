"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useAccountData } from "@/context/AccountDataContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AccountSidebar from "@/components/AccountSidebar";

function ProfileContent() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || "id";
  const isEn = lang === "en";
  const { user, logout } = useAuth();
  const { orders } = useAccountData();
  const recentOrders = orders.slice(0, 2);

  return (
    <div className="font-body-main antialiased bg-background text-on-background min-h-screen flex flex-col">
      <Navbar lang={lang} />
      
      {/* Main Content Canvas */}
      <main className="flex-grow pt-32 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="font-hero-title text-hero-title-mobile md:text-hero-title uppercase text-charcoal-black dark:text-white border-b border-black/10 dark:border-white/10 pb-4">
            {isEn ? "MY PROFILE" : "PROFIL SAYA"}
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Left Sidebar Navigation */}
          <AccountSidebar activeTab="dashboard" />

          {/* Right Main Content */}
          <section className="md:col-span-9 flex flex-col gap-12">
            {/* Profile Overview */}
            <div className="bg-white dark:bg-charcoal-black p-8 border border-black/10 dark:border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h2 className="font-section-title text-section-title-mobile md:text-section-title text-charcoal-black dark:text-white mb-2">
                  {user?.nama || "Julian Anderson"}
                </h2>
                <p className="font-body-main text-body-main text-muted-grey">
                  {user?.email || "julian.anderson@example.com"}
                </p>
              </div>
              <div className="bg-champagne-gold/10 border border-champagne-gold px-4 py-2">
                <span className="font-button-label text-button-label text-champagne-gold uppercase tracking-widest">
                  {isEn ? "Loyalty Status: Gold Member" : "Status Loyalitas: Member Gold"}
                </span>
              </div>
            </div>

            {/* Recent Orders */}
            <div>
              <div className="flex justify-between items-end border-b border-black/10 dark:border-white/10 pb-4 mb-6">
                <h3 className="font-section-title text-section-title-mobile md:text-section-title text-charcoal-black dark:text-white">
                  {isEn ? "RECENT ORDERS" : "PESANAN TERAKHIR"}
                </h3>
                <Link
                  href={`/order-history?lang=${lang}`}
                  className="font-button-label text-button-label uppercase tracking-widest text-muted-grey border-b border-muted-grey pb-1 hover:text-champagne-gold hover:border-champagne-gold transition-colors"
                >
                  {isEn ? "View All" : "Lihat Semua"}
                </Link>
              </div>
              
              {recentOrders.length === 0 ? (
                <div className="py-8 flex flex-col items-center justify-center border border-dashed border-black/10 dark:border-white/10 bg-surface-container-lowest">
                  <p className="font-body-main text-muted-grey text-center">
                    {isEn ? "You haven't placed any orders yet." : "Anda belum melakukan pesanan apa pun."}
                  </p>
                  <Link
                    href={`/shop?lang=${lang}`}
                    className="mt-4 font-button-label text-button-label uppercase tracking-widest text-charcoal-black dark:text-white border-b border-charcoal-black dark:border-white pb-1 hover:text-champagne-gold hover:border-champagne-gold transition-colors"
                  >
                    {isEn ? "Start Shopping" : "Mulai Belanja"}
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="border border-black/10 dark:border-white/10 bg-white dark:bg-charcoal-black p-6 flex flex-col md:flex-row justify-between md:items-center gap-4">
                      <div>
                        <p className="font-button-label text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">{isEn ? "Order Number" : "Nomor Pesanan"}</p>
                        <p className="font-body-main text-sm text-charcoal-black dark:text-pure-white font-bold">{order.id}</p>
                      </div>
                      <div>
                        <p className="font-button-label text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">{isEn ? "Date" : "Tanggal"}</p>
                        <p className="font-body-main text-sm text-charcoal-black dark:text-pure-white">{order.date}</p>
                      </div>
                      <div>
                        <p className="font-button-label text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">Total</p>
                        <p className="font-body-main text-sm text-charcoal-black dark:text-pure-white font-bold">RP {order.total.toLocaleString("id-ID")}</p>
                      </div>
                      <div>
                        <p className="font-button-label text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">Status</p>
                        <p className={`font-body-main text-sm font-bold uppercase ${
                          order.statusId === "completed" || order.statusId === "selesai" || order.statusId === "lunas" ? "text-green-600" :
                          order.statusId === "processing" || order.statusId === "diproses" ? "text-champagne-gold" :
                          order.statusId === "cancelled" || order.statusId === "dibatalkan" || order.statusId === "gagal" ? "text-red-600" :
                          "text-charcoal-black dark:text-pure-white"
                        }`}>
                          {order.status}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Primary Address */}
            <div>
              <h3 className="font-section-title text-section-title-mobile md:text-section-title text-charcoal-black dark:text-white border-b border-black/10 dark:border-white/10 pb-4 mb-6">
                {isEn ? "DEFAULT ADDRESS" : "ALAMAT UTAMA"}
              </h3>
              <div className="bg-white dark:bg-charcoal-black p-8 border border-black/10 dark:border-white/10">
                <p className="font-body-main text-charcoal-black dark:text-white mb-2 font-bold">
                  {user?.nama || "Julian Anderson"}
                </p>
                <p className="font-body-main text-muted-grey mb-1">
                  123 Luxury Avenue, Suite 400
                </p>
                <p className="font-body-main text-muted-grey mb-1">
                  New York, NY 10012
                </p>
                <p className="font-body-main text-muted-grey mb-6">
                  United States
                </p>
                <button className="bg-transparent border border-charcoal-black dark:border-white text-charcoal-black dark:text-white font-button-label text-button-label uppercase tracking-widest px-6 py-3 hover:bg-charcoal-black hover:text-white dark:hover:bg-white dark:hover:text-charcoal-black transition-colors duration-300">
                  {isEn ? "Edit Address" : "Edit Alamat"}
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer lang={lang} />
    </div>
  );
}

export default function Profile() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background"></div>}>
      <ProfileContent />
    </Suspense>
  );
}
