import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sourGummy = Inter({
  subsets: ["latin"],
  variable: "--font-sour-gummy",
});

export const metadata = {
  title: "Aadil Sayyed",
  description: "Portfolio - Aadil Sayyed",
  icons: {
    icon: "/images/aadilsayyed.png",
    shortcut: "/images/aadilsayyed.png",
    apple: "/images/aadilsayyed.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Sour+Gummy:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${sourGummy.variable}`}>
        {children}
      </body>
    </html>
  );
}
