const express = require('express');
const router = express.Router();
const connect = require("../config/sqlconfig");

router.get("/", (req, res) => {
    res.json({message: "you hit the api route"});
});

router.get("/users", (req, res) => {
    res.json({message: "you hit the users route"});
})

router.get("/movies", (req, res) => {
    connect.getConnection(function(err, connection) {
        if (err) throw err; // not connected!
       
        // Use the connection
        connection.query('SELECT * FROM tbl_movies', function (error, results) {
          // When done with the connection, release it.
          connection.release();
       
          // Handle error after the release.
          if (error) throw error;
       
          res.json(results);
        });
      });
})

router.get("/movies/:id", (req, res) => {
    connect.query(`SELECT * FROM tbl_movies WHERE movies_id=${req.params.id}`, function (error, results, fields) {
        if (error) throw error;
        console.log("Results:", results, "fields:", fields);
        res.json(results);
    });

})

module.exports = router;