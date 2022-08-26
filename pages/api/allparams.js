/** @format */

import connectDb from "../../lib/mongodb";
import Blog from "../../models/Blog";
import Product from "../../models/Product";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const products = await Product.find({}).select("slug");

      return res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
export default connectDb(handler);
