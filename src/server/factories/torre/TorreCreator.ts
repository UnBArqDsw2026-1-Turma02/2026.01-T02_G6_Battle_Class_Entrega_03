import type { Torre } from './Torre.js';
import { NotImplementedError } from '../../../shared/index.js';

/** Creator abstrato (F1). */
export abstract class TorreCreator {
  protected abstract factoryMethod(): Torre;

  construir(): Torre {
    throw new NotImplementedError('F1 TorreCreator.construir');
  }
}
