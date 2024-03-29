# Mern Calendar App Frontend

Aplicación para crear eventos en un calendario enlazada a una base de datos en mongo db atlas. Esta aplicación contiene toda la programación de frontend para calendar App, escrita en Java Script usando el patrón de arquitectura de datos [Redux](https://redux.js.org/) y el stack MERN(MongoDB, React JS, Express JS y Node JS )

## Características:
CRUD completo

 * Registro de usuario
 * Inicio de sesión
 * Mostrar todos los eventos
 * Registro de evento
 * Modificación de evento
 * Eliminación de evento

 Todo ello con validación de Json Web Token

## Librerías utilizadas
* [React router dom](https://www.npmjs.com/package/react-router-dom)
* [React-redux](https://www.npmjs.com/package/react-redux)
* [redux](https://www.npmjs.com/package/redux)
* [redux-thunk](https://www.npmjs.com/package/redux-thunk)
* [React-big-calendar](https://www.npmjs.com/package/react-big-calendar)
* [React-modal](https://www.npmjs.com/package/react-modal)
* [Font-awesome](https://cdnjs.com/libraries/font-awesome)
* [React-datetime-picker](https://www.npmjs.com/package/react-datetime-picker)
* [Sweetalert2](https://www.npmjs.com/package/sweetalert2)
* [dotenv](https://www.npmjs.com/package/dotenv) Para las variables de entorno
* [moment](https://www.npmjs.com/package/moment) Para el fácil manejo de fechas

## Servicios utilizados
* [Mongo db atlas](https://www.mongodb.com/es/cloud/atlas/lp/try4) Base de datos no relacional en la nube
* [Render](https://render.com/) Despliegue de backend y frontend

## Implementación
Para probar correctamente la funcionalidad de esta aplicación primero debe asegurarse de ejecutar la aplicación de backend del directorio 07-calendar-backend, la cual tiene un archivo README para más información.

### 1 - Reconstruir el proyecto
Desde el directorio raíz del proyecto ejecutar el comando  ```npm install``` para reconstruir las dependencias.

### 2 - Agregar variables de entorno
Crear los archivos ```.env.development``` , ```.env.production```, ```.env.test``` en la raíz del proyecto al mismo nivel que el archivo package.json.

Estos archivos deben contener lo siguiente:</br>
```.env.development```
```js script
   REACT_APP_API_URL = http://localhost:4001/api
```

```.env.production```
```js script
   #Solo si ha desplegado el backend de esta aplicación que está en el directorio 07-calendar-backend
   #deberá poner la url del servicio donde esté desplegada Eg: https://heroku-calendar-example.com/api
   REACT_APP_API_URL = your_url_of_backend_deployment 
```

```.env.test```
```js script
   REACT_APP_API_URL = http://localhost:4001/api

```


### 3 Levantar aplicación
 
Desde el directorio de la aplicación ejecutar el comando ```npm start```
(La aplicación de backend del directorio 07-calendar-backend debe estar ejecutándose de manera correcta previamente para este paso)