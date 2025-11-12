// api/tests/posts.test.js
const fs = require('fs');
const path = require('path');
const request = require('supertest');
const app = require('../app');
const { readDB, DB_PATH } = require('../db');

// --- Semilla fija para todos los tests ---
const SEED = {
  posts: [
    { id: 1, title: 'Uno', content: 'A' },
    { id: 2, title: 'Dos', content: 'B' }
  ],
  users: []
};

// --- Antes de cada test: restaurar el estado inicial ---
beforeEach(() => {
  fs.writeFileSync(DB_PATH, JSON.stringify(SEED, null, 2), 'utf8');
});

// --- Limpieza final (opcional) ---
afterAll(() => {
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(SEED, null, 2), 'utf8');
  } catch {}
});

describe('POSTS CRUD (integración)', () => {

  test('GET /api/posts devuelve todos', async () => {
    const res = await request(app).get('/api/posts').expect(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body).toHaveLength(2);
    expect(res.body[0]).toMatchObject({ id: 1, title: 'Uno' });
  });

  test('POST /api/posts crea un post válido', async () => {
    const res = await request(app)
      .post('/api/posts')
      .send({ title: 'Nuevo', content: 'Contenido' })
      .expect(201);

    expect(res.body).toMatchObject({ title: 'Nuevo', content: 'Contenido' });

    const db = readDB();
    const created = db.posts.find(p => p.title === 'Nuevo');
    expect(created).toBeTruthy();
  });

  test('POST /api/posts con datos inválidos → 400', async () => {
    const res = await request(app)
      .post('/api/posts')
      .send({ title: '' }) // falta content
      .expect(400);

    expect(res.body).toHaveProperty('message');
  });

  test('PUT /api/posts/:id actualiza', async () => {
    const res = await request(app)
      .put('/api/posts/2')
      .send({ title: 'Dos editado' })
      .expect(200);

    expect(res.body).toMatchObject({ id: 2, title: 'Dos editado' });
  });

  test('DELETE /api/posts/:id elimina', async () => {
    await request(app).delete('/api/posts/1').expect(204);
    const db = readDB();
    expect(db.posts.find(p => p.id === 1)).toBeUndefined();
  });

});
