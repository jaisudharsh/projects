const express = require('express');
const router = express.Router();
const TransactionHistory = require('../Models/transactionSchema');

// Fetch transactions of the logged-in user
router.get('/', async (req, res) => {
    const username = req.params.username;
    try {
        const transactions = await TransactionHistory.find({ username });
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
