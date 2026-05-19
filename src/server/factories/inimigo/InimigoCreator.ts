import type { Inimigo } from './Inimigo.js';
import { NotImplementedError } from '../../../shared/index.js';

/** Creator abstrato (F1). Subclasses definem factoryMethod(). */
export abstract class InimigoCreator {
  protected abstract factoryMethod(): Inimigo;

  /** Lógica que usa o produto pela interface (escala por onda). */
  spawn(onda: number): Inimigo {
    void onda; // TODO(@JoaoCarlosLobo): const e = this.factoryMethod(); escalar hp; return e;
    throw new NotImplementedError('F1 InimigoCreator.spawn');
  }
}
