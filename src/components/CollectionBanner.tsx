import Image from "next/image";
import Link from "next/link";

export default function CollectionBanner({ lang = "id" }: { lang?: "id" | "en" }) {
  const isEn = lang === "en";
  
  return (
    <section className="relative h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gray-900">
        <Image src="/collection-bg.jpg" alt="Collection 2026" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-2 uppercase tracking-wide">
          {isEn 
            ? <>TUDEYS<span className="text-[#c4a179]">OUTFIT</span> COLLECTION</> 
            : <>KOLEKSI TUDEYS<span className="text-[#c4a179]">OUTFIT</span></>}
        </h2>
        <h3 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">2026</h3>
        <p className="text-white/90 font-sans text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          {isEn 
            ? "Discover the new seasonal collection inspired by modern elegance and timeless silhouettes"
            : "Temukan koleksi musiman terbaru yang terinspirasi oleh keanggunan modern dan siluet abadi"}
        </p>
        <Link href={`/collections?lang=${lang}`}>
          <button className="bg-white text-[#151515] px-10 py-4 font-sans font-bold tracking-widest text-sm hover:bg-[#c4a179] hover:text-white transition-colors">
            {isEn ? "SHOP COLLECTION" : "BELANJA KOLEKSI"}
          </button>
        </Link>
      </div>
    </section>
  );
}
