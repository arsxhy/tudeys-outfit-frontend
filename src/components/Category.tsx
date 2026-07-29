import Image from "next/image";
import Link from "next/link";

const categories = [
  { id: 1, nameEn: "MEN", nameId: "PRIA", image: "/cat-men.jpg", href: "/men" },
  { id: 2, nameEn: "WOMEN", nameId: "WANITA", image: "/cat-women.png", href: "/women" },
  { id: 3, nameEn: "ACCESSORIES", nameId: "AKSESORIS", image: "/cat-acc.jpg", href: "/accessories" },
  { id: 4, nameEn: "NEW ARRIVALS", nameId: "KOLEKSI TERBARU", image: "/cat-new.jpg", href: "/new-arrivals" },
];

export default function Category({ lang = "id" }: { lang?: "id" | "en" }) {
  const isEn = lang === "en";
  
  return (
    <section className="py-24 bg-white dark:bg-[#1a1814] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-[#151515] dark:text-white mb-4 uppercase transition-colors">
            {isEn ? "Shop By Category" : "Belanja Berdasarkan Kategori"}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-sans max-w-lg mx-auto transition-colors">
            {isEn 
              ? "Curated collections for every occasion. Find the essentials that define your wardrobe"
              : "Koleksi pilihan untuk setiap kesempatan. Temukan perlengkapan penting yang melengkapi lemari pakaian Anda"}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <Link href={`${cat.href}?lang=${lang}`} key={cat.id} className="group cursor-pointer flex flex-col items-center">
              <div className="w-full aspect-[3/4] bg-[#f0f0f0] mb-6 relative overflow-hidden">
                <Image src={cat.image} alt={isEn ? cat.nameEn : cat.nameId} fill className={`${cat.id === 3 ? 'object-contain p-4' : 'object-cover'} mix-blend-multiply group-hover:scale-105 transition-transform duration-500`} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
              </div>
              <button className="bg-[#151515] dark:bg-black dark:border dark:border-gray-800 text-white px-8 py-3 text-sm font-sans font-medium tracking-wider uppercase group-hover:bg-[#c4a179] dark:group-hover:bg-[#c4a179] dark:group-hover:text-[#151515] transition-colors">
                {isEn ? cat.nameEn : cat.nameId}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
