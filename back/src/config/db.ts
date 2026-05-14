import mongoose from "mongoose";

if (process.env.MONGODB_URI == undefined)
  throw ("Variable d'environmment MONGODB_URI undefined!");

mongoose.connect(process.env.MONGODB_URI);
