import type { Metadata } from "next";
import { Inter, Varela_Round } from "next/font/google";
import "./globals.scss";
import { cn } from "@/lib/utils";
import { Toaster } from "react-hot-toast";
import CustomCursor from "@/components/elements/CustomCursor/CustomCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const varelaRound = Varela_Round({ subsets: ["latin"], weight: "400", variable: "--font-varela" });

export const metadata: Metadata = {
  title: "Rishabh Gokhe",
  description: "My Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          varelaRound.variable
        )}
      >
        {/* <CustomCursor /> */}
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
