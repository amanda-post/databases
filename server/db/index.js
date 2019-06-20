var mysql = require('mysql');

var connection = mysql.createConnection({
    user: 'student',
    password: 'student',
    database: 'chat'
});

connection.connect((err) => {
    if (err) {
        console.log('fail', err);
    } else {
        console.log('established connection with database');
    }
});


module.exports = connection;



