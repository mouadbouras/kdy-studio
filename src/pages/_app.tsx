import "@/styles/globals.css";

import type { AppProps } from "next/app";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="bg-white">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
