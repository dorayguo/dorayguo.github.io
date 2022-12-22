import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from "next/script"
import { useRouter } from 'next/router';
import { useEffect } from "react";
import * as gtag from "../lib/gtag"

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };
    
    router.events.on("routeChangeComplete", handleRouteChange);
    
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  
  return (
    <>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-9PJKXZ7BC3"></Script>
      <Script
      id='google-analytics'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9PJKXZ7BC3', {
            page_path: window.location.pathname,
          });
        `,
      }}
      />
      <Header />
      <main className="container">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}
