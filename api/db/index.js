// api/db/index.js
const fs = require('fs');
const path = require('path');

const DB_PATH = path.join(__dirname, 'db.json');

function readDB() {
  const raw = fs.existsSync(DB_PATH) ? fs.readFileSync(DB_PATH, 'utf8') : '{}';
  return raw ? JSON.parse(raw) : {};
}

function writeDB(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

module.exports = { readDB, writeDB, DB_PATH };
