import type { EstadoTD } from './EstadoTD.js';
import type { SessaoTD } from './SessaoTD.js';
import { NotImplementedError } from '../../shared/index.js';

/** ConcreteState (F3). TODO(@MarinaGaldi): comportamento + transições. */
export class AguardandoInicio implements EstadoTD {
  readonly nome = 'AguardandoInicio';
  tick(ctx: SessaoTD, dt: number): void {
    void ctx; void dt;
    throw new NotImplementedError('F3 AguardandoInicio.tick');
  }
  iniciar(ctx: SessaoTD): void {
    void ctx;
    throw new NotImplementedError('F3 AguardandoInicio.iniciar');
  }
  pronto(ctx: SessaoTD): void {
    void ctx;
    throw new NotImplementedError('F3 AguardandoInicio.pronto');
  }
}
