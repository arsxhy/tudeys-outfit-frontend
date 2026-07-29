"use client";

import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

function PrivacyPolicyPage() {
  const { isEn, lang } = useLanguage();

  return (
    <div className="bg-background text-on-surface font-body-main antialiased min-h-screen flex flex-col">
      <Navbar lang={lang as "en" | "id"} />

      <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-section-gap pt-8 md:pt-12">
        {/* Hero Section */}
        <div className="mb-16 md:mb-24">
          <h1 className="font-hero-title-mobile md:font-hero-title text-hero-title-mobile md:text-hero-title text-on-surface uppercase mb-4">
            {isEn ? "Privacy Policy" : "Kebijakan Privasi"}
          </h1>
          <p className="font-body-main text-body-main text-on-surface-variant max-w-2xl">
            {isEn
              ? "Last updated: October 24, 2023. We respect your privacy and are committed to protecting your personal data."
              : "Terakhir diperbarui: 24 Oktober 2023. Kami menghormati privasi Anda dan berkomitmen untuk melindungi data pribadi Anda."}
          </p>
        </div>
        <div className="mb-16 w-full h-[1px] bg-outline/20"></div>

        {/* Content Structure */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Table of Contents (Sticky sidebar on desktop) */}
          <nav className="md:col-span-3 hidden md:block">
            <div className="sticky top-24 flex flex-col gap-4">
              <span className="font-button-label text-button-label text-champagne-gold uppercase tracking-widest mb-2">
                {isEn ? "Contents" : "Daftar Isi"}
              </span>
              <a className="font-body-main text-body-main text-on-surface hover:text-champagne-gold transition-colors" href="#information-collection">
                {isEn ? "1. Information Collection" : "1. Pengumpulan Informasi"}
              </a>
              <a className="font-body-main text-body-main text-on-surface-variant hover:text-champagne-gold transition-colors" href="#data-usage">
                {isEn ? "2. How We Use Your Data" : "2. Penggunaan Data Anda"}
              </a>
              <a className="font-body-main text-body-main text-on-surface-variant hover:text-champagne-gold transition-colors" href="#data-sharing">
                {isEn ? "3. Data Sharing & Disclosure" : "3. Pembagian & Pengungkapan Data"}
              </a>
              <a className="font-body-main text-body-main text-on-surface-variant hover:text-champagne-gold transition-colors" href="#cookies">
                {isEn ? "4. Cookies & Tracking" : "4. Cookie & Pelacakan"}
              </a>
              <a className="font-body-main text-body-main text-on-surface-variant hover:text-champagne-gold transition-colors" href="#your-rights">
                {isEn ? "5. Your Privacy Rights" : "5. Hak Privasi Anda"}
              </a>
            </div>
          </nav>

          {/* Policy Text */}
          <div className="md:col-span-8 md:col-start-5 space-y-16">
            <section id="information-collection">
              <h2 className="font-section-title-mobile md:font-section-title text-section-title-mobile md:text-section-title text-on-surface mb-6">
                {isEn ? "1. Information Collection" : "1. Pengumpulan Informasi"}
              </h2>
              <div className="font-body-main text-body-main text-on-surface-variant space-y-4">
                <p>
                  {isEn
                    ? "When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device."
                    : "Saat Anda mengunjungi Situs, kami secara otomatis mengumpulkan informasi tertentu tentang perangkat Anda, termasuk informasi tentang browser web Anda, alamat IP, zona waktu, dan beberapa cookie yang diinstal pada perangkat Anda."}
                </p>
                <p>
                  {isEn
                    ? "Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as \"Device Information\"."
                    : "Selain itu, saat Anda menjelajahi Situs, kami mengumpulkan informasi tentang halaman web atau produk individual yang Anda lihat, situs web atau istilah pencarian apa yang merujuk Anda ke Situs, dan informasi tentang bagaimana Anda berinteraksi dengan Situs. Kami menyebut informasi yang dikumpulkan secara otomatis ini sebagai \"Informasi Perangkat\"."}
                </p>
                <ul className="list-disc pl-6 space-y-2 text-on-surface">
                  <li>
                    <strong>{isEn ? "Log Files:" : "File Log:"}</strong>{" "}
                    {isEn
                      ? "Track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps."
                      : "Melacak tindakan yang terjadi di Situs, dan mengumpulkan data termasuk alamat IP Anda, jenis browser, penyedia layanan internet, halaman rujukan/keluar, dan stempel tanggal/waktu."}
                  </li>
                  <li>
                    <strong>{isEn ? "Web Beacons & Tags:" : "Web Beacons & Tags:"}</strong>{" "}
                    {isEn
                      ? "Electronic files used to record information about how you browse the Site."
                      : "File elektronik yang digunakan untuk merekam informasi tentang bagaimana Anda menelusuri Situs."}
                  </li>
                  <li>
                    <strong>{isEn ? "Order Information:" : "Informasi Pesanan:"}</strong>{" "}
                    {isEn
                      ? "When you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information, email address, and phone number."
                      : "Saat Anda melakukan pembelian atau mencoba melakukan pembelian melalui Situs, kami mengumpulkan informasi tertentu dari Anda, termasuk nama, alamat penagihan, alamat pengiriman, informasi pembayaran, alamat email, dan nomor telepon Anda."}
                  </li>
                </ul>
              </div>
            </section>

            <section id="data-usage">
              <h2 className="font-section-title-mobile md:font-section-title text-section-title-mobile md:text-section-title text-on-surface mb-6">
                {isEn ? "2. How We Use Your Data" : "2. Penggunaan Data Anda"}
              </h2>
              <div className="font-body-main text-body-main text-on-surface-variant space-y-4">
                <p>
                  {isEn
                    ? "We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to:"
                    : "Kami menggunakan Informasi Pesanan yang kami kumpulkan secara umum untuk memenuhi pesanan yang dilakukan melalui Situs (termasuk memproses informasi pembayaran Anda, mengatur pengiriman, dan memberikan Anda faktur dan/atau konfirmasi pesanan). Selain itu, kami menggunakan Informasi Pesanan ini untuk:"}
                </p>
                <ul className="list-disc pl-6 space-y-2 text-on-surface">
                  <li>{isEn ? "Communicate with you;" : "Berkomunikasi dengan Anda;"}</li>
                  <li>{isEn ? "Screen our orders for potential risk or fraud; and" : "Memeriksa pesanan kami untuk potensi risiko atau penipuan; dan"}</li>
                  <li>
                    {isEn
                      ? "When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services."
                      : "Apabila sesuai dengan preferensi yang Anda bagikan dengan kami, memberikan Anda informasi atau iklan yang berkaitan dengan produk atau layanan kami."}
                  </li>
                </ul>
              </div>
            </section>

            <section id="your-rights">
              <h2 className="font-section-title-mobile md:font-section-title text-section-title-mobile md:text-section-title text-on-surface mb-6">
                {isEn ? "5. Your Privacy Rights" : "5. Hak Privasi Anda"}
              </h2>
              <div className="font-body-main text-body-main text-on-surface-variant space-y-4">
                <p>
                  {isEn
                    ? "If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below."
                    : "Jika Anda penduduk Eropa, Anda berhak mengakses informasi pribadi yang kami simpan tentang Anda dan meminta agar informasi pribadi Anda diperbaiki, diperbarui, atau dihapus. Jika Anda ingin menggunakan hak ini, silakan hubungi kami melalui informasi kontak di bawah ini."}
                </p>
                <p>
                  {isEn
                    ? "Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Please note that your information will be transferred outside of Europe, including to Canada and the United States."
                    : "Selain itu, jika Anda penduduk Eropa, kami mencatat bahwa kami memproses informasi Anda untuk memenuhi kontrak yang mungkin kami miliki dengan Anda (misalnya jika Anda melakukan pemesanan melalui Situs), atau untuk mengejar kepentingan bisnis sah kami yang tercantum di atas. Harap dicatat bahwa informasi Anda akan ditransfer ke luar Eropa, termasuk ke Kanada dan Amerika Serikat."}
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer lang={lang as "en" | "id"} />
    </div>
  );
}

export default function PrivacyPolicyPageWrapper() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <PrivacyPolicyPage />
    </Suspense>
  );
}
