# Node Server Products - Ejercicio 12

Servidor REST API construido con Node.js y Express para gestionar productos. Utiliza Firestore como base de datos y JWT para autenticación.

## 🚀 Características

- ✅ CRUD completo de productos (Crear, Leer, Actualizar, Eliminar)
- ✅ Autenticación con JWT
- ✅ Integración con Firestore (Firebase)
- ✅ CORS configurado
- ✅ Variables de entorno con dotenv
- ✅ Manejo de errores robusto
- ✅ Listo para desplegar en Vercel

## 📋 Requisitos

- Node.js 18.x o superior
- npm
- Cuenta de Firebase

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone <tu-repositorio>
cd Node-Server-products-Ejer12
```

2. Instala las dependencias:
```bash
npm install
```

3. Crea un archivo `.env` en la raíz del proyecto:
```
PORT=3000
JWT_SECRET_KEY=tu_clave_secreta_aqui
FIREBASE_API_KEY=tu_api_key
FIREBASE_AUTH_DOMAIN=tu_auth_domain
FIREBASE_PROJECT_ID=tu_project_id
FIREBASE_STORAGE_BUCKET=tu_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
FIREBASE_APP_ID=tu_app_id
```

4. Inicia el servidor:
```bash
npm start
```

El servidor estará disponible en `http://localhost:3000`

## 📡 API Endpoints

### Productos

#### Obtener todos los productos
```bash
GET /api/products
```

#### Obtener un producto por ID
```bash
GET /api/products/:id
```

#### Crear un producto
```bash
POST /api/products/create
Content-Type: application/json

{
  "name": "Nombre del producto",
  "price": 100
}
```

#### Actualizar un producto
```bash
PUT /api/products/update/:id
Content-Type: application/json

{
  "name": "Nuevo nombre",
  "price": 150
}
```

#### Eliminar un producto
```bash
DELETE /api/products/:id
```

### Autenticación

#### Login
```bash
POST /api/login
Content-Type: application/json

{
  "email": "test@gmail.com",
  "password": "123456"
}
```

Respuesta:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

## 📁 Estructura del Proyecto

```
Node-Server-products-Ejer12/
├── src/
│   ├── controllers/
│   │   ├── auth.controllers.js
│   │   └── products.controllers.js
│   ├── models/
│   │   ├── products.model.js
│   │   └── db.json
│   ├── routes/
│   │   ├── auth.route.js
│   │   └── products.route.js
│   ├── service/
│   │   └── products.service.js
│   ├── midlewere/
│   │   └── authentication.js
│   ├── data/
│   │   ├── data.js
│   │   └── tokenTest.js
│   ├── view/
│   │   └── allProducts.html
│   └── public/
│       └── style.css
├── index.js
├── package.json
├── .env
├── .gitignore
└── vercel.json
```

## 🔐 Variables de Entorno

| Variable | Descripción |
|----------|-------------|
| PORT | Puerto del servidor (default: 3000) |
| JWT_SECRET_KEY | Clave secreta para generar tokens JWT |
| FIREBASE_API_KEY | API Key de Firebase |
| FIREBASE_AUTH_DOMAIN | Auth Domain de Firebase |
| FIREBASE_PROJECT_ID | Project ID de Firebase |
| FIREBASE_STORAGE_BUCKET | Storage Bucket de Firebase |
| FIREBASE_MESSAGING_SENDER_ID | Messaging Sender ID |
| FIREBASE_APP_ID | App ID de Firebase |

## 🚀 Despliegue en Vercel

1. Sube tu código a GitHub
2. Conecta tu repositorio en [Vercel](https://vercel.com)
3. Configura las variables de entorno en Settings → Environment Variables
4. Deploy automático al hacer push a main

## 🧪 Ejemplos de Uso

### Con cURL

Obtener todos los productos:
```bash
curl http://localhost:3000/api/products
```

Crear un producto:
```bash
curl -X POST http://localhost:3000/api/products/create \
  -H "Content-Type: application/json" \
  -d '{"name":"Producto 1","price":100}'
```

Eliminar un producto:
```bash
curl -X DELETE http://localhost:3000/api/products/1
```

### Con Postman

1. Importa los endpoints
2. Configura el header `Content-Type: application/json`
3. Usa el token JWT en `Authorization: Bearer <token>`

## 🛡️ Seguridad

- Utiliza HTTPS en producción
- Las variables sensibles se almacenan en `.env`
- JWT para proteger endpoints
- CORS configurado

## 📝 Licencia

Este proyecto está bajo la licencia MIT

## 👨‍💻 Autor

Sergio Schwarz - Curso Node JS 2025

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios mayores, abre un issue primero.

---

**Nota**: Asegúrate de no compartir tu archivo `.env` en el repositorio. Usa `.gitignore`.