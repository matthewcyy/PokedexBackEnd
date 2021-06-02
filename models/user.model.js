const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 5 },
  displayName: { type: String }, // Originally just displayName here, adding favorite pokemon below
  favPokemon: [{ type: String }], // string of names for favorite pokemon
});

module.exports = User = mongoose.model("user", userSchema);