# Gif Expert App

Aplicación que muestra gifs animados a través de búsqueda usando la API  [GIPHY](https://developers.giphy.com/), escrita en Java Script usando React.

## Características:

 * Buscar gif
 * Mostrar gifs

## Librerías utilizadas

* [React test renderer](https://www.npmjs.com/package/react-test-renderer)


## Servicios utilizados

* [Giphy API](https://developers.giphy.com/)

## Implementación

### 1 - Reconstruir el proyecto
Desde el directorio raíz del proyecto ejecutar el comando  ```npm install``` para reconstruir las dependencias.

### 2 - Agregar variables de entorno
Crear un archivo ```.env``` en la raíz del proyecto al mismo nivel que el archivo package.json.

Este archivo debe contener lo siguiente:</br>
```.env```
```js script
   REACT_APP_API_KEY=you_api_key_of_giphy
```

### 3 Levantar aplicación
 
Desde el directorio de la aplicación ejecutar el comando ```npm start```

### 4 Para ejecutar los tests

Desde el directorio de la aplicación ejecutar el comando ```npm run test```