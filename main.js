const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const LoginRoute = require('./routes/Login');
const SignUpRoute = require('./routes/SignUp');
const HomeRoute = require('./routes/Home');

app.use('/login',LoginRoute);
app.use('/signup',SignUpRoute);
app.use('/home',HomeRoute);

app.get('/',(req,res) => {
    res.send('API is up and running. Jo krna hei kro');
})

mongoose.connect(
    'mongodb+srv://petpals:jgs5000007@cluster0.1i9mvkw.mongodb.net/?retryWrites=true&w=majority',() => console.log('Connected!!')
  );

const PORT = 5000;
app.listen(process.env.PORT || PORT,()=>console.log("run server " + PORT));