import '@testing-library/jest-dom'
import { getActiveUser, getUser } from "../../base-pruebas/05-funciones"

describe('Pruebas de funciones', () => { 
    test('getUser debe retornar un objeto', ()=>{

        const userTest = {
            uid: 'ABC123',
            username: 'Case1520'
        }

        const user = getUser();
        //Al comparar dos objetos no se puede usar el método toBe() ya que cada objeto sin importar si tienen
        //el mismo contenido apunta a direcciones de memoria diferente, por eso usamos toEqual()
        expect(user).toEqual(userTest); 
        
        
    })

    //Prueba 2 de práctica: el método getactiveUser debe retornar un objeto
    //el nombre de usuario será enviado por parámetro

    test('getActiveUser debe retornar un objeto',()=>{

        const userName = 'Barry';

        const activeUserTest = {
            uid:'ABC123',
            username:userName
        }

        const activeUserFetched = getActiveUser(userName);

        expect(activeUserTest).toEqual(activeUserFetched);

    })
 })