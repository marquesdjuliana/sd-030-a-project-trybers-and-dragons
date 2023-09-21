import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private static _instances = 0;
  private _damageMage: EnergyType;

  constructor(name: string) {
    super(name);
    this._damageMage = 'mana';
    Mage.addInstance();
  }

  get energyType():EnergyType {
    return this._damageMage;
  }

  static addInstance() {
    Mage._instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage._instances;
  }
}

export default Mage;
