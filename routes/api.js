const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.json({message: "you hit the api route"});
});

router.get("/users", (req, res) => {
    res.json({message: "you hit the users route"});
})

router.get("/movies/:id", (req, res) => {
    res.json({ message: "all movies route", movie: req.params.id});
})

module.exports = router;