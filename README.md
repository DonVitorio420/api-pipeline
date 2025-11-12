Evolución de una API REST — De Prototipo a Producción
📖 Introducción

Este proyecto consiste en la evolución de una API REST creada con Express.js, pasando de un prototipo inicial a una aplicación modular, escalable, probada y lista para producción.
La API permite gestionar Usuarios y Posts, estableciendo una relación entre ambos.

⚙️ Instalación y Ejecución
🔧 Requisitos Previos

Node.js (v18 o superior)

npm (v9 o superior)

🪜 Pasos de instalación

Clonar el repositorio:
git clone https://github.com/tu-usuario/tu-repo.git

Entrar al directorio del proyecto:
cd tu-repo

Instalar dependencias:
npm install

Ejecutar en modo desarrollo:
npm run dev

La API estará disponible en:
http://localhost:3000

🧪 Pruebas Automatizadas

Ejecuta todas las pruebas unitarias e integrales con:
npm test

Las pruebas unitarias validan la lógica de negocio.

Las pruebas de integración verifican el correcto funcionamiento de los endpoints mediante Supertest.

🚀 Endpoints de la API
🧍‍♂️ Usuarios (/api/users)
Método	Ruta	Descripción	Body (Ejemplo JSON)	Respuesta Exitosa (Ejemplo)
GET	/api/users	Obtiene todos los usuarios	—	[ { "id": 1, "name": "Kevin", "email": "kevin@mail.com" } ]
GET	/api/users/:id	Obtiene un usuario por su ID	—	{ "id": 1, "name": "Kevin", "email": "kevin@mail.com" }
POST	/api/users	Crea un nuevo usuario	{ "name": "Kevin", "email": "kevin@mail.com", "password": "1234" }	{ "id": 2, "name": "Kevin", "email": "kevin@mail.com" }
PUT	/api/users/:id	Actualiza un usuario	{ "name": "Kevin P.", "email": "kevinp@mail.com" }	{ "id": 2, "name": "Kevin P.", "email": "kevinp@mail.com" }
DELETE	/api/users/:id	Elimina un usuario	—	{ "message": "Usuario eliminado correctamente" }
📝 Posts (/api/posts)
Método	Ruta	Descripción	Body (Ejemplo JSON)	Respuesta Exitosa (Ejemplo)
GET	/api/posts	Lista todos los posts	—	[ { "id": 1, "title": "Primer Post", "content": "Contenido...", "userId": 1 } ]
GET	/api/posts/:id	Obtiene un post específico	—	{ "id": 1, "title": "Primer Post", "content": "Contenido...", "userId": 1 }
POST	/api/posts	Crea un nuevo post	{ "title": "Mi Post", "content": "Texto del post", "userId": 1 }	{ "id": 2, "title": "Mi Post", "content": "Texto del post", "userId": 1 }
PUT	/api/posts/:id	Actualiza un post	{ "title": "Nuevo título", "content": "Actualizado" }	{ "id": 2, "title": "Nuevo título", "content": "Actualizado", "userId": 1 }
DELETE	/api/posts/:id	Elimina un post	—	{ "message": "Post eliminado correctamente" }
📚 Historias de Usuario
🧩 Historia de Usuario 1: Registro de Nuevos Usuarios

Como un visitante de la plataforma,
Quiero poder registrarme creando una cuenta con mi nombre, email y contraseña,
Para convertirme en autor y crear mis propios posts.

Criterios de aceptación:

✅ Si envío nombre, email válido y contraseña → responde 201 Created y guarda el usuario.

⚠️ Si intento registrarme con un email existente → responde 409 Conflict.

❌ Si omito campos obligatorios → responde 400 Bad Request.

🧩 Historia de Usuario 2: Creación de Posts

Como usuario registrado,
Quiero crear un post con título y contenido,
Para compartir mis ideas.

Criterios de aceptación:

✅ Si envío userId, title y content válidos → responde 201 Created.

⚠️ Si el userId no existe → responde 404 Not Found.

❌ Si faltan campos → responde 400 Bad Request.

🧩 Historia de Usuario 3: Inicio de Sesión

Como usuario registrado,
Quiero iniciar sesión con mi correo y contraseña,
Para acceder a mis publicaciones.

Criterios de aceptación:

✅ Si las credenciales son correctas → 200 OK.

⚠️ Si el email no existe → 404 Not Found.

❌ Si la contraseña es incorrecta → 401 Unauthorized.

🧩 Historia de Usuario 4: Listar Posts de un Usuario

Como usuario autenticado,
Quiero ver todos los posts que he creado,
Para administrarlos fácilmente.

Criterios de aceptación:

✅ Si envío un userId válido → responde 200 OK con todos los posts.

⚠️ Si el usuario no tiene posts → lista vacía.

❌ Si el userId no existe → 404 Not Found.

🧩 Historia de Usuario 5: Actualización de Datos

Como usuario,
Quiero actualizar mi nombre o correo,
Para mantener mi información actualizada.

Criterios de aceptación:

✅ Si envío datos válidos → 200 OK.

⚠️ Si el nuevo email ya está en uso → 409 Conflict.

❌ Si el usuario no existe → 404 Not Found.

🧩 Historia de Usuario 6: Eliminación de un Post

Como autor,
Quiero eliminar un post,
Para retirar contenido que ya no deseo mostrar.

Criterios de aceptación:

✅ Si el postId existe → 200 OK.

❌ Si el postId no existe → 404 Not Found.

❌ Si el usuario no es el autor → 403 Forbidden.

🧩 Historia de Usuario 7: Validación de Campos

Como desarrollador o tester,
Quiero que la API valide campos requeridos,
Para evitar errores en la base de datos.

Criterios de aceptación:

✅ Si falta un campo obligatorio → 400 Bad Request.

✅ Si los tipos de datos son inválidos → 422 Unprocessable Entity.

✅ Todos los errores deben tener un mensaje JSON claro.


🛠️ Tecnologías Utilizadas

Node.js y Express.js — para la API REST

Jest y Supertest — para pruebas

GitHub Actions — para CI/CD

Render / Fly.io — para despliegue

JSON (db.json) — base de datos local

Proyecto desarrollado por:
🧑‍💻 Autores y Créditos

👨‍💻 Kevin Fernando Palacios Palacios

👨‍💻 Víctor Pineda
