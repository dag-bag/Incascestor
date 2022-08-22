/** @format */

import connectDb from "../../lib/mongodb";

import Product from "../../models/Product";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = async (req, res) => {
  if (req.method === "GET") {
    let a = req.query.cart;
    let b = JSON.stringify(a);
    let c = b.slice(1, -1);
    let d = c.split(",");

    try {
      let carts = await Product.find({
        slug: { $in: d },
      });

      return res.status(200).json(carts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
export default connectDb(handler);
