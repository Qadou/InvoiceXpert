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

const FactureModel = mongoose.model('Products', {
    idFacture: {type: Number, required: true},
    createdAt: {type: Date, default: Date.now},
    amount: {type: Number, required: true},
    costumerId: {type: Number, required: true},
    userId: {type: Number, required: true}
});

module.exports = FactureModel

