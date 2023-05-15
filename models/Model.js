const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  text: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("TODo", Schema);
