const sqlite3 = require('sqlite3').verbose();
    let db = new sqlite3.Database('./database.db', (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log("Verbingung zur Shortly SQLite Datenbank aufgebaut");
    });

    


<<<<<<< HEAD
    db.run("Insert INTO URL(URL, ShortenedURL) values(?, ?)",['yo', 'y'], function(err){});
    db.run("Insert INTO URL(URL, ShortenedURL) values(?, ?)",['facebook', 'fb'], function(err){
=======
    db.run("Insert INTO URL(URL, ShortenedURL) values(?, ?)",['www.heise.de', 'heise'], function(err){
>>>>>>> f9c175b89db495fc6546c2a7c248bb1deb82a011
        if(err) {
            return console.log(err.message);
        }
        console.log("Der Datensatz wurde erfolgreich eingefügt");
    });

    let sql = "SELECT URL, ShortenedURL FROM URL";

    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        rows.forEach((row) => {
            console.log(row.URL)
            console.log(row.ShortenedURL);
        });
});

db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log("Verbindung zur Datenbank geschlossen");
});