const mogoose = require('mongoose');
const express = require('express');
const cors	= require('cors');
const PORT = 3333;
const spotify = require('./middlewares/spotifyController')
const session = require('./routes/session.router.js')
const test = require('./routes/test.route.js')
const bodyParser = require("body-parser");
let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/test",test)
app.use("/session", session)
app.use(cors());
app.listen(PORT, function(){
    console.log("App listening in port " + PORT);
});
