const mongoose = require("mongoose");

const ConnectionString =
  "mongodb+srv://bishal:bishalghale@cluster0.kj5af.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function ConnectToDatabase() {
  await mongoose.connect(ConnectionString);
  console.log("Connected to Database successfully");
}

module.exports = ConnectToDatabase;