/**
 * @jest-environment jsdom
 */

//Usamos el bloque de comentario anterior para declarar que este contexto debe usar jsdom como entorno para
//las pruebas, algunas pruebas requieren usar diferentes contextos como 'node' o por defecto 'jsdom'

import cloudinary from 'cloudinary';
import { fileUpload } from "../../helpers/fileUpload";

//Las constantes de API cloudinary las obtenemos de nuestras variables de entorno
//que deben de estar protegidas
cloudinary.config({ 
    cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.REACT_APP_CLOUDINARY_API_KEY, 
    api_secret: process.env.REACT_APP_CLOUDINARY_API_SECRET
  });


describe('Tests in fileUpload helper', () => { 
   
    test('should upload a file and return an url', async() => { 
        const img=await fetch('https://cdn.icon-icons.com/icons2/2845/PNG/512/linux_logo_icon_181333.png');

        //Simulamos la selección del archivo creándolo con la respuesta img
        const blob = await img.blob();

        const file = new File([blob], 'image.png')
        const url = await fileUpload(file);
        console.log(url)

        expect(typeof url).toBe('string')
       
        //Eliminamos la imagen en cloudinary, cada vez que realizamos el test se subirá nuevamente la misma imagen
        //y no queremos eso
        const segment = url.split('/') // separmos la url devuelta en segmentos
        const imageId = segment[segment.length-1].replace('.png','')//extraemos el id asignado por cloudinary, sin el .png que es la extensión de nuestra imágen en este caso

        await cloudinary.v2.api.delete_resources(imageId, {} ).then(result=>{
            console.log(result)
        })
        
     })

     test('should return an error', async() => { 
      
        // Simulamos un archivo vacío
        const file = new File([], 'image.png')
        const url = await fileUpload(file);
      
        expect(url).toBe(null)
     })
 })