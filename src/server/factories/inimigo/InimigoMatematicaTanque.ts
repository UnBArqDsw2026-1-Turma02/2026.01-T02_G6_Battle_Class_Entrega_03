import type { Inimigo } from './Inimigo.js';
import type { Materia } from '../../../shared/index.js';

/** ConcreteProduct (F1) — Integral Dupla: complexa e pesada. */
export class InimigoMatematicaTanque implements Inimigo {
  readonly materia: Materia = 'matematica';
  hp = 300;
  readonly velocidade = 0.5;
  render(): string {
    return `Inimigo[${this.materia}|Tanque] hp=${this.hp} v=${this.velocidade}`;
  }
}