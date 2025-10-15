import type { Metadata } from "next";
import "./globals.css";
import { Hind_Siliguri } from "next/font/google";
import TawkTo from "./TawkTo";
import Script from "next/script";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["400", "700"], // You can also add '300', '500', etc.
  variable: "--font-hind-siliguri", // Optional: use as CSS variable
  display: "swap",
});

export const metadata: Metadata = {
  title: "OBLIQA IT SOLUTIONS",
  description: "OBLIQA - Website Development",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
          <head>
        {/* Google Tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KZZ88RC249"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KZZ88RC249');
          `}
        </Script>
      </head>
      <body className={`${hindSiliguri.variable} antialiased bg-white text-black`}>
        {children}
          <TawkTo />
      </body>
    </html>
  );
}
