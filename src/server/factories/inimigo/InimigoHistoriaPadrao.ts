import type { Inimigo } from './Inimigo.js';
import type { Materia } from '../../../shared/index.js';

/** ConcreteProduct (F1) — Cavaleiro Medieval: HP e velocidade equilibrados. */
export class InimigoHistoriaPadrao implements Inimigo {
  readonly materia: Materia = 'historia';
  hp = 170;
  readonly velocidade = 0.9;
  render(): string {
    return `Inimigo[${this.materia}|Padrao] hp=${this.hp} v=${this.velocidade}`;
  }
}