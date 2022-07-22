const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true, minLength: [3, 'Title must be at least 3 characters long'] },
    price: { type: Number, required: true, min: [0, 'Price must be a positive number'] },
    description: { type: String, minLength: [3, 'Description must be at least 3 characters long'] }
}, { timestamps: true }
);

module.exports = mongoose.model('Product', ProductSchema);
