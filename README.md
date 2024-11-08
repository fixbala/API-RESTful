# API RESTful para una Plataforma de Microblogging

## Descripción

Este proyecto es una API RESTful desarrollada en **Node.js** utilizando **Express** y **MongoDB** para la gestión de una plataforma de microblogging. La API permite a los usuarios realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) en publicaciones y comentarios, así como autenticación JWT para proteger rutas privadas.

### Funcionalidades

- **Registro y Autenticación de Usuarios**: Los usuarios pueden registrarse e iniciar sesión. La autenticación se maneja mediante **JSON Web Tokens (JWT)**.
- **Operaciones CRUD para Publicaciones**: Los usuarios pueden crear, leer, actualizar y eliminar publicaciones. Incluye validaciones de contenido.
- **Comentarios en Publicaciones**: Cada publicación admite comentarios que pueden ser gestionados por los usuarios.
- **Paginación y Filtros**: Paginación y filtros para facilitar la consulta de publicaciones.
- **Documentación**: Documentación completa de la API en Swagger o Postman.

### Tecnologías Utilizadas

- **Node.js**
- **Express.js**
- **MongoDB**
- **JWT (JSON Web Token) para autenticación**
- **dotenv** para manejar variables de entorno

---

## Instalación y Configuración

### Prerrequisitos

1. **Node.js** (v14 o superior)
2. **MongoDB** (local o en la nube, por ejemplo, MongoDB Atlas)
3. **Postman** (opcional, para probar la API)

### Pasos de Instalación

1. **Clonar el Repositorio**

   ```bash
   git clone https://github.com/fixbala/API-RESTful.git 
   cd API-RESTful-Microblogging
