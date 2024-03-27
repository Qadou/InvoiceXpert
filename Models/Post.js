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

const categorySchema = new mongoose.Schema({
    idCategory: { type: Number},
    name: { type: String }
});


module.exports = categorySchema
