// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// //for enviornment variables;
// require("dotenv").config();

// const dev = process.env.NODE_ENV;
// const url =
//   dev === "dev" ? process.env.MONGODB_URL : process.env.MONGODB_URL_PRODUCTION;
// // const url = " from mlab.be sure to replace user and password"
// // use .env file for this

// const app = express();

// mongoose.connect(url, { useNewUrlParser: true });

// const con = mongoose.connection;
// app.use(express.urlencoded({ extended: false }));

// app.use(express.static("./public"));

// con.on("open", () => {
//   console.log("connected broooooooooooooo");
// });
// app.use(express.json({ limit: "50mb" }));
// //cors
// app.use(
//   cors({
//     origin: "*",
//   })
// );

// const postRouter = require("./routes/posts");
// app.use("/api/posts", postRouter);

// app.listen(9000, () => {
//   console.log("server is running on 9000");
// });
