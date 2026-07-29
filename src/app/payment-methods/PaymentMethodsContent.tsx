"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useAuth } from "@/context/AuthContext";
import { useAccountData } from "@/context/AccountDataContext";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AccountSidebar from "@/components/AccountSidebar";

export default function PaymentMethodsContent() {
  const searchParams = useSearchParams();
  const { isEn, toggleLanguage } = useLanguage();
  const { user } = useAuth();
  const { paymentMethods, addPaymentMethod, removePaymentMethod, setAsDefaultPaymentMethod } = useAccountData();

  const lang = searchParams.get("lang");
  const [mounted, setMounted] = useState(false);
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newMethod, setNewMethod] = useState<{
    type: "gopay" | "ovo" | "dana" | "shopeepay" | "qris";
    accountName: string;
    accountNumber: string;
    isDefault: boolean;
  }>({
    type: "gopay",
    accountName: user?.nama || "",
    accountNumber: user?.phone || "",
    isDefault: false
  });
  
  useEffect(() => {
    setMounted(true);
    if (lang === "id" && isEn) {
      toggleLanguage();
    } else if (lang === "en" && !isEn) {
      toggleLanguage();
    }
  }, [lang, isEn, toggleLanguage]);

  useEffect(() => {
    if (user) {
      setNewMethod(prev => ({ 
        ...prev, 
        accountName: prev.accountName || user.nama,
        accountNumber: prev.accountNumber || user.phone || ""
      }));
    }
  }, [user]);

  if (!mounted) return null;
  const currentLang = isEn ? "en" : "id";

  const handleAddMethod = (e: React.FormEvent) => {
    e.preventDefault();
    addPaymentMethod({
      type: newMethod.type,
      accountName: newMethod.accountName,
      accountNumber: newMethod.accountNumber,
      isDefault: newMethod.isDefault
    });
    
    setIsModalOpen(false);
    setNewMethod({
      type: "gopay",
      accountName: user?.nama || "",
      accountNumber: user?.phone || "",
      isDefault: false
    });
  };

  const getEwalletBrand = (type: string) => {
    switch (type) {
      case 'gopay':
        return { name: 'GoPay', color: 'bg-[#00AED6]', textColor: 'text-white' };
      case 'ovo':
        return { name: 'OVO', color: 'bg-[#4C2A86]', textColor: 'text-white' };
      case 'dana':
        return { name: 'DANA', color: 'bg-[#108EE9]', textColor: 'text-white' };
      case 'shopeepay':
        return { name: 'ShopeePay', color: 'bg-[#EE4D2D]', textColor: 'text-white' };
      case 'qris':
        return { name: 'QRIS', color: 'bg-[#ED0226]', textColor: 'text-white' };
      default:
        return { name: 'E-Wallet', color: 'bg-charcoal-black', textColor: 'text-white' };
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-charcoal-black transition-colors duration-300 relative">
      <Navbar />

      <main className="flex-grow flex flex-col w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24 pt-32">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <h1 className="font-hero-title text-hero-title-mobile md:text-hero-title uppercase text-charcoal-black dark:text-white border-b border-black/10 dark:border-white/10 pb-4">
              {isEn ? "PAYMENT METHODS" : "METODE PEMBAYARAN"}
            </h1>
            <p className="text-on-surface-variant max-w-xl text-body-main font-body-main mt-4">
              {isEn 
                ? "Manage your saved E-Wallet accounts for a quicker, more secure checkout process."
                : "Kelola akun E-Wallet tersimpan Anda untuk proses checkout yang lebih cepat dan aman."}
            </p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-charcoal-black dark:bg-champagne-gold text-pure-white dark:text-deep-espresso font-button-label text-button-label uppercase tracking-widest py-4 px-8 rounded-none hover:bg-champagne-gold hover:text-charcoal-black dark:hover:bg-pure-white transition-colors duration-300 flex items-center gap-2 group"
          >
            <span className="material-symbols-outlined group-hover:rotate-90 transition-transform duration-300" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>add</span> 
            {isEn ? "Add New Method" : "Tambah Metode Baru"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <AccountSidebar activeTab="payment-methods" />

          <section className="md:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {paymentMethods.map((method) => {
                const brand = getEwalletBrand(method.type);
                return (
                  <div key={method.id} className="bg-neutral-light/50 dark:bg-surface-container border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-colors p-8 flex flex-col group h-full relative">
                    {method.isDefault && (
                      <div className="absolute top-4 right-4 bg-charcoal-black dark:bg-champagne-gold text-pure-white dark:text-deep-espresso font-button-label text-[10px] uppercase tracking-widest px-2 py-1">
                        {isEn ? "Default" : "Utama"}
                      </div>
                    )}
                    
                    <div className="mb-8 flex-1">
                      <div className="flex items-center justify-between mb-6">
                        <div className={`px-4 py-2 flex items-center justify-center rounded-sm ${brand.color}`}>
                          <span className={`${brand.textColor} font-bold text-sm tracking-wider italic uppercase`}>{brand.name}</span>
                        </div>
                      </div>
                      
                      {method.type !== "qris" ? (
                        <>
                          <p className="font-body-main text-xl tracking-widest text-charcoal-black dark:text-pure-white mb-2">
                            {method.accountNumber}
                          </p>
                          <div className="flex justify-between items-end mt-4">
                            <div>
                              <p className="font-button-label text-[10px] text-on-surface-variant uppercase tracking-widest mb-1">{isEn ? "Account Name" : "Nama Akun"}</p>
                              <p className="font-body-main text-sm text-charcoal-black dark:text-pure-white uppercase">{method.accountName}</p>
                            </div>
                          </div>
                        </>
                      ) : (
                        <p className="font-body-main text-sm text-on-surface-variant">
                          {isEn ? "QRIS payment will be generated during checkout." : "Pembayaran QRIS akan dibuat saat checkout."}
                        </p>
                      )}
                    </div>
                    
                    <div className="flex gap-6 border-t border-black/10 dark:border-white/10 pt-6 mt-auto">
                      {!method.isDefault && (
                        <button 
                          onClick={() => setAsDefaultPaymentMethod(method.id)}
                          className="font-button-label text-button-label text-charcoal-black dark:text-pure-white hover:text-champagne-gold transition-colors uppercase tracking-widest pb-1 border-b border-transparent hover:border-champagne-gold"
                        >
                          {isEn ? "Set Default" : "Jadikan Utama"}
                        </button>
                      )}
                      <button 
                        onClick={() => removePaymentMethod(method.id)}
                        className="font-button-label text-button-label text-muted-grey hover:text-error transition-colors uppercase tracking-widest pb-1 border-b border-transparent hover:border-error"
                      >
                        {isEn ? "Remove" : "Hapus"}
                      </button>
                    </div>
                  </div>
                );
              })}

              {/* Add New Method (Ghost) */}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="border border-dashed border-black/20 dark:border-white/20 hover:border-champagne-gold/50 bg-neutral-light/30 dark:bg-surface-container/30 hover:bg-neutral-light/50 dark:hover:bg-surface-container/50 transition-all duration-300 p-8 flex flex-col items-center justify-center text-center min-h-[260px] group cursor-pointer h-full"
              >
                <div className="w-16 h-16 rounded-full border border-black/20 dark:border-white/20 group-hover:border-champagne-gold flex items-center justify-center mb-6 transition-colors">
                  <span className="material-symbols-outlined text-charcoal-black dark:text-pure-white group-hover:text-champagne-gold transition-colors" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24", fontSize: "32px" }}>add</span>
                </div>
                <h3 className="font-button-label text-button-label uppercase tracking-widest text-charcoal-black dark:text-pure-white group-hover:text-champagne-gold transition-colors">
                  {isEn ? "Add New Method" : "Tambah Metode Baru"}
                </h3>
              </button>
            </div>
          </section>
        </div>
      </main>
      
      <Footer lang={currentLang} />

      {/* Pop-up Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-surface-container w-full max-w-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="flex justify-between items-center p-6 border-b border-black/10 dark:border-white/10">
              <h2 className="font-section-title-mobile text-section-title-mobile uppercase text-charcoal-black dark:text-pure-white">
                {isEn ? "Add New Payment Method" : "Tambah Metode Pembayaran"}
              </h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-on-surface-variant hover:text-error transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <form onSubmit={handleAddMethod} className="p-6 space-y-6">
              
              <div className="space-y-3 mb-6">
                <label className="font-button-label text-[10px] text-charcoal-black dark:text-pure-white uppercase tracking-widest">
                  {isEn ? "Select E-Wallet" : "Pilih E-Wallet"}
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { id: 'gopay', name: 'GoPay', color: 'border-[#00AED6] text-[#00AED6]' },
                    { id: 'ovo', name: 'OVO', color: 'border-[#4C2A86] text-[#4C2A86]' },
                    { id: 'dana', name: 'DANA', color: 'border-[#108EE9] text-[#108EE9]' },
                    { id: 'shopeepay', name: 'ShopeePay', color: 'border-[#EE4D2D] text-[#EE4D2D]' },
                    { id: 'qris', name: 'QRIS', color: 'border-[#ED0226] text-[#ED0226]' },
                  ].map(ewallet => (
                    <button
                      key={ewallet.id}
                      type="button"
                      onClick={() => setNewMethod({...newMethod, type: ewallet.id as any})}
                      className={`flex flex-col items-center justify-center py-3 px-2 border transition-all ${newMethod.type === ewallet.id ? `${ewallet.color} bg-black/5 dark:bg-white/10 scale-[1.02] shadow-sm` : "border-black/20 dark:border-white/20 text-muted-grey hover:border-black/50 dark:hover:border-white/50"}`}
                    >
                      <span className="font-button-label text-xs tracking-widest uppercase">{ewallet.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {newMethod.type !== "qris" && (
                <>
                  <div className="space-y-2">
                    <label className="font-button-label text-[10px] text-charcoal-black dark:text-pure-white uppercase tracking-widest">
                      {isEn ? "Account Name" : "Nama Akun"}
                    </label>
                    <input 
                      required
                      value={newMethod.accountName}
                      onChange={(e) => setNewMethod({...newMethod, accountName: e.target.value})}
                      className="w-full bg-transparent border border-black/20 dark:border-white/20 p-3 font-body-main text-sm focus:outline-none focus:border-champagne-gold text-charcoal-black dark:text-white uppercase"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-button-label text-[10px] text-charcoal-black dark:text-pure-white uppercase tracking-widest">
                      {isEn ? "Account Number / Phone Number" : "Nomor Akun / Nomor Telepon"}
                    </label>
                    <input 
                      required
                      type="tel"
                      placeholder="081234567890"
                      value={newMethod.accountNumber}
                      onChange={(e) => setNewMethod({...newMethod, accountNumber: e.target.value})}
                      className="w-full bg-transparent border border-black/20 dark:border-white/20 p-3 font-body-main text-sm tracking-widest focus:outline-none focus:border-champagne-gold text-charcoal-black dark:text-white"
                    />
                  </div>
                </>
              )}

              <div className="flex items-center gap-3 pt-2">
                <input 
                  type="checkbox" 
                  id="isDefaultMethod"
                  checked={newMethod.isDefault}
                  onChange={(e) => setNewMethod({...newMethod, isDefault: e.target.checked})}
                  className="w-4 h-4 accent-charcoal-black dark:accent-champagne-gold"
                />
                <label htmlFor="isDefaultMethod" className="font-body-main text-sm text-charcoal-black dark:text-pure-white">
                  {isEn ? "Set as default payment method" : "Jadikan sebagai metode pembayaran utama"}
                </label>
              </div>

              <div className="pt-6 border-t border-black/10 dark:border-white/10 flex justify-end gap-4">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="font-button-label text-button-label uppercase tracking-widest px-6 py-3 border border-transparent text-charcoal-black dark:text-pure-white hover:text-error transition-colors"
                >
                  {isEn ? "Cancel" : "Batal"}
                </button>
                <button 
                  type="submit"
                  className="font-button-label text-button-label uppercase tracking-widest px-8 py-3 bg-charcoal-black dark:bg-white text-pure-white dark:text-charcoal-black hover:bg-champagne-gold hover:text-charcoal-black transition-colors"
                >
                  {isEn ? "Save Method" : "Simpan Metode"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
