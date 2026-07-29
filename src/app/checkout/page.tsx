"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import Footer from "@/components/Footer";

function CheckoutContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { user, token } = useAuth();
  const lang = (searchParams.get("lang") as "id" | "en") || "id";
  const isEn = lang === "en";
  const { cartItems, subtotal, tax, total, clearCart } = useCart();

  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <div className="bg-background dark:bg-charcoal-black text-charcoal-black dark:text-pure-white antialiased min-h-screen flex flex-col pt-32">
      {/* Top Navigation Bar (Checkout is linear, minimal header) */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-6 max-w-container-max mx-auto bg-background dark:bg-charcoal-black border-b border-black/10 dark:border-transparent transition-colors">
        <Link
          href={`/?lang=${lang}`}
          className="font-hero-title-mobile text-section-title-mobile tracking-tighter flex items-center"
        >
          <span className="text-charcoal-black dark:text-pure-white">TUDEYS</span>
          <span className="text-champagne-gold">OUTFIT</span>
        </Link>
        <div className="flex gap-6">
          <span className="material-symbols-outlined text-charcoal-black dark:text-pure-white text-2xl">
            lock
          </span>
        </div>
      </header>

      <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-section-gap">
        <div className="mb-12">
          <h1 className="font-section-title-mobile md:font-section-title text-section-title-mobile md:text-section-title uppercase text-charcoal-black dark:text-pure-white">
            Checkout
          </h1>
          <p className="font-body-main text-body-main text-muted-grey mt-2">
            {isEn ? "Secure encrypted transaction." : "Transaksi terenkripsi aman."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Left Column: Shipping & Payment */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-16">
            {/* Shipping Info */}
            <section>
              <h2 className="font-button-label text-button-label uppercase tracking-widest text-charcoal-black dark:text-pure-white border-b border-black/10 dark:border-surface-variant pb-4 mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined text-champagne-gold text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  local_shipping
                </span>
                {isEn ? "Shipping Information" : "Informasi Pengiriman"}
              </h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="col-span-1 md:col-span-2">
                  <input
                    type="email"
                    required
                    placeholder={isEn ? "EMAIL ADDRESS *" : "ALAMAT EMAIL *"}
                    className="bg-transparent border-b border-outline-variant rounded-none px-0 py-3 text-on-surface font-body-main text-body-main placeholder-muted-grey focus:outline-none focus:border-charcoal-black dark:focus:border-pure-white transition-colors duration-300 w-full uppercase"
                  />
                </div>
                <div className="col-span-1">
                  <input
                    type="text"
                    required
                    placeholder={isEn ? "FIRST NAME *" : "NAMA DEPAN *"}
                    className="bg-transparent border-b border-outline-variant rounded-none px-0 py-3 text-on-surface font-body-main text-body-main placeholder-muted-grey focus:outline-none focus:border-charcoal-black dark:focus:border-pure-white transition-colors duration-300 w-full uppercase"
                  />
                </div>
                <div className="col-span-1">
                  <input
                    type="text"
                    required
                    placeholder={isEn ? "LAST NAME *" : "NAMA BELAKANG *"}
                    className="bg-transparent border-b border-outline-variant rounded-none px-0 py-3 text-on-surface font-body-main text-body-main placeholder-muted-grey focus:outline-none focus:border-charcoal-black dark:focus:border-pure-white transition-colors duration-300 w-full uppercase"
                  />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <input
                    type="text"
                    required
                    placeholder={isEn ? "ADDRESS *" : "ALAMAT *"}
                    className="bg-transparent border-b border-outline-variant rounded-none px-0 py-3 text-on-surface font-body-main text-body-main placeholder-muted-grey focus:outline-none focus:border-charcoal-black dark:focus:border-pure-white transition-colors duration-300 w-full uppercase"
                  />
                </div>
                <div className="col-span-1">
                  <input
                    type="text"
                    required
                    placeholder={isEn ? "CITY *" : "KOTA *"}
                    className="bg-transparent border-b border-outline-variant rounded-none px-0 py-3 text-on-surface font-body-main text-body-main placeholder-muted-grey focus:outline-none focus:border-charcoal-black dark:focus:border-pure-white transition-colors duration-300 w-full uppercase"
                  />
                </div>
                <div className="col-span-1">
                  <input
                    type="text"
                    required
                    placeholder={isEn ? "POSTAL CODE *" : "KODE POS *"}
                    className="bg-transparent border-b border-outline-variant rounded-none px-0 py-3 text-on-surface font-body-main text-body-main placeholder-muted-grey focus:outline-none focus:border-charcoal-black dark:focus:border-pure-white transition-colors duration-300 w-full uppercase"
                  />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <input
                    type="tel"
                    required
                    placeholder={isEn ? "PHONE NUMBER *" : "NOMOR TELEPON *"}
                    className="bg-transparent border-b border-outline-variant rounded-none px-0 py-3 text-on-surface font-body-main text-body-main placeholder-muted-grey focus:outline-none focus:border-charcoal-black dark:focus:border-pure-white transition-colors duration-300 w-full uppercase"
                  />
                </div>
              </form>
            </section>

            {/* Payment Method */}
            <section>
              <h2 className="font-button-label text-button-label uppercase tracking-widest text-charcoal-black dark:text-pure-white border-b border-black/10 dark:border-surface-variant pb-4 mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined text-champagne-gold text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  account_balance_wallet
                </span>
                {isEn ? "Payment Method" : "Metode Pembayaran"}
              </h2>
              <div className="flex flex-col gap-4">
                {/* Cards */}
                <label className="cursor-pointer relative group block">
                  <input
                    type="radio"
                    name="payment_method"
                    value="card"
                    className="peer sr-only"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                  />
                  <div className={`border p-6 flex flex-col gap-4 transition-all duration-300 hover:border-on-surface-variant ${paymentMethod === 'card' ? 'border-champagne-gold bg-surface-container-low' : 'border-outline-variant'}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-5 h-5 rounded-full border border-black dark:border-pure-white flex items-center justify-center">
                          <div className={`w-2.5 h-2.5 rounded-full bg-champagne-gold transition-transform duration-200 ${paymentMethod === 'card' ? 'scale-100' : 'scale-0'}`}></div>
                        </div>
                        <span className="font-button-label text-button-label uppercase tracking-widest">
                          {isEn ? "Credit / Debit Card" : "Kartu Kredit / Debit"}
                        </span>
                      </div>
                      <span className="material-symbols-outlined text-muted-grey group-hover:text-charcoal-black dark:group-hover:text-pure-white transition-colors">
                        credit_card
                      </span>
                    </div>
                    {paymentMethod === "card" && (
                      <div className="block mt-4 pt-4 border-t border-surface-variant">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="col-span-2">
                            <input
                              type="text"
                              placeholder={isEn ? "CARD NUMBER" : "NOMOR KARTU"}
                              className="bg-transparent border-b border-outline-variant rounded-none px-0 py-3 text-on-surface font-body-main text-body-main placeholder-muted-grey focus:outline-none focus:border-charcoal-black dark:focus:border-pure-white transition-colors duration-300 w-full uppercase"
                            />
                          </div>
                          <div className="col-span-1">
                            <input
                              type="text"
                              placeholder="MM/YY"
                              className="bg-transparent border-b border-outline-variant rounded-none px-0 py-3 text-on-surface font-body-main text-body-main placeholder-muted-grey focus:outline-none focus:border-charcoal-black dark:focus:border-pure-white transition-colors duration-300 w-full uppercase"
                            />
                          </div>
                          <div className="col-span-1">
                            <input
                              type="text"
                              placeholder="CVC"
                              className="bg-transparent border-b border-outline-variant rounded-none px-0 py-3 text-on-surface font-body-main text-body-main placeholder-muted-grey focus:outline-none focus:border-charcoal-black dark:focus:border-pure-white transition-colors duration-300 w-full uppercase"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </label>

                {/* E-Wallets */}
                <label className="cursor-pointer relative group block">
                  <input
                    type="radio"
                    name="payment_method"
                    value="ewallet"
                    className="peer sr-only"
                    checked={paymentMethod === "ewallet"}
                    onChange={() => setPaymentMethod("ewallet")}
                  />
                  <div className={`border p-6 flex items-center justify-between transition-all duration-300 hover:border-on-surface-variant ${paymentMethod === 'ewallet' ? 'border-champagne-gold bg-surface-container-low' : 'border-outline-variant'}`}>
                    <div className="flex items-center gap-4">
                      <div className="w-5 h-5 rounded-full border border-black dark:border-pure-white flex items-center justify-center">
                        <div className={`w-2.5 h-2.5 rounded-full bg-champagne-gold transition-transform duration-200 ${paymentMethod === 'ewallet' ? 'scale-100' : 'scale-0'}`}></div>
                      </div>
                      <span className="font-button-label text-button-label uppercase tracking-widest">
                        {isEn ? "E-Wallets" : "E-Wallet"}
                      </span>
                    </div>
                    <div className="flex gap-2 text-xs font-button-label text-muted-grey uppercase">
                      QRIS, GOPAY, DANA, OVO, SHOPEE PAY
                    </div>
                  </div>
                </label>

                {/* Virtual Account */}
                <label className="cursor-pointer relative group block">
                  <input
                    type="radio"
                    name="payment_method"
                    value="va"
                    className="peer sr-only"
                    checked={paymentMethod === "va"}
                    onChange={() => setPaymentMethod("va")}
                  />
                  <div className={`border p-6 flex items-center justify-between transition-all duration-300 hover:border-on-surface-variant ${paymentMethod === 'va' ? 'border-champagne-gold bg-surface-container-low' : 'border-outline-variant'}`}>
                    <div className="flex items-center gap-4">
                      <div className="w-5 h-5 rounded-full border border-black dark:border-pure-white flex items-center justify-center">
                        <div className={`w-2.5 h-2.5 rounded-full bg-champagne-gold transition-transform duration-200 ${paymentMethod === 'va' ? 'scale-100' : 'scale-0'}`}></div>
                      </div>
                      <span className="font-button-label text-button-label uppercase tracking-widest">
                        Virtual Account (M-Banking)
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-muted-grey group-hover:text-charcoal-black dark:group-hover:text-pure-white transition-colors">
                      account_balance
                    </span>
                  </div>
                </label>

                {/* Retail */}
                <label className="cursor-pointer relative group block">
                  <input
                    type="radio"
                    name="payment_method"
                    value="retail"
                    className="peer sr-only"
                    checked={paymentMethod === "retail"}
                    onChange={() => setPaymentMethod("retail")}
                  />
                  <div className={`border p-6 flex items-center justify-between transition-all duration-300 hover:border-on-surface-variant ${paymentMethod === 'retail' ? 'border-champagne-gold bg-surface-container-low' : 'border-outline-variant'}`}>
                    <div className="flex items-center gap-4">
                      <div className="w-5 h-5 rounded-full border border-black dark:border-pure-white flex items-center justify-center">
                        <div className={`w-2.5 h-2.5 rounded-full bg-champagne-gold transition-transform duration-200 ${paymentMethod === 'retail' ? 'scale-100' : 'scale-0'}`}></div>
                      </div>
                      <span className="font-button-label text-button-label uppercase tracking-widest">
                        {isEn ? "Retail (Indomaret, Alfamart)" : "Gerai Retail (Indomaret, Alfamart)"}
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-muted-grey group-hover:text-charcoal-black dark:group-hover:text-pure-white transition-colors">
                      storefront
                    </span>
                  </div>
                </label>
              </div>
            </section>
          </div>

          {/* Right Column: Order Summary (Sticky) */}
          <div className="lg:col-span-5 xl:col-span-4 relative">
            <div className="sticky top-32 bg-surface dark:bg-deep-espresso border border-black/5 dark:border-transparent p-8 flex flex-col gap-8">
              <h3 className="font-button-label text-button-label uppercase tracking-widest text-champagne-gold border-b border-surface-variant pb-4">
                {isEn ? "Order Summary" : "Ringkasan Pesanan"}
              </h3>
              
              {/* Items List */}
              <div className="flex flex-col gap-6">
                {cartItems.length === 0 ? (
                  <div className="py-4 text-center text-muted-grey text-sm">
                    {isEn ? "Your cart is empty." : "Keranjang belanja Anda kosong."}
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div key={`${item.id}-${item.size}-${item.color}`} className="flex gap-4 items-start">
                      <div className="w-24 aspect-[361/510] bg-neutral-light relative overflow-hidden group flex-shrink-0">
                        <img
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          src={item.image}
                          alt={isEn ? item.name : item.nameId}
                        />
                      </div>
                      <div className="flex flex-col flex-grow">
                        <h4 className="font-button-label text-button-label uppercase tracking-widest text-charcoal-black dark:text-pure-white leading-tight">
                          {isEn ? item.name : item.nameId}
                        </h4>
                        <p className="font-body-main text-body-main text-muted-grey mt-1">
                          {isEn ? `Size: ${item.size} | Color: ${item.color}` : `Ukuran: ${item.size} | Warna: ${item.color}`}
                        </p>
                        <p className="font-body-main text-body-main text-muted-grey mt-1">
                          {isEn ? `Qty: ${item.quantity}` : `Jml: ${item.quantity}`}
                        </p>
                        <p className="font-price-tag text-price-tag text-charcoal-black dark:text-pure-white mt-auto pt-2">
                          RP {(item.price * item.quantity).toLocaleString("id-ID")}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Totals */}
              <div className="border-t border-surface-variant pt-6 flex flex-col gap-3 font-body-main text-body-main">
                <div className="flex justify-between text-on-surface-variant">
                  <span>{isEn ? "Subtotal" : "Subtotal"}</span>
                  <span>RP {subtotal.toLocaleString("id-ID")}</span>
                </div>
                <div className="flex justify-between text-on-surface-variant">
                  <span>{isEn ? "Shipping" : "Pengiriman"}</span>
                  <span className="text-champagne-gold uppercase font-button-label text-xs tracking-widest">
                    {isEn ? "Complimentary" : "Gratis"}
                  </span>
                </div>
                <div className="flex justify-between text-on-surface-variant">
                  <span>{isEn ? "Tax (11%)" : "Pajak (11%)"}</span>
                  <span>RP {tax.toLocaleString("id-ID")}</span>
                </div>
              </div>

              {/* Grand Total */}
              <div className="border-t border-black/10 dark:border-pure-white pt-6 flex justify-between items-end">
                <span className="font-button-label text-button-label uppercase tracking-widest text-charcoal-black dark:text-pure-white">
                  Total
                </span>
                <span className="font-price-tag text-3xl font-bold text-champagne-gold leading-none">
                  RP {total.toLocaleString("id-ID")}
                </span>
              </div>

              {/* CTA */}
              <button 
                onClick={async () => {
                  const order = {
                    userId: user?.id || 1, // Fallback to 1 for testing if user is not logged in properly
                    items: cartItems.map(item => ({
                      variantId: parseInt(item.id) || 1, // Use id as variantId for now
                      qty: item.quantity
                    }))
                  };
                  
                  try {
                    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/orders/checkout`, {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        ...(token ? { "Authorization": `Bearer ${token}` } : {})
                      },
                      body: JSON.stringify(order)
                    });
                    
                    if (res.ok) {
                      const data = await res.json();
                      
                      // Hapus keranjang setelah checkout berhasil
                      clearCart();

                      if (data.payment_url) {
                        window.location.href = data.payment_url;
                      } else {
                        router.push(`/?lang=${lang}`);
                      }
                    } else {
                      console.error("Checkout failed", await res.text());
                    }
                  } catch (err) {
                    console.error("Checkout error:", err);
                  }
                }}
                className="w-full bg-charcoal-black hover:bg-champagne-gold text-pure-white hover:text-deep-espresso border border-transparent hover:border-champagne-gold transition-colors duration-300 py-5 font-button-label text-button-label uppercase tracking-widest mt-4"
              >
                {isEn ? "Place Order" : "Buat Pesanan"}
              </button>
              <div className="text-center">
                <p className="font-body-main text-xs text-muted-grey mt-2">
                  {isEn
                    ? "By placing your order, you agree to our Terms & Privacy Policy."
                    : "Dengan membuat pesanan, Anda menyetujui Syarat & Kebijakan Privasi kami."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer lang={lang} />
    </div>
  );
}

export default function Checkout() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background dark:bg-charcoal-black"></div>}>
      <CheckoutContent />
    </Suspense>
  );
}
