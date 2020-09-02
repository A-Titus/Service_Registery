const mongoose = require("mongoose");

var Schema = mongoose.Schema;

const categorySchema = Schema({
  category: {
    type: String,
    required: true,
    unique: true
  }
});

var category = mongoose.model("category", categorySchema);

module.exports = category;
