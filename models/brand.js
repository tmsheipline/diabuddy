const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const brandSchema = new Schema({
  name: {type: String, required: true},
  sortOrder: Number
}, {
  timestamps: true
});

module.exports = mongoose.model('Brand', brandSchema);


// API
// const brandSchema = new Schema({
//   food_name: {type: String, required: true},
//   photo: String,
// });