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
    methods: ["POST", "GET", "PUT"],
    origin: "*",
    optionsSuccessStatus: 200,
  })
);

const handler = async (req, res) => {
  await cors(req, res);
  if (req.method === "POST") {
    try {
      // await NextCors(req, res, {
      //   // Options
      //   methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
      //   origin: "*",
      //   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
      // });

      for (let i = 0; i < req.body.length; i++) {
        let slug = await req.body[i].slug;

        let { title, price, desc, category, img } = req.body[i];

        if (!title) return res.status(400).json({ error: "Name is required" });
        console.log("I'm working Post");
        if (!price) return res.status(400).json({ error: "Price is required" });
        if (!desc)
          return res.status(400).json({ error: "Description is required" });
        if (!category)
          return res.status(400).json({ error: "Category is required" });
        if (!img) return res.status(400).json({ error: "Image is required" });
        if (!slug) return res.status(400).json({ error: "Slug is required" });
        const slugExists = await Product.findOne({ slug });
        if (slugExists) {
          return res.status(400).json({
            error: "Slug already exists",
            success: false,
            msg: "Slug already exists",
          });
        }
        let newProduct = new Product({
          title: req.body[i].title,
          tag: req.body[i].tag,
          desc: req.body[i].desc,
          slug: req.body[i].slug,
          img: req.body[i].img,
          category: req.body[i].category,
          color: req.body[i].color,
          size: req.body[i].size,
          price: req.body[i].price,
          availableQty: req.body[i].availableQty,
        });
        let savedProduct = await newProduct.save();
        console.log("savedProduct", savedProduct);
      }
      res.status(200).json({
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
};
export default connectDb(handler);
