const express = require("express");
const app = express();
const ConnectToDatabase = require("./database/index");
const Book = require("./models/bookModel");

// const app = require("express")(); alternative way to import express

app.use(express.json());

ConnectToDatabase();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello World",
    name: "John Doe",
  });
});

// for create books

app.post("/add-book", async (req, res) => {
  const {
    bookName,
    bookPrice,
    isbnNumber,
    authorName,
    publishedAt,
    publication,
  } = req.body;
  await Book.create({
    bookName,
    bookPrice,
    isbnNumber,
    authorName,
    publishedAt,
    publication,
  });
  res.status(201).json({
    message: "Book added successfully",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
