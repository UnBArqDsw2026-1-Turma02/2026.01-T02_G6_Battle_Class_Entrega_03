import { InimigoCreator } from './InimigoCreator.js';
import type { Inimigo } from './Inimigo.js';
import { InimigoHistoriaRapido } from './InimigoHistoriaRapido.js';

/** ConcreteCreator (F1). */
export class InimigoHistoriaRapidoCreator extends InimigoCreator {
  protected override factoryMethod(): Inimigo {
    return new InimigoHistoriaRapido();
  }
}