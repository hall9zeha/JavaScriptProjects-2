import { fetchWithToken } from "../../helpers/fetch"

describe('Tests in helpers', () => { 

    test('fetchWithoutToken should execute successfully', async() => { 
        //Usar su propio usuario registrado en su base de datos
        const response = await fetchWithToken('auth',{email:'barry@mail.com',password:'123456'},'POST');
        expect(response instanceof Response).toBe(true);

        const body = await response.json();
        expect(body.ok).toBe(true);


     }) 

 })