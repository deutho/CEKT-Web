function shorten() {
    var URL = document.getElementById('URL').value;
    var shortenURL = "verkürzter Link"

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

    let sql = "INSERT INTO URL(URL, ShortenedURL) values("+URL+","+shortenURL+");";

    
}