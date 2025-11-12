// api/services/posts.service.js
const { readDB, writeDB } = require('../db');

module.exports = {
  getAll() {
    const db = readDB();
    return [...db.posts].sort((a, b) => Number(a.id) - Number(b.id));
  },

  // NUEVO
  getById(id) {
    const db = readDB();
    const post = db.posts.find(p => Number(p.id) === Number(id));
    if (!post) {
      const e = new Error('No encontrado');
      e.status = 404;
      throw e;
    }
    return post;
  },

  create({ title, content }) {
    if (!title || !content) {
      const e = new Error('El título y contenido son obligatorios');
      e.status = 400;
      throw e;
    }
    const db = readDB();
    const nextId =
      db.posts.length ? Math.max(...db.posts.map(p => Number(p.id) || 0)) + 1 : 1;
    const post = { id: nextId, title, content };
    db.posts.push(post);
    writeDB(db);
    return post;
  },

  update(id, patch) {
    const db = readDB();
    const idx = db.posts.findIndex(p => Number(p.id) === Number(id));
    if (idx === -1) {
      const e = new Error('No encontrado');
      e.status = 404;
      throw e;
    }
    db.posts[idx] = { ...db.posts[idx], ...patch };
    writeDB(db);
    return db.posts[idx];
  },

  remove(id) {
    const db = readDB();
    const idx = db.posts.findIndex(p => Number(p.id) === Number(id));
    if (idx === -1) {
      const e = new Error('No encontrado');
      e.status = 404;
      throw e;
    }
    db.posts.splice(idx, 1);
    writeDB(db);
  }
};
