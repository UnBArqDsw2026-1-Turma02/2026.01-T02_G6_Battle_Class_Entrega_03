import type { Inimigo } from './Inimigo.js';
import type { Materia } from '../../../shared/index.js';

/** ConcreteProduct (F1) — Vírus com cápsula proteica grossa: lento mas resistente. */
export class InimigoBiologiaTanque implements Inimigo {
  readonly materia: Materia = 'biologia';
  hp = 280;
  readonly velocidade = 0.5;
  render(): string {
    return `Inimigo[${this.materia}|Tanque] hp=${this.hp} v=${this.velocidade}`;
  }
}