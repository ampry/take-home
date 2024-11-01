import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Take Home Test",
  description: "Ampry Take Home Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
