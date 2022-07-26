const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: [true, 'Title is required.'], 
        unique: [true, 'Title is already in use.'], 
        minLength: [3, 'Title must be at least 3 characters long.']
    },
    price: { 
        type: Number, 
        required: [true, 'Price is required.'], 
        validate: {
            validator: v => /^\d+(\.\d\d)?$/.test(v),
            message: props => `${props.value} is not a valid price.`
        },
    },
    description: { 
        type: String, 
        required: [true, 'Desription is required.'],
        minLength: [4, 'Description must be at least 4 characters long.']
    }
}, { timestamps: true }
);

module.exports = mongoose.model('Product', ProductSchema);
