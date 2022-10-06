/** @format */

import client from "../../lib/paypal";
import Order from "../../models/Order";
import paypal from "@paypal/checkout-server-sdk";
import connectDb from "../../lib/mongodb";

const handler = async (req, res) => {
  //This code is lifted from https://github.com/paypal/Checkout-NodeJS-SDK
  //This code creates an order. It is not used in this project.
  // const request = new paypal.orders.OrdersCreateRequest();
  // request.prefer("return=representation");

  if (req.method === "POST") {
    const { Cart, userEmail } = req.body;

    let address = {
      address_line_1: "123 Townsend St",
      address_line_2: "Floor 6",
      admin_area_2: "San Francisco",
      admin_area_1: "CA",
      postal_code: "94107",
      country_code: "US",
    };
    try {
      const PaypalClient = client();
      //This code is lifted from https://github.com/paypal/Checkout-NodeJS-SDK
      const request = new paypal.orders.OrdersCreateRequest();
      request.headers["prefer"] = "return=representation";
      request.requestBody({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: "100.00",
            },
          },
        ],
      });
      const response = await PaypalClient.execute(request);
      if (response.statusCode !== 201) {
        res.status(500);
      }
      const order = await Order.create({
        orderID: response.result.id,
        address: address,
        products: Cart,
        userEmail: userEmail,
      });
      console.log("order", order);
      res.json({ orderID: response.result.id });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(500).json({ message: "Invalid request method" });
  }
};
export default connectDb(handler);
