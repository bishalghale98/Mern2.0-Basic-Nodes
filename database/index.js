const mongoose = require("mongoose");

const ConnectionString =
  "mongodb+srv://mern:mern2.0@cluster0.tfply74.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function ConnectToDatabase() {
  await mongoose.connect(ConnectionString);
  console.log("Connected to Database successfully");
}


module.exports = ConnectToDatabase;