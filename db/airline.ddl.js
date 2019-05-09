// https://www.w3resource.com/node.js/nodejs-sqlite.php

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('air.db');

db.serialize(function() {
  db.run("CREATE TABLE pass (ff INT, pwd TEXT, firstname TEXT, lastname TEXT, sex TEXT, dob TIMESTAMP, govidtype TEXT, govid TEXT, email TEXT, phone TEXT, address TEXT)");
  db.run("CREATE TABLE sched (num TEXT, orig TEXT, orig_full TEXT, dest TEXT, dest_full TEXT, board TIMESTAMP, takeoff TIMESTAMP, land TIMESTAMP, dur TIMESTAMP, price FLOAT, model TEXT)");
  db.run("CREATE TABLE flt (num TEXT, date TIMESTAMP, gate TEXT, term TEXT)");
  db.run("CREATE TABLE pnr (pnr TEXT, ff TEXT, flt TEXT, svcs TEXT, notes TEXT, bpseq INT, seat TEXT, bags INT, class TEXT)");
  db.run("CREATE TABLE tkt (tkt TEXT, pnr TEXT)");



//  var stmt = db.prepare("INSERT INTO user VALUES (?,?)");
//  for (var i = 0; i < 10; i++) {
  
//  var d = new Date();
//  var n = d.toLocaleTimeString();
//  stmt.run(i, n);
//  }
//  stmt.finalize();

//  db.each("SELECT id, dt FROM user", function(err, row) {
//      console.log("User id : "+row.id, row.dt);
//  });
});

db.close();
