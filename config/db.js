const mongoose = require("mongoose");
const DB_URI =
  "mongodb+srv://carlosdata:car123456@testbd.p5oqrcd.mongodb.net/test";

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("Database connected");
  } catch (error) {
    console.log("Error while connecting: " + error.message);
  }
};

module.exports = connectDB;
