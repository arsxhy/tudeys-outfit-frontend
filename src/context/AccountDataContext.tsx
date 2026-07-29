"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

export interface WishlistItem {
  id: string;
  name: string;
  nameId: string;
  price: number;
  image: string;
}

export interface Address {
  id: string;
  name: string;
  type: string; // e.g., 'Home', 'Work'
  street: string;
  province: string;
  city: string;
  district: string;
  postalCode: string;
  phone: string;
  isDefault: boolean;
}

export interface PaymentMethod {
  id: string;
  type: "gopay" | "ovo" | "dana" | "shopeepay" | "qris";
  isDefault: boolean;
  accountName?: string;
  accountNumber?: string;
}

export interface Order {
  id: string;
  date: string;
  status: string;
  statusId: string;
  total: number;
  items: any[]; // keeping it simple for now
}

interface UserAccountData {
  wishlist: WishlistItem[];
  addresses: Address[];
  paymentMethods: PaymentMethod[];
  orders: Order[];
}

interface AccountDataContextType {
  wishlist: WishlistItem[];
  addresses: Address[];
  paymentMethods: PaymentMethod[];
  orders: Order[];
  
  // Wishlist Actions
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;

  // Address Actions
  addAddress: (address: Omit<Address, "id">) => void;
  removeAddress: (id: string) => void;
  setAsDefaultAddress: (id: string) => void;

  // Payment Method Actions
  addPaymentMethod: (method: Omit<PaymentMethod, "id">) => void;
  removePaymentMethod: (id: string) => void;
  setAsDefaultPaymentMethod: (id: string) => void;
}

const AccountDataContext = createContext<AccountDataContextType | undefined>(undefined);

