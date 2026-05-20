import { InimigoCreator } from './InimigoCreator.js';
import type { Inimigo } from './Inimigo.js';
import { InimigoHistoriaPadrao } from './InimigoHistoriaPadrao.js';

/** ConcreteCreator (F1). */
export class InimigoHistoriaPadraoCreator extends InimigoCreator {
  protected override factoryMethod(): Inimigo {
    return new InimigoHistoriaPadrao();
  }
}