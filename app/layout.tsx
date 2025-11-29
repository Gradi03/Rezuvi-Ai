import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Rezuvi – AI Resume Builder for Youth",
  description: "Rezuvi helps youth generate professional resumes with AI in minutes."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="gradient-bg min-h-screen">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 pb-16 pt-24">{children}</main>
      </body>
    </html>
  );
}


