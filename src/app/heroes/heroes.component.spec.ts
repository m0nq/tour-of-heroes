import { of } from 'rxjs';
import { HeroesComponent } from './heroes.component';

describe('Heroes Component:', () => {
  let heroesComponent: HeroesComponent;
  let HEROES;
  let mockHeroService;

  beforeEach(() => {
    HEROES = [
      { id: 1, name: 'SpiderDude', strength: 8 },
      { id: 2, name: 'Wonderful Woman', strength: 24 },
      { id: 3, name: 'Other Guy', strength: 55 }
    ];
    mockHeroService = jasmine.createSpyObj(['deleteHero', 'addHero', 'getHeroes']);
    heroesComponent = new HeroesComponent(mockHeroService);
  });

  describe('Deleting', () => {
    it('should remove the indicated hero from the heroes list', () => {
      mockHeroService.deleteHero.and.returnValue(of(true));
      heroesComponent.heroes = HEROES;

      heroesComponent.delete(HEROES[2]);

      expect(heroesComponent.heroes.length).toEqual(2);
    });

    it('should call deleteHero from the service', () => {
      mockHeroService.deleteHero.and.returnValue(of(true));
      heroesComponent.heroes = HEROES;

      heroesComponent.delete(HEROES[2]);

      expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
    });
  });
});
