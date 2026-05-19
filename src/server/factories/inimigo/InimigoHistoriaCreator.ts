import { InimigoCreator } from './InimigoCreator.js';
import type { Inimigo } from './Inimigo.js';
import { NotImplementedError } from '../../../shared/index.js';

/** ConcreteCreator (F1). TODO(@JoaoCarlosLobo): return new InimigoHistoria(). */
export class InimigoHistoriaCreator extends InimigoCreator {
  protected override factoryMethod(): Inimigo {
    throw new NotImplementedError('F1 InimigoHistoriaCreator.factoryMethod');
  }
}
