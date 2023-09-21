import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private static _instances = 0;
  private _damageRanger: EnergyType;

  constructor(name: string) {
    super(name);
    this._damageRanger = 'stamina';
    Ranger.addInstance();
  }

  get energyType():EnergyType {
    return this._damageRanger;
  }

  static addInstance() {
    Ranger._instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger._instances;
  }
}

export default Ranger;
