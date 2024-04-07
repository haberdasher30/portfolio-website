import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import PortfolioTabs from "@/components/PortfolioTabs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-screen">
      <NavBar />

      <div className="flex flex-col items-center w-full h-full">
        <Hero />

        <PortfolioTabs />
      </div>
    </main>
  );
}
