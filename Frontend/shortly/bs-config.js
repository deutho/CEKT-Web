var historyFallback = require('connect-history-api-fallback');
//var MainpageComponent = require('./mainpage/mainpage.component')

module.exports = {    
    port: 4200,
    files: ["./src/**/*.{html,htm,css,js,ts}"],

    server:     {     "baseDir": "./dist/shortly",
    middleware: [historyFallback()]
                    //middleware: {
                     //   0: null // removes default `connect-logger` middleware
                    //} 
                    /*routes: {
                        "/test": 'app/mainpage/mainpage'
                    }*/

                    //middleware: [
                        //"/bower_components": "bower_components"
                        //path: '',
                        //component: MainpageComponent

                        //require("Routermodule")()//, // global
                        /*{
                            route: "/api", // per-route
                            handle: function (req, res, next) {
                                window.alert('asdawedawd')
                                // handle any requests at /api
                            }

                        }*/
                    //]

                /*
                    routes: {
                        historyFallback()
                        //'/test': './src/app/mainpage/mainpage.component'
                        //'/test': './src/app/testsite'
                    }*/
                   
                        
                    
                }
}