import type { EstadoTD } from './EstadoTD.js';
import type { SessaoTD } from './SessaoTD.js';
import { EstadoInvalidoError } from '../../shared/index.js';

/** ConcreteState (F3) — TERMINAL (Vitoria): nenhuma ação é válida. */
export class Vitoria implements EstadoTD {
  readonly nome = 'Vitoria';
  tick(_ctx: SessaoTD, _dt: number): void {
    throw new EstadoInvalidoError(this.nome, 'tick');
  }
  iniciar(_ctx: SessaoTD): void {
    throw new EstadoInvalidoError(this.nome, 'iniciar');
  }
  comprar(_ctx: SessaoTD, _custo: number): void {
    throw new EstadoInvalidoError(this.nome, 'comprar');
  }
}
