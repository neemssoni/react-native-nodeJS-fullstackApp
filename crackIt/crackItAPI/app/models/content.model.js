const mongoose = require('mongoose');

const ContentSchema = mongoose.Schema({
    Name: String,
    contentId: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Content', ContentSchema);
