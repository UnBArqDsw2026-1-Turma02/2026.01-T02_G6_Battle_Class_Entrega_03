import { InimigoCreator } from './InimigoCreator.js';
import type { Inimigo } from './Inimigo.js';
import { InimigoMatematicaRapido } from './InimigoMatematicaRapido.js';

/** ConcreteCreator (F1). */
export class InimigoMatematicaRapidoCreator extends InimigoCreator {
  protected override factoryMethod(): Inimigo {
    return new InimigoMatematicaRapido();
  }
}