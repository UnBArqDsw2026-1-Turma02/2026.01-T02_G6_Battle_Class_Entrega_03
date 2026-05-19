import type { Inimigo } from './Inimigo.js';
import type { Materia } from '../../../shared/index.js';

/** ConcreteProduct (F1) — calibrado por matéria. */
export class InimigoBiologia implements Inimigo {
  readonly materia: Materia = 'biologia';
  hp = 120;
  readonly velocidade = 1.0;
  render(): string {
    return `Inimigo[${this.materia}] hp=${this.hp} v=${this.velocidade}`;
  }
}
