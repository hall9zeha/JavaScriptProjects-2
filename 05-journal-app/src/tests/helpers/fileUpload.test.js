import { fileUpload } from "../../helpers/fileUpload";

describe('Tests in fileUpload helper', () => { 

    test('should upload a file and return an url', async() => { 
        const img=await fetch('https://cdn.icon-icons.com/icons2/2845/PNG/512/linux_logo_icon_181333.png');

        //Simulamos la selección del archivo creándolo con la respuesta img
        const blob = await img.blob();

        const file = new File([blob], 'image.png')
        const url = await fileUpload(file);
        console.log(url)

        expect(typeof url).toBe('string')
     })

     test('should return an error', async() => { 
      
        // Simulamos un archivo vacío
        const file = new File([], 'image.png')
        const url = await fileUpload(file);
      
        expect(url).toBe(null)
     })
 })