export const fileUpload = async (file)=>{
    //Nuestras variables más sensibles como las de nuestras cuentas de cloudinary o APIS
    //están protegidas en el archivo .env de la raíz del proyecto y deben ser llamadas desde allí.
    //Recomendado como buena práctica, pero queda a decisión de cada uno
    const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
    
    // Puede usar directamente la url sin ocultar sus variables
    // si no lo lleva a producción o a un repositorio público.
    
    // Example: https://api.cloudinary.com/v1_1/xxdhsfs/upload
    // donde (xxdhsfs) es una variable asignada por cloudinary que puede encontrar en su  dashboard
    // de proyecto en su cuenta de cloudinary.

    const baseUrl = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

    const formData = new  FormData();
    const mCloudinaryAppName='react-journal-app';
    formData.append('upload_preset',mCloudinaryAppName);
    formData.append('file',file);

    try {
       const resp = await fetch(baseUrl,{
        method:'POST',
        body:formData
       }); 

       if(resp.ok){
            const cloudResp = await resp.json()
            return cloudResp.secure_url; 
       }else{
            return null
       }
    } catch (error) {
        console.log(error);
    }
}