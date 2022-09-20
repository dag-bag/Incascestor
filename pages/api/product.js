/** @format */

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDb from "../../lib/mongodb";
import Product from "../../models/Product";
import Cors from "cors";
import initMiddleware from "../../lib/initiateMiddleware";
// import NextCors from "nextjs-cors";
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["POST", "GET", "PUT", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  })
);

const handler = async (req, res) => {
  await cors(req, res);
  if (req.method === "POST") {
    try {
      const { title, desc, variant, category, tag } = req.body;
      const titleExists = await Product.findOne({ title });
      console.log("Variant", variant.length);
      if (!title)
        return res.status(400).json({ error: "Product Name is required." });
      // console.log("I'm working Post");
      if (variant.length <= 0)
        return res.status(400).json({ error: "Variant is required" });
      if (!desc)
        return res.status(400).json({ error: "Description is required" });
      if (!category)
        return res.status(400).json({ error: "Category is required" });
      // if (!img) return res.status(400).json({ error: "Image is required" });
      // if (!slug) return res.status(400).json({ error: "Slug is required" });
      if (titleExists) {
        return res.status(400).json({
          error: "Product already exists",
          success: false,
          msg: "Product already exists",
        });
      }
      for (let i = 0; i < variant.length; i++) {
        let element = variant[i];
        if (!element.slug)
          return res.status(400).json({ error: "Slug is required" });
        if (!element.img)
          return res.status(400).json({ error: "Image is required" });
        if (!element.availableQty)
          return res.status(400).json({ error: "Stock is required" });
        if (!element.color)
          return res.status(400).json({ error: "Color is required" });
        if (element.price <= 0)
          return res.status(400).json({ error: "Price is required" });
        if (element.sellPrice <= 0)
          return res.status(400).json({ error: "Sell Price is required" });

        let productSlug = await Product.findOne({
          "variant.slug": element.slug,
        });
        if (productSlug) {
          return res.status(400).json({
            error: "Product slug already exists",
            success: false,
            msg: "Product slug already exists",
          });
        }
      }

      let newProduct = new Product({
        title,
        tag,
        desc,
        category,
        // availableQty: req.body[i].availableQty,
        variant,
      });
      let savedProduct = await newProduct.save();

      res.status(200).json({
        savedProduct,
        success: true,
        msg: "Product Created SuccessFully yahhh",
      });
    } catch (error) {
      res.status(400).json({ error: "Product not Created", msg: error });
    }
  }
  if (req.method === "GET") {
    // await cors(req, res);
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
  if (req.method === "DELETE") {
    let id = req.query.id;
    const deletedProduct = await Product.findByIdAndDelete(id);
    // await newProduct.save();
    res.status(200).json({ success: "Products Deleted Succesfully" });
  }
};
export default connectDb(handler);
