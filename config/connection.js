// Set up database connection
var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'ddbhi645',
        database: 'burgers_db'
    });
};


connection.connect(function(err) {
    console.log('connected as id ' + connection.threadId);
});

// export the connection back to orm
module.exports = connection;