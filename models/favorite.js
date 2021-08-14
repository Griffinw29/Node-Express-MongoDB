const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favortieSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  campsites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Campsites",
    },
  ],
});

const Favorites = mongoose.model("Favorites", favortieSchema);

module.exports = Favorites;
