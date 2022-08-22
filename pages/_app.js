/** @format */

import { RecoilRoot, useRecoilState } from "recoil";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Topheader from "../components/Topheader";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
        SaveCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.error(error);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [progress, setProgress] = useState(0);
  const [Cart, setCart] = useState({});
  const [SubTotal, setSubTotal] = useState(0);

  const SaveCart = (MyCart) => {
    localStorage.setItem("cart", JSON.stringify(MyCart));
    let keys = Object.keys(MyCart);
    let subt = 0;
    for (let i = 0; i < keys.length; i++) {
      subt += MyCart[keys[i]].price * MyCart[keys[i]].qty;
    }
    setSubTotal(subt);
  };
  const addToCart = (itemCode, qty, size, name, price, variant, img) => {
    let NewCart = Cart;
    if (itemCode in Cart) {
      NewCart[itemCode].qty = Cart[itemCode].qty + qty;
    } else {
      NewCart[itemCode] = { qty: 1, size, name, price, variant, img };
    }
    setCart(NewCart);
    SaveCart(NewCart);
  };
  const buyNow = (itemCode, qty, size, name, price, variant) => {
    SaveCart({});
    let NewCart = { itemCode: { qty: 1, size, name, price, variant } };

    setCart(NewCart);
    SaveCart(NewCart);
    router.push("/checkout");
  };
  const clearCart = () => {
    setCart({});
    SaveCart({});
  };
  const removeFromCart = (itemCode, qty, size, name, price, variant) => {
    let NewCart = Cart;
    if (itemCode in Cart) {
      NewCart[itemCode].qty = Cart[itemCode].qty - qty;
    }
    if (NewCart[itemCode].qty <= 0) {
      delete NewCart[itemCode];
    }
    setCart(NewCart);
    SaveCart(NewCart);
  };
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <>
          <Topheader />
          <Navbar />
          <Component
            {...pageProps}
            addToCart={addToCart}
            Cart={Cart}
            removeFromCart={removeFromCart}
            SubTotal={SubTotal}
          />
          <Footer />
        </>
      </RecoilRoot>
    </SessionProvider>
  );
}
