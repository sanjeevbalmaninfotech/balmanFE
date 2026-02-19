import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import MobileCallButton from "./components/Common/MobileCallButton";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Balman Infotech - Your Growth Partner",
  description: "Balman Infotech - Your Growth Partner",
  icons: {
    icon: "/icon.png",
  },
  verification: {
    google: "mK5Fq5kaMScG4LQXev_4Bv3nXTTsazskj07NDoXLJyE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "auto" }}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YMDJ6HH12X"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YMDJ6HH12X');
          `}
        </Script>
      </head>
      <body className={`${plusJakartaSans.variable} antialiased`}>
        <Toaster position="top-right" reverseOrder={false} />
        {children}
        <MobileCallButton />
      </body>
    </html>
  );
}