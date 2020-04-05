// Dependencies
const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv/config');

// Create an instance of the express app.
let app = express();
const mongoose = require('mongoose');

// Added so body parser can handle post requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Host Static Files so css and js files can be retrieved
app.use(express.static(path.join(__dirname, '/public')));
// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 9090;

/******************************* Routes  ****************************/
app.get("/", (req, res) => {
    res.send("hi");
});

app.get("/exercise", (req, res) => {
    res.send("hi");
});

app.get("/api/workouts", (req, res) => {
    res.send("hi");
});


/******************************* Connect to db  ****************************/
mongoose.connect(
    'process.env.DB_CONNECTION',
    { useUnifiedTopology: true, useNewUrlParser: true }, () =>
    console.log("Connected to DB")
);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});