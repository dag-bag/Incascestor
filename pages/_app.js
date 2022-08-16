/** @format */

import { RecoilRoot } from "recoil";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Topheader from "../components/Topheader";
import Footer from "../components/Footer";
function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <>
        <Topheader />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </>
    </RecoilRoot>
  );
}

export default MyApp;
