import type { EstadoTD } from './EstadoTD.js';
import type { SessaoTD } from './SessaoTD.js';
import { NotImplementedError } from '../../shared/index.js';

/** ConcreteState (F3) TERMINAL (não transita) —. TODO(@MarinaGaldi): comportamento + transições. */
export class Derrota implements EstadoTD {
  readonly nome = 'Derrota';
  tick(ctx: SessaoTD, dt: number): void {
    void ctx; void dt;
    throw new NotImplementedError('F3 Derrota.tick');
  }
  iniciar(ctx: SessaoTD): void {
    void ctx;
    throw new NotImplementedError('F3 Derrota.iniciar');
  }
  pronto(ctx: SessaoTD): void {
    void ctx;
    throw new NotImplementedError('F3 Derrota.pronto');
  }
}
