const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
    title: { type: String, required: true },
    amount: { type: Number, default: 0 },
    dueDate: { type: Date, required: true }
});

const budgetSchema = new Schema({
    title: { type: String, required:true },
    incomeSource: { type: String, required: true },
    incomeAmount: { type: Number, required: true },
    expense: [expenseSchema],
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Budget', budgetSchema);