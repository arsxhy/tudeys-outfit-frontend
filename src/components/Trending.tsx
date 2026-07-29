import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Vintage Chiffon & Velvet Set", price: "RP 1.999.000", rating: 4.9, image: "/trend-season-1.jpg" },
  { id: 2, name: "Baroque Resort OneSet", price: "RP 699.000", rating: 4.8, image: "/trend-season-2.jpg" },
  { id: 3, name: "Classic Camel Wool Overcoat", price: "RP 1.499.000", rating: 4.9, image: "/trend-season-3.jpg" },
  { id: 4, name: "Black Three-Piece Tailored Suit", price: "RP 3.299.000", rating: 5.0, image: "/trend-season-4.jpg" },
];

export default function Trending({ lang = "id" }: { lang?: "id" | "en" }) {
  const isEn = lang === "en";
  
  return (
    <section className="py-24 bg-[#f8f7f5] dark:bg-[#151515] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-[#151515] dark:text-white mb-4 uppercase transition-colors">
            {isEn ? "Trending This Season" : "Tren Musim Ini"}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-sans max-w-lg mx-auto transition-colors">
            {isEn 
              ? "The definitive looks defining the season's aesthetic"
              : "Tampilan definitif yang menentukan estetika musim ini"}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
