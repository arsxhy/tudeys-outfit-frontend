import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Category from "@/components/Category";
import Trending from "@/components/Trending";
import CollectionBanner from "@/components/CollectionBanner";
import WhyShop from "@/components/WhyShop";
import BestSellers from "@/components/BestSellers";
import Lookbook from "@/components/Lookbook";
import Instagram from "@/components/Instagram";
import Footer from "@/components/Footer";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const params = await searchParams;
  const lang = params.lang === "en" ? "en" : "id";

  return (
    <main className="min-h-screen bg-background">
      <Navbar lang={lang} />
      <Hero lang={lang} />
      <Category lang={lang} />
      <Trending lang={lang} />
      <CollectionBanner lang={lang} />
      <WhyShop lang={lang} />
      <BestSellers lang={lang} />
      <Lookbook lang={lang} />
      <Instagram lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}
