import mongoose from "mongoose";

export async function dbConnect(params) {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("cnted");
    return cnn;
  } catch (err) {
    console.log(err);
  }
}
