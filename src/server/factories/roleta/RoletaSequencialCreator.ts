import type { Materia } from '../../../shared/index.js';
import type { Roleta } from './Roleta.js';
import { RoletaCreator } from './RoletaCreator.js';
import { RoletaSequencial } from './RoletaSequencial.js';

/** ConcreteCreator (F1): cria a roleta padrão do fluxo de Quiz. */
export class RoletaSequencialCreator extends RoletaCreator {
  constructor(private readonly materias?: ReadonlyArray<Materia>) {
    super();
  }

  protected override factoryMethod(): Roleta {
    return new RoletaSequencial(this.materias);
  }
}
