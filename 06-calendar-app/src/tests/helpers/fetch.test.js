import { fetchWithToken } from "../../helpers/fetch"

describe('Tests in helpers', () => { 
    //Obtenemos el token para las demás pruebas
    let token ='';

    test('fetchWithoutToken should execute successfully', async() => { 
        //Usar su propio usuario registrado en su base de datos
        const response = await fetchWithToken('auth',{email:'barry@mail.com',password:'123456'},'POST');
        expect(response instanceof Response).toBe(true);

        const body = await response.json();
        expect(body.ok).toBe(true);
        token = body.token;

     }) 

     test('fetchWithToken should execute successfully', async() => { 
        localStorage.setItem('token',token);

        //El id '65fc6249422350c575ebc9a4' no tiene que existir realmente pero debe tener un formato adecuado

        const response = await fetchWithToken('events/65fc6249422350c575ebc9a4',{}, 'DELETE');
        const body =  await response.json();

        console.log(body);
        expect(body.msg).toBe('Event not exist');
        

     }) 

 })