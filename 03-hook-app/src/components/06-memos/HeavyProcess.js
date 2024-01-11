//simulamos un proceso costoso para la aplicación
export  const heavyProcess = (iterations)=>{
    for(let i=0; i<iterations; i++){
        console.log("consumiendo memoria....");
    }
    return `${iterations} iteraciones realizadas`;
}