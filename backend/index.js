const express = require("express");
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const bodyparser = require("body-parser");
const path = require('path');
dotenv.config();
require('./models/db');

app.use('/public', express.static(path.join(__dirname,'public')));
const Register = require('./routers/Register');
const Login = require('./routers/LoginRouter');
const Image = require('./routers/ImageRouter')

dotenv.config();

app.use(bodyparser.json());
app.use(cors());
app.use(express.json());



app.use('/register', Register);
app.use('/login',Login);
app.use('/image', Image);


const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=> console.log(`Server started on port ${PORT} `));