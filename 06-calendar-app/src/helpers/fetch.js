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

export {
    fetchWithoutToken
}