const sqlite3 = require('sqlite3').verbose();
    let db = new sqlite3.Database('./database.db', (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log("Verbingung zur Shortly SQLite Datenbank aufgebaut");
    });

    


    db.run("Insert INTO URL(URL, ShortenedURL) values(?, ?)",['www.heise.de', 'heise'], function(err){
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