import { InimigoCreator } from './InimigoCreator.js';
import type { Inimigo } from './Inimigo.js';
import { InimigoBiologia } from './InimigoBiologia.js';

/** ConcreteCreator (F1). */
export class InimigoBiologiaCreator extends InimigoCreator {
  protected override factoryMethod(): Inimigo {
    return new InimigoBiologia();
  }
}
