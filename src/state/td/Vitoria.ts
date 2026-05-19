import type { EstadoTD } from './EstadoTD.js';
import { EstadoInvalidoError } from '../../shared/index.js';

/** ConcreteState (F3) — TERMINAL (Vitoria): nenhuma ação é válida. */
export class Vitoria implements EstadoTD {
  readonly nome = 'Vitoria';
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
