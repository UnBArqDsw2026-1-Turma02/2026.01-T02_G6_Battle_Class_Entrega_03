import { InimigoCreator } from './InimigoCreator.js';
import type { Inimigo } from './Inimigo.js';
import { InimigoHistoria } from './InimigoHistoria.js';

/** ConcreteCreator (F1). */
export class InimigoHistoriaCreator extends InimigoCreator {
  protected override factoryMethod(): Inimigo {
    return new InimigoHistoria();
  }
}
