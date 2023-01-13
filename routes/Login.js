const express = require('express');
const router = express.Router();
const Authentication = require('../models/Authentication');

router.get('/', async (req, res) => {
    try 
    {
        const user = await Authentication.findOne({ email:req.query.email });
        if (user.password === req.query.password) 
        {
            res.status(200).send('Login Successful'); //Login successful
        } 
        else 
        {
            res.status(400).send('Invalid Credentials'); //Incorrect Password
        }
    } 
    catch (err) 
    {
        res.status(401).send('User not Found'); //User not found
    }
});


module.exports = router;