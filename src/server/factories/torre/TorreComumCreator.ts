import { TorreCreator } from './TorreCreator.js';
import type { Torre } from './Torre.js';
import { TorreComum } from './TorreComum.js';

/** ConcreteCreator (F1). */
export class TorreComumCreator extends TorreCreator {
  protected override factoryMethod(): Torre {
    return new TorreComum();
  }
}
