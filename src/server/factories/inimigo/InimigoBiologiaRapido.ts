import type { Inimigo } from './Inimigo.js';
import type { Materia } from '../../../shared/index.js';

/** ConcreteProduct (F1) — Príon: minúsculo e veloz, HP baixíssimo. */
export class InimigoBiologiaRapido implements Inimigo {
  readonly materia: Materia = 'biologia';
  hp = 60;
  readonly velocidade = 2.2;
  render(): string {
    return `Inimigo[${this.materia}|Rapido] hp=${this.hp} v=${this.velocidade}`;
  }
}