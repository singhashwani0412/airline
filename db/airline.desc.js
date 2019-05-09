// https://www.w3resource.com/node.js/nodejs-sqlite.php

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('air.db');

db.each("SELECT * FROM pass", function(err, row) {
    console.log(row.firstname, row.lastname);    // and other columns, if desired
});

db.close();
