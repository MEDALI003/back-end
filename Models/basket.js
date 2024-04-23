const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    userId: { type: String, required: true },
    basket: [{
        productId: String,
        quantity: Number,
    }],
    date:{
        type:Date,
        required:true
    }
});

module.exports = mongoose.model('basket', productSchema);


