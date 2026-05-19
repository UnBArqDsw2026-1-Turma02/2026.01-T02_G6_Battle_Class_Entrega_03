import type { Inimigo } from './Inimigo.js';

/** Creator abstrato (F1). */
export abstract class InimigoCreator {
  protected abstract factoryMethod(): Inimigo;

  /** Usa o produto pela interface, escalando o HP pela onda. */
  spawn(onda: number): Inimigo {
    const e = this.factoryMethod();
    e.hp = Math.round(e.hp * (1 + onda * 0.15));
    return e;
  }
}
