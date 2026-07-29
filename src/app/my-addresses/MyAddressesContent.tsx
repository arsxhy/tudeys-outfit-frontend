"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useAuth } from "@/context/AuthContext";
import { useAccountData } from "@/context/AccountDataContext";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AccountSidebar from "@/components/AccountSidebar";

export default function MyAddressesContent() {
  const searchParams = useSearchParams();
  const { isEn, toggleLanguage } = useLanguage();
  const { user } = useAuth();
  const { addresses, addAddress, removeAddress, setAsDefaultAddress } = useAccountData();

  const lang = searchParams.get("lang");
  const [mounted, setMounted] = useState(false);
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAddress, setNewAddress] = useState({
    name: user?.nama || "",
    type: "Home",
    street: "",
    province: "",
    city: "",
    district: "",
    postalCode: "",
    phone: "",
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
      setNewAddress(prev => ({ ...prev, name: user.nama }));
    }
  }, [user]);

  if (!mounted) return null;
  const currentLang = isEn ? "en" : "id";

  const handleAddAddress = (e: React.FormEvent) => {
    e.preventDefault();
    addAddress(newAddress);
    setIsModalOpen(false);
    setNewAddress({
      name: user?.nama || "",
      type: "Home",
      street: "",
      province: "",
      city: "",
      district: "",
      postalCode: "",
      phone: "",
      isDefault: false
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-charcoal-black transition-colors duration-300 relative">
      <Navbar />

      <main className="flex-grow flex flex-col w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24 pt-32">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <h1 className="font-hero-title text-hero-title-mobile md:text-hero-title uppercase text-charcoal-black dark:text-white border-b border-black/10 dark:border-white/10 pb-4">
              {isEn ? "SAVED ADDRESSES" : "ALAMAT TERSIMPAN"}
            </h1>
            <p className="text-on-surface-variant max-w-xl text-body-main font-body-main mt-4">
              {isEn 
                ? "Manage your shipping and billing addresses for a seamless checkout experience. Keep your details up to date."
                : "Kelola alamat pengiriman dan penagihan Anda untuk pengalaman checkout yang mulus. Pastikan detail Anda selalu terbaru."}
            </p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-charcoal-black dark:bg-champagne-gold text-pure-white dark:text-deep-espresso font-button-label text-button-label uppercase tracking-widest py-4 px-8 rounded-none hover:bg-champagne-gold hover:text-charcoal-black dark:hover:bg-pure-white transition-colors duration-300 flex items-center gap-2 group"
          >
            <span className="material-symbols-outlined group-hover:rotate-90 transition-transform duration-300" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>add</span> 
            {isEn ? "Add New Address" : "Tambah Alamat Baru"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <AccountSidebar activeTab="my-addresses" />

          <section className="md:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {addresses.map((address) => (
                <div key={address.id} className="bg-neutral-light/50 dark:bg-surface-container border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 transition-colors p-8 flex flex-col group h-full relative">
                  {address.isDefault && (
                    <div className="absolute top-4 right-4 bg-charcoal-black dark:bg-champagne-gold text-pure-white dark:text-deep-espresso font-button-label text-[10px] uppercase tracking-widest px-2 py-1">
                      {isEn ? "Default" : "Utama"}
                    </div>
                  )}
                  <div className="mb-8 flex-1">
                    <h3 className="font-body-main text-body-main font-bold text-charcoal-black dark:text-pure-white mb-2">
                      {address.name} ({address.type})
                    </h3>
                    <p className="font-body-main text-body-main text-on-surface-variant mb-1">{address.street}</p>
                    <p className="font-body-main text-body-main text-on-surface-variant mb-1">{address.district}, {address.city}</p>
                    <p className="font-body-main text-body-main text-on-surface-variant mb-4">{address.province}, {address.postalCode}</p>
                    <div className="flex items-center gap-2 text-muted-grey font-body-main text-sm">
                      <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>call</span> 
                      {address.phone}
                    </div>
                  </div>
                  <div className="flex gap-6 border-t border-black/10 dark:border-white/10 pt-6 mt-auto">
                    {!address.isDefault && (
                      <button 
                        onClick={() => setAsDefaultAddress(address.id)}
                        className="font-button-label text-button-label text-charcoal-black dark:text-pure-white hover:text-champagne-gold transition-colors uppercase tracking-widest pb-1 border-b border-transparent hover:border-champagne-gold"
                      >
                        {isEn ? "Set Default" : "Jadikan Utama"}
                      </button>
                    )}
                    <button 
                      onClick={() => removeAddress(address.id)}
                      className="font-button-label text-button-label text-muted-grey hover:text-error transition-colors uppercase tracking-widest pb-1 border-b border-transparent hover:border-error"
                    >
                      {isEn ? "Delete" : "Hapus"}
                    </button>
                  </div>
                </div>
              ))}

              {/* Add New Card (Ghost) */}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="border border-dashed border-black/20 dark:border-white/20 hover:border-champagne-gold/50 bg-neutral-light/30 dark:bg-surface-container/30 hover:bg-neutral-light/50 dark:hover:bg-surface-container/50 transition-all duration-300 p-8 flex flex-col items-center justify-center text-center min-h-[300px] group cursor-pointer h-full"
              >
                <div className="w-16 h-16 rounded-full border border-black/20 dark:border-white/20 group-hover:border-champagne-gold flex items-center justify-center mb-6 transition-colors">
                  <span className="material-symbols-outlined text-charcoal-black dark:text-pure-white group-hover:text-champagne-gold transition-colors" style={{ fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24", fontSize: "32px" }}>add</span>
                </div>
                <h3 className="font-button-label text-button-label uppercase tracking-widest text-charcoal-black dark:text-pure-white group-hover:text-champagne-gold transition-colors">
                  {isEn ? "Add New Address" : "Tambah Alamat Baru"}
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
          <div className="bg-white dark:bg-surface-container w-full max-w-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="flex justify-between items-center p-6 border-b border-black/10 dark:border-white/10">
              <h2 className="font-section-title-mobile text-section-title-mobile uppercase text-charcoal-black dark:text-pure-white">
                {isEn ? "Add New Address" : "Tambah Alamat Baru"}
              </h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-on-surface-variant hover:text-error transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <form onSubmit={handleAddAddress} className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="font-button-label text-[10px] text-charcoal-black dark:text-pure-white uppercase tracking-widest">
                    {isEn ? "Full Name" : "Nama Lengkap"}
                  </label>
                  <input 
                    required
                    value={newAddress.name}
                    onChange={(e) => setNewAddress({...newAddress, name: e.target.value})}
                    className="w-full bg-transparent border border-black/20 dark:border-white/20 p-3 font-body-main text-sm focus:outline-none focus:border-champagne-gold text-charcoal-black dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-button-label text-[10px] text-charcoal-black dark:text-pure-white uppercase tracking-widest">
                    {isEn ? "Label (e.g. Home, Work)" : "Label (Cth. Rumah, Kantor)"}
                  </label>
                  <input 
                    required
                    value={newAddress.type}
                    onChange={(e) => setNewAddress({...newAddress, type: e.target.value})}
                    className="w-full bg-transparent border border-black/20 dark:border-white/20 p-3 font-body-main text-sm focus:outline-none focus:border-champagne-gold text-charcoal-black dark:text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-button-label text-[10px] text-charcoal-black dark:text-pure-white uppercase tracking-widest">
                  {isEn ? "Street Address" : "Alamat Jalan"}
                </label>
                <input 
                  required
                  value={newAddress.street}
                  onChange={(e) => setNewAddress({...newAddress, street: e.target.value})}
                  className="w-full bg-transparent border border-black/20 dark:border-white/20 p-3 font-body-main text-sm focus:outline-none focus:border-champagne-gold text-charcoal-black dark:text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="font-button-label text-[10px] text-charcoal-black dark:text-pure-white uppercase tracking-widest">
                    {isEn ? "Province" : "Provinsi"}
                  </label>
                  <input 
                    required
                    value={newAddress.province}
                    onChange={(e) => setNewAddress({...newAddress, province: e.target.value})}
                    className="w-full bg-transparent border border-black/20 dark:border-white/20 p-3 font-body-main text-sm focus:outline-none focus:border-champagne-gold text-charcoal-black dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-button-label text-[10px] text-charcoal-black dark:text-pure-white uppercase tracking-widest">
                    {isEn ? "City/Regency" : "Kota/Kabupaten"}
                  </label>
                  <input 
                    required
                    value={newAddress.city}
                    onChange={(e) => setNewAddress({...newAddress, city: e.target.value})}
                    className="w-full bg-transparent border border-black/20 dark:border-white/20 p-3 font-body-main text-sm focus:outline-none focus:border-champagne-gold text-charcoal-black dark:text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="font-button-label text-[10px] text-charcoal-black dark:text-pure-white uppercase tracking-widest">
                    {isEn ? "District" : "Kecamatan"}
                  </label>
                  <input 
                    required
                    value={newAddress.district}
                    onChange={(e) => setNewAddress({...newAddress, district: e.target.value})}
                    className="w-full bg-transparent border border-black/20 dark:border-white/20 p-3 font-body-main text-sm focus:outline-none focus:border-champagne-gold text-charcoal-black dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-button-label text-[10px] text-charcoal-black dark:text-pure-white uppercase tracking-widest">
                    {isEn ? "Postal Code" : "Kode Pos"}
                  </label>
                  <input 
                    required
                    value={newAddress.postalCode}
                    onChange={(e) => setNewAddress({...newAddress, postalCode: e.target.value})}
                    className="w-full bg-transparent border border-black/20 dark:border-white/20 p-3 font-body-main text-sm focus:outline-none focus:border-champagne-gold text-charcoal-black dark:text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-button-label text-[10px] text-charcoal-black dark:text-pure-white uppercase tracking-widest">
                  {isEn ? "Phone Number" : "Nomor Telepon"}
                </label>
                <input 
                  required
                  value={newAddress.phone}
                  onChange={(e) => setNewAddress({...newAddress, phone: e.target.value})}
                  className="w-full bg-transparent border border-black/20 dark:border-white/20 p-3 font-body-main text-sm focus:outline-none focus:border-champagne-gold text-charcoal-black dark:text-white"
                />
              </div>

              <div className="flex items-center gap-3 pt-2">
                <input 
                  type="checkbox" 
                  id="isDefault"
                  checked={newAddress.isDefault}
                  onChange={(e) => setNewAddress({...newAddress, isDefault: e.target.checked})}
                  className="w-4 h-4 accent-charcoal-black dark:accent-champagne-gold"
                />
                <label htmlFor="isDefault" className="font-body-main text-sm text-charcoal-black dark:text-pure-white">
                  {isEn ? "Set as default address" : "Jadikan sebagai alamat utama"}
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
                  {isEn ? "Save Address" : "Simpan Alamat"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
