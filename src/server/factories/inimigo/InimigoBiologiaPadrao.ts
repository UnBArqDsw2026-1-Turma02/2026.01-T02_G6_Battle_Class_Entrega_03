import type { Inimigo } from './Inimigo.js';
import type { Materia } from '../../../shared/index.js';

/** ConcreteProduct (F1) — Bactéria comum: HP e velocidade equilibrados. */
export class InimigoBiologiaPadrao implements Inimigo {
  readonly materia: Materia = 'biologia';
  hp = 150;
  readonly velocidade = 1.0;
  render(): string {
    return `Inimigo[${this.materia}|Padrao] hp=${this.hp} v=${this.velocidade}`;
  }
}