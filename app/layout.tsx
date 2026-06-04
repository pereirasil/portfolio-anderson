import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Cursor from "../components/Cursor";
import BackgroundAnimated from "../components/BackgroundAnimated";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Anderson Pereira - Portfolio",
  description: "Portfolio pessoal de Anderson Pereira",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={montserrat.className}>
      <body className="antialiased relative">
        <BackgroundAnimated />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
