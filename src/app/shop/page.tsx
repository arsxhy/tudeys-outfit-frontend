import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShopProductCard, { ShopProduct } from "@/components/ShopProductCard";
import { SlidersHorizontal, ChevronLeft, ChevronRight } from "lucide-react";

export default async function Shop({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const params = await searchParams;
  const lang = params.lang === "en" ? "en" : "id";
  const isEn = lang === "en";

  let products: ShopProduct[] = [];
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/products`, {
      next: { revalidate: 0 } // Or cache: 'no-store' depending on preference
    });
    if (res.ok) {
      const data = await res.json();
      products = data.map((p: any) => ({
        id: p.id,
        name: p.nama_produk,
        color: p.variants?.[0]?.warna || "Default",
        price: new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(p.variants?.[0]?.harga || 0),
        rating: 5.0, // Hardcoded for now
        image: p.image,
        badge: p.badge,
        href: `/shop/${p.id}`
      }));
    }
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }

  return (
    <main className="min-h-screen bg-[#f8f7f5] dark:bg-[#121414] text-[#151515] dark:text-white transition-colors duration-300 flex flex-col">
      <Navbar lang={lang} />
      
      <div className="w-full flex-grow">
        {/* Hero Section */}
        <section className="w-full max-w-7xl mx-auto px-6 md:px-16 py-16 md:py-24 flex flex-col items-center text-center">
          <h1 className="font-heading text-4xl md:text-6xl text-[#151515] dark:text-white font-bold tracking-[0.1em] mb-4 md:mb-6">
            THE COLLECTION
          </h1>
          <p className="font-sans text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {isEn 
              ? "Explore our curated selection of timeless pieces designed for the modern aesthetic. Crafted with precision and sustainable luxury."
              : "Jelajahi kurasi koleksi busana abadi kami yang didesain untuk estetika modern. Dibuat dengan presisi dan kemewahan yang berkelanjutan."}
          </p>
        </section>

        {/* Shop Layout container */}
        <div className="max-w-7xl mx-auto px-6 md:px-16 pb-24 flex flex-col lg:flex-row gap-8 lg:gap-16">
          
          {/* Sidebar / Filter (Desktop) */}
          <aside className="hidden lg:block w-48 flex-shrink-0 sticky top-[100px] self-start space-y-12">
            
            {/* Category Filter */}
            <div className="space-y-4 pb-8">
              <h3 className="font-sans text-xs uppercase text-[#151515] dark:text-white tracking-widest font-semibold">
                {isEn ? "Category" : "Kategori"}
              </h3>
              <ul className="space-y-4 font-sans text-[14px] text-gray-600 dark:text-gray-400">
                <li><a href="#" className="dark:text-white text-[#151515] font-medium">{isEn ? "All Clothing" : "Semua Pakaian"}</a></li>
                <li><a href="#" className="hover:text-[#151515] dark:hover:text-white transition-colors">Outerwear</a></li>
                <li><a href="#" className="hover:text-[#151515] dark:hover:text-white transition-colors">Knitwear</a></li>
                <li><a href="#" className="hover:text-[#151515] dark:hover:text-white transition-colors">Shirts & Blouses</a></li>
                <li><a href="#" className="hover:text-[#151515] dark:hover:text-white transition-colors">Trousers</a></li>
                <li><a href="#" className="hover:text-[#151515] dark:hover:text-white transition-colors">Accessories</a></li>
              </ul>
            </div>
            
            {/* Price Filter */}
            <div className="space-y-4 pb-8">
              <h3 className="font-sans text-xs uppercase text-[#151515] dark:text-white tracking-widest font-semibold">
                {isEn ? "Price Range" : "Rentang Harga"}
              </h3>
              <div className="flex flex-col gap-3">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-3 h-3 border border-gray-300 dark:border-gray-700 rounded-sm group-hover:border-[#c4a179] transition-colors flex items-center justify-center"></div>
                  <span className="font-sans text-[14px] text-gray-600 dark:text-gray-400 group-hover:text-[#151515] dark:group-hover:text-white transition-colors">
                    {isEn ? "Under Rp 1.500.000" : "Di bawah Rp 1.500.000"}
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-3 h-3 border border-[#c4a179] bg-[#c4a179] rounded-sm flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold">✓</span>
                  </div>
                  <span className="font-sans text-[14px] text-[#151515] dark:text-white transition-colors">
                    Rp 1.500.000 - Rp 4.500.000
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-3 h-3 border border-gray-300 dark:border-gray-700 rounded-sm group-hover:border-[#c4a179] transition-colors flex items-center justify-center"></div>
                  <span className="font-sans text-[14px] text-gray-600 dark:text-gray-400 group-hover:text-[#151515] dark:group-hover:text-white transition-colors">
                    Rp 4.500.000 - Rp 7.500.000
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-3 h-3 border border-gray-300 dark:border-gray-700 rounded-sm group-hover:border-[#c4a179] transition-colors flex items-center justify-center"></div>
                  <span className="font-sans text-[14px] text-gray-600 dark:text-gray-400 group-hover:text-[#151515] dark:group-hover:text-white transition-colors">
                    {isEn ? "Over Rp 7.500.000" : "Di atas Rp 7.500.000"}
                  </span>
                </label>
              </div>
            </div>
            
          </aside>

          {/* Product Grid Area */}
          <div className="flex-1 w-full">
            
            {/* Toolbar (Mobile Filter Toggle & Sorting) */}
            <div className="flex justify-between items-center mb-8 border-b border-gray-200 dark:border-gray-800/80 pb-4">
              <button className="lg:hidden flex items-center gap-2 font-sans text-xs uppercase text-[#151515] dark:text-white font-semibold">
                <SlidersHorizontal className="w-4 h-4" /> {isEn ? "Filters" : "Filter"}
              </button>
              
              <div className="hidden lg:block font-sans text-[14px] text-gray-500 dark:text-gray-400">
                {isEn ? "Showing 1-6 of 48 products" : "Menampilkan 1-6 dari 48 produk"}
              </div>
              
              <div className="flex items-center gap-2 font-sans text-[12px] uppercase">
                <span className="text-gray-500 dark:text-gray-400">{isEn ? "Sort by:" : "Urutkan:"}</span>
                <select className="bg-transparent border-none text-[#151515] dark:text-white focus:ring-0 cursor-pointer pr-6 uppercase text-[12px] font-semibold outline-none">
                  <option className="bg-white dark:bg-[#1a1c1c] text-[#151515] dark:text-white" value="featured">Featured</option>
                  <option className="bg-white dark:bg-[#1a1c1c] text-[#151515] dark:text-white" value="newest">Newest Arrivals</option>
                  <option className="bg-white dark:bg-[#1a1c1c] text-[#151515] dark:text-white" value="price-low">Price: Low to High</option>
                  <option className="bg-white dark:bg-[#1a1c1c] text-[#151515] dark:text-white" value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {products.map((product, index) => (
                <ShopProductCard key={product.id} product={product} priority={index < 3} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-16 flex justify-center items-center gap-4 border-t border-gray-200 dark:border-gray-800/80 pt-8">
              <button className="text-gray-500 dark:text-gray-400 hover:text-[#c4a179] transition-colors flex items-center justify-center w-8 h-8 border border-gray-200 dark:border-gray-800 rounded-sm">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2 font-sans text-[12px]">
                <button className="w-8 h-8 flex items-center justify-center border-b-2 border-[#c4a179] text-[#151515] dark:text-white">1</button>
                <button className="w-8 h-8 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-[#151515] dark:hover:text-white transition-colors">2</button>
                <button className="w-8 h-8 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-[#151515] dark:hover:text-white transition-colors">3</button>
                <span className="text-gray-500 dark:text-gray-400 px-2">...</span>
                <button className="w-8 h-8 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-[#151515] dark:hover:text-white transition-colors">8</button>
              </div>
              <button className="text-gray-500 dark:text-gray-400 hover:text-[#c4a179] transition-colors flex items-center justify-center w-8 h-8 border border-gray-200 dark:border-gray-800 rounded-sm">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </div>

      <Footer lang={lang} />
    </main>
  );
}
