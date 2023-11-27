const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Define the user schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

// Hash the password before saving to the database
// userSchema.pre("save", async function (next) {
//   const user = this;
//   if (user.isModified("password") || user.isNew) {
//     try {
//       const hashedPassword = await bcrypt.hash(user.password, 10);
//       user.password = hashedPassword;
//     } catch (err) {
//       return next(err);
//     }
//   }
//   next();
// });

// Export the user model
const User = mongoose.model("User", userSchema);
module.exports = User;
