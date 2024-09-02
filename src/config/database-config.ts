import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL || "");
    console.log("connect to MongoDB");
  } catch (err) {
    console.log("error connect to MongoDB", err);
  }
};
