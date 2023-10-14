const mongoose = require('mongoose');

const detailsSchema = new mongoose.Schema({
    
    fullName: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    containmentZone: {
        type: String,
        required: true,
    },

    address: {
        type: String,
        required: true,
    },

    additionalDetails: {
        type: String,
        required: true,
    }

});

const Details = mongoose.model('Details', detailsSchema);

module.exports = Details;
