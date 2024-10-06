const express = require('express');
const app = express();
var bodyParser = require('body-parser'); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get('/', function (req, res) {
//   res.send('Hello Shekhar')
// })


require("./router") (app);

app.listen(9998, function(){
    console.log("Server is running on a port np:9998")
})