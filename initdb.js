const sql = require('better-sqlite3');
const mockPosts = require('./dbInit/mockPosts.json');
const mockUsers = require('./dbInit/mockUsers.json');

const initDB = async () => {
  const db = sql('facealbum.db');

  // Prepare posts
  db.prepare(`
   CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY,
      comment TEXT NOT NULL,
      image TEXT NULL,
      timestamp number NOT NULL,
      user_id INTEGER NOT NULL
    )
  `).run();

  const postDBPrepare = db.prepare(`
    INSERT INTO posts VALUES (
      @id,
      @comment,
      @image,
      @timestamp,
      @user_id
      )
   `);

  for (const post of mockPosts) {
    postDBPrepare.run(post);
  }

  // Prepare users
  db.prepare(`
   CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      bio TEXT NOT NULL
    )
  `).run();

  const userDBPrepare = db.prepare(`
    INSERT INTO users VALUES (
      @id,
      @name,
      @bio
      )
   `);

  for (const user of mockUsers) {
    userDBPrepare.run(user);
  }
};

initDB();
