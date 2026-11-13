import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./component/footer/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  variable: "--inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "GMTDevs Global - Web Design & Development",
  description: "GMTDevs Global delivers custom website design, web development, web applications, and digital solutions that help businesses and brands grow.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "GMTDevs Global",
    title: "GMTDevs Global - Web Design & Development",
    description:
      "Custom websites, web applications, and digital solutions built to help businesses and brands grow.",
    url: "/",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "GMTDevs Global - Web Design and Development",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        {children}
         <Footer />
         <SpeedInsights />
         <Analytics />
      </body>
    </html>
  );
}
