const mogoose = require('mongoose');
const express = require('express');
const cors	= require('cors');
const PORT = 3333;
const test = require('./routes/test.route.js')
let app = express();
app.use("/test",test)
app.use(cors());
app.listen(PORT, function(){
    console.log("App listening in port " + PORT);
});
