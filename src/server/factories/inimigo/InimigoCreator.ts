import type { Inimigo } from './Inimigo.js';

export abstract class InimigoCreator {
  protected abstract factoryMethod(): Inimigo;

  spawn(onda: number): Inimigo {
    if (onda < 0) {
      throw new Error('Onda inválida');
    }

    const inimigo = this.factoryMethod();

    const multiplicador = 1 + onda * 0.15;

    inimigo.hp = Math.round(inimigo.hp * multiplicador);

    return inimigo;
  }
}