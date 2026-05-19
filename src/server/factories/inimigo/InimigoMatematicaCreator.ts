import { InimigoCreator } from './InimigoCreator.js';
import type { Inimigo } from './Inimigo.js';
import { NotImplementedError } from '../../../shared/index.js';

/** ConcreteCreator (F1). TODO(@JoaoCarlosLobo): return new InimigoMatematica(). */
export class InimigoMatematicaCreator extends InimigoCreator {
  protected override factoryMethod(): Inimigo {
    throw new NotImplementedError('F1 InimigoMatematicaCreator.factoryMethod');
  }
}
