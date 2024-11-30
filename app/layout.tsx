import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arya",
  description: "Arya website",
};

const vazirFont = localFont({
  src: "../public/fonts/webfonts/Vazirmatn-Regular.woff2",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body dir="rtl" className={`${vazirFont.className}`}>{children}</body>
    </html>
  );
}
