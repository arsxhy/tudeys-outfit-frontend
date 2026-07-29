import { Truck, ShieldCheck, RefreshCw, Clock } from "lucide-react";

export default function WhyShop({ lang = "id" }: { lang?: "id" | "en" }) {
  const isEn = lang === "en";
  
  const features = [
    {
      id: 1,
      icon: <Truck className="w-8 h-8 text-[#c4a179]" />,
      title: isEn ? "Free Shipping" : "Gratis Ongkir",
      description: isEn ? "On all orders over Rp 500.000" : "Untuk semua pesanan di atas Rp 500.000"
    },
    {
      id: 2,
      icon: <ShieldCheck className="w-8 h-8 text-[#c4a179]" />,
      title: isEn ? "Secure Checkout" : "Pembayaran Aman",
      description: isEn ? "100% protected transactions" : "100% transaksi dilindungi"
    },
    {
      id: 3,
      icon: <RefreshCw className="w-8 h-8 text-[#c4a179]" />,
      title: isEn ? "Easy Returns" : "Pengembalian Mudah",
      description: isEn ? "30-day return policy" : "Kebijakan pengembalian 30 hari"
    },
    {
      id: 4,
      icon: <Clock className="w-8 h-8 text-[#c4a179]" />,
      title: isEn ? "24/7 Support" : "Dukungan 24/7",
      description: isEn ? "Always here to help you" : "Selalu di sini untuk membantu Anda"
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#1a1814] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-[#151515] dark:text-white mb-4 uppercase transition-colors">
            {isEn ? "Why Shop at" : "Mengapa Berbelanja di"} TUDEYS<span className="text-[#c4a179]">OUTFIT</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#f8f7f5] dark:bg-[#151515] flex items-center justify-center mb-6 transition-colors">
                {feature.icon}
              </div>
              <h3 className="font-sans font-bold text-[#151515] dark:text-white text-lg mb-3 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 font-sans text-sm leading-relaxed max-w-[250px] transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
