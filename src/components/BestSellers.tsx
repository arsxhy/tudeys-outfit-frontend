import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Ivory Contrast Lapel Blazer", price: "RP 1.299.000", rating: 4.9, image: "/trend-1.jpg" },
  { id: 2, name: "Y2K Electric Blue Two-Piece Set", price: "RP 899.000", rating: 4.9, image: "/trend-2.jpg" },
  { id: 3, name: "Oversized Black Stitch T-Shirt", price: "RP 249.000", rating: 4.9, image: "/trend-3.jpg" },
  { id: 4, name: "Half-Zip Knit Pullover", price: "RP 499.000", rating: 4.9, image: "/trend-4.jpg" },
];

export default function BestSellers({ lang = "id" }: { lang?: "id" | "en" }) {
  const isEn = lang === "en";
  
  return (
    <section className="py-24 bg-[#f8f7f5] dark:bg-[#151515] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-[#151515] dark:text-white mb-4 uppercase transition-colors">
            {isEn ? "Best Sellers" : "Produk Terlaris"}
          </h2>
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
