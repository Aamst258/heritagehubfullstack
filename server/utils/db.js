const mongoose = require("mongoose");

const URI = process.env.MONGO_URI;
const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connection successful to DB");
  } catch (error) {
    console.log("db connection failed ");
    process.exit(0);
  }
};
// database will only appear mongo compass when u crea te at least one collection
module.exports = connectDb;
