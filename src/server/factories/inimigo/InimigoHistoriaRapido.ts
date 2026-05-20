import type { Inimigo } from './Inimigo.js';
import type { Materia } from '../../../shared/index.js';

/** ConcreteProduct (F1) — Mensageiro Mongol: veloz e frágil. */
export class InimigoHistoriaRapido implements Inimigo {
  readonly materia: Materia = 'historia';
  hp = 70;
  readonly velocidade = 2.0;
  render(): string {
    return `Inimigo[${this.materia}|Rapido] hp=${this.hp} v=${this.velocidade}`;
  }
}