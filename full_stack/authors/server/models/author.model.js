const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: [true, 'Name is required.'], 
        unique: [true, 'Name is already in use.'], 
        minLength: [3, 'Author must be at least 3 characters long.']
    }
}, { timestamps: true }
);

module.exports = mongoose.model('Author', AuthorSchema);
