import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/resume";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: `${profile.name} | Portfolio`,
  description: profile.summary,
  keywords: [
    "Gaurav Kumar",
    "Portfolio",
    "Frontend Developer",
    "Backend Developer",
    "MCA",
    "BHU",
    "Web Developer",
    "React",
    "Next.js",
  ],
  authors: [{ name: profile.name }],
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: `${profile.name} | Portfolio`,
    description: profile.tagline,
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/icon-192.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0e1a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          // Set the theme before paint to avoid a flash of the wrong theme.
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':true;document.documentElement.classList.toggle('dark',d);}catch(e){document.documentElement.classList.add('dark');}})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
