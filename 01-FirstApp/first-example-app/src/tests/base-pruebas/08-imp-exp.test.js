import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";


describe('Tests in hero s functions', () => {
    
    test('Should return a hero by id', ()=>{
        const id = 1;

        const hero = getHeroeById(1);

        const heroData = heroes.find(h => h.id === id);

        expect(hero).toEqual(heroData);
    });

    test('Should return undefine if hero no exist', ()=>{
        const id=20;

        const hero = getHeroeById(id);

        expect(hero).toBe(undefined); //Al ser un elemento primitivo se puede usar toBe() con undefined
    })

    //Retornar un arreglo con los héroes de DC
    //filtrado por el campo owner

    test('Should return a hero of DC owner', ()=>{
        const owner = 'DC';

        const heroesData = heroes.filter(h => h.owner === owner);
        const dcHeroes = getHeroesByOwner(owner);

        expect(heroesData).toEqual(dcHeroes);

    })

    //Retornar un arrgleo con los héroes de marvel y comprabar que su longitud sea 2
    test('Should return a marvel heroes array with length is two', ()=>{
        const owner = 'Marvel';

        const marvelHeroes = getHeroesByOwner(owner);

        expect(marvelHeroes.length).toBe(2);
    })
 })