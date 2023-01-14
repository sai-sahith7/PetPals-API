const express = require('express');
const router = express.Router();
const History = require('../models/History');

router.get('/', async (req, res) => {
    try
    {
        const history = await History.find({email:req.query.email});
        res.json(history);
    }
    catch (err)
    {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;