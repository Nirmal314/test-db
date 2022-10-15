import User from "../../models/User";
import dbconnection from "../../middleware/mongoose";
import CryptoJs from "crypto-js";
import jwt from "jsonwebtoken";

async function handler(req, res) {
  if (req.method == "POST") {
    console.log(req.body);
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      const bytes = CryptoJs.AES.decrypt(user.password, "thehehesecret");
      const decPass = bytes.toString(CryptoJs.enc.Utf8);
      if (req.body.email == user.email && req.body.password == decPass) {
        var token = jwt.sign({ email: user.email }, "thehehejwt", {
          expiresIn: "1d",
        });
        res.status(200).json({ success: true, token });
      } else {
        res.status(401).json({ success: false, error: "Invalid credentials" });
      }
    } else {
      res.status(400).json({ success: false, error: "No user found" });
    }
  } else {
    res.status(400).json({ success: false, error: "Not a POST method" });
  }
}

export default dbconnection(handler);