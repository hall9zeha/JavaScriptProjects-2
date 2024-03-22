const baseUrl=process.env.REACT_APP_API_URL;

const fetchWithoutToken = (endPoint,data,method='GET')=>{
    const url = `${baseUrl}/${endPoint}`;

    if(method === 'GET'){
        return fetch(url);
    }else{
        return fetch(url,{
            method,
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
    }
}

const fetchWithToken = (endPoint,data,method='GET')=>{
    const url = `${baseUrl}/${endPoint}`;
    //Si el token no existe y devuelve nulo entonces ponemos una cadena vacía en su lugar
    //para que no se rompa la aplicación
    const token = localStorage.getItem('token') || '';


    if(method === 'GET'){
        return fetch(url,{
            method,
            headers:{
                'x-token':token
            }
        });
    }else{
        return fetch(url,{
            method,
            headers:{
                'content-type':'application/json',
                'x-token':token
            },
            body:JSON.stringify(data)
        })
    }
}
export {
    fetchWithoutToken,
    fetchWithToken
}