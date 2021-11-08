const express = require("express");
const next = require("next");
const mongoose = require("mongoose");
const cors = require("cors");
//for enviornment variables;
require("dotenv").config();
const url = process.env.MONGODB_URL_PRODUCTION;
// const url = " from mlab.be sure to replace user and password"
// use .env file for this

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;
con.on("open", () => {
  console.log("connected broooooooooooooo");
});
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(express.urlencoded({ extended: false }));

  server.use(express.json({ limit: "50mb" }));
  //cors
  server.use(
    cors({
      origin: "*",
    })
  );

  const postRouter = require("./routes/posts");
  server.use("/api/posts", postRouter);
  // this is where we'll make our MongoDB request
  server.get("/api", (req, res) => {
    res.json({ name: "Andre" });
  });

  // Serve all the other content as next
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Yo, I am listening on: http://localhost:${port}`);
  });
});
