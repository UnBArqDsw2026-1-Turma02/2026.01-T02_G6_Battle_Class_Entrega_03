import type { EstadoTD } from './EstadoTD.js';
import type { SessaoTD } from './SessaoTD.js';
import { NotImplementedError } from '../../shared/index.js';

/** ConcreteState (F3). TODO(@MarinaGaldi): comportamento + transições. */
export class ComprandoTorres implements EstadoTD {
  readonly nome = 'ComprandoTorres';
  tick(ctx: SessaoTD, dt: number): void {
    void ctx; void dt;
    throw new NotImplementedError('F3 ComprandoTorres.tick');
  }
  iniciar(ctx: SessaoTD): void {
    void ctx;
    throw new NotImplementedError('F3 ComprandoTorres.iniciar');
  }
  pronto(ctx: SessaoTD): void {
    void ctx;
    throw new NotImplementedError('F3 ComprandoTorres.pronto');
  }
}
