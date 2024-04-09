import Hero from "@/components/Hero";
import Tools from "@/components/Tools";
import NavBar from "@/components/NavBar";
import PortfolioTabs from "@/components/PortfolioTabs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-screen">
      <NavBar />

      <div className="flex flex-col items-center gap-10 md:gap-20 w-full h-full">
        <Hero />

        <Tools />

        <PortfolioTabs />
      </div>
    </main>
  );
}
