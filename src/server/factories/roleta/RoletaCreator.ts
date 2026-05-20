import type { Roleta } from './Roleta.js';

/** Creator abstrato (F1): delega a instancia concreta da Roleta. */
export abstract class RoletaCreator {
  protected abstract factoryMethod(): Roleta;

  criarRoleta(): Roleta {
    return this.factoryMethod();
  }
}
