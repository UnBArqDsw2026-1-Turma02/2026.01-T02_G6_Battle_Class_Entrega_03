import { InimigoCreator } from './InimigoCreator.js';
import type { Inimigo } from './Inimigo.js';
import { InimigoMatematica } from './InimigoMatematica.js';

/** ConcreteCreator (F1). */
export class InimigoMatematicaCreator extends InimigoCreator {
  protected override factoryMethod(): Inimigo {
    return new InimigoMatematica();
  }
}
