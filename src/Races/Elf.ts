import Race from './Race';

class Elf extends Race {
  private static _instances = 0;
  private _maxLifePoints = 99;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.addInstance();
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  static addInstance() {
    Elf._instances += 1;
  }

  static createdRacesInstances(): number {
    return Elf._instances;
  }
}

export default Elf;