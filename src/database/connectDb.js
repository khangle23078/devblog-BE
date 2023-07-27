import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect("mongodb+srv://khangle2307:khang123@new-esport.aottm9j.mongodb.net/", {
      dbName: "new-sport",
    
    })
    console.log("Connect database success!");
  } catch (error) {
    console.log(error);
    process.exit(1)
  }
}