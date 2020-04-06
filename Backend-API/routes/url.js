const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

// open database in memory
let db = new sqlite3.Database('./test.db', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
  });


router.get('/', (req, res, next) => {
    var sql = "SELECT * FROM URL"
    var params = []

    db.all(sql,params, (err, rows) => {
        
        if (err) {
            res.json({
                "error":err.message,
            }) 
        }
        else {
            res.json({
                "message":"success",
                "data": rows
            }) 
        }
    })
});

router.get('/:shortUrl', (req, res, next) => {
    //sql abfrage für spezifischen entry
    res.status(200).json({
        entry: 'placeholder für entry'
    });
});

router.post('/', (req, res, next) => {
    //sql dingsi url objekt is nur als erinnerung für syntax wie man sachen aus json zieht
    const url = {
        longURL: req.body.longURL,
        shortURL: req.body.shortURL
    }
    res.status(201).json({
        message: 'successfully inserted into DB',
        createdURL: url
    });
});

router.delete('/:shortURL', (req, res, next) => {
    //sql dingsi
    res.status(200).json({
        message: 'Deleted URL!'
    });
});

router.patch('/:shortURL', (req, res, next) => {
    //sql dingsi
    res.status(200).json({
        message: 'Updated URL successfully!'
    });
});

module.exports = router;