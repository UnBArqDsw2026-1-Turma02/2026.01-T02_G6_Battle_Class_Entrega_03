import type { EstadoTD } from './EstadoTD.js';
import { EstadoInvalidoError } from '../../shared/index.js';

/** ConcreteState (F3) — TERMINAL (Derrota): nenhuma ação é válida. */
export class Derrota implements EstadoTD {
  readonly nome = 'Derrota';
  tick(): void {
    throw new EstadoInvalidoError(this.nome, 'tick');
  }
  iniciar(): void {
    throw new EstadoInvalidoError(this.nome, 'iniciar');
  }
  pronto(): void {
    throw new EstadoInvalidoError(this.nome, 'pronto');
  }
}
