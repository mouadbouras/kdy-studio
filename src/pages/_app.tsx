import "@/styles/globals.css";

import type { AppProps } from "next/app";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title> KDY Studio</title>
      </Head>
      <main className="bg-white">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
