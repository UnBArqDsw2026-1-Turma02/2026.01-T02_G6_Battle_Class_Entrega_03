import { InimigoCreator } from './InimigoCreator.js';
import type { Inimigo } from './Inimigo.js';
import { InimigoMatematicaTanque } from './InimigoMatematicaTanque.js';

/** ConcreteCreator (F1). */
export class InimigoMatematicaTanqueCreator extends InimigoCreator {
  protected override factoryMethod(): Inimigo {
    return new InimigoMatematicaTanque();
  }
}