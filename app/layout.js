import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({
  variable: "--inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "GMTDevs Website",
  description: "Your website is your business's first impression. Make it count with GMTDevs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
