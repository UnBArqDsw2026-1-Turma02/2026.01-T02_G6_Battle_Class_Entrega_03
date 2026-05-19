import type { Torre } from './Torre.js';

/** Creator abstrato (F1). */
export abstract class TorreCreator {
  protected abstract factoryMethod(): Torre;

  construir(): Torre {
    return this.factoryMethod();
  }
}
