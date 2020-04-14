var historyFallback = require('connect-history-api-fallback');
//var MainpageComponent = require('./mainpage/mainpage.component')

module.exports = {    
    port: 80,
    files: ["./src/**/*.{html,htm,css,js,ts}"],
    notify: false,
    server:     {   
                    "baseDir": "./dist/shortly",
                    middleware: [historyFallback()]                  
                }
}