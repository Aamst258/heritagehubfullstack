require("dotenv").config();
const express = require("express");
const router = require("./routes/authRoutes");
const connectDb = require("./utils/db");
const app = express();
app.use(express.json());
app.use("/api/auth", router);
const PORT = process.env.PORT || 8080;
// console.log(process.env.PORT)
// CHECK THE ACCESS OF ENVIRONMENTAL VARIABLES
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });
});
