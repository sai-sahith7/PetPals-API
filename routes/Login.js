const express = require('express');
const router = express.Router();
const Authentication = require('../models/Authentication');

router.post('/', async (req, res) => {
    try 
    {
        const user = await Authentication.findOne({ email:req.query.email });
        if (user.password === req.query.password) 
        {
            res.status(200).json({'status':'Login Successful'}); //Login successful
        } 
        else 
        {
            res.status(400).json({'status':'Incorrect Password'}); //Incorrect Password
        }
    } 
    catch (err) 
    {
        res.status(401).send({'status':'User not found'}); //User not found
    }
});


module.exports = router;