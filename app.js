const express = require("express");
const app = express();
const ConnectToDatabase = require("./database/index");

// const app = require("express")(); alternative way to import express

ConnectToDatabase();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello World",
    name: "John Doe",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
