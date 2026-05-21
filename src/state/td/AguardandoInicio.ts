import type { EstadoTD } from './EstadoTD.js';
import type { SessaoTD } from './SessaoTD.js';
import { EstadoInvalidoError } from '../../shared/index.js';
import { ComprandoTorres } from './ComprandoTorres.js';

/** ConcreteState (F3) — tela inicial; só `iniciar` é válido. */
export class AguardandoInicio implements EstadoTD {
  readonly nome = 'AguardandoInicio';
  tick(): void {
    throw new EstadoInvalidoError(this.nome, 'tick');
  }
  iniciar(ctx: SessaoTD): void {
    ctx.setEstado(new ComprandoTorres());
  }
  comprar(_ctx: SessaoTD, _custo: number): void {
    throw new EstadoInvalidoError(this.nome, 'comprar');
  }
}
