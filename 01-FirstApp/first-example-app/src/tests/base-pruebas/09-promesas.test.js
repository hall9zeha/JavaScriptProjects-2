import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";
import heroes from "../../data/heroes";


describe('Pruebas con promesas', () => { 
    test('getHeroByIdAsync should return a hero async', (done)=>{//ponemos done para que el test se ejecute de manera asíncrona
        const id = 1;

        getHeroeByIdAsync(id)
        .then(heroe =>{
            expect(heroe).toBe(heroes[0])//de acuerdo al id = 1 el registro debe encrontrarse en la primera posición 
            done(); //Siempre terminar la ejecución con done()
        })

    })

    test('Should be get a error if hero by id not exists', (done)=>{

        const id = 10;
        getHeroeByIdAsync(id)
        .catch(error=>{
            expect(error).toBe('No se pudo encontrar el héroe')
            done();
        })
    })
 })