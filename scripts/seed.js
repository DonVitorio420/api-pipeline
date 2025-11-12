// scripts/seed.js
const { writeFileSync, mkdirSync } = require('fs');
const { join } = require('path');

const DB_PATH = join(__dirname, '..', 'api', 'db', 'db.json');
mkdirSync(join(__dirname, '..', 'api', 'db'), { recursive: true });

const data = {
  posts: [
    { id: 1, title: 'Uno', content: 'Contenido' },
    { id: 2, title: 'Dos editado', content: 'Más contenido.' }
  ],
  users: []
};

writeFileSync(DB_PATH, JSON.stringify(data, null, 2), { encoding: 'utf8' });
console.log('✅ Base de datos creada en', DB_PATH);
