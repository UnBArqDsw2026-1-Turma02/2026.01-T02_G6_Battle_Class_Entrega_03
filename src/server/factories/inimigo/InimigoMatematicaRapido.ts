import type { Inimigo } from './Inimigo.js';
import type { Materia } from '../../../shared/index.js';

/** ConcreteProduct (F1) — Fração Simples: trivial e veloz. */
export class InimigoMatematicaRapido implements Inimigo {
  readonly materia: Materia = 'matematica';
  hp = 50;
  readonly velocidade = 2.5;
  render(): string {
    return `Inimigo[${this.materia}|Rapido] hp=${this.hp} v=${this.velocidade}`;
  }
}