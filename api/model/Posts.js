const { Schema, model } = require('mongoose');

const postSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
        max: 2000
    },
    img: {
        type: String,
    },
    likes: {
        type: Array,
        default: [],
    },
}, {timestamps: true});

module.exports = model('post', postSchema);