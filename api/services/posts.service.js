const { readDB, writeDB } = require('../db');

function listPosts() {
  const db = readDB();
  return db.posts;
}

function getPostById(id) {
  const db = readDB();
  return db.posts.find(p => p.id === id) || null;
}

function createPost({ title, content }) {
  if (!title || !content) {
    const err = new Error('El título y contenido son obligatorios');
    err.status = 400;
    throw err;
  }
  const db = readDB();
  const nextId = db.posts.length > 0 ? Math.max(...db.posts.map(p => p.id)) + 1 : 1;
  const newPost = { id: nextId, title, content };
  db.posts.push(newPost);
  writeDB(db);
  return newPost;
}

function updatePost(id, payload) {
  const db = readDB();
  const idx = db.posts.findIndex(p => p.id === id);
  if (idx === -1) {
    const err = new Error('Post no encontrado');
    err.status = 404;
    throw err;
  }
  const merged = { ...db.posts[idx], ...payload };
  db.posts[idx] = merged;
  writeDB(db);
  return merged;
}

function deletePost(id) {
  const db = readDB();
  const before = db.posts.length;
  db.posts = db.posts.filter(p => p.id !== id);
  if (db.posts.length === before) {
    const err = new Error('Post no encontrado');
    err.status = 404;
    throw err;
  }
  writeDB(db);
}

module.exports = {
  listPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
