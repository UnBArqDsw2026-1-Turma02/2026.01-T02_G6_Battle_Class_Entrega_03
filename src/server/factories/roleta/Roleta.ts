import type { Materia } from '../../../shared/index.js';

/**
 * Product (F1): roleta de matérias usada pelo Quiz.
 *
 * A roleta encapsula a escolha da próxima matéria para que serviços de
 * aplicação não dependam de arrays, índices ou sorteios espalhados.
 */
export interface Roleta {
  readonly materias: ReadonlyArray<Materia>;
  proximaMateria(): Materia;
  render(): string;
}
