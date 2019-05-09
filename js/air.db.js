        function airdb(stmt){
            var sqlite3 = require('sqlite3').verbose();
            var db = new sqlite3.Database('db/air.db');
            db.serialize(function() { db.run(stmt); });
            db.close();
        }
