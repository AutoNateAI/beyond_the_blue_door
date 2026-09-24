import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Beyond the Blue Door",
  description: "Ascension of Self — Beyond the Blue Door.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
