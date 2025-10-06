import sql from 'better-sqlite3';
const db = sql('facealbum.db');

export async function getRandomPosts() {
  // Create
  const randomEntries = Array.from({ length: 10 }, () => Math.floor(Math.random() * 1000));
  await new Promise((resolve) => { setTimeout(resolve, 1) }); // Function to delay data to simulate a call
  const query = db.prepare(`
    SELECT *, posts.id as post_id
    FROM posts
    JOIN users
    ON posts.user_id = users.id
    WHERE posts.id IN (${randomEntries.map(() => '?').join(',')})`);
    return query.all(...randomEntries);
}