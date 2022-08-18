/** @format */

import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Topheader from "../components/Topheader";
import Footer from "../components/Footer";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <>
          <Topheader />
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </>
      </RecoilRoot>
    </SessionProvider>
  );
}
