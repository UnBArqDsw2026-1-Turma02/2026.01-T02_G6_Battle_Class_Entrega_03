import { TorreCreator } from './TorreCreator.js';
import type { Torre } from './Torre.js';
import { TorreEspecial } from './TorreEspecial.js';

/** ConcreteCreator (F1). */
export class TorreEspecialCreator extends TorreCreator {
  protected override factoryMethod(): Torre {
    return new TorreEspecial();
  }
}
