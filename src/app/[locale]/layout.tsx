import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from "next-intl/server";
import localFont from "next/font/local";
import "../globals.css";

import Header from "./header";
import Footer from "./footer";

import LenisScroll from "../components/LenisScroll";
import Cursor from "../components/Cursor";

const Andalemo = localFont({
  src: "../fonts/Andalemo.woff2",
  variable: "--font-andalemo"
});
const ChakraPetch = localFont({
  src: "../fonts/ChakraPetch.woff2",
  variable: "--font-chakrapetch",
});
const Krungthep = localFont({
  src: "../fonts/Krungthep.woff2",
  variable: "--font-krungthep"
});

export const metadata: Metadata = {
  title: "Portfolio | Hugo BARBIERI",
  description: "This website is a Portfolio for Hugo BARBIERI, created in Next App with love.",
  icons: {
    icon: '../../favicon.ico'
  }
};

export default async function RootLayout({ children, params }: { children: React.ReactNode, params: { locale: string } }) {
  const messages = await getMessages();

  return (
    <html lang={params.locale}>
      <body className={`${Andalemo.variable} ${ChakraPetch.variable} ${Krungthep.variable} antialiased`}>
          <Header />
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
          <Footer />
        <LenisScroll />
        <Cursor />
      </body>
    </html>
  );
}
