import type { EstadoTD } from './EstadoTD.js';
import type { SessaoTD } from './SessaoTD.js';
import { NotImplementedError } from '../../shared/index.js';

/** ConcreteState (F3) TERMINAL (não transita) —. TODO(@MarinaGaldi): comportamento + transições. */
export class Vitoria implements EstadoTD {
  readonly nome = 'Vitoria';
  tick(ctx: SessaoTD, dt: number): void {
    void ctx; void dt;
    throw new NotImplementedError('F3 Vitoria.tick');
  }
  iniciar(ctx: SessaoTD): void {
    void ctx;
    throw new NotImplementedError('F3 Vitoria.iniciar');
  }
  pronto(ctx: SessaoTD): void {
    void ctx;
    throw new NotImplementedError('F3 Vitoria.pronto');
  }
}
