Integrantes:
Aarón Edgardo García Romero -20230406      
Sofía Verónica Palacios Lara -20230106       
Nelson Alexander Sandoval Aguilar -20200300     

Dependencias:
React-Router: Usado para la navegación entre pantallas, especificamente se usaron "Router, Routes, Route y Link"
React: La dependencia principal para crear interfaces de usuario.

¿Cómo iniciar la aplicación?
Paso 1: Abrir el proyecto en visual studio y agregar archivo env
Paso 2: Abrir la terminal, ya sea con ctrl + ñ o de manera manual
Paso 3: Inicializar el backend, es decir primero poner "cd ./backend" y luego ejecutar "node index.js"
Paso 4: Inicializar otra terminal y ejecutar el frontend, es decir primero ejecutar "cd ./frontend", luego "cd ./ecoflasky-proyect" y al estar adentro ejecutar "npm i" para instalar las dependencias
Paso 5: En la misma terminal del frontend ejecutar el comando "npm run dev"

# 🌿 Ecoflasky - Tienda Online de Termos Ecológicos
Una plataforma de comercio electrónico especializada en termos ecológicos con personalización de diseños y sistema de gestión administrativa integral.

## 📋 Tabla de Contenidos

- [Descripción](#descripción)
- [Características Principales](#características-principales)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [API Endpoints](#api-endpoints)
- [Capturas de Pantalla](#capturas-de-pantalla)


## 🎯 Descripción

**Ecoflasky** es una innovadora tienda en línea que se especializa en la venta de termos fabricados con materiales duraderos y ecológicos. La plataforma permite a los clientes no solo adquirir productos de alta calidad, sino también personalizar sus termos con diseños únicos o elegir entre una amplia gama de diseños prediseñados.

### Problemas que Resuelve

- **Para Administradores**: Centraliza y organiza toda la información administrativa (empleados, distribuidores, proveedores) en una sola plataforma
- **Para Clientes**: Ofrece termos ecológicos de calidad premium con la posibilidad de personalización completa
- **Para el Medio Ambiente**: Promueve el uso de productos reutilizables y sostenibles

## ✨ Características Principales

### 🛍️ Para Clientes
- **Página de Inicio**: Carrusel principal con productos destacados
- **Catálogo de Productos**: Navegación por diferentes categorías de termos
  - **Termos Regulares**: Modelos estándar de alta calidad
  - **Termos Económicos**: Opciones accesibles sin comprometer calidad
  - **Termos Diseñados**: Modelos con diseños exclusivos predefinidos
- **Personalización de Diseños**: Subida de imágenes personales
- **Sistema de Favoritos**: Guarda tus productos preferidos
- **Métodos de Pago**: Tarjetas, PayPal, transferencias bancarias
- **Sección "Acerca de Nosotros"**: Información sobre la empresa
- **Contacto**: Formulario de comunicación directa
- **Términos y Condiciones**: Políticas de uso y privacidad

### 👨‍💼 Para Administradores
- **Gestión de Empleados**: Creación y modificación de personal
- **Control de Distribuidores**: Administración de socios comerciales  
- **Gestión de Proveedores**: Catálogo y seguimiento de suministros
- **Gestión de Productos**: Registro y administración del inventario
- **Dashboard de Bienvenida**: Panel principal administrativo

### 🎨 Sistema de Personalización
- **Subida de Imágenes**: Posibilidad de usar imágenes personales
- **Plantillas Temáticas**: Diseños base para diferentes ocasiones

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React**: Biblioteca principal de interfaz de usuario
- **Tailwind CSS**: Framework de estilos utilitarios
- **React Router**: Navegación entre páginas
- **Fetch API**: Comunicación con el servidor
- **React Hook Form**: Gestión de formularios

### Backend
- **Node.js**: Runtime de JavaScript
- **Express.js**: Framework web minimalista
- **MongoDB**: Base de datos NoSQL
- **Mongoose**: ODM para MongoDB
- **JWT**: Autenticación basada en tokens
- **Bcrypt**: Encriptación de contraseñas
- **Nodemailer**: Envío de correos electrónicos

### Herramientas de Desarrollo
- **Postman**: Testing de APIs
- **Git**: Control de versiones

## 🚀 Instalación

### Prerrequisitos
- Node.js (v18.0 o superior)
- MongoDB (v5.0 o superior)
- npm

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/SofVer10/EcoFlasky.git
cd EcoFlasky
```

2. **Instalar dependencias del backend**
```bash
cd backend
npm install
```

3. **Instalar dependencias del frontend**
```bash
cd ../frontend
npm install
```

4. **Configurar variables de entorno**
```bash
# En la carpeta backend, crear archivo .env
cp .env.example .env
```

Configura las siguientes variables en `.env`:
```env
PORT=4000
MONGODB_URI=mongodb://localhost:27017/ecoflasky
JWT_SECRET=tu_secret_key_aqui
CLOUDINARY_CLOUD_NAME=tu_cloudinary_name
CLOUDINARY_API_KEY=tu_cloudinary_key
CLOUDINARY_API_SECRET=tu_cloudinary_secret
```

5. **Iniciar MongoDB**
```bash
mongod
```

6. **Ejecutar el proyecto**

Terminal 1 (Backend):
```bash
cd backend
npm run dev
```

Terminal 2 (Frontend):
```bash
cd frontend
npm start
```

La aplicación estará disponible en `http://localhost:4000`

## 📖 Uso

### Para Clientes

1. **Registro/Login**: Crear cuenta o iniciar sesión
2. **Explorar Catálogo**: Navegar por los diferentes tipos de termos
4. **Agregar al Carrito**: Seleccionar productos y añadir al carrito
5. **Realizar Pago**: Completar la compra con el método de pago preferido
6. **Seguir Pedido**: Rastrear el estado del pedido hasta la entrega

### Para Administradores

1. **Acceso Admin**: Login con credenciales de administrador
2. **Dashboard**: Bienvenida y accesos rápidos
3. **Gestión de Personal**: Administrar empleados, distribuidores y proveedores
4. **Control de Inventario**: Monitorear stock y productos

## 📁 Estructura del Proyecto

```
ecoflasky/
├── frontend/                 # Aplicación React
│   ├── public/              # Archivos públicos
│   ├── src/
│   │   ├── components/      # Componentes reutilizables
│   │   │   ├── Nav.jsx     # Navegación para clientes
│   │   │   ├── NavAdmin.jsx # Navegación para administradores
│   │   │   └── Footer.jsx  # Pie de página
│   │   ├── pages/          # Páginas de la aplicación
│   │   │   ├── inicio.jsx  # Página principal
│   │   │   ├── products.jsx # Catálogo de productos
│   │   │   ├── regular.jsx # Termos regulares
│   │   │   ├── economico.jsx # Termos económicos
│   │   │   ├── disenado.jsx # Termos diseñados
│   │   │   ├── favoritos.jsx # Lista de favoritos
│   │   │   ├── contacts.jsx # Página de contacto
│   │   │   ├── acercadenosotros.jsx # Acerca de nosotros
│   │   │   ├── login.jsx   # Inicio de sesión
│   │   │   ├── register.jsx # Registro de usuario
│   │   │   ├── contrasena.jsx # Gestión de contraseña
│   │   │   ├── terminosycondiciones.jsx # Términos y condiciones
│   │   │   └── admin/      # Páginas administrativas
│   │   │       ├── bienvenidaadmin.jsx # Dashboard admin
│   │   │       ├── agregarEmpleado.jsx # Gestión empleados
│   │   │       ├── agregarDistruibidor.jsx # Gestión distribuidores
│   │   │       ├── agergarProveedor.jsx # Gestión proveedores
│   │   │       └── registrarProductos.jsx # Gestión productos
│   │   ├── context/        # Context APIs
│   │   │   └── AuthContext.jsx # Contexto de autenticación
│   │   ├── hooks/          # Custom hooks
│   │   ├── utils/          # Utilidades
│   │   └── styles/         # Estilos globales
│   └── package.json
├── backend/                 # Servidor Node.js
│   ├── controllers/        # Controladores de rutas
│   ├── models/            # Modelos de MongoDB
│   ├── routes/            # Definición de rutas
│   ├── middleware/        # Middlewares personalizados
│   ├── utils/             # Utilidades del servidor
│   ├── uploads/           # Archivos subidos
│   └── server.js          # Punto de entrada del servidor
├── docs/                   # Documentación
├── README.md
└── package.json
```

## 🔌 API Endpoints

### Autenticación
- `POST /api/auth/register` - Registro de usuario
- `POST /api/auth/login` - Inicio de sesión
- `POST /api/auth/logout` - Cerrar sesión

### Productos
- `GET /api/products` - Obtener todos los productos
- `GET /api/products/:id` - Obtener producto específico
- `POST /api/products` - Crear nuevo producto (Admin)
- `PUT /api/products/:id` - Actualizar producto (Admin)
- `DELETE /api/products/:id` - Eliminar producto (Admin)


### Administración
- `GET /api/admin/employees` - Gestionar empleados
- `POST /api/admin/employees` - Crear empleado
- `GET /api/admin/suppliers` - Gestionar proveedores
- `GET /api/admin/distributors` - Gestionar distribuidores

## 📸 Capturas de Pantalla

### Página Principal
![image](https://github.com/user-attachments/assets/007dbb8c-7472-4e0e-99c4-bc08f3c6d5c3)

### Dashboard Administrativo
![image](https://github.com/user-attachments/assets/70d99ef8-6034-44b8-be17-8ddcf906a5bb)

## 🌱 Características Ecológicas

- **Materiales Sostenibles**: Acero inoxidable de grado alimenticio y bambú certificado
- **Reducción de Residuos**: Cada termo reutilizable evita cientos de botellas desechables
- **Embalaje Ecológico**: Packaging biodegradable y reciclable
- **Certificaciones**: Productos certificados por organizaciones ambientales

