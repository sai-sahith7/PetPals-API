const express = require('express');
const router = express.Router();
const Pets = require('../models/Pets');

router.get('/', async (req, res) => {
    try 
    {
        const pets = await Pets.find();
        res.json(pets);
    } 
    catch (err) 
    {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try 
    {
        const pets = await Pets.findById(req.params.id);
        res.json(pets);
    } 
    catch (err) 
    {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;