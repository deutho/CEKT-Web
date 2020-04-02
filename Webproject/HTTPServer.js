const http = require('http');
const { parse } = require('querystring');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        collectRequestData(req, result => {
            console.log(result);

            const sqlite3 = require('sqlite3').verbose();
            let db = new sqlite3.Database('./database.db', (err) => {
                if (err) {
                    return console.error(err.message);
                }
                console.log("Verbingung zur Shortly SQLite Datenbank aufgebaut");
            });

            db.run("Insert INTO URL(URL, ShortenedURL) values(?, ?)", [result.longURL, result.shortURL], function (err) {
                if (err) {
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

        });
    }
    else {
        res.end(`
            <!doctype html>
            <html>
            <body>
                 <h1>Shortly</h1>
                 <h3>Best Link-Shortener EU-West</h2>
                <form action="/" method="post">
                    <input type="text" name="longURL" /><br />
                    <input type="text" name="shortURL" /><br />
                    <button>Shorten</button>
                </form>
            </body>
            </html>
        `);
    }
});
server.listen(3000);

function collectRequestData(request, callback) {
    const FORM_URLENCODED = 'application/x-www-form-urlencoded';
    if (request.headers['content-type'] === FORM_URLENCODED) {
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            callback(parse(body));
        });
    }
    else {
        callback(null);
    }
}