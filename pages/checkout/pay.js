/** @format */

import { useEffect, useState } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState, useRecoilValue } from "recoil";
import { shipAddressAtom } from "../../atoms/CheckOutState";

// This values are the props in the UI
const amount = "100.00";
const currency = "USD";
const style = { layout: "vertical" };

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({
  currency,
  showSpinner,
  Cart,
  clearCart,
  SubTotal,
  // address,
}) => {
  const address = useRecoilValue(shipAddressAtom);
  const createOrder = async () => {
    const resp = await fetch("/api/preorder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        address,
        Cart,
        userEmail: session?.user?.email,
        total: SubTotal,
      }),
    });
    const order = await resp.json();
    return order.orderID;
  };
  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency, showSpinner]);

  const { data: session } = useSession();

  const router = useRouter();

  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  const onApprove = async (data, actions) => {
    const resp = await fetch("/api/captureorder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderID: data.orderID,
      }),
    });
    const order = await resp.json();

    router.push(`/checkout/success/${order.id}`);

    console.log(order);
    clearCart();
  };

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={createOrder}
        onApprove={onApprove}
      />
    </>
  );
};

export default function Pay({ Cart, clearCart, SubTotal, address }) {
  return (
    <div className=" w-full justify-start ml-16 flex items-center h-auto min-h-[40vh] min-w-[60rem]">
      <PayPalScriptProvider
        options={{
          "client-id": "test",
          components: "buttons",
          currency: "USD",
        }}
      >
        <ButtonWrapper
          currency={currency}
          showSpinner={false}
          Cart={Cart}
          clearCart={clearCart}
          SubTotal={SubTotal}
          address={address}
        />
      </PayPalScriptProvider>
    </div>
  );
}
