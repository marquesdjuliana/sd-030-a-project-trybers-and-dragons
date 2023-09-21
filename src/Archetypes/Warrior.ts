import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private static _instances = 0;
  private _damageWarrior: EnergyType;

  constructor(name: string) {
    super(name);
    this._damageWarrior = 'stamina';
    Warrior.addInstance();
  }

  get energyType():EnergyType {
    return this._damageWarrior;
  }

  static addInstance() {
    Warrior._instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._instances;
  }
}

export default Warrior;
