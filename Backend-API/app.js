//const express = require('express'); //rerouting and managing http requests
//const app = express(); //also server
//imports
const app = require('express')();
const morgan = require('morgan'); //log requests in terminal
const bodyParser = require('body-parser'); //reading body of jason

//middleware - routings
const urlRoutes = require('./routes/url');

//middleware - logger and reading json
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//defining header to prevent CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

//Routings
app.use('/url', urlRoutes);

//error handling - Routes
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

//error handling - All
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

module.exports = app;