export function AccountDataProvider({ children }: { children: React.ReactNode }) {
  const { user, token } = useAuth();
  
  const [data, setData] = useState<UserAccountData>({
    wishlist: [],
    addresses: [],
    paymentMethods: [],
    orders: [],
  });

  // Load user data on mount or when user changes
  useEffect(() => {
    async function fetchAccountData() {
      if (user) {
        try {
          const headers: HeadersInit = token ? { "Authorization": `Bearer ${token}` } : {};

          // Fetch Addresses
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/users/${user.id}/addresses`, { headers });
          let backendAddresses = [];
          if (response.ok) {
            const addrData = await response.json();
            backendAddresses = addrData.map((a: any) => ({
              id: a.id.toString(),
              name: a.label,
              type: a.label,
              street: a.detail_alamat,
              province: a.provinsi,
              city: a.kota_kabupaten,
              district: a.kecamatan,
              postalCode: a.kode_pos,
              phone: a.penerima_telepon,
              isDefault: a.is_primary,
            }));
          }
          
          // Fetch Wishlist
          let backendWishlist = [];
          const wlRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/users/${user.id}/wishlist`, { headers });
          if (wlRes.ok) {
            const wlData = await wlRes.json();
            backendWishlist = wlData.map((w: any) => ({
              id: w.product_id?.toString(),
              name: w.product?.nama_produk || "Product",
              nameId: w.product?.nama_produk || "Produk",
              price: Number(w.product?.harga) || 0,
              image: w.product?.image_url || "/images/placeholder.jpg",
            }));
          }
          
          // Fetch Orders
          let backendOrders = [];
          const ordersRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/orders/user/${user.id}`, { headers });
          if (ordersRes.ok) {
            const ordersData = await ordersRes.json();
            backendOrders = ordersData.map((o: any) => ({
              id: o.id.toString(),
              date: "Baru saja", // Kita bisa atur format tanggal di sini
              status: o.status_bayar,
              statusId: o.status_bayar.toLowerCase().replace(" ", "-"),
              total: Number(o.total_harga) || 0,
              items: o.items?.map((item: any) => ({
                name: item.product_variant?.product?.nama_produk || "Produk",
                size: item.product_variant?.ukuran || "-",
                color: item.product_variant?.warna || "-",
                qty: item.jumlah_beli,
                price: Number(item.harga_saat_beli),
                image: item.product_variant?.product?.image_url || "/images/placeholder.jpg"
              })) || []
            }));
          }
          
          const storedData = localStorage.getItem(`tudeys_account_data_${user.id}`);
          let localData = { paymentMethods: [] };
          if (storedData) {
            localData = JSON.parse(storedData);
          }
          
          setData({
            wishlist: backendWishlist,
            addresses: backendAddresses,
            paymentMethods: localData.paymentMethods || [],
            orders: backendOrders,
          });
        } catch (error) {
          console.error("Failed to load account data", error);
        }
      } else {
        // Clear data if logged out
        setData({
          wishlist: [],
          addresses: [],
          paymentMethods: [],
          orders: [],
        });
      }
    }
    fetchAccountData();
  }, [user, token]);

  // Save to local storage whenever local-only data changes (paymentMethods)
  useEffect(() => {
    if (user) {
      const { addresses, wishlist, orders, ...localData } = data;
      localStorage.setItem(`tudeys_account_data_${user.id}`, JSON.stringify(localData));
    }
  }, [data.paymentMethods, user]);

  const addToWishlist = async (item: WishlistItem) => {
    // Optimistic UI update
    setData((prev) => ({
      ...prev,
      wishlist: [...prev.wishlist.filter((i) => i.id !== item.id), item],
    }));

    if (user && token) {
      try {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/users/${user.id}/wishlist/${item.id}`, {
          method: "POST",
          headers: { "Authorization": `Bearer ${token}` }
        });
      } catch (error) {
        console.error("Error adding to wishlist", error);
      }
    }
  };

  const removeFromWishlist = async (id: string) => {
    // Optimistic UI update
    setData((prev) => ({
      ...prev,
      wishlist: prev.wishlist.filter((i) => i.id !== id),
    }));

    if (user && token) {
      try {
        await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/users/${user.id}/wishlist/${id}`, {
          method: "DELETE",
          headers: { "Authorization": `Bearer ${token}` }
        });
      } catch (error) {
        console.error("Error removing from wishlist", error);
      }
    }
  };

  const isInWishlist = (id: string) => {
    return data.wishlist.some((item) => item.id === id);
  };

  const addAddress = async (address: Omit<Address, "id">) => {
    if (!user) return;
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/users/${user.id}/addresses`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": token ? `Bearer ${token}` : ""
        },
        body: JSON.stringify({
          label: address.type || address.name,
          penerima_nama: address.name, // If the UI doesn't have a separate receiver name, we use address name
          penerima_telepon: address.phone,
          detail_alamat: address.street,
          provinsi: address.province,
          kota_kabupaten: address.city,
          kecamatan: address.district,
          kode_pos: address.postalCode,
          is_primary: address.isDefault
        })
      });
      if (response.ok) {
        const a = await response.json();
        const newAddress: Address = {
          id: a.id.toString(),
          name: a.label,
          type: a.label,
          street: a.detail_alamat,
          province: a.provinsi,
          city: a.kota_kabupaten,
          district: a.kecamatan,
          postalCode: a.kode_pos,
          phone: a.penerima_telepon,
          isDefault: a.is_primary,
        };
        
        setData((prev) => {
          let newAddresses = [...prev.addresses];
          if (newAddress.isDefault) {
            newAddresses = newAddresses.map(addr => ({ ...addr, isDefault: false }));
          }
          return { ...prev, addresses: [...newAddresses, newAddress] };
        });
      }
    } catch (error) {
      console.error("Error adding address", error);
    }
  };

  const removeAddress = async (id: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/users/addresses/${id}`, {
        method: "DELETE",
        headers: { "Authorization": token ? `Bearer ${token}` : "" }
      });
      if (response.ok) {
        setData((prev) => {
          let newAddresses = prev.addresses.filter(a => a.id !== id);
          if (prev.addresses.find(a => a.id === id)?.isDefault && newAddresses.length > 0) {
            newAddresses[0].isDefault = true; // Optionally set first as default, but backend might need an explicit call.
          }
          return { ...prev, addresses: newAddresses };
        });
      }
    } catch (error) {
      console.error("Error deleting address", error);
    }
  };

  const setAsDefaultAddress = async (id: string) => {
    if (!user) return;
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/users/${user.id}/addresses/${id}/default`, {
        method: "PUT",
        headers: { "Authorization": token ? `Bearer ${token}` : "" }
      });
      if (response.ok) {
        setData((prev) => ({
          ...prev,
          addresses: prev.addresses.map(a => ({ ...a, isDefault: a.id === id })),
        }));
      }
    } catch (error) {
      console.error("Error setting default address", error);
    }
  };

  const addPaymentMethod = (method: Omit<PaymentMethod, "id">) => {
    const newMethod: PaymentMethod = {
      ...method,
      id: `pm_${Date.now()}`,
    };
    
    setData((prev) => {
      let newMethods = [...prev.paymentMethods];
      if (newMethod.isDefault) {
        newMethods = newMethods.map(m => ({ ...m, isDefault: false }));
      } else if (newMethods.length === 0) {
        newMethod.isDefault = true;
      }
      return { ...prev, paymentMethods: [...newMethods, newMethod] };
    });
  };

  const removePaymentMethod = (id: string) => {
    setData((prev) => {
      let newMethods = prev.paymentMethods.filter(m => m.id !== id);
      if (prev.paymentMethods.find(m => m.id === id)?.isDefault && newMethods.length > 0) {
        newMethods[0].isDefault = true;
      }
      return { ...prev, paymentMethods: newMethods };
    });
  };

  const setAsDefaultPaymentMethod = (id: string) => {
    setData((prev) => ({
      ...prev,
      paymentMethods: prev.paymentMethods.map(m => ({ ...m, isDefault: m.id === id })),
    }));
  };

  return (
    <AccountDataContext.Provider
      value={{
        ...data,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        addAddress,
        removeAddress,
        setAsDefaultAddress,
        addPaymentMethod,
        removePaymentMethod,
        setAsDefaultPaymentMethod,
      }}
    >
      {children}
    </AccountDataContext.Provider>
  );
}

export function useAccountData() {
  const context = useContext(AccountDataContext);
  if (context === undefined) {
    throw new Error("useAccountData must be used within an AccountDataProvider");
  }
  return context;
}
