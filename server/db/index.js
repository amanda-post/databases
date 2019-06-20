var mysql = require('mysql');
var app = require('../app.js');

var connection = mysql.createConnection({
    user: 'root',
    database: 'chat'
});

connection.connect(() => {console.log('established connection with database')});

module.exports = connection;

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


