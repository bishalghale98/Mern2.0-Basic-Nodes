const mongoose = require("mongoose");

const ConnectionString =
  "mongodb+srv://bishal:3CE2kTFY0WtbOMeL@mern.kj5af.mongodb.net/?retryWrites=true&w=majority&appName=MERN";

async function ConnectToDatabase() {
  await mongoose.connect(ConnectionString);
  console.log("Connected to Database successfully");
}


module.exports = ConnectToDatabase;