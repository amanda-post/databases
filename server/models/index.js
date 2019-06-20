var db = require('../db');

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (callback) {
      var qry = 'SELECT * FROM messages'; 
      db.query(qry, (err, results) => {
        if (err) {
          console.log('err from query to get messages', err);
        } else {
          console.log('we are inside models.get aaaaaaaaaaaaaa', results);
          callback(null, results);
        }
      });
    }, 

    post: function (input) {
      var qryRooms = `INSERT INTO rooms (name) VALUES("${input.inputRoom}") ON DUPLICATE KEY UPDATE id=id`;
      var qryUsers = `INSERT INTO users (name) VALUES("${input.inputUser}") ON DUPLICATE KEY UPDATE id=id`;
      var qryMessages = `INSERT INTO messages(message, user_id, room_id) VALUES("${input.inputMessage}", (SELECT id FROM rooms WHERE name = "${input.inputRoom}"), (SELECT id FROM users WHERE name = "${input.inputUser}") )`;
      db.query(qryRooms, (err) => {
        if (err) {
          console.log('err from query to post rooms', err);
        } else {
          db.query(qryUsers, (err) => {
            if (err) {
              console.log('err from query to post user', err);
            } else {
              db.query(qryMessages, (err) => {
                if (err) {
                  console.log('err from query to post message', err);
                }
              })
            }
          })
        }
      });
    } 
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var qry = 'SELECT name FROM users';
      db.query(qry, (err, results) => {
        if (err) {
          console.log('err from query to get users', err);
        } else {
          callback(results);
        }
      });
    },

    post: function (inputName) {
      var qry = `INSERT INTO users(name) VALUES(${inputName})`;
      db.query(qry, (err) => {
        if (err) {
          console.log('err from query to post user', err);
        }
      });
    }
  }
};

