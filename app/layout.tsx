import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { cn } from "@/lib/utils";
import { Toaster } from "react-hot-toast";
import { Analytics } from '@vercel/analytics/next';
import CustomCursor from "@/components/elements/CustomCursor/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

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
          inter.variable
        )}
      >
        {/* <CustomCursor /> */}
        <Toaster position="top-right" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
