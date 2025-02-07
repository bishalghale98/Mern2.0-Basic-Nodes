const express = require("express");
const app = express();

const ConnectToDatabase = require("./database/index");
const Book = require("./models/bookModel");

// multerConfig imports
const { multer, storage } = require("./middleware/multerConfig");
const upload = multer({ storage: storage });

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

app.post("/book", upload.single("image"), async (req, res) => {
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

// for read all books

app.get("/book", async (req, res) => {
  const books = await Book.find(); //return in array
  res.status(200).json({
    message: "All books",
    data: books,
  });
});

// for single read book by id

app.get("/book/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findById(id); //return in object
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

// for Delete book by id

app.delete("/book/:id", async (req, res) => {
  const id = req.params.id;
  await Book.findByIdAndDelete(id);
  res.status(200).json({
    message: "Book deleted successfully",
  });
});

// for update book by id

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
