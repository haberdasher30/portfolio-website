import NavBar from "@/components/NavBar";
import Profile from "@/components/Profile";
import PhotoCarousal from "@/components/PhotoCarousal";
import PortfolioTabs from "@/components/PortfolioTabs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-screen">
      <NavBar />

      <div className="flex flex-col items-center p-5 w-screen gap-5">
        <div className="flex flex-col md:flex-row items-center gap-5">
          <PhotoCarousal />

          <Profile />
        </div>

        <PortfolioTabs />
      </div>
    </main>
  );
}
