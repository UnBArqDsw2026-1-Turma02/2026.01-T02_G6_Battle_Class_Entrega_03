import { TorreCreator } from './TorreCreator.js';
import type { Torre } from './Torre.js';
import { NotImplementedError } from '../../../shared/index.js';

/** ConcreteCreator (F1). TODO(@ThiagoTonin): return new TorreComum(). */
export class TorreComumCreator extends TorreCreator {
  protected override factoryMethod(): Torre {
    throw new NotImplementedError('F1 TorreComumCreator.factoryMethod');
  }
}
