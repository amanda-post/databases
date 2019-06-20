var db = require('../db');

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (callback) {
      var qry = 'SELECT message FROM messages'; // do we want this to be * instead of message?
      db.query(qry, (err, results) => {
        if (err) {
          console.log('err from query to get messages', err);
        } else {
          callback(results);
        }
      });
    }, 

    // a function which can be used to insert a message into the database
    post: function (inputMessage, inputUser, inputRoom) {
      var qry = `INSERT INTO messages(message, user_id, room_id) 
        VALUES(${inputMessage}, ${inputUser}, ${inputRoom})`;
      db.query(qry, (err) => {
        if (err) {
          console.log('err from query to post message', err);
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

