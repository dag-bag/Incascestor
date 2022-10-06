/** @format */

import client from "../../lib/paypal";
import paypal from "@paypal/checkout-server-sdk";
import Order from "../../models/Order";
import connectDb from "../../lib/mongodb";

const handler = async (req, res) => {
  //Capture order to complete payment

  const { orderID } = req.body;
  console.log("orderID", orderID);
  const PaypalClient = client();
  const request = new paypal.orders.OrdersCaptureRequest(orderID);
  request.requestBody({});
  const response = await PaypalClient.execute(request);
  if (!response) {
    res.status(500);
  }

  // Update payment to PAID status once completed
  const order = await Order.findOneAndUpdate(
    { orderID: orderID },
    { status: "PAID" }
  );

  res.json({ ...response.result });
};

export default connectDb(handler);
