import "./globals.css";
import { Providers } from "@/components/Provider";

export const metadata = {
  title: "Portfolio | Nishit Batwal",
  description: "Nishit Batwal's portfolio",
  image: "/logo.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
