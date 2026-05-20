import { InimigoCreator } from './InimigoCreator.js';
import type { Inimigo } from './Inimigo.js';
import { InimigoHistoriaTanque } from './InimigoHistoriaTanque.js';

/** ConcreteCreator (F1). */
export class InimigoHistoriaTanqueCreator extends InimigoCreator {
  protected override factoryMethod(): Inimigo {
    return new InimigoHistoriaTanque();
  }
}