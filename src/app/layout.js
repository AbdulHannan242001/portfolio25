import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";

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
  },
  twitter: {
    title: "Abdul Hannan",
    description: "React & Next Developer - 3D and Web animations",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: "../../public/assets/Logo.svg",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased">
        <div className="fixed top-[10px] left-0 right-0 z-[9999]">
          <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
