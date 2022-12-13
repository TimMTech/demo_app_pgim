import mongoose from "mongoose"
const path = require("path");
const dotenv = require("dotenv");

__dirname = path.resolve();

dotenv.config({ path: path.resolve(__dirname, ".env") });

const DATABASE_ACCESS = process.env.REACT_APP_DATABASE_ACCESS;

if (!DATABASE_ACCESS) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose
      .connect(DATABASE_ACCESS, opts)
      .then((mongoose) => {
        return mongoose;
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;