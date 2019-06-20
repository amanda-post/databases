CREATE DATABASE chat;

USE chat;



-- users/messages one to many
-- room/messages one to many

CREATE TABLE IF NOT EXISTS rooms (
  id INTEGER AUTO_INCREMENT,
  name VARCHAR(20),
  PRIMARY KEY (id)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS users (
  id INTEGER AUTO_INCREMENT,
  name VARCHAR(20),
  PRIMARY KEY (id)
) ENGINE = InnoDB;

-- users/friends many to many relationship
CREATE TABLE IF NOT EXISTS friends (
  id INTEGER AUTO_INCREMENT,
  name VARCHAR(20),
  PRIMARY KEY (id)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS messages (
  id INTEGER AUTO_INCREMENT,
  message VARCHAR(300),
  user_id INTEGER,
  room_id INTEGER,
  createdAt TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(room_id) REFERENCES rooms(id)
) ENGINE = InnoDB;



/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

