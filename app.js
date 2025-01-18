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

app.post("/book", async (req, res) => {
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

// for read books

app.get("/book", async (req, res) => {
  const books = await Book.find();
  res.status(200).json({
    message: "All books",
    data: books,
  });
});

// for single read book by id

app.get("/book/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findById(id);
    if (!book) {
      res.status(404).json({
        message: "Book not found",
      });
    } else {
      res.status(200).json({
        message: "Single book",
        data: book,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
