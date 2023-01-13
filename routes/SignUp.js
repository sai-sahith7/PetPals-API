const express = require('express');
const router = express.Router();
const Authentication = require('../models/Authentication');
const UserInfo = require('../models/UserInfo');

router.post('/', async (req, res) => {
    const user = await Authentication.findOne({ email: req.query.email });
    console.log(req.query.email)
    if (user)
    {
        res.status(400).json({'status':'User already exists'});
        return;
    }
    const newauth = new Authentication({email:req.query.email,password:req.query.password});
    const newuser = new UserInfo({email:req.query.email,name:req.query.name,city:req.query.city,phone:req.query.phone,address:req.query.address,gender:req.query.gender,age:req.query.age,bio:req.query.bio});
    newauth.save();
    newuser.save();
    res.status(200).json({'status':'User created'});
});


module.exports = router;

