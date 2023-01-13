const express = require('express');
const router = express.Router();
const History = require('../models/History');
const Pets = require('../models/Pets');

router.post('/', async (req, res) => {
    const newhistory = new History({
        email:req.query.email,
        petname:Pets.findOne({_id:req.query.petid}).name,
        petid:req.query.petid,
        petcare:false,
        category:req.query.category,
        duration:req.query.duration,
        date:req.query.date,
        status:'Ordered',
        price:null,
        remarks:'-'
    });
    newhistory.save();
    res.status(200).json({'status':'History created'});
});

module.exports = router;
