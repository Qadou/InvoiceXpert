const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: { type: String, required: true, minLength: 3, maxLength: 30 },
    email: { type: String, required: true, unique: true, match: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/ },
    password: { type: String, required: true, minLength: 6, maxLength: 30 },
    role_id:{ type: String, required: true },
    phone:{ type: Number, required: true , minLength: 10, maxLength: 20},
});
module.exports = userSchema ;