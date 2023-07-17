import { of } from "rxjs";
import { HeroesComponent } from "./heroes.component";

describe('HeroesComponent', () => {
    let component: HeroesComponent;
    let HEROES; 
    let mockHeroService;

    beforeEach(() => {
        HEROES = [
            {id: 1, name: 'SpiderDude', strenght: 8},
            {id: 2, name: 'Wonderful Woman', strenght: 55},
            {id: 3, name: 'SuperDude', strenght: 24},
        ]

        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero'])

        component = new HeroesComponent(mockHeroService);
    })

    describe('delete',()=>{
        it('should remove indicatd hero from the heroes list', () => {
            mockHeroService.deleteHero.and.returnValue(of(true))
            component.heroes = HEROES;

            component.delete(HEROES[2])

            expect(component.heroes.length).toBe(2);
        })

        it('should call deleteHero with a correct hero', () => {
            mockHeroService.deleteHero.and.returnValue(of(true))
            component.heroes = HEROES;

            component.delete(HEROES[2])

            expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
        })
    })
    
})