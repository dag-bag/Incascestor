/** @format */

import { useEffect } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { useSession } from "next-auth/react";

// This values are the props in the UI
const amount = "100.00";
const currency = "USD";
const style = { layout: "vertical" };

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner, Cart, clearCart }) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const { data: session } = useSession();
  const createOrder = async (data, actions) => {
    const resp = await fetch("/api/preorder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Cart,
        userEmail: session?.user?.email,
      }),
    });
    const order = await resp.json();
    return order.orderID;
  };
  const onApprove = async (data, actions) => {
    console.log("onApprove", data);
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
    console.log(order);
    clearCart();
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

export default function App({ Cart, clearCart }) {
  console.log(Cart);
  return (
    <div className=" w-full justify-center flex items-center h-auto min-h-[40vh] min-w-[60rem]">
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
        />
      </PayPalScriptProvider>
    </div>
  );
}
