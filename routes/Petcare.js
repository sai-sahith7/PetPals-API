const express = require('express');
const router = express.Router();
const History = require('../models/History');

router.post('/', async (req, res) => {
    const newhistory = new History({
        email:req.query.email,
        petname:req.query.petname,
        petcare:true,
        category:req.query.category,
        duration:req.query.duration,
        date:req.query.date,
        status:'Applied',
        price:null,
        remarks:req.query.remarks
    });
    newhistory.save();
    res.status(200).json({'status':'History created'});
});

module.exports = router;
