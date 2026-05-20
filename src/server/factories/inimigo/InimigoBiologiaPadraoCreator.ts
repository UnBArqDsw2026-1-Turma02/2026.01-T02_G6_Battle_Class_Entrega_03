import { InimigoCreator } from './InimigoCreator.js';
import type { Inimigo } from './Inimigo.js';
import { InimigoBiologiaPadrao } from './InimigoBiologiaPadrao.js';

/** ConcreteCreator (F1). */
export class InimigoBiologiaPadraoCreator extends InimigoCreator {
  protected override factoryMethod(): Inimigo {
    return new InimigoBiologiaPadrao();
  }
}