const mongoose = require("mongoose");

const DB_URI = process.env.DB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("Database connected");
  } catch (error) {
    console.log("Error while connecting: " + error.message);
  }
};

module.exports = connectDB;
