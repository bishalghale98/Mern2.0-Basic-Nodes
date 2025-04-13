const mongoose = require("mongoose");

const ConnectionString = "mongodb+srv://ghale1040:ghalevai@cluster0.tfply74.mongodb.net/yourDatabaseName?retryWrites=true&w=majority&appName=Cluster0";

async function ConnectToDatabase() {
  try {
    await mongoose.connect(ConnectionString);
    console.log("Connected to Database successfully");
  } catch (error) {
    console.error("Error connecting to Database:", error.message);
  }
}

module.exports = ConnectToDatabase;
