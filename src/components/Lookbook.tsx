import Image from "next/image";

export default function Lookbook({ lang = "id" }: { lang?: "id" | "en" }) {
  const isEn = lang === "en";

  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gray-900">
        <Image src="/lookbook-bg.jpg" alt="Summer Lookbook 2026" fill className="object-cover" sizes="100vw" />
      </div>

      {/* Interactive Tooltips */}
      <div className="absolute inset-0 max-w-7xl mx-auto px-6 md:px-12 relative h-full">
        


        {/* Tooltip 2 */}
        <div className="w-full md:w-1/3 flex flex-col justify-center h-full">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 uppercase leading-tight">
            {isEn ? <>Summer<br />Lookbook<br />2026</> : <>Katalog<br />Musim Panas<br />2026</>}
          </h2>
          <p className="text-gray-200 font-sans text-lg mb-8 leading-relaxed">
            {isEn 
              ? "Explore our curated looks for the warmer months. Lightweight fabrics, relaxed fits, and effortless style for your everyday adventures."
              : "Jelajahi tampilan pilihan kami untuk bulan-bulan yang lebih hangat. Kain ringan, potongan longgar, dan gaya santai untuk petualangan sehari-hari Anda."}
          </p>
          <button className="self-start border-b-2 border-white pb-1 text-white font-sans font-bold uppercase tracking-wider hover:text-[#c4a179] hover:border-[#c4a179] transition-colors">
            {isEn ? "VIEW ALL LOOKS" : "LIHAT SEMUA TAMPILAN"}
          </button>
        </div>
        
      </div>
    </section>
  );
}
