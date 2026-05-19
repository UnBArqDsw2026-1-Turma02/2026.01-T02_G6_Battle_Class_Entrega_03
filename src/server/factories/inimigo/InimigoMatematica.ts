import type { Inimigo } from './Inimigo.js';
import type { Materia } from '../../../shared/index.js';
import { NotImplementedError } from '../../../shared/index.js';

/** ConcreteProduct (F1). TODO(@JoaoCarlosLobo): calibrar hp/velocidade e render(). */
export class InimigoMatematica implements Inimigo {
  readonly materia: Materia = 'matematica';
  readonly hp: number = 0; // TODO(@JoaoCarlosLobo)
  readonly velocidade: number = 0; // TODO(@JoaoCarlosLobo)
  render(): void {
    throw new NotImplementedError('F1 InimigoMatematica.render');
  }
}
