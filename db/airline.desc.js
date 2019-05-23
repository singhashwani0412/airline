#!/usr/local/bin/node
// https://www.w3resource.com/node.js/nodejs-sqlite.php

var sqlite3 = require('sqlite3').verbose()
var airdb = new sqlite3.Database('../db/air.db')
airdb.each("SELECT count(*) FROM sched", function(err, result){
    console.log(result)    // and other columns, if desired
})

airdb.each("SELECT * FROM pass", function(err, row) {
    console.log(row.firstname, row.lastname)    // and other columns, if desired
})

airdb.close()
