const mongoose = require('mongoose');

async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb://localhost:27017/INVOICEXPERT");
    console.log("Connected to database");
  } catch (error) {
    console.log("Error: ", error);
  }
}

connectToDatabase();

const ProductModel = mongoose.model('Products', {
  idCategory: Number,
  name: String,
  price: Number,
  description: String,
  inStock: {
    type: Boolean,
    default: true
  },
  picture: String
});

module.exports = ProductModel
