// api/db/index.js
const fs = require('fs');
const path = require('path');

const DB_PATH = path.join(__dirname, 'db.json');

function readDB() {
  try {
    const raw = fs.readFileSync(DB_PATH, 'utf8');
    const parsed = raw ? JSON.parse(raw) : {};
    // Garantiza estructuras mínimas
    return {
      posts: Array.isArray(parsed.posts) ? parsed.posts : [],
      users: Array.isArray(parsed.users) ? parsed.users : [],
    };
  } catch (err) {
    // Si no existe o está corrupto, inicializa
    const seed = { posts: [], users: [] };
    fs.writeFileSync(DB_PATH, JSON.stringify(seed, null, 2));
    return seed;
  }
}

function writeDB(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
  return true;
}

module.exports = { readDB, writeDB, DB_PATH };
