import { InimigoCreator } from './InimigoCreator.js';
import type { Inimigo } from './Inimigo.js';
import { InimigoBiologiaTanque } from './InimigoBiologiaTanque.js';

/** ConcreteCreator (F1). */
export class InimigoBiologiaTanqueCreator extends InimigoCreator {
  protected override factoryMethod(): Inimigo {
    return new InimigoBiologiaTanque();
  }
}