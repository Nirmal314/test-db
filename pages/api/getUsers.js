import User from "../../models/User";
import dbconnection from "../../middleware/mongoose";

async function handler(req, res) {
  let users = await User.find();
  res.status(200).json({ users });
  return { data: users };
}

export default dbconnection(handler);