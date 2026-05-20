import type { Inimigo } from './Inimigo.js';
import type { Materia } from '../../../shared/index.js';

/** ConcreteProduct (F1) — Função Quadrática: HP e velocidade equilibrados. */
export class InimigoMatematicaPadrao implements Inimigo {
  readonly materia: Materia = 'matematica';
  hp = 130;
  readonly velocidade = 1.2;
  render(): string {
    return `Inimigo[${this.materia}|Padrao] hp=${this.hp} v=${this.velocidade}`;
  }
}