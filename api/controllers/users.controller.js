// api/controllers/users.controller.js
const svc = require('../services/users.service');

module.exports = {
  list(req, res, next) {
    try {
      res.json(svc.listUsers());
    } catch (e) {
      next(e);
    }
  },

  getById(req, res, next) {
    try {
      const id = parseInt(req.params.id);
      const user = svc.getUserById(id);
      if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
      res.json(user);
    } catch (e) {
      next(e);
    }
  },

  create(req, res, next) {
    try {
      const user = svc.createUser(req.body);
      res.status(201).json(user);
    } catch (e) {
      next(e);
    }
  },

  update(req, res, next) {
    try {
      const id = parseInt(req.params.id);
      const user = svc.updateUser(id, req.body);
      res.json(user);
    } catch (e) {
      next(e);
    }
  },

  remove(req, res, next) {
    try {
      const id = parseInt(req.params.id);
      svc.deleteUser(id);
      res.status(204).send();
    } catch (e) {
      next(e);
    }
  },
};
