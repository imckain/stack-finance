const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const incomeSchema = new Schema({
    takeHome: { type: Number, default: 0 },
    additional1: { type: Number, default: 0 },
    additional2: { type: Number, default: 0 },
    additional3: { type: Number, default: 0 },
});

const expenseSchema = new Schema({
    electric: { type: Number, default: 0 },
    gas: { type: Number, default: 0 },
    water: { type: Number, default: 0 },
    rent: { type: Number, default: 0 },
    cell: { type: Number, default: 0 },
    cable: { type: Number, default: 0 },
    carPayment1: { type: Number, default: 0 },
    carPayment2: { type: Number, default: 0 },
    carInsurance: { type: Number, default: 0 },
    medical: { type: Number, default: 0 },
    loans1: { type: Number, default: 0 },
    loans2: { type: Number, default: 0 },
    creditCardDebt: { type: Number, default: 0 },
    otherDebt: { type: Number, default: 0 },
});

const savingsSchema = new Schema({
    leftOver: Number,
    putBack: { type: Number, default: 0 },
})

const budgetSchema = new Schema({
    // name: { type: String, required: true },
    title: { type: String, required:true },
    income: [incomeSchema],
    expense: [expenseSchema],
    savings: [savingsSchema],
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Budget', budgetSchema);