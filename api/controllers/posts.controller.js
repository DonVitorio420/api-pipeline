// api/controllers/posts.controller.js
const svc = require('../services/posts.service');

const getAll = (req, res, next) => {
  try {
    res.json(svc.getAll());
  } catch (e) { next(e); }
};

// NUEVO
const getById = (req, res, next) => {
  try {
    const item = svc.getById(req.params.id);
    res.json(item);
  } catch (e) { next(e); }
};

const create = (req, res, next) => {
  try {
    const { title, content } = req.body || {};
    if (!title || !content) {
      const err = new Error('El título y contenido son obligatorios');
      err.status = 400;
      throw err;
    }
    const created = svc.create({ title, content });
    res.status(201).json(created);
  } catch (e) { next(e); }
};

const update = (req, res, next) => {
  try {
    const updated = svc.update(req.params.id, req.body || {});
    res.json(updated);
  } catch (e) { next(e); }
};

const remove = (req, res, next) => {
  try {
    svc.remove(req.params.id);
    res.status(204).end();
  } catch (e) { next(e); }
};

module.exports = { getAll, getById, create, update, remove }; // <-- exporta getById
