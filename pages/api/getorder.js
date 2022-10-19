/** @format */

import Order from "../../models/Order";

import connectDb from "../../lib/mongodb";

const handler = async (req, res) => {
  //This code is lifted from https://github.com/paypal/Checkout-NodeJS-SDK
  //This code creates an order. It is not used in this project.
  // const request = new paypal.orders.OrdersCreateRequest();
  // request.prefer("return=representation");

  if (req.method === "GET") {
    try {
      //This code is lifted from
      const { orderID } = req.query;
      const order = await Order.findOne({ orderID: orderID });

      res.json(order);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(500).json({ message: "Invalid request method" });
  }
};
export default connectDb(handler);
