import Schemes from "../../models/Schemes";
import dbconnection from "../../middleware/mongoose";

async function handler(req, res) {
  let schemes = await Schemes.find();
  res.status(200).json({ schemes });
  return { data: schemes };
}

export default dbconnection(handler);