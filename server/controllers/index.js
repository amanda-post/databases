var models = require('../models');
// var app = require('../app.js');

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      console.log('Serving request type ' + req.method + ' for url ' + req.url);
      models.messages.get((err, data) => {
        if (err) {
          console.log('this is a friggin ERROR', err);
        } else {
          console.log('this is data inside of controllers index', data)
          res.send(data);
        }
      })
    }, 
    // a function which handles posting a message to the database
    post: function (req, res) {
      console.log('Serving request type ' + req.method + ' for url ' + req.url);
      console.log('this is req.body', req.body);

      models.messages.post(req.body)
      res.end();
    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('Serving request type ' + req.method + ' for url ' + req.url);
      models.users.get((err, data) => {
        if (err) {
          console.log('this is a friggin ERROR', err);
        } else {
          console.log('this is data inside of controllers index', data)
          res.writeHead(200);
          res.send(data);
        }
      })
    },
    post: function (req, res) {

    }
  }
};

