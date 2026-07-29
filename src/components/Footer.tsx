import Link from "next/link";
import { FaInstagram, FaWhatsapp, FaRegEnvelope } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Footer({ lang = "id" }: { lang?: "id" | "en" }) {
  const isEn = lang === "en";
  
  return (
    <footer className="bg-[#1a1814] overflow-hidden relative">
      {/* Newsletter Section */}
      <div className="bg-white dark:bg-[#151515] border-b border-gray-100 dark:border-gray-800 rounded-b-[40px] md:rounded-b-[80px] pt-12 pb-24 px-6 sm:px-12 text-center relative z-20 transition-colors duration-300">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#151515] dark:text-white mb-4 uppercase tracking-wide transition-colors">
          {isEn ? "JOIN THE TUDEYS" : "BERGABUNGLAH DENGAN KOMUNITAS TUDEYS"}<span className="text-[#c4a179]">OUTFIT</span> {isEn ? "COMMUNITY" : ""}
        </h2>
        <p className="text-gray-500 dark:text-gray-400 font-sans text-sm mb-10 max-w-lg mx-auto transition-colors">
          {isEn ? "Be the first to discover new collection, editorial stories, and exclusive offers" : "Jadilah yang pertama untuk menemukan koleksi baru, cerita editorial, dan penawaran eksklusif"}
        </p>
        <form className="flex flex-col sm:flex-row w-full max-w-lg mx-auto">
          <input 
            type="email" 
            placeholder={isEn ? "Your email address" : "Alamat email Anda"}
            className="flex-1 bg-transparent border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white px-6 py-4 font-sans text-sm focus:outline-none focus:border-[#151515] dark:focus:border-[#c4a179] mb-4 sm:mb-0 sm:mr-4 transition-colors"
          />
          <button 
            type="button" 
            className="bg-[#151515] dark:bg-[#c4a179] text-white dark:text-[#151515] px-8 py-4 font-sans text-sm font-bold tracking-widest hover:bg-[#c4a179] dark:hover:bg-white transition-colors uppercase"
          >
            {isEn ? "Subscribe" : "Berlangganan"}
          </button>
        </form>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-12 relative z-10">
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-white/80 mb-24">
          <div className="col-span-1">
            <h3 className="text-2xl font-heading font-bold text-white mb-6">
              TUDEYS<span className="text-[#c4a179]">OUTFIT</span>
            </h3>
            <p className="font-sans text-sm leading-relaxed mb-6 max-w-xs">
              {isEn 
                ? "Elevating modern lifestyles through timeless fashion and sustainable luxury. Crafted for those who value elegance in every detail."
                : "Meningkatkan gaya hidup modern melalui mode abadi dan kemewahan yang berkelanjutan. Dibuat untuk mereka yang menghargai keanggunan dalam setiap detail."}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-[#c4a179]/50 flex items-center justify-center text-[#c4a179] hover:bg-[#c4a179] hover:text-white transition-colors">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#c4a179]/50 flex items-center justify-center text-[#c4a179] hover:bg-[#c4a179] hover:text-white transition-colors">
                <FaWhatsapp className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#c4a179]/50 flex items-center justify-center text-[#c4a179] hover:bg-[#c4a179] hover:text-white transition-colors">
                <FaRegEnvelope className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-lg">
              TUDEYS<span className="text-[#c4a179]">OUTFIT</span>
            </h4>
            <ul className="space-y-4 font-sans text-sm">
              <li><Link href={`/men?lang=${lang}`} className="hover:text-[#c4a179] transition-colors">{isEn ? "Men" : "Pria"}</Link></li>
              <li><Link href={`/women?lang=${lang}`} className="hover:text-[#c4a179] transition-colors">{isEn ? "Women" : "Wanita"}</Link></li>
              <li><Link href={`/accessories?lang=${lang}`} className="hover:text-[#c4a179] transition-colors">{isEn ? "Accessories" : "Aksesoris"}</Link></li>
              <li><Link href={`/new-arrivals?lang=${lang}`} className="hover:text-[#c4a179] transition-colors">{isEn ? "New Arrivals" : "Terbaru"}</Link></li>
              <li><Link href={`/sale?lang=${lang}`} className="hover:text-[#c4a179] transition-colors">{isEn ? "Sale" : "Diskon"}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-[#c4a179] mb-6 uppercase tracking-wider text-lg">{isEn ? "SUPPORT" : "DUKUNGAN"}</h4>
            <ul className="space-y-4 font-sans text-sm">
              <li><Link href={`/support-center?lang=${lang}`} className="hover:text-[#c4a179] transition-colors">{isEn ? "Help Center" : "Pusat Bantuan"}</Link></li>
              <li><Link href={`/shipping-info?lang=${lang}`} className="hover:text-[#c4a179] transition-colors">{isEn ? "Shipping Info" : "Info Pengiriman"}</Link></li>
              <li><Link href={`/returns-exchanges?lang=${lang}`} className="hover:text-[#c4a179] transition-colors">{isEn ? "Returns & Exchanges" : "Pengembalian & Penukaran"}</Link></li>
              <li><Link href={`/contact-us?lang=${lang}`} className="hover:text-[#c4a179] transition-colors">{isEn ? "Contact Us" : "Hubungi Kami"}</Link></li>
              <li><Link href={`/privacy-policy?lang=${lang}`} className="hover:text-[#c4a179] transition-colors">{isEn ? "Privacy Policy" : "Kebijakan Privasi"}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-[#c4a179] mb-6 uppercase tracking-wider text-lg">{isEn ? "CONTACT" : "KONTAK"}</h4>
            <ul className="space-y-4 font-sans text-sm">
              <li className="flex items-center">
                <FiMail className="w-5 h-5 mr-3" /> tudeysoutfit@gmail.com
              </li>
              <li className="flex items-center">
                <FiPhone className="w-5 h-5 mr-3" /> +62812345678
              </li>
              <li className="flex items-center">
                <FiMapPin className="w-5 h-5 mr-3" /> {isEn ? "Bandung City, West Java" : "Kota Bandung, Jawa Barat"}
              </li>
            </ul>
          </div>
        </div>

        {/* Watermark */}
        <div className="absolute inset-x-0 bottom-16 text-[11vw] font-heading font-black text-transparent text-center select-none leading-none tracking-tighter pointer-events-none" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
          TUDEYSOUTFIT
        </div>

        <div className="border-t border-white/10 pt-8 mt-12 text-center text-sm font-sans text-white/60">
          <p>&copy; 2026 TudeysOutfit. {isEn ? "All rights reserved." : "Hak cipta dilindungi undang-undang."}</p>
        </div>
      </div>
    </footer>
  );
}
