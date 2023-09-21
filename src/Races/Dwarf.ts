import Race from './Race';

class Dwarf extends Race {
  private static _instances = 0;
  private _maxLifePoints = 80;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf.addInstance();
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  static addInstance() {
    Dwarf._instances += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf._instances;
  }
}

export default Dwarf;