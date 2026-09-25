import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Manuel | Full Stack Developer",
  description: "Portfolio of projects and contact information.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${comfortaa.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}