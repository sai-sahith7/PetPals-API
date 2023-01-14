const express = require('express');
const router = express.Router();
const UserInfo = require('../models/UserInfo');

router.get('/', async (req, res) => {
    try
    {
        const user = await UserInfo.find({email:req.query.email});
        res.json(user);
    }
    catch (err)
    {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;