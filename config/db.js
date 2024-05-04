const mongoose = require('mongoose');
require('dotenv').config();

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGOOSE_URI);
    console.log(`Mongo DB connected :${conn.connection.host}`);
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDb;
