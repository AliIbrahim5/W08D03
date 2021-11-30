const mongoose = require("mongoose");

// سكيما للرول فيها الرول والبراميشن
const task = new mongoose.Schema({
  name: { type: String },
  isDelete: {type: String,require: true},
  task: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],

  
});
//   اكسبورت للرول
module.exports = mongoose.model("Task", task);