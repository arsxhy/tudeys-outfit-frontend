import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientButtons from "./ClientButtons";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let product = null;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/products/${id}`, {
      next: { revalidate: 0 },
    });
    if (res.ok) {
      product = await res.json();
    }
  } catch (error) {
    console.error("Failed to fetch product:", error);
  }

  if (!product) {
    return (
      <main className="min-h-screen bg-[#f8f7f5] dark:bg-[#121414] text-[#151515] dark:text-white transition-colors duration-300 flex flex-col">
        <Navbar lang="en" />
        <div className="flex-grow flex items-center justify-center">
          <p className="text-xl font-sans tracking-widest uppercase">Product not found.</p>
        </div>
        <Footer lang="en" />
      </main>
    );
  }

  const price = product.variants?.[0]?.harga || 0;
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(price);
  const color = product.variants?.[0]?.warna || "Default";
  const image = product.image || "/placeholder.jpg"; 

  return (
    <main className="min-h-screen bg-[#f8f7f5] dark:bg-[#121414] text-[#151515] dark:text-white transition-colors duration-300 flex flex-col">
      <Navbar lang="en" />
      
      <div className="flex-grow w-full max-w-7xl mx-auto px-6 md:px-16 py-12 md:py-20">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-sans text-xs text-gray-500 dark:text-gray-400 mb-8 md:mb-12 uppercase tracking-widest">
          <Link href="/" className="hover:text-[#c4a179] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/shop" className="hover:text-[#c4a179] transition-colors">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#151515] dark:text-white font-medium">{product.nama_produk}</span>
        </div>

        {/* Product Details Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Product Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[3/4] w-full bg-gray-100 dark:bg-[#1a1c1c] overflow-hidden rounded-sm group">
              {product.badge && (
                <div className="absolute top-4 left-4 z-10 bg-[#151515] dark:bg-white text-white dark:text-[#151515] text-[10px] font-sans font-bold uppercase tracking-widest px-3 py-1.5">
                  {product.badge}
                </div>
              )}
              <img 
                src={image} 
                alt={product.nama_produk}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            
            <h1 className="font-heading text-3xl md:text-5xl font-bold tracking-[0.05em] mb-4">
              {product.nama_produk}
            </h1>
            
            <div className="text-xl md:text-2xl font-sans text-[#c4a179] mb-8">
              {formattedPrice}
            </div>

            <div className="w-full h-px bg-gray-200 dark:bg-gray-800 mb-8"></div>

            <div className="mb-8">
              <h3 className="font-sans text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3">Color</h3>
              <div className="flex items-center gap-3">
                <span className="font-sans text-sm font-medium">{color}</span>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="font-sans text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3">Description</h3>
              <div className="font-sans text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                {product.deskripsi ? (
                  <p>{product.deskripsi}</p>
                ) : (
                  <p>A timeless piece designed with meticulous attention to detail. Experience unparalleled comfort and effortless elegance.</p>
                )}
              </div>
            </div>

            {/* Client Components for Buttons */}
            <ClientButtons product={product} />

            <div className="mt-12 space-y-4">
              <div className="flex items-center gap-4 text-sm font-sans text-gray-600 dark:text-gray-400">
                <div className="w-5 h-5 flex items-center justify-center border border-gray-400 dark:border-gray-600 rounded-full text-[10px]">✓</div>
                <span>Free Standard Shipping & Returns</span>
              </div>
              <div className="flex items-center gap-4 text-sm font-sans text-gray-600 dark:text-gray-400">
                <div className="w-5 h-5 flex items-center justify-center border border-gray-400 dark:border-gray-600 rounded-full text-[10px]">🛡</div>
                <span>Secure Checkout</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      <Footer lang="en" />
    </main>
  );
}
