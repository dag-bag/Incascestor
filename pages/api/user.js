/** @format */

import connectDb from "../../lib/mongodb";
import User from "../../models/User";
var bcrypt = require("bcryptjs");
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const email = req.query.email;

      const users = await User.findOne({ email: email }).select(
        "name email username"
      );

      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  if (req.method === "POST") {
    try {
      const { email, password } = req.body;
      console.log(email, password);

      if (!email || !password) {
        return res.status(400).json({
          error: "Please provide name, email and password",
          success: false,
          msg: "Please provide name, email and password",
        });
      }

      const userExists = await User.findOne({ email });

      if (userExists) {
        return res.status(400).json({
          error: "User already exists",
          success: false,
          msg: "User already exists",
        });
      }
      let salt = bcrypt.genSaltSync(10);

      const secPassword = bcrypt.hashSync(password, salt);
      const user = await User.create({
        email,
        password: secPassword,
      });

      if (user) {
        res.status(201).json({
          _id: user._id,

          email: user.email,
          isAdmin: user.isAdmin,

          success: true,
          msg: "User created successfully",
          //   token: generateToken(user._id),
        });
      } else {
        return res.status(400).json({
          error: "User not created",
          success: false,
          msg: "User not created",
        });
      }
    } catch (error) {
      res.status(500).json({ error: error.message, success: false });
    }
  }
  if (req.method === "PUT") {
    try {
      console.log(req.query.id);
      const user = await User.findOneAndUpdate(req.query.id, req.body);

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  //   if (req.method === "DELETE") {
  //     try {
  //       const post = await Post.findByIdAndDelete(req.body._id);

  //       res.status(200).json(post);
  //     } catch (error) {
  //       res.status(500).json({ error: error.message });
  //     }
  //   }
};
export default connectDb(handler);
