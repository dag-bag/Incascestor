/** @format */

import connectDb from "../../lib/mongodb";
import Address from "../../models/Address";
import Blog from "../../models/Blog";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const { email } = req.query;
      const address = await Address.find({ userEmail: email });
      return res.status(200).json(address);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  if (req.method === "POST") {
    try {
      const {
        userEmail: userEmail,
        address1,
        city,
        state,
        zipcode,
        country,
        firstName,
        phone,
        email,
        address2,
      } = req.body;

      if (
        !address1 ||
        !city ||
        !state ||
        !zipcode ||
        !country ||
        !firstName ||
        !phone ||
        !email
      ) {
        return res.status(400).json({
          error: "Please provide title slug text category",
          success: false,
          msg: "Please provide name, email and password",
        });
      }

      const blog = await Address.create({
        userEmail: userEmail,
        address1,
        address2,
        city,
        state,
        zipcode,
        country,
        firstName,
        phone,
        email,
      });

      if (blog) {
        return res.status(201).json({
          success: true,
          msg: "address created successfully",
          //   token: generateToken(user._id),
        });
      } else {
        return res.status(400).json({
          error: "blog not created",
          success: false,
          msg: "Blog not created",
        });
      }
    } catch (error) {
      res.status(500).json({ error: error.message, success: false });
    }
  }
  //   if (req.method === "PUT") {
  //     try {
  //       const post = await Post.findByIdAndUpdate(req.body._id, req.body);

  //       res.status(200).json(post);
  //     } catch (error) {
  //       res.status(500).json({ error: error.message });
  //     }

  //   }
  if (req.method === "DELETE") {
    try {
      const { id } = req.query;
      const post = await Address.findByIdAndDelete(id);

      res.status(200).json({ success: true, msg: "address deleted", id: id });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
export default connectDb(handler);
