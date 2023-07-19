# README - Proyecto de Backend y Frontend

Este repositorio contiene un proyecto de backend y frontend que trabajan juntos para proporcionar una aplicación que permite cargar, consultar, modificar y eliminar usuarios en una base de datos. A continuación se detalla la configuración necesaria y los pasos para instalar y ejecutar el proyecto.

## Backend

El backend está desarrollado utilizando las siguientes tecnologías:

- Node.js
- Express.js
- MongoDB
- Mongoose.js
- Cors
- Dotenv

### Configuración

Antes de ejecutar el backend, asegúrate de configurar las variables de entorno necesarias:

- `DATABASE_URL`= La URL de conexión de la base de datos MongoDB. Debes establecerla como `mongodb://localhost:27017/tecodesafioFullStack`.
- `FRONTEND_URL`= La URL del frontend. Debes establecerla como `http://127.0.0.1:5173` (necesaria para la lista blanca de CORS).
- `db`= Configura esta variable como `MONGO` para instanciar la base de datos.


### Instalación

Sigue estos pasos para instalar y ejecutar el backend:

1. Clona este repositorio en tu máquina local.
2. Navega al directorio raíz del backend: `cd backend`.
3. Instala las dependencias utilizando npm: `npm install`.
4. Configura las variables de entorno según se menciona anteriormente.
5. Inicia el servidor backend: `npm start`.

El backend estará en funcionamiento en [http://localhost:4000](http://localhost:4000).

## Frontend

El frontend está desarrollado utilizando las siguientes tecnologías:

- React
- React Router
- Axios
- react-router-dom 
- sweetalert

### Configuración

Antes de ejecutar el frontend, asegúrate de configurar las variables de entorno necesarias:

- `VITE_BACKEND_URL`: La URL del servidor backend. Debes establecerla como `http://localhost:4000`.

### Instalación

Sigue estos pasos para instalar y ejecutar el frontend:

1. Clona este repositorio en tu máquina local, si aún no lo has hecho.
2. Navega al directorio raíz del frontend: `cd frontend`.
3. Instala las dependencias utilizando npm: `npm install`.
4. Configura las variables de entorno según se menciona anteriormente.
5. Inicia la aplicación frontend: `npm run dev`.

El frontend estará en funcionamiento en [http://127.0.0.1:5173](http://127.0.0.1:5173).

## Uso de la aplicación

Una vez que el backend y el frontend estén en funcionamiento, podrás acceder a la aplicación en tu navegador utilizando la URL [http://127.0.0.1:5173](http://127.0.0.1:5173).

La aplicación proporciona las siguientes funcionalidades:

- Carga de usuarios: Completa los campos de nombre, apellido, DNI y sexo para agregar un nuevo usuario a la base de datos.
- Consulta de usuarios por DNI: Ingresa un número de DNI para buscar y visualizar la información del usuario correspondiente.
- Modificación de usuarios: Permite modificar la información de un usuario existente.
- Eliminación de usuarios: Permite eliminar un usuario de la base de datos.
- Visualización de todos los usuarios: Muestra una lista con todos los usuarios cargados en la base de datos.

¡Disfruta usando la aplicación!

## Licencia

Este proyecto está bajo la Licencia ISC. Para más detalles, consulta el archivo [LICENSE](LICENSE).
