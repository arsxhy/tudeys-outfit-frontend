"use client";

import React, { Suspense } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

function ReturnsExchangesContent() {
  const { isEn, lang } = useLanguage();

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar lang={lang as "id" | "en"} />
      
      <div className="flex-grow flex flex-col items-center w-full">
        {/* Hero Section for Policy */}
        <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-24 pb-16 text-center">
          <h1 className="font-hero-title-mobile md:font-hero-title text-hero-title-mobile md:text-hero-title text-on-surface mb-6">
            {isEn ? "Returns & Exchanges" : "Pengembalian & Penukaran"}
          </h1>
          <p className="font-body-main text-body-main text-on-surface-variant max-w-2xl mx-auto">
            {isEn 
              ? "We want you to love your TUDEYSOUTFIT experience. If something isn't perfect, our streamlined return process ensures a seamless resolution." 
              : "Kami ingin Anda menyukai pengalaman TUDEYSOUTFIT Anda. Jika ada yang kurang sempurna, proses pengembalian kami yang mudah memastikan resolusi yang mulus."}
          </p>
        </section>

        {/* Policy Content Bento Grid */}
        <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Left Sidebar Navigation (Optional for long policies) */}
          <aside className="md:col-span-3 hidden md:block border-r border-outline/20 pr-8">
            <nav className="sticky top-32 flex flex-col gap-6 font-button-label text-button-label">
              <a className="text-champagne-gold border-b-2 border-champagne-gold pb-1 w-max" href="#return-window">
                {isEn ? "Return Window" : "Jendela Pengembalian"}
              </a>
              <a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#condition-guidelines">
                {isEn ? "Condition Guidelines" : "Pedoman Kondisi"}
              </a>
              <a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#exchange-process">
                {isEn ? "Exchange Process" : "Proses Penukaran"}
              </a>
              <a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#refund-timeline">
                {isEn ? "Refund Timeline" : "Linimasa Pengembalian Dana"}
              </a>
            </nav>
          </aside>

          {/* Main Policy Content */}
          <div className="md:col-span-9 flex flex-col gap-16">
            {/* Section 1 */}
            <div className="bg-surface-container-low p-8 md:p-12 border border-outline/10" id="return-window">
              <h2 className="font-section-title-mobile md:font-section-title text-section-title-mobile md:text-section-title text-champagne-gold mb-6">
                {isEn ? "30-Day Return Window" : "Jendela Pengembalian 30 Hari"}
              </h2>
              <div className="font-body-main text-body-main text-on-surface-variant space-y-4">
                <p>
                  {isEn 
                    ? "We accept returns for unworn, unwashed, and unaltered items within 30 days of the original delivery date. Your satisfaction with our luxury garments is our primary concern."
                    : "Kami menerima pengembalian untuk barang yang belum dipakai, belum dicuci, dan belum diubah dalam waktu 30 hari sejak tanggal pengiriman asli. Kepuasan Anda terhadap pakaian mewah kami adalah perhatian utama kami."}
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4 text-on-surface">
                  <li>{isEn ? "Items must be initiated for return within 30 days of receipt." : "Pengembalian barang harus dimulai dalam waktu 30 hari setelah penerimaan."}</li>
                  <li>{isEn ? "Final sale items are excluded from returns." : "Barang penjualan final dikecualikan dari pengembalian."}</li>
                  <li>{isEn ? "Original shipping charges are non-refundable." : "Biaya pengiriman asli tidak dapat dikembalikan."}</li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-surface-container-low p-8 md:p-12 border border-outline/10" id="condition-guidelines">
              <h2 className="font-section-title-mobile md:font-section-title text-section-title-mobile md:text-section-title text-champagne-gold mb-6">
                {isEn ? "Condition Guidelines" : "Pedoman Kondisi"}
              </h2>
              <div className="font-body-main text-body-main text-on-surface-variant space-y-4">
                <p>
                  {isEn
                    ? "To ensure a full refund, items must be returned in pristine, sellable condition. We strictly enforce these quality standards to maintain the integrity of our collection."
                    : "Untuk memastikan pengembalian dana penuh, barang harus dikembalikan dalam kondisi asli dan dapat dijual kembali. Kami dengan ketat menegakkan standar kualitas ini untuk menjaga integritas koleksi kami."}
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4 text-on-surface">
                  <li>{isEn ? "All original tags must remain firmly attached." : "Semua label asli harus tetap terpasang dengan kuat."}</li>
                  <li>{isEn ? "Garments must show no signs of wear, makeup, or fragrance." : "Pakaian tidak boleh menunjukkan tanda-tanda keausan, riasan, atau pewangi."}</li>
                  <li>{isEn ? "Shoes must be returned in their original designer box, undamaged." : "Sepatu harus dikembalikan di dalam kotak desainer aslinya tanpa kerusakan."}</li>
                  <li>{isEn ? "Swimwear and intimates must have sanitary liners intact." : "Pakaian renang dan pakaian dalam harus memiliki pelapis kebersihan yang utuh."}</li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-surface-container-low p-8 md:p-12 border border-outline/10" id="exchange-process">
              <h2 className="font-section-title-mobile md:font-section-title text-section-title-mobile md:text-section-title text-champagne-gold mb-6">
                {isEn ? "Exchange Process" : "Proses Penukaran"}
              </h2>
              <div className="font-body-main text-body-main text-on-surface-variant space-y-4">
                <p>
                  {isEn
                    ? "Need a different size or color? We offer complimentary exchanges to ensure you find the perfect fit."
                    : "Butuh ukuran atau warna yang berbeda? Kami menawarkan penukaran gratis untuk memastikan Anda mendapatkan kecocokan yang tepat."}
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4 text-on-surface">
                  <li>{isEn ? "Select 'Exchange' in our return portal." : "Pilih 'Tukar' di portal pengembalian kami."}</li>
                  <li>{isEn ? "Your new item will be reserved immediately." : "Barang baru Anda akan segera dipesan."}</li>
                  <li>{isEn ? "We will ship the exchanged item as soon as your return is scanned by the carrier." : "Kami akan mengirimkan barang penukaran segera setelah pengembalian Anda dipindai oleh kurir."}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Arched Community Section */}
        <section className="w-full bg-deep-espresso rounded-t-[100px] mt-section-gap py-section-gap px-margin-mobile md:px-margin-desktop relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            {/* Decorative abstract background for depth */}
            <div 
              className="w-full h-full bg-cover bg-center mix-blend-multiply" 
              data-alt="A subtle, dark, elegant abstract marble texture with veins of champagne gold running through a deep charcoal black background, providing a luxurious architectural feel without overpowering the foreground text." 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCzzzbCxjIwdAU09GGNWn_y0mbD2F00twTbEpqyo5-P6x5zDLluzDUiaxQhII4hxE_myx4USNALNsfak-LidcKGwx7sJmPgvDF6-SuUixVSrCksF-UtUEgUYx-WYOmNbcNvtvxKJ_ej4keiD07rLGbC_m3SJ2ewunhJsrl8Ltd3HTPCJkn3kA0anr3DfQUBZhn_mqPU8gTjBv_L_WdGGlbjSJqntSZIR2KNAV_g0TamF5NqRx0pfnT_dnM1hnBSNqQhorKt6aJD')" }}
            ></div>
          </div>
          <div className="max-w-container-max mx-auto text-center relative z-10">
            <h2 className="font-section-title-mobile md:font-section-title text-section-title-mobile md:text-section-title text-champagne-gold mb-6">
              {isEn ? "Still Have Questions?" : "Masih Memiliki Pertanyaan?"}
            </h2>
            <p className="font-body-main text-body-main text-pure-white max-w-xl mx-auto mb-10">
              {isEn 
                ? "Our dedicated client services team is available to assist you with any inquiries regarding your order, styling advice, or our return policies."
                : "Tim layanan klien khusus kami siap membantu Anda dengan pertanyaan apa pun mengenai pesanan Anda, saran gaya, atau kebijakan pengembalian kami."}
            </p>
            <button className="bg-primary-container text-pure-white font-button-label text-button-label uppercase py-4 px-10 hover:text-champagne-gold transition-colors duration-300 border border-pure-white/20">
              {isEn ? "Contact Client Services" : "Hubungi Layanan Klien"}
            </button>
          </div>
        </section>
      </div>

      <Footer lang={lang as "id" | "en"} />
    </main>
  );
}

export default function ReturnsExchangesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <ReturnsExchangesContent />
    </Suspense>
  );
}
