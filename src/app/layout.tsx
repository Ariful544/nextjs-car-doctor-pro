import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "Car Doctor",
  description: "We are here at your service",
  icons: {
    icon: "/favicon.png", // Path to favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main className="max-w-screen-xl min-h-[calc(100vh-626px)] mx-auto px-4 md:px-0">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
