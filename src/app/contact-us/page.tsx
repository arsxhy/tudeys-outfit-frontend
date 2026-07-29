"use client";

import React, { Suspense } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

function ContactUs() {
  const { isEn } = useLanguage();
  const lang = isEn ? 'en' : 'id';

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar lang={lang} />
      
      <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 md:px-16 py-12 md:py-24">
        {/* Hero Section */}
        <section className="mb-16 md:mb-24">
          <h1 className="font-bebas text-5xl md:text-7xl uppercase tracking-widest text-on-surface mb-6">
            {isEn ? "GET IN TOUCH" : "HUBUNGI KAMI"}
          </h1>
          <p className="font-sans text-muted-grey max-w-2xl md:text-lg">
            {isEn 
              ? "For inquiries regarding our collections, editorial placements, or sustainable practices, our dedicated team is available to assist you."
              : "Untuk pertanyaan terkait koleksi kami, penempatan editorial, atau praktik berkelanjutan, tim khusus kami siap membantu Anda."}
          </p>
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
          {/* Left Column: Direct Channels & Right Column: Office/Flagship */}
          <div className="lg:col-span-6 flex flex-col gap-12 lg:gap-16 pr-0 lg:pr-12">
            
            {/* Contact Channels */}
            <div className="space-y-10 md:space-y-12">
              <div className="group cursor-pointer">
                <h3 className="font-bebas text-2xl uppercase tracking-widest text-on-surface mb-2 group-hover:text-champagne-gold transition-colors">
                  {isEn ? "CUSTOMER CARE" : "LAYANAN PELANGGAN"}
                </h3>
                <p className="text-muted-grey font-sans mb-1">
                  {isEn 
                    ? "Assistance with orders, sizing, and styling advice."
                    : "Bantuan mengenai pesanan, ukuran, dan saran penataan gaya."}
                </p>
                <a className="font-sans text-champagne-gold border-b border-champagne-gold/30 hover:border-champagne-gold transition-colors pb-1 inline-block" href="mailto:care@tudeysoutfit.com">
                  care@tudeysoutfit.com
                </a>
              </div>
              
              <div className="group cursor-pointer">
                <h3 className="font-bebas text-2xl uppercase tracking-widest text-on-surface mb-2 group-hover:text-champagne-gold transition-colors">
                  {isEn ? "PRESS & EDITORIAL" : "PERS & EDITORIAL"}
                </h3>
                <p className="text-muted-grey font-sans mb-1">
                  {isEn 
                    ? "Media inquiries, lookbook requests, and collaborations."
                    : "Pertanyaan media, permintaan lookbook, dan kolaborasi."}
                </p>
                <a className="font-sans text-champagne-gold border-b border-champagne-gold/30 hover:border-champagne-gold transition-colors pb-1 inline-block" href="mailto:press@tudeysoutfit.com">
                  press@tudeysoutfit.com
                </a>
              </div>
              
              <div className="group cursor-pointer">
                <h3 className="font-bebas text-2xl uppercase tracking-widest text-on-surface mb-2 group-hover:text-champagne-gold transition-colors">
                  {isEn ? "SUSTAINABILITY INQUIRIES" : "PERTANYAAN KEBERLANJUTAN"}
                </h3>
                <p className="text-muted-grey font-sans mb-1">
                  {isEn 
                    ? "Questions regarding our supply chain and material sourcing."
                    : "Pertanyaan mengenai rantai pasokan dan sumber material kami."}
                </p>
                <a className="font-sans text-champagne-gold border-b border-champagne-gold/30 hover:border-champagne-gold transition-colors pb-1 inline-block" href="mailto:sustainability@tudeysoutfit.com">
                  sustainability@tudeysoutfit.com
                </a>
              </div>
            </div>

            {/* Office / Flagship */}
            <div className="pt-8 border-t border-outline/10">
              <h3 className="font-bebas text-2xl uppercase tracking-widest text-on-surface mb-4">
                {isEn ? "STUDIO & HEADQUARTERS" : "STUDIO & KANTOR PUSAT"}
              </h3>
              <address className="not-italic text-muted-grey font-sans leading-relaxed">
                1440 Minimalist Avenue, Suite 12<br/>
                Design District, NY 10001<br/>
                United States
              </address>
              <p className="text-muted-grey font-sans mt-4">
                <span className="text-on-surface font-semibold">{isEn ? "Studio Hours:" : "Jam Studio:"}</span> Mon-Fri, 10:00 AM – 6:00 PM (EST)<br/>
                <span className="text-champagne-gold italic text-sm mt-2 inline-block">
                  {isEn ? "* By appointment only" : "* Hanya dengan janji temu"}
                </span>
              </p>

              {/* Social & Global */}
              <div className="pt-8 flex space-x-6">
                <a className="w-12 h-12 rounded-full border border-outline/20 text-on-surface flex items-center justify-center hover:border-champagne-gold hover:text-champagne-gold transition-colors group" href="#">
                  <span className="material-symbols-outlined group-hover:scale-110 transition-transform">photo_camera</span>
                </a>
                <a className="w-12 h-12 rounded-full border border-outline/20 text-on-surface flex items-center justify-center hover:border-champagne-gold hover:text-champagne-gold transition-colors group" href="#">
                  <span className="material-symbols-outlined group-hover:scale-110 transition-transform">chat</span>
                </a>
                <a className="w-12 h-12 rounded-full border border-outline/20 text-on-surface flex items-center justify-center hover:border-champagne-gold hover:text-champagne-gold transition-colors group" href="#">
                  <span className="material-symbols-outlined group-hover:scale-110 transition-transform">work</span>
                </a>
              </div>
            </div>
            
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6 bg-[#f8f8f8] dark:bg-[#1a1c1c] p-8 md:p-12 rounded-none mt-12 lg:mt-0 relative overflow-hidden border border-outline/10">
            {/* Subtle decorative background element for depth */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-champagne-gold opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            
            <h2 className="font-bebas text-3xl md:text-4xl text-on-surface mb-8 relative z-10">
              {isEn ? "SEND A MESSAGE" : "KIRIM PESAN"}
            </h2>
            
            <form action="#" className="space-y-10 relative z-10" method="POST">
              <div className="relative group">
                <input 
                  className="w-full font-sans text-on-surface pb-3 bg-transparent border-b border-outline/30 rounded-none px-0 focus:outline-none focus:ring-0 focus:border-champagne-gold placeholder:font-bebas placeholder:text-lg placeholder:tracking-widest placeholder:text-muted-grey transition-colors peer" 
                  id="name" 
                  name="name" 
                  placeholder={isEn ? "FULL NAME" : "NAMA LENGKAP"} 
                  required 
                  type="text"
                />
              </div>
              
              <div className="relative group">
                <input 
                  className="w-full font-sans text-on-surface pb-3 bg-transparent border-b border-outline/30 rounded-none px-0 focus:outline-none focus:ring-0 focus:border-champagne-gold placeholder:font-bebas placeholder:text-lg placeholder:tracking-widest placeholder:text-muted-grey transition-colors peer" 
                  id="email" 
                  name="email" 
                  placeholder={isEn ? "EMAIL ADDRESS" : "ALAMAT EMAIL"} 
                  required 
                  type="email"
                />
              </div>
              
              <div className="relative group">
                <select 
                  className="w-full font-sans text-on-surface pb-3 appearance-none bg-transparent border-b border-outline/30 rounded-none px-0 focus:outline-none focus:ring-0 focus:border-champagne-gold cursor-pointer peer" 
                  id="subject" 
                  name="subject" 
                  required
                  defaultValue=""
                >
                  <option className="text-surface dark:text-background" disabled value="">
                    {isEn ? "INQUIRY SUBJECT" : "SUBJEK PERTANYAAN"}
                  </option>
                  <option className="text-surface dark:text-background" value="order">{isEn ? "Order Support" : "Bantuan Pesanan"}</option>
                  <option className="text-surface dark:text-background" value="press">{isEn ? "Press & Media" : "Pers & Media"}</option>
                  <option className="text-surface dark:text-background" value="sustainability">{isEn ? "Sustainability" : "Keberlanjutan"}</option>
                  <option className="text-surface dark:text-background" value="other">{isEn ? "Other" : "Lainnya"}</option>
                </select>
                <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-muted-grey pointer-events-none peer-focus:text-champagne-gold transition-colors">
                  expand_more
                </span>
              </div>
              
              <div className="relative group pt-4">
                <textarea 
                  className="w-full font-sans text-on-surface pb-3 resize-none bg-transparent border-b border-outline/30 rounded-none px-0 focus:outline-none focus:ring-0 focus:border-champagne-gold placeholder:font-bebas placeholder:text-lg placeholder:tracking-widest placeholder:text-muted-grey transition-colors peer" 
                  id="message" 
                  name="message" 
                  placeholder={isEn ? "YOUR MESSAGE" : "PESAN ANDA"} 
                  required 
                  rows={4}
                ></textarea>
              </div>
              
              <button 
                className="w-full bg-[#121414] dark:bg-white text-white dark:text-[#121414] font-sans text-sm uppercase tracking-widest py-5 px-8 hover:bg-[#c4a179] dark:hover:bg-[#c4a179] hover:text-white dark:hover:text-white transition-colors duration-300 mt-4 flex items-center justify-between group" 
                type="submit"
              >
                <span className="font-semibold">{isEn ? "SEND MESSAGE" : "KIRIM PESAN"}</span>
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer lang={lang} />
    </div>
  );
}

export default function ContactUsWrapper() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <ContactUs />
    </Suspense>
  );
}
