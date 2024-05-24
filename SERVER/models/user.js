const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const userSchema = new Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    github_url: {
        type: String,
        required: true
    }
}, {timestamps: {createdAt: true, updatedAt: true} })


module.exports = mongoose.model('User', userSchema);  