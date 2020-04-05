let express = require('express');
let router = express.Router();

//Routes
router.get("/", (req, res) => {
    res.send("hi");
});

router.get("/exercise", (req, res) => {
    res.send("hi");
});

router.get("/api/workouts", (req, res) => {
    res.send("hi");
});


module.exports = router; 