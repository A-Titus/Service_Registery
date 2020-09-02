const mongoose = require("mongoose");

var Schema = mongoose.Schema;

const ApiSchema = new Schema({
  apiName: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  creatorName: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  summary: {
    type: String,
    required: true
  },
  categories: [{ type: Schema.Types.ObjectId, ref: "category" }]
});

var Api = mongoose.model("Api", ApiSchema);

module.exports = Api;
