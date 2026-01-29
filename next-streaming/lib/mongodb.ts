import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

export async function dbConnect() {
  if (!MONGODB_URI) {
    throw Error('Invalid MONGODB_URI');
  }

  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try{
    await mongoose.connect(MONGODB_URI);
  }

  catch (error){
    throw new Error('Failed to connect');
  }
}
