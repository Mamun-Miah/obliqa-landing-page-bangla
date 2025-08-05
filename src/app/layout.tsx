import type { Metadata } from "next";
import "./globals.css";
import { Hind_Siliguri } from 'next/font/google';

const hindSiliguri = Hind_Siliguri({
  subsets: ['bengali'],
  weight: ['400', '700'], // You can also add '300', '500', etc.
  variable: '--font-hind-siliguri', // Optional: use as CSS variable
  display: 'swap',
});

export const metadata: Metadata = {
  title: "OBLIQA",
  description: "OBLIQA - Website Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${hindSiliguri.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
