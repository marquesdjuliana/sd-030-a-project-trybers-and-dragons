import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private static _instances = 0;
  private _damageNecromancer: EnergyType;

  constructor(name: string) {
    super(name);
    this._damageNecromancer = 'mana';
    Necromancer.addInstance();
  }

  get energyType():EnergyType {
    return this._damageNecromancer;
  }

  static addInstance() {
    Necromancer._instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._instances;
  }
}

export default Necromancer;
