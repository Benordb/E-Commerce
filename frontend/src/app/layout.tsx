import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import { Footer, Header } from "@/components";
import { AuthProvider } from "@/components/utils/authProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <AuthProvider>
          <Header />
          {children}
          <Footer />
        </AuthProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
