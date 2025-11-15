import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";


import { Alexandria  } from "next/font/google";
const alexandria = Alexandria({
  variable: "--font-alexandria",
  subsets: ["latin",'arabic'],
});



export const metadata: Metadata = {
  title: "Nile League",
  description: "egyptian premier league sponsered by Nile development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${alexandria.className} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
