const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    amount: Number,
    Type: String, // Debit or Credit
});

module.exports = mongoose.model('TransactionHistory', transactionSchema);
