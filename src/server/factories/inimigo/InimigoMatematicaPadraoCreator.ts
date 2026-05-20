import { InimigoCreator } from './InimigoCreator.js';
import type { Inimigo } from './Inimigo.js';
import { InimigoMatematicaPadrao } from './InimigoMatematicaPadrao.js';

/** ConcreteCreator (F1). */
export class InimigoMatematicaPadraoCreator extends InimigoCreator {
  protected override factoryMethod(): Inimigo {
    return new InimigoMatematicaPadrao();
  }
}