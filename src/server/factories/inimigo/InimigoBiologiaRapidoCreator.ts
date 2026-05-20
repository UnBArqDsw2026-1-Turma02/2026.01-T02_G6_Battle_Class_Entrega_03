import { InimigoCreator } from './InimigoCreator.js';
import type { Inimigo } from './Inimigo.js';
import { InimigoBiologiaRapido } from './InimigoBiologiaRapido.js';

/** ConcreteCreator (F1). */
export class InimigoBiologiaRapidoCreator extends InimigoCreator {
  protected override factoryMethod(): Inimigo {
    return new InimigoBiologiaRapido();
  }
}