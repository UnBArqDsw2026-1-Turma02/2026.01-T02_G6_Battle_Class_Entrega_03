import type { Inimigo } from './Inimigo.js';
import type { Materia } from '../../../shared/index.js';

/** ConcreteProduct (F1) — calibrado por matéria. */
export class InimigoHistoria implements Inimigo {
  readonly materia: Materia = 'historia';
  hp = 140;
  readonly velocidade = 0.9;
  render(): string {
    return `Inimigo[${this.materia}] hp=${this.hp} v=${this.velocidade}`;
  }
}
