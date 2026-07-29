"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useAuth } from "@/context/AuthContext";
import { useSearchParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AccountSidebar from "@/components/AccountSidebar";

export default function AccountSettingsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { isEn, toggleLanguage } = useLanguage();
  const { user, updateUser } = useAuth();

  const lang = searchParams.get("lang");
  
  const [mounted, setMounted] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  // Security state
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [securityMessage, setSecurityMessage] = useState({ type: "", text: "" });
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);
  const [isDeactivating, setIsDeactivating] = useState(false);
  
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
      const names = user.nama.split(" ");
      setFirstName(names[0] || "");
      setLastName(names.slice(1).join(" ") || "");
      setPhone(user.phone || "");
    }
  }, [user]);

  const handleSave = () => {
    if (user) {
      setIsSaving(true);
      const updatedUser = {
        ...user,
        nama: `${firstName} ${lastName}`.trim(),
        phone: phone,
      };
      updateUser(updatedUser);
      
      // Simulate API call
      setTimeout(() => {
        setIsSaving(false);
      }, 500);
    }
  };

  const handleUpdatePassword = async () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      setSecurityMessage({ type: "error", text: isEn ? "Please fill all password fields." : "Silakan isi semua bidang kata sandi." });
      return;
    }
    
    if (newPassword !== confirmPassword) {
      setSecurityMessage({ type: "error", text: isEn ? "New passwords do not match." : "Kata sandi baru tidak cocok." });
      return;
    }

    if (newPassword.length < 6) {
      setSecurityMessage({ type: "error", text: isEn ? "Password must be at least 6 characters." : "Kata sandi minimal 6 karakter." });
      return;
    }

    setIsUpdatingPassword(true);
    setSecurityMessage({ type: "", text: "" });
    
    // NOTE: This is where we would call the actual backend API
    // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/users/${user?.id}/change-password`, { ... })
    
    setTimeout(() => {
      setIsUpdatingPassword(false);
      setSecurityMessage({ type: "success", text: isEn ? "Password updated successfully! (Simulated)" : "Kata sandi berhasil diperbarui! (Simulasi)" });
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    }, 1000);
  };

  const handleDeactivateAccount = () => {
    if (window.confirm(isEn ? "Are you sure you want to deactivate your account? This action can only be undone by contacting support." : "Apakah Anda yakin ingin menonaktifkan akun Anda? Tindakan ini hanya dapat dibatalkan dengan menghubungi dukungan pelanggan.")) {
      setIsDeactivating(true);
      
      // NOTE: This is where we would call the actual backend API
      // await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/users/${user?.id}/deactivate`, { method: 'PUT' })
      
      setTimeout(() => {
        alert(isEn ? "Account deactivated successfully (Simulated). Logging out..." : "Akun berhasil dinonaktifkan (Simulasi). Mengeluarkan log...");
        // Here we would call logout() and redirect to home
        router.push("/?lang=" + currentLang);
      }, 1000);
    }
  };

  if (!mounted) return null;
  const currentLang = isEn ? "en" : "id";

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-charcoal-black transition-colors duration-300">
      <Navbar />

      <main className="flex-grow flex flex-col w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24 pt-32">
        <div className="mb-16">
          <h1 className="font-hero-title text-hero-title-mobile md:text-hero-title uppercase text-charcoal-black dark:text-white border-b border-black/10 dark:border-white/10 pb-4">
            {isEn ? "ACCOUNT SETTINGS" : "PENGATURAN AKUN"}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <AccountSidebar activeTab="account-settings" />

          <section className="md:col-span-9 flex flex-col gap-12">
            <p className="text-on-surface-variant max-w-2xl text-body-main font-body-main mb-4">
              {isEn 
                ? "Manage your personal information and security preferences. Ensure your details are up to date for a seamless luxury shopping experience."
                : "Kelola informasi pribadi dan preferensi keamanan Anda. Pastikan detail Anda selalu terbaru untuk pengalaman berbelanja mewah yang mulus."}
            </p>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-16">
              {/* Personal Info Form */}
              <div className="xl:col-span-7">
                <div className="border border-black/10 dark:border-white/10 p-8 md:p-12 bg-neutral-light/50 dark:bg-surface-container relative overflow-hidden group h-full">
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-champagne-gold/5 rounded-full blur-3xl group-hover:bg-champagne-gold/10 transition-all duration-700 pointer-events-none"></div>
                  <h2 className="font-section-title-mobile text-section-title-mobile text-charcoal-black dark:text-pure-white mb-8 border-b border-black/10 dark:border-white/10 pb-4">
                    {isEn ? "Personal Information" : "Informasi Pribadi"}
                  </h2>
                  <form className="space-y-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="font-button-label text-button-label text-charcoal-black dark:text-pure-white block uppercase" htmlFor="firstName">
                          {isEn ? "First Name" : "Nama Depan"}
                        </label>
                        <input 
                          className="w-full bg-transparent border border-black/20 dark:border-white/10 text-charcoal-black dark:text-white p-4 font-body-main focus:outline-none focus:border-champagne-gold dark:focus:border-champagne-gold transition-colors" 
                          id="firstName" 
                          name="firstName" 
                          placeholder={isEn ? "FIRST NAME" : "NAMA DEPAN"} 
                          type="text" 
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="font-button-label text-button-label text-charcoal-black dark:text-pure-white block uppercase" htmlFor="lastName">
                          {isEn ? "Last Name" : "Nama Belakang"}
                        </label>
                        <input 
                          className="w-full bg-transparent border border-black/20 dark:border-white/10 text-charcoal-black dark:text-white p-4 font-body-main focus:outline-none focus:border-champagne-gold dark:focus:border-champagne-gold transition-colors" 
                          id="lastName" 
                          name="lastName" 
                          placeholder={isEn ? "LAST NAME" : "NAMA BELAKANG"} 
                          type="text" 
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="font-button-label text-button-label text-charcoal-black dark:text-pure-white block uppercase" htmlFor="email">
                        {isEn ? "Email Address" : "Alamat Email"}
                      </label>
                      <input 
                        className="w-full bg-transparent border border-black/20 dark:border-white/10 text-charcoal-black dark:text-white p-4 font-body-main focus:outline-none focus:border-champagne-gold dark:focus:border-champagne-gold transition-colors" 
                        id="email" 
                        name="email" 
                        placeholder={isEn ? "EMAIL ADDRESS" : "ALAMAT EMAIL"} 
                        type="email" 
                        defaultValue={user?.email || "eleanor.vance@example.com"}
                        readOnly
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-button-label text-button-label text-charcoal-black dark:text-pure-white block uppercase" htmlFor="phone">
                        {isEn ? "Phone Number" : "Nomor Telepon"}
                      </label>
                      <input 
                        className="w-full bg-transparent border border-black/20 dark:border-white/10 text-charcoal-black dark:text-white p-4 font-body-main focus:outline-none focus:border-champagne-gold dark:focus:border-champagne-gold transition-colors" 
                        id="phone" 
                        name="phone" 
                        placeholder={isEn ? "PHONE NUMBER" : "NOMOR TELEPON"} 
                        type="tel" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="pt-6">
                      <button 
                        className="bg-charcoal-black dark:bg-white border border-transparent text-pure-white dark:text-charcoal-black px-10 py-4 font-button-label text-button-label uppercase tracking-widest hover:bg-champagne-gold hover:text-charcoal-black dark:hover:bg-champagne-gold dark:hover:text-charcoal-black transition-colors duration-300 w-full md:w-auto" 
                        type="button"
                        onClick={handleSave}
                        disabled={isSaving}
                      >
                        {isSaving ? (isEn ? "Saving..." : "Menyimpan...") : (isEn ? "Save Changes" : "Simpan Perubahan")}
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Security Form */}
              <div className="xl:col-span-5">
                <div className="border border-black/10 dark:border-white/10 p-8 md:p-12 bg-neutral-light/50 dark:bg-surface-container h-full flex flex-col">
                  <h2 className="font-section-title-mobile text-section-title-mobile text-charcoal-black dark:text-pure-white mb-8 border-b border-black/10 dark:border-white/10 pb-4">
                    {isEn ? "Security" : "Keamanan"}
                  </h2>
                  <form className="space-y-8 flex-grow">
                    {securityMessage.text && (
                      <div className={`p-4 font-body-main text-sm ${securityMessage.type === 'error' ? 'bg-error/10 text-error' : 'bg-green-500/10 text-green-600 dark:text-green-400'}`}>
                        {securityMessage.text}
                      </div>
                    )}
                    <div className="space-y-2">
                      <label className="font-button-label text-button-label text-charcoal-black dark:text-pure-white block uppercase" htmlFor="currentPassword">
                        {isEn ? "Current Password" : "Kata Sandi Saat Ini"}
                      </label>
                      <input 
                        className="w-full bg-transparent border border-black/20 dark:border-white/10 text-charcoal-black dark:text-white p-4 font-body-main focus:outline-none focus:border-champagne-gold dark:focus:border-champagne-gold transition-colors" 
                        id="currentPassword" 
                        name="currentPassword" 
                        placeholder={isEn ? "CURRENT PASSWORD" : "KATA SANDI SAAT INI"} 
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-button-label text-button-label text-charcoal-black dark:text-pure-white block uppercase" htmlFor="newPassword">
                        {isEn ? "New Password" : "Kata Sandi Baru"}
                      </label>
                      <input 
                        className="w-full bg-transparent border border-black/20 dark:border-white/10 text-charcoal-black dark:text-white p-4 font-body-main focus:outline-none focus:border-champagne-gold dark:focus:border-champagne-gold transition-colors" 
                        id="newPassword" 
                        name="newPassword" 
                        placeholder={isEn ? "NEW PASSWORD" : "KATA SANDI BARU"} 
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="font-button-label text-button-label text-charcoal-black dark:text-pure-white block uppercase" htmlFor="confirmPassword">
                        {isEn ? "Confirm New Password" : "Konfirmasi Kata Sandi Baru"}
                      </label>
                      <input 
                        className="w-full bg-transparent border border-black/20 dark:border-white/10 text-charcoal-black dark:text-white p-4 font-body-main focus:outline-none focus:border-champagne-gold dark:focus:border-champagne-gold transition-colors" 
                        id="confirmPassword" 
                        name="confirmPassword" 
                        placeholder={isEn ? "CONFIRM NEW PASSWORD" : "KONFIRMASI KATA SANDI BARU"} 
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>
                    <div className="pt-6">
                      <button 
                        className="bg-transparent border border-charcoal-black dark:border-white/30 text-charcoal-black dark:text-pure-white px-10 py-4 font-button-label text-button-label uppercase tracking-widest hover:bg-champagne-gold hover:text-charcoal-black hover:border-champagne-gold transition-colors duration-300 w-full disabled:opacity-50" 
                        type="button"
                        onClick={handleUpdatePassword}
                        disabled={isUpdatingPassword}
                      >
                        {isUpdatingPassword ? (isEn ? "Updating..." : "Memperbarui...") : (isEn ? "Update Password" : "Perbarui Kata Sandi")}
                      </button>
                    </div>
                  </form>
                  <div className="mt-12 pt-8 border-t border-black/10 dark:border-white/10">
                    <button 
                      className="text-muted-grey hover:text-error transition-colors text-sm uppercase tracking-widest underline underline-offset-4 font-button-label disabled:opacity-50" 
                      type="button"
                      onClick={handleDeactivateAccount}
                      disabled={isDeactivating}
                    >
                      {isDeactivating ? (isEn ? "Deactivating..." : "Menonaktifkan...") : (isEn ? "Deactivate Account" : "Nonaktifkan Akun")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer lang={currentLang} />
    </div>
  );
}
