import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { siteConfig } from "@/constant/siteConfig";
import AppSideBar from "@/components/app/sidebar";
import { ThemeToggle } from "@/components/molecules/theme-toggle";
import { ThemeWrapper } from "@/components/atoms/theme-wrapper";

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.name,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    type: "website",
  },
  twitter: {
    title: siteConfig.name,
    card: "summary_large_name",
  },
  icons: [
    {
      url: "/favicon.ico",
      sizes: "192x192",
      type: "image/png",
    },
    {
      url: "/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${GeistMono.variable} ${GeistSans.variable} font-mono`}>
        <ThemeWrapper attribute="class" defaultTheme="dark" enableSystem>
          <main className="md:flex">
            <AppSideBar />
            <div className="relative h-full w-full">
              {children}

              <div className="absolute right-0 top-0 z-50 hidden md:block">
                <div className="border-b border-l bg-background">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </main>
        </ThemeWrapper>
      </body>
    </html>
  );
}
