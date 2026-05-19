import type { EstadoTD } from './EstadoTD.js';
import type { SessaoTD } from './SessaoTD.js';
import { EstadoInvalidoError } from '../../shared/index.js';
import { EmBatalha } from './EmBatalha.js';

/** ConcreteState (F3) — gasta moedas; `pronto` inicia a batalha. */
export class ComprandoTorres implements EstadoTD {
  readonly nome = 'ComprandoTorres';
  tick(): void {
    throw new EstadoInvalidoError(this.nome, 'tick');
  }
  iniciar(): void {
    throw new EstadoInvalidoError(this.nome, 'iniciar');
  }
  pronto(ctx: SessaoTD): void {
    ctx.setEstado(new EmBatalha());
  }
}
