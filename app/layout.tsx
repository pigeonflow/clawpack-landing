import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ClawPack — Building the infrastructure for AI agents",
  description:
    "ClawPack builds developer tools for AI agents. Push, pull, and share agents with Crate. Collaborate with humans and AI on Remote.",
  openGraph: {
    title: "ClawPack",
    description: "Building the infrastructure for AI agents",
    url: "https://clawpack.io",
    siteName: "ClawPack",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClawPack",
    description: "Building the infrastructure for AI agents",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
