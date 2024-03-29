# Journal App

Aplicación que registra eventos de diario con imágenes usando [firebase ](https://firebase.google.com/), autenticación con correo electrónico y cuentas de google, para el manejo de imágenes  [Cloudinary](https://cloudinary.com/), escrito en Java Script con React, redux y hooks.


## Características:

 * Registro con correo y contraseña
 * Registro usando cuenta de google
 * Mostrar notas
 * Crear nota
 * Modificar nota
 * Eliminar nota
 * Agregar imagen a la nota

## Librerías utilizadas

* [Firebase](https://www.npmjs.com/package/firebase) v10.6.0
* [React test renderer](https://www.npmjs.com/package/react-test-renderer)
* [React router dom](https://www.npmjs.com/package/react-router-dom)
* [React-redux](https://www.npmjs.com/package/react-redux)
* [redux](https://www.npmjs.com/package/redux)
* [redux-thunk](https://www.npmjs.com/package/redux-thunk)
* [React-modal](https://www.npmjs.com/package/react-modal)
* [Sweetalert2](https://www.npmjs.com/package/sweetalert2)
* [dotenv](https://www.npmjs.com/package/dotenv) Para las variables de entorno
* [moment](https://www.npmjs.com/package/moment) Para el fácil manejo de fechas


## Servicios utilizados
* [Firebase](https://www.npmjs.com/package/firebase) v10.6.0
* [Cloudinary](https://cloudinary.com/)

## Implementación

### 1 - Reconstruir el proyecto
Desde el directorio raíz del proyecto ejecutar el comando  ```npm install``` para reconstruir las dependencias.

### 2 - Agregar variables de entorno
Crear los archivos ```.env```, ```.env.development```, ```.env.test``` en la raíz del proyecto al mismo nivel que el archivo package.json.

Este archivo debe contener lo siguiente:</br>
```.env``` Constantes para el uso de cloudinary
```js script
    REACT_APP_CLOUDINARY_CLOUD_NAME = You_cloud_name_of_cloudinary
    REACT_APP_CLOUDINARY_API_KEY = You_api_key
    REACT_APP_CLOUDINARY_API_SECRET = You_api_secret_key
```

```.env.development``` las constantes corresponden a la configuración del proyecto  que recibirá una vez creada una app (debe ser una app web) en firebase console, debería verse como el siguiente ejemplo:
```
var config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    projectId: "<PROJECT_ID>",
    storageBucket: "<BUCKET>.appspot.com",
    messagingSenderId: "<SENDER_ID>",
  };
```
```.env.development``` No debe usar comillas para los valores
```js script
    REACT_APP_API_KEY=replace_with_your_api_key
    REACT_APP_AUTH_DOMAIN=replace_with_your_app_domain
    REACT_APP_PROJECT_ID=replace_with_your_project_id
    REACT_APP_STORAGE_BUCKET=replace_with_your_storage_bucket
    REACT_APP_SENDER_ID=replace_with_your_sender_id
    REACT_APP_APP_ID=replace_with_your_app_id
    REACT_APP_MEASUREMENT_ID=replace_with_your_measurement_id
```

```.env.test``` No debe usar comillas para los valores
```js script
    REACT_APP_API_KEY=replace_with_your_api_key
    REACT_APP_AUTH_DOMAIN=replace_with_your_app_domain
    REACT_APP_PROJECT_ID=replace_with_your_project_id
    REACT_APP_STORAGE_BUCKET=replace_with_your_storage_bucket
    REACT_APP_SENDER_ID=replace_with_your_sender_id
    REACT_APP_APP_ID=replace_with_your_app_id
    REACT_APP_MEASUREMENT_ID=replace_with_your_measurement_id
```
### 3 Levantar aplicación
 
Desde el directorio de la aplicación ejecutar el comando ```npm start```

### 4 Para ejecutar los tests

Desde el directorio de la aplicación ejecutar el comando ```npm run test```
