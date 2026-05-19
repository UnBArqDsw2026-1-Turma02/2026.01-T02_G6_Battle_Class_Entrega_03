import { NotImplementedError } from '../../../shared/index.js';

/** Product abstrato (F1) — Diagrama de Classes E02: Torre. */
export abstract class Torre {
  abstract readonly custo: number;
  abstract readonly dano: number;
  abstract atirar(alvo: string): void;

  calcularDano(): number {
    throw new NotImplementedError('F1 Torre.calcularDano'); // TODO(@ThiagoTonin)
  }
}
