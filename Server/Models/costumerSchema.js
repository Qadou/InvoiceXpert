const mongoose = require('mongoose');
const costumerSchema = new mongoose.Schema({
    name: { type: String, required: true, minLength: 3, maxLength: 30 },
    email: { type: String, required: true, unique: true, match: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/ },
    password: { type: String, required: true, minLength: 6, maxLength: 30 },
    phone:{ type: Number, required: true , minLength: 10, maxLength: 20},
    adress:{ type: String, required: true },
});
module.exports = costumerSchema ;