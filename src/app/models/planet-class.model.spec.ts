import { PlanetClass } from './planet-class.model';

describe('PlanetClass', () => {
  it('should create an instance', () => {
    expect(new PlanetClass("",0,0,"","")).toBeTruthy();
  });
});
