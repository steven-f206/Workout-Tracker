// Server Dependencies
const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
// Database Connection Request
require('dotenv/config');
const connectDB = require("./config/connectDB.js");

//Bring in models
const db = require("./models");

// Create an instance of the express app.
let app = express();
// Added so body parser can handle post requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Host Static Files so css and js files can be retrieved
app.use(express.static(path.join(__dirname, '/public')));
// Set the port of our application, process.env.PORT lets the port be set by Heroku
let PORT = process.env.PORT || 9090;




/******************************* MiddleWare  ****************************/

app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

app.put("/api/workouts", (req, res) => {
    res.send(200);
});

app.post("/api/workouts", (req, res) => {
    res.send(200);
});

/******************************* Routes  ****************************/

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'exercise.html'));
});

    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'stats.html'));
    });






    /******************************* Connect to db  ****************************/
    connectDB()

    // Start our server so that it can begin listening to client requests.
    app.listen(PORT, function () {
        // Log (server-side) when our server has started
        console.log("Server listening on: http://localhost:" + PORT);
    });