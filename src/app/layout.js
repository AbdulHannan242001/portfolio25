import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import LenisProvider from "./components/global/LenisProvider";
import Script from "next/script";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata = {
  title: "Abdul Hannan",
  description: "React & Next Developer - 3D and Web animations",
  openGraph: {
    title: "Abdul Hannan",
    description: "React & Next Developer - 3D and Web animations",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Hannan",
    description: "React & Next Developer - 3D and Web animations",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  icons: {
    icon: "/assets/Logo.svg", // Correct path relative to /public
  },
  robots: {
    index: true,
    follow: true,
    noimageindex: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased">
        <Script
          src={`https://t.fullres.net/portfolio25beigevercel.js?${Date.now()}`}
          strategy="lazyOnload"
        />
        <LenisProvider>
          <div className="fixed top-[10px] left-0 right-0 z-[9999]">
            <Navbar />
          </div>
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
