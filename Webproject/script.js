function shorten() {
    var URL = document.getElementById('URL').value;
    var shortenURL = "verkürzter Link"
    console.log("hallo");

    document.getElementById("shorten").innerHTML = "Verkürzter Link: " + shortenURL;
    storeInDatabase(URL, shortenURL);

}


function storeInDatabase(URL, shortenURL) {
    const sqlite3 = require('sqlite3').verbose();
    let db = new sqlite3.Database(':memory:', (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log("Verbingung zur in-memory SQLite Datenbank aufgebaut");
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

    
}