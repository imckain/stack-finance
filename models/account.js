const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
    accountName: { type: String, required: true },
    age: { type: String, required: true },
    employed: { type: Boolean, required: true },
    // createdBy: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Account', accountSchema);