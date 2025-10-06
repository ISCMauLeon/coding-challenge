import sql from 'better-sqlite3';
const db = sql('facealbum.db');

export async function getUser(userId) {
  await new Promise((resolve) => { setTimeout(resolve, 1) }); // Function to delay data to simulate a call
  const query = db.prepare(`
    SELECT *
    FROM users
    WHERE users.id = ${userId}`);
    return query.get();
}