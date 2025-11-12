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
git clone https://github.com/DonVitorio420/api-pipeline.git

Entrar al directorio del proyecto:
cd API-PIPELINE

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
