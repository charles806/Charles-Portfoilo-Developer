import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/component/Home/NavBar/ResponsiveNav";

const fontSans = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Charles Portfoilo | Developer",
  description: "Portfoilo website for full stack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.className} antialiased bg-[#0d0d1f] `}>
        {children}
        <ResponsiveNav />
        </body>

    </html>
  );
}
