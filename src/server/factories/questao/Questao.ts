import type { Banca, Nivel } from '../../../shared/index.js';

/** Product (F1) — Diagrama de Classes E02: Questao. */
export interface Questao {
  readonly id: string;
  readonly enunciado: string;
  readonly banca: Banca;
  readonly dificuldade: Nivel;
  readonly alternativas: ReadonlyArray<string>;
}
