import type { Materia } from '../../../shared/index.js';

/**
 * Product (F1): roleta de materias usada pelo Quiz.
 *
 * A roleta encapsula a escolha da proxima materia para que servicos de
 * aplicacao nao dependam de arrays, indices ou sorteios espalhados.
 */
export interface Roleta {
  readonly materias: ReadonlyArray<Materia>;
  proximaMateria(): Materia;
  render(): string;
}
