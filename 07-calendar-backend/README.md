# Mern Calendar Backend

Aplicación que contiene toda la programación de backend para calendar App, escrita en Java script usando Node.js 

## Librerías utilizadas
* [dotenv](https://www.npmjs.com/package/dotenv) Para las variables de entorno
* [express](https://www.npmjs.com/package/express) Para crear el backend simplificando el enrutamiento y la respuesta a las solicitudes web
* [nodemon](https://www.npmjs.com/package/nodemon) Para reflejar  los cambios automáticamente en el servidor en modo desarrollo.
* [express-validator](https://www.npmjs.com/package/express-validator) Para validar campos con facilidad
* [mongoose](https://www.npmjs.com/package/mongoose) ODM para manejar con mayor facilidad el CRUD con la base de datos
* [bcryptjs](https://www.npmjs.com/package/bcryptjs) Para cifrar contraseñas
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) Una forma fácil de generar Json web tokens para autenticación
* [cors](https://www.npmjs.com/package/cors) Permite realizar conexiones con servidores ajenos
* [moment](https://www.npmjs.com/package/moment) Para el fácil manejo de fechas

## Servicios utilizados
* [Mongo db atlas](https://www.mongodb.com/es/cloud/atlas/lp/try4) Base de datos no relacional en la nube
* [Render](https://render.com/) Despliegue de backend y frontend

## Implementación

Los siguientes pasos se deben realizar para el funcionamiento correcto de la aplicación:

### 1 - Crear cluster en mongo atlas
   Crear un cluster en [Mongo db atlas](https://www.mongodb.com/es/cloud/atlas/lp/try4) 
   (es suficiente con el modo gratuito), copiar la url del cluster que puede obtenerla en la sección: ```deplyment/database``` de su cuenta y debe lucir como el siguiente ejemplo: 

   ```
   mongodb+srv://you_user_name:your_password@cluster0.sw5of57.mongodb.net/
   
   ```
   La url anterior puede agregarse a la aplicación [MongoDB Compass](https://www.mongodb.com/es/products/tools/compass) para tener el control de su base de datos desde el escritorio, o si prefiere puede manejarlo desde el navegador.
   Pero sin duda la url obtenida del cluster debe de agregarse a las variables de entorno en el paso 2

   Puede ver el siguiente [artículo](https://medium.com/@sergio13prez/connecting-to-mongodb-atlas-d1381f184369) que ilustra la forma de realizar una conexión con mongo atlas.
   
   Asegúrese de agregar su dirección ip en la sección de ```Security/Network Access``` de su cuenta en mongo atlas ```Add current ip```. Si tiene direcciones ip dinámicas y no quiere agregarlas cada vez que quiera usar mongo atlas, agrege la ip ```0.0.0.0``` que le permitirá conectarse desde cualquier dirección.
   
### 2 - Configurar variables de entorno

 Crear un archivo para las variables de entorno nombrado como ```.env``` en la raíz del proyecto al mismo nivel que el archivo package.json, este archivo debe contener lo siguiente:
 ```javascript
    
    PORT=4001 
    DB_CNN=You_mongo_db_atlas_connection_cluster
    SECRET_JWT_SEED=You_secret_phrase_or_word
 
 ```
   - ```PORT```El puerto configurado para el proyecto es 4001 puede cambiarlo si desea.
   - ```DB_CNN``` Reemplazar con tu cadena de conexión a la base de datos creada en mongo atlas Eg:
    ```mongodb+srv://you_user_name:your_password@cluster0.sw5of57.mongodb.net/mern_calendar``` 
      - Donde ```mern_calendar``` es el nombre que se le dará a la colección en la base de datos cuando  hagamos nuestros primeros registros, puede nombrarlo como desee.

 ## Acciones de la API
 Usando [Postman](https://www.postman.com/) Eg:</br>
  * En modo desarrollo: ```localhost:4001/api/auth/```.
  * En producción con la aplicación desplegada en heroku, render o cualquier otro servicio 
    - Eg:```https://your_url_of_deployment_service/api/auth```

 ### Auth
   * ```/api/auth/new``` (POST) Registra nuevo usuario, requiere un body Eg:
   ```json
      {
         "name":"Barry",
         "email": "barry@mail.com",
         "password": "123456"
      }
   ```
   * ```/api/auth/``` (POST) Realiza una petición para crear un token, requiere un body Eg:
   ```json
      {
         "email": "barry@mail.com",
         "password": "123456"
      }
   ``` 
   * ```/api/auth/renew``` (GET) Pide un nuevo token, requiere Header con un token anterior Eg:</br>
   key:```x-token``` value:```eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9```


 ### Events
   * ```/api/events/``` (GET) Obtiene todos los eventos registrados, requiere Header con token Eg:</br>

      key:```x-token``` value:```eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9```

 
   * ```/api/events/``` (POST)  Registra un nuevo evento, requiere un Body y token Eg:
      ```json
         {
            "title": "First event",
            "start": 2,
            "end":1000000,
            "notes":"Notes of first event"
         }
      ``` 
      Token: key:```x-token``` value:```eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9```


   * ```/api/events/``` (PUT)  Modifica un evento existente, requiere un id, Body y token Eg:

      ```/api/events/65fc649651a665f85ef68cb7```

      ```json
         {
            "title": "First event",
            "start": 2,
            "end":1000000,
            "notes":"Notes of first event"
         }
      ``` 
      Token: key:```x-token``` value:```eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9```


   * ```/api/events/``` (DELETE)  Elimina un evento existente, requiere un id y token Eg:

      ```/api/events/65fc649651a665f85ef68cb7```

      Token: key:```x-token``` value:```eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9```
   
 ## Despliegue

 ### Localmente modo desarrollo:

Desde el directorio raíz del proyecto ejecutar el comando ```npm install``` para reconstruir las dependencias. 
Una vez creadas las variables de entorno lanzar la aplicación con el comando ```npm run dev```, cualquier cambio que se realice en el código se refrescará automáticamente.

La aplicación debe estar ejecutándose para poder hacer las peticiones a la base de datos a través de nuestra api. 


