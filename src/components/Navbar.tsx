"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Search, User, ShoppingBag, Globe, Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";

export default function Navbar({ lang = "id" }: { lang?: "id" | "en" }) {
  const isEn = lang === "en";
  const { theme, toggleTheme, mounted } = useTheme();
  const { isAuthenticated } = useAuth();
  const { cartItems } = useCart();
  const router = useRouter();
  const pathname = usePathname();

  const cartItemCount = mounted ? cartItems.reduce((acc, item) => acc + item.quantity, 0) : 0;

  const changeLanguage = (newLang: string) => {
    router.push(`${pathname}?lang=${newLang}`, { scroll: false });
  };
  
  return (
    <header className="sticky top-0 w-full flex flex-col z-[100]">
      {/* Top Banner */}
      <div className="bg-[#151515] dark:bg-black text-white text-xs font-medium py-2 text-center tracking-widest font-sans uppercase border-b border-gray-800 dark:border-gray-900">
        {isEn ? "Get Free Shipping Across Indonesia" : "Dapatkan Gratis Ongkir Ke Seluruh Indonesia"}
      </div>

      {/* Main Navbar */}
      <nav className="bg-[#f8f7f5] dark:bg-[#151515] border-b border-gray-200 dark:border-gray-800/80 py-4 px-6 md:px-12 flex items-center justify-between transition-colors duration-300">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <h1 className="text-3xl font-heading font-bold tracking-tighter text-[#151515] dark:text-white transition-colors">
              TUDEYS<span className="text-[#c4a179]">OUTFIT</span>
            </h1>
          </Link>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-8 text-sm font-sans font-medium text-gray-800 dark:text-gray-200 transition-colors">
          <Link href={`/?lang=${lang}`} className="hover:text-[#c4a179] dark:hover:text-[#c4a179] transition-colors">{isEn ? "Home" : "Beranda"}</Link>
          <Link href={`/shop?lang=${lang}`} className="hover:text-[#c4a179] dark:hover:text-[#c4a179] transition-colors">{isEn ? "Shop" : "Belanja"}</Link>
          <Link href={`/new-arrivals?lang=${lang}`} className="hover:text-[#c4a179] dark:hover:text-[#c4a179] transition-colors">{isEn ? "New Arrivals" : "Terbaru"}</Link>
          <Link href={`/collections?lang=${lang}`} className="hover:text-[#c4a179] dark:hover:text-[#c4a179] transition-colors">{isEn ? "Collections" : "Koleksi"}</Link>
          <Link href={`/sale?lang=${lang}`} className="hover:text-[#c4a179] dark:hover:text-[#c4a179] transition-colors">{isEn ? "Sale" : "Diskon"}</Link>
          <Link href={`/men?lang=${lang}`} className="hover:text-[#c4a179] dark:hover:text-[#c4a179] transition-colors">{isEn ? "Men" : "Pria"}</Link>
          <Link href={`/women?lang=${lang}`} className="hover:text-[#c4a179] dark:hover:text-[#c4a179] transition-colors">{isEn ? "Women" : "Wanita"}</Link>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-200 transition-colors">
          <div className="relative group flex items-center justify-center">
            <button className="hover:text-[#c4a179] transition-colors p-2" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <div className="absolute top-full mt-2 w-max px-2 py-1 bg-gray-800 dark:bg-white dark:text-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-[110]">
              {isEn ? "Search" : "Pencarian"}
            </div>
          </div>
          
          <div className="relative group flex items-center justify-center">
            <Link href={isAuthenticated ? `/profile?lang=${lang}` : `/account?lang=${lang}`} className="hover:text-[#c4a179] transition-colors p-2" aria-label="Profile">
              <User className="w-5 h-5" />
            </Link>
            <div className="absolute top-full mt-2 w-max px-2 py-1 bg-gray-800 dark:bg-white dark:text-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-[110]">
              {isEn ? "Account" : "Akun Saya"}
            </div>
          </div>
          
          <div className="relative group flex items-center justify-center">
            <Link href={`/cart?lang=${lang}`} className="hover:text-[#c4a179] transition-colors p-2 relative" aria-label="Cart">
              <ShoppingBag className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute top-1 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-[#c4a179] rounded-full">
                  {cartItemCount}
                </span>
              )}
            </Link>
            <div className="absolute top-full mt-2 w-max px-2 py-1 bg-gray-800 dark:bg-white dark:text-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-[110]">
              {isEn ? "Cart" : "Keranjang"}
            </div>
          </div>

          {/* Theme Toggle Button */}
          <div className="relative group flex items-center justify-center">
            <button
              onClick={toggleTheme}
              className="hover:text-[#c4a179] transition-colors p-2 flex items-center justify-center"
              aria-label="Toggle Theme"
            >
              {!mounted ? (
                <div className="w-5 h-5" />
              ) : theme === "light" ? (
                <Moon className="w-5 h-5 transition-transform duration-300 hover:rotate-12" />
              ) : (
                <Sun className="w-5 h-5 text-[#c4a179] transition-transform duration-300 hover:rotate-45" />
              )}
            </button>
            <div className="absolute top-full mt-2 w-max px-2 py-1 bg-gray-800 dark:bg-white dark:text-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-[110]">
              {!mounted
                ? ""
                : isEn
                ? theme === "light" ? "Dark Mode" : "Light Mode"
                : theme === "light" ? "Mode Gelap" : "Mode Terang"}
            </div>
          </div>
          
          <div className="relative group hidden sm:flex items-center justify-center">
            <button className="hover:text-[#c4a179] transition-colors p-2" aria-label="Language">
              <Globe className="w-5 h-5" />
            </button>
            <div className="absolute top-full mt-2 w-max px-2 py-1 bg-gray-800 dark:bg-white dark:text-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-[110]">
              {isEn ? "Language" : "Bahasa"}
            </div>
            {/* Language Toggle Dropdown */}
            <div className="absolute top-full right-0 mt-2 w-32 bg-white dark:bg-[#1a1814] border border-gray-200 dark:border-gray-800 shadow-lg rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[110]">
              <div className="flex flex-col py-1 text-sm text-gray-700 dark:text-gray-200">
                <button onClick={() => changeLanguage('id')} className={`px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#151515] hover:text-[#c4a179] text-left transition-colors ${lang === 'id' ? 'font-medium text-[#c4a179]' : ''}`}>ID - Indonesia</button>
                <button onClick={() => changeLanguage('en')} className={`px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#151515] hover:text-[#c4a179] text-left transition-colors ${lang === 'en' ? 'font-medium text-[#c4a179]' : ''}`}>EN - English</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
