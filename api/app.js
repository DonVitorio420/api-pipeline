const express = require('express');
const cors = require('cors');

const postsRouter = require('./routes/posts.routes');

const app = express();
app.use(express.json());
app.use(cors());

// healthcheck opcional
app.get('/', (_, res) => res.json({ ok: true }));

app.use('/api/posts', postsRouter);

// manejador de errores centralizado
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Error interno del servidor';
  res.status(status).json({ message });
});

module.exports = app;
