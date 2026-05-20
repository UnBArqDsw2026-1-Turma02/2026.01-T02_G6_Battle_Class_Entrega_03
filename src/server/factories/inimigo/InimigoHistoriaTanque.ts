import type { Inimigo } from './Inimigo.js';
import type { Materia } from '../../../shared/index.js';

/** ConcreteProduct (F1) — Império Romano: colossal e quase indestrutível. */
export class InimigoHistoriaTanque implements Inimigo {
  readonly materia: Materia = 'historia';
  hp = 320;
  readonly velocidade = 0.4;
  render(): string {
    return `Inimigo[${this.materia}|Tanque] hp=${this.hp} v=${this.velocidade}`;
  }
}