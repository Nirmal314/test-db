import User from "../../models/User";
import dbconnection from "../../middleware/mongoose";
import CryptoJS from "crypto-js";

async function handler(req, res) {
  if (req.method == "POST") {
    const { name, email, gender, income, age, marital, cast, education } =
      req.body;

    let u = new User({
      name,
      email,
      gender,
      income,
      age,
      marital,
      cast,
      education,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        "thehehesecret"
      ).toString(),
    });
    await u.save();
    res.status(200).json({ success: "Yay" });
  } else {
    res.status(400).json({ error: "Invalid" });
  }
}

export default dbconnection(handler);