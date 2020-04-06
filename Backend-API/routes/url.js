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
                "message": "success",
                "data": rows 
            }) 
        }
    })
});

router.get('/:shortUrl', (req, res, next) => {
    var sql = "Select * FROM URL WHERE shortURL = ?"
    var params = [req.params.shortUrl]
    db.get(sql,params, (err, row) => {
        if(err) {
            res.json({
                "error":err.message,
            }) 
        }
        else{        
            res.json({
            "message":"success",
            "data":row
            })
        }
    })   
});

router.post('/', (req, res, next) => {
    var data = {
        longURL: req.body.longURL,
        shortURL: req.body.shortURL
    }
    if(data.longURL === "" || data.shortURL === ""){
        res.json({
            "error":"both URLs have to be filled in",
        }) 
    }
    var sql = 'INSERT INTO URL (shortURL, longURL) VALUES (?,?)'
    var params = [data.shortURL, data.longURL]
    db.run(sql, params, function (err, result) {
        if(err){
            res.json({
                "error":err.message,
            }) 
        }
        else{
            res.json({
            "message":"success",
            "data":data
            })
        }
    })
});

router.delete('/:shortURL', (req, res, next) => {
   db.run(
       'DELETE FROM URL WHERE shortURL = ?', 
       req.params.shortURL,
       function(err,result) {
        if(err){
            res.json({
                "error":err.message
            }) 
        }
        else{
            res.json({
                "message":"success", 
                changes: this.changes
            })
        }
       }
   )
});

module.exports = router;