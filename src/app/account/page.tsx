"use client";

import React, { useState, Suspense, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/AuthContext";

function AccountContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const lang = (searchParams.get("lang") as "id" | "en") || "id";
  const isEn = lang === "en";

  const { login, isAuthenticated } = useAuth();
  const [formType, setFormType] = useState<"login" | "register">("login");

  // Form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      router.push(`/?lang=${lang}`);
    }
  }, [isAuthenticated, router, lang]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }
      
      // We need to fetch user profile, but wait, backend login returns access_token.
      // Where does the user data come from? Let's decode JWT or just store email.
      // Usually, we would have /users/me, but for MVP let's store a basic user object.
      login(data.access_token, {
        id: data.user?.id || "",
        nama: data.user?.nama || email.split("@")[0],
        email: email,
        role: data.user?.role || "Customer"
      });
      router.push(`/?lang=${lang}`);
    } catch (err: any) {
      setErrorMsg(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    try {
      const nama = `${firstName} ${lastName}`.trim();
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, nama }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Registration failed");
      }
      
      // After register, auto-login or switch to login? Let's switch to login.
      setFormType("login");
      setErrorMsg("Registration successful! Please login.");
      // Clear password
      setPassword("");
    } catch (err: any) {
      setErrorMsg(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface font-body-main antialiased">
      <header className="w-full px-margin-desktop py-8 absolute top-0 left-0 z-50 pointer-events-none hidden md:block">
        <div className="max-w-container-max mx-auto flex justify-between items-center">
          <Link
            href={`/?lang=${lang}`}
            className="font-hero-title-mobile text-section-title-mobile text-on-surface tracking-tighter pointer-events-auto"
          >
            TUDEYSOUTFIT
          </Link>
          <Link
            href={`/?lang=${lang}`}
            className="flex items-center gap-2 text-on-surface-variant hover:text-champagne-gold transition-colors font-button-label text-button-label pointer-events-auto"
          >
            <span className="material-symbols-outlined text-sm">close</span>
            <span>{isEn ? "CANCEL" : "BATAL"}</span>
          </Link>
        </div>
      </header>

      <header className="w-full px-margin-mobile py-6 absolute top-0 left-0 z-50 pointer-events-none md:hidden">
        <div className="flex justify-between items-center">
          <Link
            href={`/?lang=${lang}`}
            className="font-hero-title-mobile text-2xl text-on-surface tracking-tighter pointer-events-auto"
          >
            TUDEYS
          </Link>
          <Link
            href={`/?lang=${lang}`}
            className="text-on-surface-variant pointer-events-auto"
          >
            <span className="material-symbols-outlined">close</span>
          </Link>
        </div>
      </header>

      <main className="flex-grow flex flex-col md:flex-row h-screen">
        <div className="hidden md:block md:w-1/2 lg:w-3/5 h-full relative overflow-hidden bg-surface-container-lowest">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB0G0RoeATyJS4z-f-wO7Y4-6msIoJCEj-U_OCkcFu-p1cDvMmOHmzhuxaIHViooLOddpihrPhn7vm1r3A7lIErefR5lDKzT-mekfUgqJpeUJOt945TyZf9PYEuXqu2dlhcvy41HJlqqVhr2qGl-U506WYnJJdz6sR-9z1oDlpm0crQl5JSiM1sIdVE_xgTAoPpGfW6-zoXQFHzvxfzHP3ptBte30r8g7GNcXqJ50vXCAdlvEL_NWcm02T6Y005tnXjlxwHp4wU')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-black/80 via-transparent to-transparent flex flex-col justify-end p-margin-desktop">
            <h1 className="font-hero-title text-hero-title text-pure-white mb-4">
              {isEn ? (
                <>
                  ELEVATE YOUR<br />EVERYDAY STYLE
                </>
              ) : (
                <>
                  TINGKATKAN<br />GAYA HARIANMU
                </>
              )}
            </h1>
            <p className="font-body-main text-body-main text-on-surface-variant max-w-md">
              {isEn
                ? "Discover timeless fashion pieces crafted for modern lifestyles. Experience the perfect blend of comfort and luxury."
                : "Temukan koleksi mode abadi yang dirancang untuk gaya hidup modern. Rasakan perpaduan sempurna antara kenyamanan dan kemewahan."}
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-2/5 h-full flex flex-col justify-center px-margin-mobile md:px-margin-desktop bg-surface relative z-10 overflow-y-auto">
          <div className="max-w-md w-full mx-auto py-24 md:py-12">
            <div className="flex gap-8 mb-12 border-b border-black/10 dark:border-white/10 pb-4">
              <button
                className={`font-button-label text-button-label uppercase tracking-widest transition-colors relative ${
                  formType === "login"
                    ? "text-champagne-gold"
                    : "text-on-surface-variant hover:text-champagne-gold"
                }`}
                onClick={() => { setFormType("login"); setErrorMsg(""); }}
              >
                {isEn ? "Login" : "Masuk"}
                <span
                  className={`absolute -bottom-[17px] left-0 w-full h-0.5 transition-all duration-300 ${
                    formType === "login" ? "bg-champagne-gold" : "bg-transparent"
                  }`}
                ></span>
              </button>
              <button
                className={`font-button-label text-button-label uppercase tracking-widest transition-colors relative ${
                  formType === "register"
                    ? "text-champagne-gold"
                    : "text-on-surface-variant hover:text-champagne-gold"
                }`}
                onClick={() => { setFormType("register"); setErrorMsg(""); }}
              >
                {isEn ? "Register" : "Daftar"}
                <span
                  className={`absolute -bottom-[17px] left-0 w-full h-0.5 transition-all duration-300 ${
                    formType === "register" ? "bg-champagne-gold" : "bg-transparent"
                  }`}
                ></span>
              </button>
            </div>

            {errorMsg && (
              <div className={`mb-6 p-4 border text-sm font-body-main ${errorMsg.includes("successful") ? "border-green-500 text-green-500" : "border-red-500 text-red-500"}`}>
                {errorMsg}
              </div>
            )}

            {formType === "login" && (
              <div className="block animate-fade-in">
                <h2 className="font-section-title text-section-title-mobile text-on-surface mb-2 uppercase">
                  {isEn ? "Welcome Back" : "Selamat Datang Kembali"}
                </h2>
                <p className="font-body-main text-body-main text-on-surface-variant mb-8">
                  {isEn
                    ? "Enter your credentials to access your account."
                    : "Masukkan detail kredensial Anda untuk mengakses akun."}
                </p>
                <form className="space-y-6" onSubmit={handleLogin}>
                  <div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={isEn ? "EMAIL ADDRESS" : "ALAMAT EMAIL"}
                      className="w-full p-4 font-body-main text-body-main bg-transparent border border-black/10 dark:border-white/10 text-on-surface focus:border-champagne-gold focus:ring-0 transition-colors placeholder:font-button-label placeholder:text-button-label placeholder:text-muted-grey"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder={isEn ? "PASSWORD" : "KATA SANDI"}
                      className="w-full p-4 font-body-main text-body-main bg-transparent border border-black/10 dark:border-white/10 text-on-surface focus:border-champagne-gold focus:ring-0 transition-colors placeholder:font-button-label placeholder:text-button-label placeholder:text-muted-grey"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="checkbox"
                        className="form-checkbox bg-transparent border-black/10 dark:border-white/10 text-champagne-gold focus:ring-champagne-gold focus:ring-offset-surface"
                      />
                      <span className="font-body-main text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                        {isEn ? "Remember me" : "Ingat saya"}
                      </span>
                    </label>
                    <Link
                      href="#"
                      className="font-button-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-champagne-gold transition-colors border-b border-transparent hover:border-champagne-gold pb-0.5"
                    >
                      {isEn ? "Forgot Password?" : "Lupa Sandi?"}
                    </Link>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-charcoal-black hover:bg-champagne-gold text-pure-white font-button-label text-button-label uppercase tracking-widest py-5 transition-colors duration-300 mt-8 disabled:opacity-50"
                  >
                    {loading ? (isEn ? "Signing In..." : "Masuk...") : (isEn ? "Sign In" : "Masuk")}
                  </button>
                </form>
              </div>
            )}

            {formType === "register" && (
              <div className="block animate-fade-in">
                <h2 className="font-section-title text-section-title-mobile text-on-surface mb-2 uppercase">
                  {isEn ? "Create Account" : "Buat Akun"}
                </h2>
                <p className="font-body-main text-body-main text-on-surface-variant mb-8">
                  {isEn
                    ? "Join the community for exclusive collections and editorial stories."
                    : "Bergabung dengan komunitas untuk koleksi eksklusif dan cerita editorial."}
                </p>
                <form className="space-y-6" onSubmit={handleRegister}>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder={isEn ? "FIRST NAME" : "NAMA DEPAN"}
                      className="w-full p-4 font-body-main text-body-main bg-transparent border border-black/10 dark:border-white/10 text-on-surface focus:border-champagne-gold focus:ring-0 transition-colors placeholder:font-button-label placeholder:text-button-label placeholder:text-muted-grey"
                    />
                    <input
                      type="text"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder={isEn ? "LAST NAME" : "NAMA BELAKANG"}
                      className="w-full p-4 font-body-main text-body-main bg-transparent border border-black/10 dark:border-white/10 text-on-surface focus:border-champagne-gold focus:ring-0 transition-colors placeholder:font-button-label placeholder:text-button-label placeholder:text-muted-grey"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={isEn ? "EMAIL ADDRESS" : "ALAMAT EMAIL"}
                      className="w-full p-4 font-body-main text-body-main bg-transparent border border-black/10 dark:border-white/10 text-on-surface focus:border-champagne-gold focus:ring-0 transition-colors placeholder:font-button-label placeholder:text-button-label placeholder:text-muted-grey"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder={isEn ? "PASSWORD" : "KATA SANDI"}
                      className="w-full p-4 font-body-main text-body-main bg-transparent border border-black/10 dark:border-white/10 text-on-surface focus:border-champagne-gold focus:ring-0 transition-colors placeholder:font-button-label placeholder:text-button-label placeholder:text-muted-grey"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-charcoal-black hover:bg-champagne-gold text-pure-white font-button-label text-button-label uppercase tracking-widest py-5 transition-colors duration-300 mt-8 disabled:opacity-50"
                  >
                    {loading ? (isEn ? "Registering..." : "Mendaftar...") : (isEn ? "Register" : "Daftar")}
                  </button>
                  <p className="font-body-main text-xs text-on-surface-variant text-center mt-4">
                    {isEn ? (
                      <>
                        By registering, you agree to our{" "}
                        <Link href={`/privacy?lang=${lang}`} className="text-champagne-gold hover:underline">
                          Terms &amp; Conditions
                        </Link>{" "}
                        and{" "}
                        <Link href={`/privacy?lang=${lang}`} className="text-champagne-gold hover:underline">
                          Privacy Policy
                        </Link>
                        .
                      </>
                    ) : (
                      <>
                        Dengan mendaftar, Anda menyetujui{" "}
                        <Link href={`/privacy?lang=${lang}`} className="text-champagne-gold hover:underline">
                          Syarat &amp; Ketentuan
                        </Link>{" "}
                        serta{" "}
                        <Link href={`/privacy?lang=${lang}`} className="text-champagne-gold hover:underline">
                          Kebijakan Privasi
                        </Link>{" "}
                        kami.
                      </>
                    )}
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer lang={lang} />
    </div>
  );
}

export default function Account() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-surface"></div>}>
      <AccountContent />
    </Suspense>
  );
}
