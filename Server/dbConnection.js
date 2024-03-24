const mongoose = require('mongoose');
 async function connect() {
  try {
    await mongoose.connect("mongodb+srv://admin:1234@invoicexpert.3prvel0.mongodb.net/?retryWrites=true&w=majority&appName=InvoiceXpert");
    console.log("Connected to database");
  } catch (error) {
    console.log("Error: ", error);
  }
}

module.export= connect();