import Image from "next/image";
import Link from "next/link";

export default function Hero({ lang = "id" }: { lang?: "id" | "en" }) {
  const isEn = lang === "en";
  
  return (
    <section className="bg-[#f8f7f5] dark:bg-[#151515] relative pt-12 pb-24 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center relative z-10">
        
        {/* Text Content */}
        <div className="w-full md:w-1/2 pt-10 md:pt-20">
          <p className="text-[#c4a179] font-sans font-semibold tracking-[0.2em] text-sm mb-4 uppercase">
            {isEn ? "New Season 2026" : "Musim Terbaru 2026"}
          </p>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-[#151515] dark:text-white leading-[1.1] mb-6 transition-colors">
            {isEn ? <>ELEVATE YOUR<br />EVERYDAY STYLE</> : <>TINGKATKAN GAYA<br />KESEHARIAN ANDA</>}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 font-sans text-lg mb-10 max-w-md leading-relaxed transition-colors">
            {isEn 
              ? "Discover timeless fashion pieces crafted for modern lifestyles. Experience the perfect blend of comfort and luxury."
              : "Temukan koleksi mode abadi yang dirancang untuk gaya hidup modern. Rasakan perpaduan sempurna antara kenyamanan dan kemewahan."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={`/shop?lang=${lang}`} className="text-center bg-[#151515] dark:bg-[#c4a179] text-white dark:text-[#151515] px-8 py-4 font-sans font-medium hover:bg-black dark:hover:bg-white transition-colors">
              {isEn ? "SHOP NOW" : "BELANJA SEKARANG"}
            </Link>
            <Link href={`/collections?lang=${lang}`} className="text-center bg-transparent border border-[#151515] dark:border-white text-[#151515] dark:text-white px-8 py-4 font-sans font-medium hover:bg-[#151515] hover:text-white dark:hover:bg-white dark:hover:text-[#151515] transition-colors">
              {isEn ? "ELEVATE NEW ARRIVALS" : "LIHAT KOLEKSI TERBARU"}
            </Link>
          </div>
        </div>

        {/* Image Content (Circle shape) */}
        <div className="w-full md:w-1/2 mt-16 md:mt-0 flex justify-center md:justify-end">
          <div className="relative w-[300px] h-[400px] md:w-[450px] md:h-[600px] rounded-full overflow-hidden bg-gray-200 dark:bg-gray-800 shadow-2xl transition-colors">
            <Image src="/hero.jpg" alt="Hero" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
        </div>
      </div>
    </section>
  );
}
