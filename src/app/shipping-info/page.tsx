"use client";

import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

function ShippingInfoContent() {
  const { isEn, lang } = useLanguage();

  return (
    <div className="antialiased min-h-screen flex flex-col bg-background text-on-surface">
      <Navbar lang={lang as "id" | "en"} />
      <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
        {/* Hero Section */}
        <header className="mb-section-gap text-center md:text-left">
          <h1 className="font-hero-title-mobile text-hero-title-mobile md:font-hero-title md:text-hero-title text-on-surface mb-6">
            {isEn ? "Shipping Info" : "Informasi Pengiriman"}
          </h1>
          <p className="font-body-main text-body-main text-on-surface-variant max-w-2xl">
            {isEn
              ? "We are committed to delivering your luxury fashion items with speed and care. Review our shipping policies below for domestic and international orders."
              : "Kami berkomitmen untuk mengirimkan item fashion mewah Anda dengan cepat dan hati-hati. Tinjau kebijakan pengiriman kami di bawah ini untuk pesanan domestik dan internasional."}
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Sidebar Navigation (Support Center Style) */}
          <aside className="md:col-span-3 mb-12 md:mb-0">
            <nav className="sticky top-24 flex flex-col gap-4 border-l border-outline/20 pl-6">
              <a
                className="font-button-label text-button-label text-champagne-gold uppercase tracking-widest border-l-2 border-champagne-gold -ml-[25px] pl-6 py-1 transition-colors"
                href="#domestic"
              >
                {isEn ? "Domestic Shipping" : "Pengiriman Domestik"}
              </a>
              <a
                className="font-button-label text-button-label text-on-surface-variant hover:text-on-surface uppercase tracking-widest py-1 transition-colors"
                href="#international"
              >
                {isEn ? "International Delivery" : "Pengiriman Internasional"}
              </a>
              <a
                className="font-button-label text-button-label text-on-surface-variant hover:text-on-surface uppercase tracking-widest py-1 transition-colors"
                href="#tracking"
              >
                {isEn ? "Tracking" : "Pelacakan"}
              </a>
              <a
                className="font-button-label text-button-label text-on-surface-variant hover:text-on-surface uppercase tracking-widest py-1 transition-colors mt-8"
                href="#returns"
              >
                {isEn ? "Returns & Exchanges" : "Pengembalian & Penukaran"}
              </a>
            </nav>
          </aside>
          {/* Main Content Area */}
          <div className="md:col-span-8 md:col-start-5 space-y-section-gap">
            {/* Domestic Shipping Section */}
            <section className="scroll-mt-32" id="domestic">
              <h2 className="font-section-title-mobile text-section-title-mobile md:font-section-title md:text-section-title text-on-surface mb-8 border-b border-outline/20 pb-4">
                {isEn ? "Domestic Shipping" : "Pengiriman Domestik"}
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="font-price-tag text-price-tag text-on-surface mb-4">
                    {isEn ? "Standard Delivery" : "Pengiriman Standar"}
                  </h3>
                  <p className="font-body-main text-body-main text-on-surface-variant mb-2">
                    {isEn
                      ? "Complimentary on all orders over Rp 3.000.000."
                      : "Gratis untuk semua pesanan di atas Rp 3.000.000."}
                  </p>
                  <p className="font-body-main text-body-main text-on-surface-variant">
                    {isEn
                      ? "Delivery within 3-5 business days via premium courier services. Orders placed before 2 PM EST are typically processed the same day."
                      : "Pengiriman dalam 3-5 hari kerja melalui layanan kurir premium. Pesanan yang dilakukan sebelum jam 2 siang (WIB) biasanya diproses pada hari yang sama."}
                  </p>
                </div>
                <div>
                  <h3 className="font-price-tag text-price-tag text-on-surface mb-4">
                    {isEn ? "Express Delivery" : "Pengiriman Ekspres"}
                  </h3>
                  <p className="font-body-main text-body-main text-on-surface-variant mb-2">
                    {isEn ? "Flat rate of Rp 375.000." : "Tarif tetap sebesar Rp 375.000."}
                  </p>
                  <p className="font-body-main text-body-main text-on-surface-variant">
                    {isEn
                      ? "Next business day delivery for orders placed before 1 PM EST. Available for most metropolitan areas. Signature required upon delivery to ensure security."
                      : "Pengiriman hari kerja berikutnya untuk pesanan yang dilakukan sebelum jam 1 siang (WIB). Tersedia untuk sebagian besar wilayah metropolitan. Tanda tangan diperlukan saat pengiriman untuk memastikan keamanan."}
                  </p>
                </div>
              </div>
            </section>
            {/* International Delivery Section */}
            <section className="scroll-mt-32" id="international">
              <h2 className="font-section-title-mobile text-section-title-mobile md:font-section-title md:text-section-title text-on-surface mb-8 border-b border-outline/20 pb-4">
                {isEn ? "International Delivery" : "Pengiriman Internasional"}
              </h2>
              <div className="space-y-8">
                <p className="font-body-main text-body-main text-on-surface-variant">
                  {isEn
                    ? "We ship globally to select countries. International shipping rates and delivery times vary based on destination and selected service level at checkout."
                    : "Kami mengirimkan barang secara global ke negara-negara tertentu. Tarif pengiriman internasional dan waktu pengiriman bervariasi berdasarkan tujuan dan tingkat layanan yang dipilih saat checkout."}
                </p>
                <div className="bg-surface-container-low p-8 rounded-DEFAULT border border-outline/10">
                  <h3 className="font-price-tag text-price-tag text-champagne-gold mb-4">
                    {isEn ? "Customs & Duties" : "Bea & Cukai"}
                  </h3>
                  <p className="font-body-main text-body-main text-on-surface-variant">
                    {isEn
                      ? "All international orders are shipped DDU (Delivered Duty Unpaid). This means that any customs duties, taxes, or import fees are the responsibility of the customer and must be paid upon delivery. We recommend contacting your local customs office for current rates before placing an order."
                      : "Semua pesanan internasional dikirim DDU (Delivered Duty Unpaid). Ini berarti bahwa setiap bea cukai, pajak, atau biaya impor adalah tanggung jawab pelanggan dan harus dibayar saat pengiriman. Kami menyarankan untuk menghubungi kantor bea cukai setempat Anda untuk mengetahui tarif saat ini sebelum melakukan pesanan."}
                  </p>
                </div>
              </div>
            </section>
            {/* Tracking Section */}
            <section className="scroll-mt-32" id="tracking">
              <h2 className="font-section-title-mobile text-section-title-mobile md:font-section-title md:text-section-title text-on-surface mb-8 border-b border-outline/20 pb-4">
                {isEn ? "Tracking Your Order" : "Lacak Pesanan Anda"}
              </h2>
              <div className="space-y-8">
                <p className="font-body-main text-body-main text-on-surface-variant">
                  {isEn
                    ? "Once your order has been dispatched, you will receive a shipping confirmation email containing your tracking number and a link to monitor its progress."
                    : "Setelah pesanan Anda dikirim, Anda akan menerima email konfirmasi pengiriman yang berisi nomor pelacakan dan tautan untuk memantau prosesnya."}
                </p>
                {/* Interactive Tracking Input */}
                <div className="relative max-w-md">
                  <input
                    className="w-full bg-transparent border border-outline text-on-surface font-button-label text-button-label px-4 py-4 rounded-none focus:outline-none focus:border-champagne-gold transition-colors placeholder:text-muted-grey"
                    placeholder={isEn ? "ENTER ORDER NUMBER" : "MASUKKAN NOMOR PESANAN"}
                    type="text"
                  />
                  <button className="absolute right-0 top-0 bottom-0 px-6 bg-charcoal-black text-pure-white font-button-label text-button-label hover:text-champagne-gold transition-colors">
                    {isEn ? "TRACK" : "LACAK"}
                  </button>
                </div>
                <p className="font-body-main text-body-main text-muted-grey text-sm mt-4">
                  {isEn
                    ? "For tracking assistance, please have your order number and billing zip code ready when contacting support."
                    : "Untuk bantuan pelacakan, harap siapkan nomor pesanan dan kode pos penagihan Anda saat menghubungi dukungan."}
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer lang={lang as "id" | "en"} />
    </div>
  );
}

export default function ShippingInfo() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background text-on-surface flex items-center justify-center">Loading...</div>}>
      <ShippingInfoContent />
    </Suspense>
  );
}
