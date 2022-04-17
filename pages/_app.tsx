import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import PlausibleProvider from "next-plausible";
import type { AppProps } from "next/app";



export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <PlausibleProvider domain="demo.professora-plataforma.vercel.app">
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </PlausibleProvider>
  );
}
