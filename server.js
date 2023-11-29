const dotenv = require('dotenv').config({ PATH: './env' })
const connectDB = require("./db/index.js");
connectDB()
// const express = require("express");

// const bodyParser = require("body-parser");
// const cors = require("cors");



// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());







// MongoDB connection (replace with your MongoDB URI) mongodb://127.0.0.1:27017/
// const uri =
//   "mongodb+srv://shankarmalviya067:Shankar_067@cluster0.n7dvmwe.mongodb.net/?retryWrites=true&w=majority";
// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// mongoose.connection.on("connected", () => {
//   console.log("Connected to MongoDB");
// });

// // Basic route
// app.get("/", (req, res) => {
//   res.send("Hello, MERN Chat App!");
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//   } catch (error) {
//     console.log("ERROR:", error)
//     throw err
//   }
// })()