const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    displayName: String,
    email: String,
    avatarURL: String,
    googleId: String,
});

module.exports = mongoose.model('User', userSchema);