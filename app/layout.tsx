import type { Metadata } from "next";
import "./globals.css";
import { CursorProvider } from "@/context/CursorContext";
import { ScrollProvider } from "@/context/ScrollContext";
import Cursor from "@/components/UI/Cursor";
import MainNavigation from "@/components/navigation/MainNavigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kristina Khaspekova - Product Designer",
  description:
    "Product Designer passionate about crafting digital experiences that solve real user problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CursorProvider>
          <ScrollProvider>
            <div className="root-layout">
              <Cursor />
              <MainNavigation />
              <main>{children}</main>
              <Footer />
            </div>
          </ScrollProvider>
        </CursorProvider>
      </body>
    </html>
  );
}
