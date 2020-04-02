
module.exports = function shorten() {
    var URL = document.getElementById('URL').value;
    var shortenURL = 'verkürzter Link';
    console.log("hallo");

    document.getElementById("shorten").innerHTML = "Verkürzter Link: " + shortenURL;
    storeInDatabase(URL, shortenURl);
    storeInDatabase(URL, shortenURL);

return
}


module.exports = function storeInDatabase(URL, shortenURL) {
        
    const sqlite3 = require('sqlite3').verbose();
    let db = new sqlite3.Database('./database.db', (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log("Verbingung zur Shortly SQLite Datenbank aufgebaut");
    });

    db.run("Insert INTO URL(URL, ShortenedURL) values(?, ?)",[URL, shortenURL], function(err){
        if(err) {
            return console.log(err.message);
        }
        console.log("Der Datensatz wurde erfolgreich eingefügt");
    });

db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log("Verbindung zur Datenbank geschlossen");
});

return
    
}