var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "SELECT * FROM calandarEvents";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});