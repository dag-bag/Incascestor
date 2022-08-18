/** @format */

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDb from "../../lib/mongodb";
import Product from "../../models/Product";
const handler = async (req, res) => {
  if (req.method === "POST") {
    for (let i = 0; i < req.body.length; i++) {
      let newProduct = new Product({
        title: req.body[i].title,
        desc: req.body[i].desc,
        slug: req.body[i].slug,
        img: req.body[i].img,
        category: req.body[i].category,
        color: req.body[i].color,
        size: req.body[i].size,
        price: req.body[i].price,
        availableQty: req.body[i].availableQty,
      });
      await newProduct.save();
    }

    res.status(200).json({ success: "Product Created SuccessFully" });
  }
  if (req.method === "GET") {
    let products = await Product.find();
    res.status(200).json({ products });
  }
  if (req.method === "PUT") {
    for (let i = 0; i < req.body.length; i++) {
      let updateProduct = await Product.findByIdAndUpdate(
        req.body[i]._id,
        req.body[i]
      );
    }

    // await newProduct.save();
    res.status(200).json({ success: "Products updated Succesfully" });
  }
};
export default connectDb(handler);
