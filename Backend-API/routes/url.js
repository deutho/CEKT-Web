const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

// open database in memory
let db = new sqlite3.Database('./test.db', (err) => {
    if (err) {
    
      return console.log(err.message);
    }
    console.log('Connected to the Shortly SQlite database.');
  });


router.get('/', (req, res, next) => {
    var sql = "SELECT * FROM URL"
    var params = []

    db.all(sql,params, (err, rows) => {
        
        if (err) {
            res.json({
                "message":err.message,
                "error":err.message
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
        console.log(sql);
        console.log(params);
        if(err) {
            res.json({
                "message":err.message,
            }) 
        }
        else{        
            if(row==null){
                res.json({
                    "message":"error: Entry not found!",
                    })
            }
            else{
                res.json({
                "message":"success",
                "data": row,
                })
            }
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
                "message":err.message,
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
                "message":err.message
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