// Dependencies
const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');

// Create an instance of the express app.
var app = express();

// Added so body parser can handle post requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Host Static Files so css and js files can be retrieved
app.use(express.static(path.join(__dirname, '/public')));

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 9090;

//Middleware



//Routes

app.get("/", function (req, res) {
    res.send('We are on home!');
});


app.get("/exercise", function (req, res) {
    res.send('We are on exercise!');
});




// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
}); 