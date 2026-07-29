"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useAuth } from "@/context/AuthContext";

type Tab =
  | "dashboard"
  | "wishlist"
  | "order-history"
  | "my-addresses"
  | "payment-methods"
  | "account-settings";

interface AccountSidebarProps {
  activeTab: Tab;
}

export default function AccountSidebar({ activeTab }: AccountSidebarProps) {
  const { isEn } = useLanguage();
  const { logout } = useAuth();
  const lang = isEn ? "en" : "id";

  const getLinkClasses = (tabName: Tab) => {
    const baseClasses =
      "font-button-label text-button-label uppercase tracking-widest w-max transition-colors";
    const isActive = activeTab === tabName;

    if (isActive) {
      return `${baseClasses} text-charcoal-black dark:text-white border-b-2 border-charcoal-black dark:border-white pb-1`;
    }
    return `${baseClasses} text-muted-grey hover:text-champagne-gold`;
  };

  return (
    <aside className="md:col-span-3">
      <nav className="flex flex-col gap-6 sticky top-32">
        <Link
          href={`/profile?lang=${lang}`}
          className={getLinkClasses("dashboard")}
        >
          {isEn ? "Dashboard" : "Dasbor"}
        </Link>
        <Link
          href={`/wishlist?lang=${lang}`}
          className={getLinkClasses("wishlist")}
        >
          {isEn ? "Wishlist" : "Wishlist"}
        </Link>
        <Link
          href={`/order-history?lang=${lang}`}
          className={getLinkClasses("order-history")}
        >
          {isEn ? "Order History" : "Riwayat Pesanan"}
        </Link>
        <Link
          href={`/my-addresses?lang=${lang}`}
          className={getLinkClasses("my-addresses")}
        >
          {isEn ? "My Addresses" : "Alamat Saya"}
        </Link>
        <Link
          href={`/payment-methods?lang=${lang}`}
          className={getLinkClasses("payment-methods")}
        >
          {isEn ? "Payment Methods" : "Metode Pembayaran"}
        </Link>
        <Link
          href={`/account-settings?lang=${lang}`}
          className={getLinkClasses("account-settings")}
        >
          {isEn ? "Account Settings" : "Pengaturan Akun"}
        </Link>
        
        <div className="h-px bg-black/10 dark:bg-white/10 my-2 w-full max-w-[200px]"></div>
        
        <button
          onClick={(e) => {
            e.preventDefault();
            logout();
          }}
          className="font-button-label text-button-label uppercase tracking-widest text-muted-grey hover:text-error transition-colors w-max text-left"
        >
          {isEn ? "Logout" : "Keluar"}
        </button>
      </nav>
    </aside>
  );
}
