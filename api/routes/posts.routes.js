// api/routes/posts.routes.js
const express = require('express');
const ctrl = require('../controllers/posts.controller');

const router = express.Router();

router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getById);   // <- ahora sí existe en el controlador
router.post('/', ctrl.create);
router.put('/:id', ctrl.update);
router.delete('/:id', ctrl.remove);

module.exports = router;
