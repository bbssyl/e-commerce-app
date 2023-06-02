import NavbarComponent from "@/components/navbar/NavbarComponent";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./provider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FooterComponents from "@/components/home/FooterComponents";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fake E-Commerce App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={inter.className} style={{ backgroundColor: "#eee" }}>
        <Providers>
          <NavbarComponent />
          {children}
          <FooterComponents />
        </Providers>
      </body>
    </html>
  );
}
