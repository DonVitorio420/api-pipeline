// api/services/users.service.js
// Servicio para manejar la lógica de negocio de los usuarios

const dbmod = require('../db/index.js'); // Importa directamente el módulo de la base de datos
console.log('DBG users.service keys:', Object.keys(dbmod)); // Para depurar
const { readDB, writeDB } = dbmod; // Extrae las funciones
console.log('DBG typeof readDB:', typeof readDB); // Verifica si es una función

// Obtener todos los usuarios
function listUsers() {
  const db = readDB();
  return db.users || [];
}

// Obtener usuario por ID
function getUserById(id) {
  const db = readDB();
  return (db.users || []).find(u => u.id === id) || null;
}

// Crear nuevo usuario
function createUser({ name, email, password }) {
  if (!name || !email || !password) {
    const err = new Error('Campos requeridos: name, email, password');
    err.status = 400;
    throw err;
  }

  const db = readDB();
  if (!db.users) db.users = [];

  // Verificar duplicado
  if (db.users.some(u => u.email === email)) {
    const err = new Error('El email ya está en uso');
    err.status = 409;
    throw err;
  }

  // Crear nuevo usuario
  const id =
    db.users.length > 0 ? Math.max(...db.users.map(u => u.id)) + 1 : 1;
  const user = { id, name, email, password };

  db.users.push(user);
  writeDB(db);
  return user;
}

// Actualizar usuario
function updateUser(id, payload) {
  const db = readDB();
  const idx = (db.users || []).findIndex(u => u.id === id);
  if (idx === -1) {
    const err = new Error('Usuario no encontrado');
    err.status = 404;
    throw err;
  }
  db.users[idx] = { ...db.users[idx], ...payload };
  writeDB(db);
  return db.users[idx];
}

// Eliminar usuario
function deleteUser(id) {
  const db = readDB();
  const before = (db.users || []).length;
  db.users = (db.users || []).filter(u => u.id !== id);
  if (db.users.length === before) {
    const err = new Error('Usuario no encontrado');
    err.status = 404;
    throw err;
  }
  writeDB(db);
  return true;
}

module.exports = {
  listUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
