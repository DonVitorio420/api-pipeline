/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'node',
  // Buscamos tests dentro de /api/tests
  testMatch: ['**/api/tests/**/*.test.js'],
  // Limpiamos mocks entre pruebas
  clearMocks: true
};
