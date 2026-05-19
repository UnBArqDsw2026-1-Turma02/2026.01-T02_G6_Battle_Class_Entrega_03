import type { Materia } from '../../../shared/index.js';

/** Product (F1) — abstração nova "Inimigo" (justificativa: §1 do plano). */
export interface Inimigo {
  readonly hp: number;
  readonly velocidade: number;
  readonly materia: Materia;
  render(): void;
}
