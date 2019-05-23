#!/usr/local/bin/node
// https://www.w3resource.com/node.js/nodejs-sqlite.php

var sqlite3 = require('sqlite3').verbose();
var airdb = new sqlite3.Database('../db/air.db');

airdb.serialize(function() {
  airdb.run("CREATE TABLE pass (ff INT, pwd TEXT, firstname TEXT, lastname TEXT, sex TEXT, dob TIMESTAMP, govidtype TEXT, govid TEXT, email TEXT, phone TEXT, address TEXT)");
  airdb.run("CREATE TABLE sched (num TEXT, orig TEXT, orig_full TEXT, dest TEXT, dest_full TEXT, takeoff TIMESTAMP, land TIMESTAMP, dur TIMESTAMP, price FLOAT, usd FLOAT, model TEXT, orig_tz TEXT, dest_tz TEXT, dow TEXT, board INT, t INT, l INT, stops INT)");
  airdb.run("CREATE TABLE flt (num TEXT, date TIMESTAMP, gate TEXT, term TEXT)");
  airdb.run("CREATE TABLE pnr (pnr TEXT, ff TEXT, flt TEXT, svcs TEXT, notes TEXT, bpseq INT, seat TEXT, bags INT, class TEXT)");
  airdb.run("CREATE TABLE tkt (tkt TEXT, pnr TEXT)");



//  var stmt = airdb.prepare("INSERT INTO user VALUES (?,?)");
//  for (var i = 0; i < 10; i++) {
  
//  var d = new Date();
//  var n = d.toLocaleTimeString();
//  stmt.run(i, n);
//  }
//  stmt.finalize();

//  airdb.each("SELECT id, dt FROM user", function(err, row) {
//      console.log("User id : "+row.id, row.dt);
//  });
});

airdb.close();
