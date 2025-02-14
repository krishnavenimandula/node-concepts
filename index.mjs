import express from "express";

import { sayHello } from "./sayHello.mjs";

const app = express();

app.get("/", (req, res) => {
  res.send(sayHello());
});

app.get("/contact", (req, res) => {
  res.send("Email:krishna@hello.com");
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
