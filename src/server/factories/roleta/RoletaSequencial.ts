import type { Materia } from '../../../shared/index.js';
import { EntradaInvalidaError } from '../../../shared/index.js';
import type { Roleta } from './Roleta.js';

const MATERIAS_PADRAO: ReadonlyArray<Materia> = [
  'matematica',
  'historia',
  'biologia',
];

/**
 * ConcreteProduct (F1): roleta deterministica para testes, demos e CI.
 *
 * Uma roleta aleatoria ou ponderada pode substituir esta classe sem alterar
 * QuizService ou PartidaFacade.
 */
export class RoletaSequencial implements Roleta {
  readonly materias: ReadonlyArray<Materia>;
  private indiceAtual = 0;

  constructor(materias: ReadonlyArray<Materia> = MATERIAS_PADRAO) {
    if (materias.length === 0) {
      throw new EntradaInvalidaError('roleta sem materias cadastradas');
    }
    this.materias = [...materias];
  }

  proximaMateria(): Materia {
    const materia = this.materias[this.indiceAtual % this.materias.length];
    if (!materia) {
      throw new EntradaInvalidaError('materia invalida na roleta');
    }
    this.indiceAtual += 1;
    return materia;
  }

  render(): string {
    return `RoletaSequencial[materias=${this.materias.join(' -> ')}]`;
  }
}
