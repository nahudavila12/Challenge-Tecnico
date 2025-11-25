# Challenge Técnico – Autenticación Básica con React + Express

Aplicación full stack que implementa un flujo básico de autenticación usando React en el frontend y Node.js con Express en el backend.

## Practicas aplicada (extra)
Para el codigo , estoy acostumbrado a ordenar los import alfabeticamente, y en el caso de backend, que no se sobrepasen las 120 Col por linea de codigo, para mejorar la lectura .

## Requisitos Previos

- Node.js (versión 18 o superior)
- npm

## Dependencias Necesarias

### Backend

#### Dependencias de Producción
- **express**: Framework web para Node.js, maneja las rutas y middlewares del servidor
- **jsonwebtoken**: Librería para generar y validar tokens JWT para autenticación
- **cors**: Middleware para habilitar CORS (Cross-Origin Resource Sharing) entre frontend y backend
- **swagger-jsdoc**: Genera la especificación OpenAPI desde comentarios JSDoc en el código
- **swagger-ui-express**: Interfaz web para visualizar y probar la documentación de la API

#### Dependencias de Desarrollo
- **typescript**: Compilador de TypeScript para tipado estático
- **tsx**: Ejecutor de TypeScript que permite correr archivos .ts directamente en desarrollo sin compilar
- **@types/***: Definiciones de tipos TypeScript para las librerías JavaScript utilizadas

### Frontend

#### Dependencias de Producción
- **react**: Librería para construir interfaces de usuario
- **react-dom**: Renderizado de React en el DOM
- **react-router-dom**: Manejo de rutas y navegación en la aplicación React

#### Dependencias de Desarrollo
- **vite**: Herramienta de build y servidor de desarrollo, muy rápida para React
- **typescript**: Compilador de TypeScript para tipado estático
- **tailwindcss**: Framework de CSS utility-first para estilos
- **postcss**: Procesador de CSS, necesario para Tailwind
- **autoprefixer**: Plugin de PostCSS que agrega prefijos de navegadores automáticamente
- **@vitejs/plugin-react**: Plugin de Vite para soporte de React
- **@types/react** y **@types/react-dom**: Definiciones de tipos TypeScript para React

## Cómo Ejecutar el Backend

1. Navegar a la carpeta del backend:
```bash
cd backend
```

2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar el servidor:
```bash
npm run dev
```

El servidor estará corriendo en `http://localhost:3001`

**Documentación Swagger:** http://localhost:3001/api-docs
##ACLARACION EN SWAGGER: 
Para la ruta
GET
/api/auth/me
Es necesario agregar el token devuelto al "Authorize" de swagger.

## Cómo Iniciar el Frontend

1. Abrir una nueva terminal y navegar a la carpeta del frontend:
```bash
cd frontend
```

2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar la aplicación:
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## Usuarios de Prueba

- **Email:** juan@example.com | **Password:** password123
- **Email:** maria@example.com | **Password:** password456
- **Email:** carlos@example.com | **Password:** password789
