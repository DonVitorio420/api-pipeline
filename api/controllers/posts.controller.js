const service = require('../services/posts.service');

async function list(req, res, next) {
  try {
    const data = service.listPosts();
    res.json(data);
  } catch (e) { next(e); }
}

async function getById(req, res, next) {
  try {
    const id = parseInt(req.params.id);
    const post = service.getPostById(id);
    if (!post) return res.status(404).json({ message: 'Post no encontrado' });
    res.json(post);
  } catch (e) { next(e); }
}

async function create(req, res, next) {
  try {
    const { title, content } = req.body || {};
    const created = service.createPost({ title, content });
    res.status(201).json(created);
  } catch (e) { next(e); }
}

async function update(req, res, next) {
  try {
    const id = parseInt(req.params.id);
    const updated = service.updatePost(id, req.body || {});
    res.json(updated);
  } catch (e) { next(e); }
}

async function remove(req, res, next) {
  try {
    const id = parseInt(req.params.id);
    service.deletePost(id);
    res.status(204).send();
  } catch (e) { next(e); }
}

module.exports = { list, getById, create, update, remove };
