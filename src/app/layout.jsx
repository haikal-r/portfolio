import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { siteConfig } from "@/constants/siteConfig";
import AppSideBar from "@/components/organism/sidebar";
import { ThemeToggle } from "@/components/molecules/theme-toggle";
import { ThemeWrapper } from "@/components/atoms/theme-wrapper";
import AppFooter from "@/components/organism/footer";
import { Analytics } from '@vercel/analytics/react';
import NextTopLoader from 'nextjs-toploader';

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.name,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    images: siteConfig.images,
    authors: siteConfig.authors,
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
        <NextTopLoader 
          showSpinner={false}
        />
        <ThemeWrapper attribute="class" defaultTheme="dark" enableSystem>
          <main className="md:flex">
            <AppSideBar />
            <div className="relative h-full w-full">
              {children}
              <Analytics />
              <div className="absolute right-0 top-0 z-50 hidden md:block">
                <div className="border-b border-l bg-background">
                  <ThemeToggle />
                </div>
              </div>
            </div>
            <AppFooter />
          </main>
        </ThemeWrapper>
      </body>
    </html>
  );
}
