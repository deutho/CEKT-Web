const http = require('http');
const app = require('./app');
const sqlite3 = require('sqlite3').verbose();

const port = process.env.PORT || 3000;

const server = http.createServer(app);


//fire db close funtion
process.on('SIGINT', function() {
    console.log('Closed the database connection.');
    server.close();
});

server.on('close', function() {
    //closing db connection
    db.close((err) => {
        if (err) {
            console.log(err.message)
          return console.error(err.message);
        }
        console.log('Closed the database connection.');
    });    
});

server.listen(port);
