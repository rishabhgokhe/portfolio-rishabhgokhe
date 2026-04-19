import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.scss";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rishabhgokhe.vercel.app"),
  title: {
    default: "Rishabh Gokhe",
    template: "%s | Rishabh Gokhe",
  },
  description:
    "Portfolio of Rishabh Gokhe, a software engineer building full-stack products with React, Next.js, TypeScript, Node.js, AI workflows, and scalable backend systems.",
  applicationName: "Rishabh Gokhe Portfolio",
  authors: [{ name: "Rishabh Gokhe" }],
  creator: "Rishabh Gokhe",
  publisher: "Rishabh Gokhe",
  keywords: [
    "Rishabh Gokhe",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Node.js",
    "Portfolio",
    "AI Engineer",
    "Nagpur",
  ],
  icons: {
    icon: [
      {
        url: "/images/favicon.png",
        type: "image/png",
      },
    ],
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Rishabh Gokhe Portfolio",
    title: "Rishabh Gokhe",
    description:
      "Full-stack software engineer focused on product-grade web apps, AI workflows, performance, and scalable systems.",
    images: [
      {
        url: "/images/favicon.png",
        width: 420,
        height: 420,
        alt: "Rishabh Gokhe",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Rishabh Gokhe | Software Engineer",
    description:
      "Full-stack software engineer focused on product-grade web apps, AI workflows, performance, and scalable systems.",
    images: ["/images/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
          jetbrainsMono.variable
        )}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
