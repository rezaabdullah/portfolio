import type { Metadata } from "next";
// import { Inter, Roboto_Mono } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// const inter = Inter({ subsets: ["latin"] });
const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdullah Reza | Product Management, PMP",
  description:
    "Experienced product leader with 7 years of expertise in product management, strategy, and vision. Specialized in roadmap creation, minimal viable product, and steering products through launch to sustained growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body className={roboto_mono.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
