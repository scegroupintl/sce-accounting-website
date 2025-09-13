import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/lib/components/Footer";
import { NavBar } from "@/lib/components/NavBar";
import { Nunito_Sans } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { LanguageProvider } from "@/lib/context/LanguageContext";

const baseFont = Nunito_Sans({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SCE Accounting Services",
  description: "Brindando servicios contables confiables para su negocio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={baseFont.className}>
        <LanguageProvider>
          <Toaster position="bottom-center" />
          <NavBar />
          <div className="pt-16">{children}</div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
