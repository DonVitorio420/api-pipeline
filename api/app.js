const express = require('express');
const cors = require('cors');

const postsRouter = require('./routes/posts.routes');
const usersRouter = require('./routes/users.routes');

const app = express();
app.use(express.json());
app.use(cors());

// healthcheck
app.get('/', (_, res) => res.json({ ok: true, service: 'api-pipeline' }));

app.use('/api/posts', postsRouter);
app.use('/api/users', usersRouter);

// manejador de errores con log visible en tests
app.use((err, req, res, next) => {
  console.error('ERR:', err.stack || err);
  const status = err.status || 500;
  const message = err.message || 'Error interno del servidor';
  res.status(status).json({ message });
});

module.exports = app;
