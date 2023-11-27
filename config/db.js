const mongoose = require("mongoose");

// MongoDB connection URI (replace with your MongoDB URI)
const dbURI =
  "mongodb+srv://shankarmalviya067:Shankar_067@cluster0.n7dvmwe.mongodb.net/?retryWrites=true&w=majority";

// Set up the connection
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the default connection
const db = mongoose.connection;

// Event listeners for connection events
db.on("connected", () => {
  console.log(`Connected to MongoDB on ${dbURI}`);
});

db.on("error", (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

db.on("disconnected", () => {
  console.log("Disconnected from MongoDB");
});

// Export the connection
module.exports = db;
