import type { Inimigo } from './Inimigo.js';
import type { Materia } from '../../../shared/index.js';

/** ConcreteProduct (F1) — calibrado por matéria. */
export class InimigoMatematica implements Inimigo {
  readonly materia: Materia = 'matematica';
  hp = 100;
  readonly velocidade = 1.2;
  render(): string {
    return `Inimigo[${this.materia}] hp=${this.hp} v=${this.velocidade}`;
  }
}
