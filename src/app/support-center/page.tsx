"use client";

import React, { useState, Suspense } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-outline/20 pb-4">
      <button 
        className="w-full flex justify-between items-center py-4 text-left group" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-button-label text-button-label uppercase tracking-widest text-on-surface group-hover:text-champagne-gold transition-colors">
          {question}
        </span>
        <span className={`material-symbols-outlined text-on-surface-variant transition-transform duration-300 ease ${isOpen ? 'rotate-180' : ''}`}>
          expand_more
        </span>
      </button>
      <div 
        className="text-on-surface-variant font-body-main text-body-main grid transition-[grid-template-rows] duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="pb-4">{answer}</div>
        </div>
      </div>
    </div>
  );
}

function SupportCenter() {
  const { isEn } = useLanguage();
  const lang = isEn ? 'en' : 'id';

  return (
    <main className="font-body-main antialiased flex flex-col min-h-screen bg-background text-on-background">
      <Navbar lang={lang} />
      
      <div className="flex-grow flex flex-col gap-section-gap pb-section-gap">
        {/* Hero Section */}
        <section className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-multiply" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDGV4cTcz8_xRXo2GpICshnEcJLJemDzOMX5NuyYufxHPnCCia7-62BfXR-CZMuuMr4TzynC0Z0ru5DU3thuk7CDkZXThMmvxbNiTPBUeVojLgCMNotgid1Ps0MrpMTOe76HgOIylC84hhv33IB1bbIaRCwiXQx9SYHnZx9k20L22hfO6R9i83l2hBTUtrqdPD6iIeTtO5z7yyTc8uymNq2LpavnYsJ5Q78K1mXIBtbVUey2X74mQ1n9fsIwku_uZX9I1rNrqnq')" }}></div>
          <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop max-w-3xl">
            <h1 className="font-hero-title-mobile md:font-hero-title text-hero-title-mobile md:text-hero-title text-pure-white mb-6 uppercase">
              {isEn ? "How can we help?" : "Bagaimana kami bisa membantu?"}
            </h1>
            <p className="font-body-main text-body-main text-on-surface-variant">
              {isEn ? "Explore our support resources or get in touch with our dedicated team." : "Jelajahi sumber dukungan kami atau hubungi tim khusus kami."}
            </p>
          </div>
        </section>

        {/* Main Content Area */}
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Side Navigation (Desktop) */}
          <aside className="hidden lg:block lg:col-span-3 border-r border-outline/20 pr-8">
            <nav className="sticky top-[100px] flex flex-col gap-6">
              <a className="font-button-label text-button-label uppercase tracking-widest text-champagne-gold border-b-2 border-champagne-gold pb-1 w-max" href="#faq">
                {isEn ? "Help Center" : "Pusat Bantuan"}
              </a>
              <a className="font-button-label text-button-label uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors" href="#shipping">
                {isEn ? "Shipping Info" : "Info Pengiriman"}
              </a>
              <a className="font-button-label text-button-label uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors" href="#returns">
                {isEn ? "Returns & Exchanges" : "Pengembalian & Penukaran"}
              </a>
              <a className="font-button-label text-button-label uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors" href="#contact">
                {isEn ? "Contact Us" : "Hubungi Kami"}
              </a>
            </nav>
          </aside>

          {/* Content Container */}
          <div className="lg:col-span-9 flex flex-col gap-24">
            {/* Help Center / FAQ */}
            <section className="scroll-mt-[120px]" id="faq">
              <h2 className="font-section-title-mobile md:font-section-title text-section-title-mobile md:text-section-title uppercase mb-12">
                {isEn ? "Frequently Asked Questions" : "Pertanyaan yang Sering Diajukan"}
              </h2>
              <div className="flex flex-col gap-4 border-t border-outline/20 pt-4">
                <FaqItem 
                  question={isEn ? "How do I track my order?" : "Bagaimana cara melacak pesanan saya?"}
                  answer={isEn ? "Once your order has shipped, you will receive an email containing your tracking number and a link to the courier's website. You can also view your order status in your TudeysOutfit account under 'Order History'." : "Setelah pesanan Anda dikirim, Anda akan menerima email yang berisi nomor pelacakan dan tautan ke situs web kurir. Anda juga dapat melihat status pesanan Anda di akun TudeysOutfit Anda di bawah 'Riwayat Pesanan'."}
                />
                <FaqItem 
                  question={isEn ? "Do you ship internationally?" : "Apakah Anda mengirim secara internasional?"}
                  answer={isEn ? "Yes, we offer worldwide shipping. International shipping rates and delivery times vary depending on the destination. Please refer to our Shipping Info section for detailed rates and estimated delivery times." : "Ya, kami menawarkan pengiriman ke seluruh dunia. Tarif pengiriman internasional dan waktu pengiriman bervariasi tergantung pada tujuan. Silakan merujuk ke bagian Info Pengiriman kami untuk tarif terperinci dan perkiraan waktu pengiriman."}
                />
                <FaqItem 
                  question={isEn ? "What payment methods are accepted?" : "Metode pembayaran apa yang diterima?"}
                  answer={isEn ? "We accept QRIS, DANA, GOPAY, Shopee Pay, Alfamart, Indomaret, Virtual Account, Virtual MBanking, and Credit/Debit. All transactions are securely processed and encrypted." : "Kami menerima QRIS, DANA, GOPAY, Shopee Pay, Alfamart, Indomaret, Virtual Account, dan Virtual MBanking, sama Credit/Debit. Semua transaksi diproses dengan aman dan dienkripsi."}
                />
              </div>
            </section>

            {/* Shipping Info & Returns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              <section className="bg-surface-container-low p-8 border border-outline/10 scroll-mt-[120px]" id="shipping">
                <div className="flex items-center gap-4 mb-8 text-champagne-gold">
                  <span className="material-symbols-outlined text-3xl">local_shipping</span>
                  <h3 className="font-button-label text-button-label uppercase tracking-widest">{isEn ? "Shipping Info" : "Info Pengiriman"}</h3>
                </div>
                <div className="font-body-main text-body-main text-on-surface-variant space-y-6">
                  <div>
                    <h4 className="text-on-surface font-semibold mb-2">{isEn ? "Standard Delivery" : "Pengiriman Standar"}</h4>
                    <p>{isEn ? "3-5 business days. Complimentary on orders over Rp 3.000.000." : "3-5 hari kerja. Gratis untuk pesanan di atas Rp 3.000.000."}</p>
                  </div>
                  <div>
                    <h4 className="text-on-surface font-semibold mb-2">{isEn ? "Express Delivery" : "Pengiriman Kilat"}</h4>
                    <p>{isEn ? "1-2 business days. Flat rate of Rp 375.000." : "1-2 hari kerja. Tarif tetap Rp 375.000."}</p>
                  </div>
                  <p className="text-sm opacity-80 mt-4">{isEn ? "Orders placed before 2 PM EST are processed the same business day." : "Pesanan yang dilakukan sebelum pukul 14:00 EST diproses pada hari kerja yang sama."}</p>
                </div>
              </section>

              <section className="bg-surface-container-low p-8 border border-outline/10 scroll-mt-[120px]" id="returns">
                <div className="flex items-center gap-4 mb-8 text-champagne-gold">
                  <span className="material-symbols-outlined text-3xl">assignment_return</span>
                  <h3 className="font-button-label text-button-label uppercase tracking-widest">{isEn ? "Returns & Exchanges" : "Pengembalian & Penukaran"}</h3>
                </div>
                <div className="font-body-main text-body-main text-on-surface-variant space-y-4">
                  <p>{isEn ? "We accept returns within 14 days of delivery for a full refund or exchange." : "Kami menerima pengembalian dalam waktu 14 hari setelah pengiriman untuk pengembalian dana penuh atau pertukaran."}</p>
                  <p>{isEn ? "Items must be unworn, unwashed, and have original tags attached." : "Barang tidak boleh dipakai, tidak dicuci, dan memiliki label asli yang terpasang."}</p>
                  <a className="inline-flex items-center gap-2 text-champagne-gold hover:text-on-surface transition-colors mt-4 pb-1 border-b border-champagne-gold" href="#">
                    {isEn ? "Initiate a Return" : "Mulai Pengembalian"} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              </section>
            </div>

            {/* Contact Us */}
            <section className="scroll-mt-[120px]" id="contact">
              <h2 className="font-section-title-mobile md:font-section-title text-section-title-mobile md:text-section-title uppercase mb-12">
                {isEn ? "Contact Us" : "Hubungi Kami"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {/* Contact Details */}
                <div className="space-y-8">
                  <p className="font-body-main text-body-main text-on-surface-variant mb-8">
                    {isEn ? "Our customer service team is available Monday through Friday, 9 AM to 6 PM EST." : "Tim layanan pelanggan kami tersedia dari Senin hingga Jumat, pukul 9 pagi hingga 6 sore EST."}
                  </p>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-champagne-gold">mail</span>
                    <div>
                      <h4 className="font-button-label text-button-label uppercase tracking-widest text-on-surface mb-1">Email</h4>
                      <a className="font-body-main text-body-main text-on-surface-variant hover:text-champagne-gold transition-colors" href="mailto:support@tudeysoutfit.com">support@tudeysoutfit.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-champagne-gold">phone_iphone</span>
                    <div>
                      <h4 className="font-button-label text-button-label uppercase tracking-widest text-on-surface mb-1">{isEn ? "WhatsApp / Phone" : "WhatsApp / Telepon"}</h4>
                      <a className="font-body-main text-body-main text-on-surface-variant hover:text-champagne-gold transition-colors" href="tel:+62812345678">+62 812 3456 78</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-champagne-gold">location_on</span>
                    <div>
                      <h4 className="font-button-label text-button-label uppercase tracking-widest text-on-surface mb-1">{isEn ? "Headquarters" : "Kantor Pusat"}</h4>
                      <address className="not-italic font-body-main text-body-main text-on-surface-variant">
                        Kota Bandung, Jawa Barat<br/>
                        Indonesia
                      </address>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <input 
                      className="w-full bg-transparent border border-outline/30 text-on-surface font-button-label text-button-label uppercase p-4 focus:border-champagne-gold focus:ring-0 transition-colors rounded-none placeholder:text-on-surface-variant/50" 
                      placeholder={isEn ? "FULL NAME" : "NAMA LENGKAP"} 
                      type="text" 
                    />
                  </div>
                  <div>
                    <input 
                      className="w-full bg-transparent border border-outline/30 text-on-surface font-button-label text-button-label uppercase p-4 focus:border-champagne-gold focus:ring-0 transition-colors rounded-none placeholder:text-on-surface-variant/50" 
                      placeholder={isEn ? "EMAIL ADDRESS" : "ALAMAT EMAIL"} 
                      type="email" 
                    />
                  </div>
                  <div>
                    <textarea 
                      className="w-full bg-transparent border border-outline/30 text-on-surface font-button-label text-button-label uppercase p-4 focus:border-champagne-gold focus:ring-0 transition-colors rounded-none placeholder:text-on-surface-variant/50 resize-none" 
                      placeholder={isEn ? "HOW CAN WE HELP YOU?" : "BAGAIMANA KAMI BISA MEMBANTU ANDA?"} 
                      rows={5} 
                    />
                  </div>
                  <button 
                    className="bg-charcoal-black text-pure-white font-button-label text-button-label uppercase tracking-widest px-8 py-4 hover:bg-champagne-gold hover:text-charcoal-black transition-colors duration-300 w-full md:w-auto" 
                    type="submit"
                  >
                    {isEn ? "Send Message" : "Kirim Pesan"}
                  </button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer lang={lang} />
    </main>
  );
}

export default function SupportCenterWrapper() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <SupportCenter />
    </Suspense>
  );
}
